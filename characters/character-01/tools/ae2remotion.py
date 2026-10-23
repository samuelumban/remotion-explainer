#!/usr/bin/env python3
"""
ae2remotion.py v2 -- After Effects "compCode" .jsx  ->  Remotion (React/SVG) component library.

Converts the *rest pose* of shape-layer art: shape layers (rect / rounded rect / ellipse / polygon path,
trim paths, repeater, dash), fill + stroke, group + layer transforms, opacity / ADD blend, masks (Add / Subtract),
parenting, nested pre-comps, null layers, guide-layer skipping, alpha + inverted-alpha track mattes.
NOT converted (reported in rig-report.json): expressions, effects, text, solids, 3D, keyframes.

Usage:  python3 ae2remotion.py INPUT.jsx OUTPUT_LIBRARY_DIR "Main Comp Name"
"""
import re, json, sys, os
from collections import OrderedDict

class Node:
    def __init__(self, typ):
        self.type, self.children, self.props = typ, [], {}
        self.enabled, self.name, self.verts, self.closed = True, None, None, True
        self.exprs = {}

class Layer:
    def __init__(self, var, kind, comp, source=None):
        self.var, self.kind, self.comp, self.source = var, kind, comp, source
        self.name, self.enabled, self.guide, self.collapse = var, True, False, False
        self.matte_type, self.blend, self.parent = None, None, None
        self.tf, self.root, self.masks = {}, Node('root'), OrderedDict()
        self.exprs, self.effects = [], []
        self.fx, self.tf_expr = [], {}

comps, layers, order, comp_folder, fparent, fname = {}, {}, {}, {}, {}, {}
REPORT = {'expressions': [], 'effects': [], 'skipped': []}

def kebab(v): return re.sub(r'([A-Z])', lambda x: '-' + x.group(1).lower(), v).replace('_', '-')

def join_statements(text):
    out, buf = [], None
    for line in text.split('\n'):
        if buf is not None:
            buf += ' ' + line.strip()
            if line.rstrip().endswith(';'): out.append(buf); buf = None
        elif '.expression = ' in line and not line.rstrip().endswith(';'):
            buf = line
        else:
            out.append(line)
    return out

def parse(path):
    text = open(path, encoding='utf-8', errors='replace').read().replace('\r', '')
    started, varmap = False, {}
    for raw in join_statements(text):
        ln = raw.strip()
        m = re.match(r'var (\w+)_properties = (\{.*\});', ln)
        if m and '"typeName":"Composition"' in ln:
            d = json.loads(m.group(2))
            comps[m.group(1)] = dict(name=d['name'], w=d['width'], h=d['height'], bg=d['bgColor'], dur=d['duration'], fps=d['frameRate'])
            order[m.group(1)] = []
            continue
        mf = re.match(r'(\w+)\.parentFolder = (\w+);', ln)
        if mf and not started:
            if mf.group(1).endswith('_comp'): comp_folder[mf.group(1)] = mf.group(2)
            elif mf.group(1).endswith('_folder'): fparent[mf.group(1)] = mf.group(2)
            continue
        if ln.startswith('// Working with comp'):
            started = True; continue
        if not started: continue
        m = re.match(r'var (\w+) = (\w+)\.layers\.(addShape|addNull|add|addText)\((.*)\);', ln)
        if m:
            var, cv, fn, arg = m.groups()
            if cv not in comps or var.endswith('_tempNull'): continue
            if fn == 'add': kind, src = ('precomp', arg) if arg in comps else ('solid', arg)
            else: kind, src = {'addShape': 'shape', 'addNull': 'null', 'addText': 'text'}[fn], None
            L = Layer(var, kind, cv, src); layers[var] = L; order[cv].append(L)   # moveToEnd => top -> bottom
            continue
        m = re.match(r'var (\w+) = (\w+)\.property\("ADBE (Mask Parade|Root Vectors Group)"\)(.*)\.property\("ADBE (Mask Shape|Vector Shape)"\);', ln)
        if m and m.group(2) in layers:
            nums = [int(t) for t in re.findall(r'\.property\((\d+)\)', m.group(4))]
            varmap[m.group(1)] = (layers[m.group(2)], m.group(3), nums); continue
        m = re.match(r'(\w+)_newShape\.(vertices|closed|inTangents|outTangents) = (.*);', ln)
        if m and m.group(1) in varmap:
            L, kind, nums = varmap[m.group(1)]
            key, val = m.group(2), json.loads(m.group(3))
            if key in ('inTangents', 'outTangents') and any(any(abs(c) > 1e-9 for c in p) for p in val):
                REPORT['skipped'].append('%s: curved tangents ignored' % L.name)
            if kind == 'Mask Parade':
                L.masks.setdefault(nums[0], {'mode': 'ADD'})[key] = val
            else:
                node = resolve(L.root, nums)
                if key == 'vertices': node.verts = val
                elif key == 'closed': node.closed = bool(val)
            continue
        m = re.match(r'(\w+)\.(.*)$', ln)
        if not m or m.group(1) not in layers: continue
        L, rest = layers[m.group(1)], m.group(2)
        mm = re.match(r'name = "(.*)";', rest)
        if mm: L.name = mm.group(1); continue
        if rest == 'enabled = false;': L.enabled = False; continue
        if rest == 'guideLayer = true;': L.guide = True; continue
        if rest == 'collapseTransformation = true;': L.collapse = True; continue
        mm = re.match(r'blendingMode = BlendingMode\.(\w+);', rest)
        if mm: L.blend = mm.group(1); continue
        mm = re.match(r'trackMatteType = TrackMatteType\.(\w+);', rest)
        if mm: L.matte_type = mm.group(1); continue
        mm = re.match(r'setParentWithJump\((\w+)\);', rest)
        if mm: L.parent = layers.get(mm.group(1)); continue
        mm = re.match(r'property\("ADBE Mask Parade"\)\.property\((\d+)\)\.maskMode = MaskMode\.(\w+);', rest)
        if mm: L.masks.setdefault(int(mm.group(1)), {'mode': 'ADD'})['mode'] = mm.group(2); continue
        mm = re.match(r'property\("ADBE Transform Group"\)\.property\("ADBE ([^"]+)"\)\.setValue\((.*)\);', rest)
        if mm: L.tf[mm.group(1)] = json.loads(mm.group(2)); continue
        if handle_fx(L, rest): continue
        if handle_expr(L, rest): continue
        mm = re.match(r'property\("ADBE Root Vectors Group"\)((?:\.property\((?:\d+|"[^"]+")\))*)(.*);$', rest)
        if mm:
            toks = re.findall(r'\.property\((\d+|"[^"]+")\)', mm.group(1))
            nums = [int(t) for t in toks if t.isdigit()]
            pname = next((t.strip('"') for t in toks if not t.isdigit()), None)
            tail = mm.group(2)
            try:
                if tail.startswith('.addProperty('):
                    resolve(L.root, nums).children.append(Node(re.search(r'"(.*)"', tail).group(1)))
                elif tail.startswith('.name ='): resolve(L.root, nums).name = re.search(r'"(.*)"', tail).group(1)
                elif tail.startswith('.enabled = false'): resolve(L.root, nums).enabled = False
                elif tail.startswith('.setValue(') and pname:
                    resolve(L.root, nums).props[pname] = json.loads(re.search(r'setValue\((.*)\)', tail).group(1))
            except (IndexError, json.JSONDecodeError): pass
    for L in layers.values():
        if L.exprs: REPORT['expressions'].append({'comp': comps[L.comp]['name'], 'layer': L.name, 'props': sorted({p for p, _ in L.exprs}), 'first': L.exprs[0][1]})
        if L.effects: REPORT['effects'].append({'comp': comps[L.comp]['name'], 'layer': L.name, 'effects': L.effects})

def handle_fx(L, rest):
    mm = re.match(r'property\("ADBE Effect Parade"\)\.addProperty\("(.*)"\);', rest)
    if mm:
        L.fx.append(dict(match=mm.group(1), name=mm.group(1), params={}, exprs={})); L.effects.append(mm.group(1)); return True
    mm = re.match(r'property\("ADBE Effect Parade"\)\.property\((\d+)\)\.name = "(.*)";', rest)
    if mm:
        k = int(mm.group(1)) - 1
        if k < len(L.fx): L.fx[k]['name'] = mm.group(2)
        return True
    mm = re.match(r'property\("ADBE Effect Parade"\)\.property\((\d+)\)\.property\("([^"]+)"\)\.setValue\((.*)\);', rest)
    if mm:
        k = int(mm.group(1)) - 1
        try:
            if k < len(L.fx): L.fx[k]['params'][mm.group(2)] = json.loads(mm.group(3))
        except json.JSONDecodeError: pass
        return True
    return False

def handle_expr(L, rest):
    mm = re.match(r'((?:\.?property\((?:\d+|"[^"]+")\))+)\.expression = (.*);$', rest)
    if not mm: return False
    toks = re.findall(r'property\((\d+|"[^"]+")\)', mm.group(1))
    pieces = re.findall(r'"((?:[^"\\]|\\.)*)"', mm.group(2))
    try: code = ''.join(json.loads('"' + p + '"', strict=False) for p in pieces)
    except json.JSONDecodeError: return True
    if code.strip() == 'value' or not toks: return True
    head, prop = toks[0].strip('"'), toks[-1].strip('"')
    if head == 'ADBE Transform Group' and len(toks) >= 2: L.tf_expr[prop[5:] if prop.startswith('ADBE ') else prop] = code
    elif head == 'ADBE Effect Parade' and len(toks) >= 3:
        k = int(toks[1]) - 1
        if k < len(L.fx): L.fx[k]['exprs'][prop] = code
    elif head == 'ADBE Root Vectors Group':
        nums = [int(t) for t in toks[1:-1] if t.isdigit()]
        try: resolve(L.root, nums).exprs[prop] = code
        except IndexError: return True
    else: return True            # masks etc. are ignored
    L.exprs.append((prop, code[:90]))
    return True

def resolve(root, nums):
    if not nums: return root
    node = root.children[nums[0] - 1]
    if len(nums) == 1 or nums[1] != 2: return node
    for n in nums[2:]:
        if n - 1 < len(node.children): node = node.children[n - 1]
        else: break
    return node

# ---------------------------------------------------------------- expression evaluation (rest pose)
import subprocess, tempfile, shutil
# EVT4.1 Limbs Control: params 14-21 are the "base" copies of 2-5 / 8-11. They are not exported by compCode
# (plugin defaults) -> ASSUMPTION: they equal the stored values of their counterparts (=> zero deltas at rest).
ASSUMED_LIMB_BASE = {14: 2, 15: 3, 16: 4, 17: 5, 18: 8, 19: 9, 20: 10, 21: 11}

def base_tf(L):
    c = comps[L.comp]; cx, cy = c['w'] / 2, c['h'] / 2
    da = {'precomp': [comps[L.source]['w'] / 2, comps[L.source]['h'] / 2] if L.source in comps else [0, 0], 'null': [50, 50]}.get(L.kind, [0, 0])
    return {'Position': list(L.tf.get('Position', [cx, cy]))[:2], 'Anchor Point': list(L.tf.get('Anchor Point', da))[:2],
            'Scale': list(L.tf.get('Scale', [100, 100]))[:2], 'Rotate Z': L.tf.get('Rotate Z', 0), 'Opacity': L.tf.get('Opacity', 100)}

def dump_rig():
    out = []
    for cv, ls in order.items():
        c, lo = comps[cv], []
        for L in ls:
            fx = []
            for i, f in enumerate(L.fx):
                d = {}
                if f['match'].startswith('Pseudo/EVT4.1 Limbs Control'):
                    for n, src in ASSUMED_LIMB_BASE.items():
                        d['%s-%04d' % (f['match'], n)] = f['params'].get('%s-%04d' % (f['match'], src), 0)
                fx.append(dict(idx=i, match=f['match'], name=f['name'], params=f['params'], exprs=f['exprs'], defaults=d))
            vec_ = [dict(name=g.name or '', items=[dict(name=ch.name or '', type=ch.type, props=ch.props, exprs=ch.exprs) for ch in g.children])
                    for g in L.root.children]
            lo.append(dict(var=L.var, name=L.name, kind=L.kind, parent=L.parent.var if L.parent else None,
                           base=base_tf(L), exprs=L.tf_expr, fx=fx, vectors=vec_))
        out.append(dict(name=c['name'], w=c['w'], h=c['h'], layers=lo))
    return {'comps': out}

def evaluate_expressions():
    here = os.path.dirname(os.path.abspath(__file__))
    js = os.path.join(here, 'ae_expr_eval.js')
    if not os.path.exists(js) or not shutil.which('node'):
        REPORT['skipped'].append('expression evaluation skipped (node or ae_expr_eval.js missing)'); return
    tmp = tempfile.mkdtemp()
    rin, rout = os.path.join(tmp, 'rig.json'), os.path.join(tmp, 'out.json')
    json.dump(dump_rig(), open(rin, 'w'))
    paths = [os.environ.get('NODE_PATH', '')] + [os.path.join(p, 'node_modules') for p in (here, os.path.dirname(here), os.getcwd())]
    env = dict(os.environ, NODE_PATH=os.pathsep.join(p for p in paths if p))
    r = subprocess.run(['node', js, rin, rout], capture_output=True, text=True, env=env)
    print(r.stdout.strip()); 
    if r.returncode != 0 or not os.path.exists(rout):
        print(r.stderr[-600:]); REPORT['skipped'].append('expression evaluation failed'); return
    res = json.load(open(rout))
    n = 0
    for var, props in res['layers'].items():
        for p, v in props.items(): layers[var].tf[p] = v; n += 1
    for var, items in res['vectors'].items():
        for key, props in items.items():
            gi, ii = map(int, key.split('.'))
            for p, v in props.items(): layers[var].root.children[gi].children[ii].props[p] = v; n += 1
    REPORT['evaluated'] = {'properties': n, 'errors': res['errors'],
                           'assumption': 'EVT4.1 Limbs Control params 14-21 (hidden base values) assumed equal to params 2-5 / 8-11'}

# ---------------------------------------------------------------- naming / paths
IDENT = {}
def pascal(s):
    s = re.sub(r'^name:', '', s)
    return ''.join(w[:1].upper() + w[1:] for w in re.split(r'[^0-9A-Za-z]+', s)) or 'Comp'
def assign_idents():
    seen = {}
    for cv, c in comps.items():
        n = pascal(c['name']); seen[n] = seen.get(n, 0) + 1
        IDENT[cv] = n if seen[n] == 1 else '%s%d' % (n, seen[n])
def cid(cv): return IDENT[cv]
def const_of(name): return re.sub(r'(?<=[a-z0-9])([A-Z])|(?<=[A-Z])([A-Z][a-z])', r'_\1\2', name).upper()
def folder_chain(cv):
    chain, f = [], comp_folder.get(cv)
    while f:
        chain.insert(0, kebab(f[:-len('_folder')] if f.endswith('_folder') else f)); f = fparent.get(f)
    return chain or ['misc']

# ---------------------------------------------------------------- emit
def num(x):
    x = round(float(x), 4)
    return str(int(x)) if x == int(x) else ('%.4f' % x).rstrip('0').rstrip('.')
def vec(v): return '[' + ','.join(num(c) for c in v[:2]) + ']'
def hexc(c): return '#%02x%02x%02x' % tuple(max(0, min(255, round(v * 255))) for v in c[:3])
def q(s): return json.dumps(s, ensure_ascii=False)

def layer_tf(L):
    c = comps[L.comp]; cx, cy = c['w'] / 2, c['h'] / 2
    if L.kind == 'precomp': da = [comps[L.source]['w'] / 2, comps[L.source]['h'] / 2]
    elif L.kind == 'null': da = [50, 50]
    else: da = [0, 0]
    p = L.tf.get('Position', [cx, cy]); a = L.tf.get('Anchor Point', da)
    s = L.tf.get('Scale', [100, 100]); r = L.tf.get('Rotate Z', 0)
    parts = ['p:' + vec(p)]
    if a[:2] != [0, 0]: parts.append('a:' + vec(a))
    if s[:2] != [100, 100]: parts.append('s:' + vec(s))
    if r: parts.append('r:' + num(r))
    return '{' + ','.join(parts) + '}'

def tconst(L): return 'T_%s_%s' % (cid(L.comp), re.sub(r'\W', '', L.var))

def emit_group(g, ind):
    pad = '  ' * ind
    items = g.children
    fill = next((c for c in items if c.type.endswith('Graphic - Fill') and c.enabled), None)
    strk = next((c for c in items if c.type.endswith('Graphic - Stroke') and c.enabled), None)
    trim = next((c for c in items if c.type.endswith('Filter - Trim') and c.enabled), None)
    rep  = next((c for c in items if c.type.endswith('Filter - Repeater') and c.enabled), None)
    paths = [c for c in items if c.type.startswith('ADBE Vector Shape')]
    if not paths or (not fill and not strk): return ''
    P = paths[0]
    paint = ''
    if fill: paint += ' fill="%s"' % hexc(fill.props.get('ADBE Vector Fill Color', [1, 0, 0]))
    if strk:
        sp = strk.props
        paint += ' stroke="%s" sw={%s}' % (hexc(sp.get('ADBE Vector Stroke Color', [1, 1, 1])), num(sp.get('ADBE Vector Stroke Width', 2)))
        if sp.get('ADBE Vector Stroke Line Cap', 1) != 1: paint += ' cap={%d}' % sp['ADBE Vector Stroke Line Cap']
        if 'ADBE Vector Stroke Dash 1' in sp: paint += ' dash={%s}' % num(sp['ADBE Vector Stroke Dash 1'])
    if P.type.endswith('Rect'):
        w, h = P.props.get('ADBE Vector Rect Size', [100, 100])[:2]; r = P.props.get('ADBE Vector Rect Roundness', 0)
        shape = '<Rect w={%s} h={%s}%s%s />' % (num(w), num(h), ' r={%s}' % num(r) if r else '', paint)
        pos = P.props.get('ADBE Vector Rect Position')
    elif P.type.endswith('Ellipse'):
        w, h = P.props.get('ADBE Vector Ellipse Size', [100, 100])[:2]
        pos = P.props.get('ADBE Vector Ellipse Position')
        if trim:
            shape = '<Arc w={%s} h={%s} start={%s} end={%s} offset={%s}%s />' % (num(w), num(h),
                num(trim.props.get('ADBE Vector Trim Start', 0)), num(trim.props.get('ADBE Vector Trim End', 100)),
                num(trim.props.get('ADBE Vector Trim Offset', 0)), paint)
        else: shape = '<Ellipse w={%s} h={%s}%s />' % (num(w), num(h), paint)
    else:
        if not P.verts: return ''
        pts = '[' + ','.join(vec(v) for v in P.verts) + ']'
        shape = '<Poly pts={%s}%s%s />' % (pts, '' if P.closed else ' closed={false}', paint); pos = None
    if pos and any(pos[:2]): shape = '<Grp x={%s} y={%s}>%s</Grp>' % (num(pos[0]), num(pos[1]), shape)
    gp = g.props
    gx, gy = gp.get('ADBE Vector Position', [0, 0])[:2]; gr = gp.get('ADBE Vector Rotation', 0)
    gs = gp.get('ADBE Vector Scale', [100, 100])[:2]
    attrs = ''.join([' x={%s}' % num(gx) if gx else '', ' y={%s}' % num(gy) if gy else '',
                     ' r={%s}' % num(gr) if gr else '', ' s={%s}' % vec(gs) if gs != [100, 100] else ''])
    if rep:
        dx, dy = rep.props.get('ADBE Vector Repeater Position', [100, 0])[:2]
        shape = '<Rep n={%d} dx={%s} dy={%s}>%s</Rep>' % (int(rep.props.get('ADBE Vector Repeater Copies', 3)), num(dx), num(dy), shape)
    return '%s<Grp%s>\n%s  %s\n%s</Grp>\n' % (pad, attrs, pad, shape, pad)

def emit_layer(L, stack, ind, parents):
    pad = '  ' * ind
    chain, p = [], L.parent
    while p: chain.insert(0, tconst(p)); p = p.parent
    own = tconst(L) if L in parents else layer_tf(L)
    t = '[%s]' % ', '.join(chain + [own]) if chain else own
    attrs = ' name=%s t={%s}' % (q(L.name), t)
    ms = []
    for k in sorted(L.masks):
        m = L.masks[k]
        if 'vertices' not in m or m['mode'] == 'NONE': continue
        mode = 'subtract' if m['mode'] == 'SUBTRACT' else 'add'
        if m['mode'] not in ('ADD', 'SUBTRACT'): REPORT['skipped'].append('%s: mask mode %s treated as add' % (L.name, m['mode']))
        ms.append('{m:"%s",p:[%s]}' % (mode, ','.join(vec(v) for v in m['vertices'])))
    if ms: attrs += ' masks={[%s]}' % ','.join(ms)
    if L.kind == 'precomp' and not L.collapse:
        sc = comps[L.source]; attrs += ' clip={{w:%s,h:%s}}' % (num(sc['w']), num(sc['h']))
    if L.tf.get('Opacity', 100) != 100: attrs += ' o={%s}' % num(L.tf['Opacity'] / 100)
    if L.blend == 'ADD': attrs += ' blend="add"'
    elif L.blend: REPORT['skipped'].append('%s: blend %s ignored' % (L.name, L.blend))
    if L.matte_type:
        mode = {'ALPHA': 'alpha', 'ALPHA_INVERTED': 'alphaInverted'}.get(L.matte_type)
        i = stack.index(L)
        if mode and i > 0:
            attrs += ' matte={{mode:%s,layer:(\n%s\n%s)}}' % (q(mode), emit_layer(stack[i - 1], stack, ind + 2, parents), pad + '  ')
        else: REPORT['skipped'].append('%s: unsupported matte %s' % (L.name, L.matte_type))
    if L.kind == 'precomp': body = '%s  <%s />\n' % (pad, cid(L.source))
    else: body = ''.join(emit_group(g, ind + 1) for g in reversed(L.root.children))
    return '%s<Layer%s>\n%s%s</Layer>' % (pad, attrs, body, pad)

def rel_import(from_dir, to_file_noext):
    r = os.path.relpath(to_file_noext, from_dir).replace(os.sep, '/')
    return r if r.startswith('.') else './' + r

META_TMPL = """
export const %(C)s_META = {width: %(w)d, height: %(h)d, fps: %(fps)d, durationInFrames: %(dur)d, background: %(bg)s} as const;

/** Full scene. Pass background={null} for a transparent render. */
export const %(N)sScene: React.FC<{background?: string | null}> = ({background = %(C)s_META.background}) => (
  <Svg width={%(C)s_META.width} height={%(C)s_META.height}>
    {background ? <rect width={%(C)s_META.width} height={%(C)s_META.height} fill={background} /> : null}
    <%(N)s />
  </Svg>
);"""

def build_files(main_name):
    main = next(k for k, v in comps.items() if v['name'] == main_name)
    parents = {l.parent for ls in order.values() for l in ls if l.parent}
    files, index = {}, []
    for cv, ls in order.items():
        c, name = comps[cv], cid(cv)
        chain = folder_chain(cv); fdir = '/'.join(chain)
        rel_ae = rel_import(fdir, 'ae')
        out = ['/* AUTO-GENERATED by ae2remotion.py — AE comp "%s" (%dx%d, %d layers). */' % (c['name'], c['w'], c['h'], len(ls)),
               "import React from 'react';",
               "import {Arc, Ellipse, Grp, Layer, Place, Poly, Rect, Rep, Svg} from '%s';" % rel_ae,
               "import type {LayerTransform, PlaceProps} from '%s';" % rel_ae]
        deps = sorted({l.source for l in ls if l.kind == 'precomp'}, key=cid)
        for d in deps:
            out.append("import {%s} from '%s';" % (cid(d), rel_import(fdir, '/'.join(folder_chain(d)) + '/' + cid(d))))
        out.append('')
        mine = [l for l in ls if l in parents]
        for l in mine: out.append('const %s: LayerTransform = %s;' % (tconst(l), layer_tf(l)))
        if mine: out.append('')
        consumed = {ls[i - 1] for i, l in enumerate(ls) if l.matte_type and i > 0}
        draw = [l for l in reversed(ls) if l.enabled and not l.guide and l not in consumed and l.kind in ('shape', 'precomp')]
        for l in ls:
            if l.kind in ('solid',) and l.enabled and not l.guide: REPORT['skipped'].append('%s: solid layer not drawn' % l.name)
        const = const_of(name)
        out.append('export const %s_SIZE = {width: %s, height: %s} as const;\n' % (const, num(c['w']), num(c['h'])))
        out.append('/** Layers only (no <svg>). Props: x, y, scale, rotate, flipX, flipY. */')
        out.append('export const %s: React.FC<PlaceProps> = (props) => (' % name)
        out.append('  <Place {...props} width={%s_SIZE.width} height={%s_SIZE.height}>' % (const, const))
        for l in draw: out.append(emit_layer(l, ls, 2, parents))
        out.append('  </Place>')
        out.append(');\n')
        out.append('/** Standalone version: a complete <svg> sized like the AE comp. */')
        out.append('export const %sSvg: React.FC<PlaceProps> = (props) => (' % name)
        out.append('  <Svg width={%s_SIZE.width} height={%s_SIZE.height}><%s {...props} /></Svg>' % (const, const, name))
        out.append(');')
        if cv == main:
            out.append(META_TMPL % dict(C=const, N=name, w=c['w'], h=c['h'], fps=c['fps'], dur=round(c['dur'] * c['fps']), bg=q(hexc(c['bg']))))
        files[fdir + '/' + name + '.tsx'] = '\n'.join(out) + '\n'
        index.append((fdir, name, const, chain[-1], cv == main))
    idx = "/* AUTO-GENERATED */\nexport * from './ae';\n"
    for f, n, k, _, ism in index:
        idx += "export {%s, %sSvg, %s_SIZE%s} from './%s/%s';\n" % (n, n, k, ', %sScene, %s_META' % (n, k) if ism else '', f, n)
        if ism: idx += "export {%sScene as MainScene, %s_META as MAIN_META} from './%s/%s';\n" % (n, k, f, n)
    files['index.ts'] = idx
    cat = "/* AUTO-GENERATED — Root.tsx uses this to show every component in Remotion Studio */\nimport * as C from './index';\n\nexport const CATALOG = [\n"
    for f, n, k, fo, _ in index: cat += "  {id: %s, folder: %s, Component: C.%sSvg, ...C.%s_SIZE},\n" % (q(n), q(fo), n, k)
    files['catalog.ts'] = cat + '];\n'
    return files

if __name__ == '__main__':
    inp, outdir = sys.argv[1], sys.argv[2]
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    main_name = args[2] if len(args) > 2 else 'BG Beach'
    parse(inp)
    if '--static' not in sys.argv: evaluate_expressions()
    assign_idents()
    for rel, code in build_files(main_name).items():
        p = os.path.join(outdir, rel); os.makedirs(os.path.dirname(p), exist_ok=True); open(p, 'w').write(code)
    json.dump(REPORT, open(os.path.join(outdir, 'rig-report.json'), 'w'), indent=1, ensure_ascii=False)
    print('comps:', len(comps), ' layers:', len(layers), ' expressions:', len(REPORT['expressions']), ' effects:', len(REPORT['effects']))
    for w in sorted(set(REPORT['skipped'])): print('NOTE', w)
