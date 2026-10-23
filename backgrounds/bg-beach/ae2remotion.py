#!/usr/bin/env python3
"""
ae2remotion.py  --  After Effects "compCode" .jsx  ->  Remotion (React/SVG) scene.

Supports the subset that compCode exports for static shape-layer art:
  shape layers (rect / rounded rect / ellipse / path / trim paths / repeater),
  fill + stroke, group transforms, layer transforms, masks (polygon),
  parenting, nested pre-comps, null layers, alpha / inverted-alpha track mattes.

Usage:  python3 ae2remotion.py INPUT.jsx OUTPUT_DIR [MainCompName]
"""
import re, json, sys, os

# ----------------------------------------------------------------- model
class Node:
    def __init__(self, typ):
        self.type, self.children, self.props = typ, [], {}
        self.enabled, self.name, self.verts, self.closed = True, None, None, True

class Layer:
    def __init__(self, var, kind, comp, source=None):
        self.var, self.kind, self.comp, self.source = var, kind, comp, source
        self.name, self.enabled, self.matte_type = var, True, None
        self.tf, self.root, self.mask, self.parent = {}, Node('root'), None, None

comps, layers, order, folders = {}, {}, {}, {}   # compVar->dict, var->Layer, compVar->[Layer]

# ----------------------------------------------------------------- parse
def parse(path):
    text = open(path, encoding='utf-8', errors='replace').read().replace('\r', '')
    started, varmap, warns = False, {}, []
    for raw in text.split('\n'):
        ln = raw.strip()
        m = re.match(r'var (\w+)_properties = (\{.*\});', ln)
        if m and '"typeName":"Composition"' in ln:
            d = json.loads(m.group(2))
            comps[m.group(1)] = dict(name=d['name'], w=d['width'], h=d['height'],
                bg=d['bgColor'], dur=d['duration'], fps=d['frameRate'])
            order[m.group(1)] = []
            continue
        mf = re.match(r'(\w+_comp)\.parentFolder = (\w+)_folder;', ln)
        if mf:
            folders[mf.group(1)] = re.sub(r'([A-Z])', lambda x: '-' + x.group(1).lower(), mf.group(2))
            continue
        if ln.startswith('// Working with comp'):
            started = True
            continue
        if not started:
            continue
        m = re.match(r'var (\w+) = (\w+)\.layers\.(addShape|addNull|add)\((\w*)\);', ln)
        if m:
            var, cv, fn, src = m.groups()
            if cv not in comps or var.endswith('_tempNull'):
                continue
            L = Layer(var, {'addShape': 'shape', 'addNull': 'null', 'add': 'precomp'}[fn], cv,
                      src if fn == 'add' else None)
            layers[var] = L
            order[cv].append(L)           # moveToEnd => file order is top -> bottom
            continue
        # mask / path shape variables
        m = re.match(r'var (\w+) = (\w+)\.property\("ADBE (Mask Parade|Root Vectors Group)"\)(.*)\.property\("ADBE (Mask Shape|Vector Shape)"\);', ln)
        if m and m.group(2) in layers:
            toks = re.findall(r'\.property\((\d+)\)', m.group(4))
            varmap[m.group(1)] = (layers[m.group(2)], m.group(3), [int(t) for t in toks])
            continue
        m = re.match(r'(\w+)_newShape\.(vertices|closed|inTangents|outTangents) = (.*);', ln)
        if m and m.group(1) in varmap:
            L, kind, nums = varmap[m.group(1)]
            key, val = m.group(2), json.loads(m.group(3).replace('true', 'true'))
            if key in ('inTangents', 'outTangents') and any(any(abs(c) > 1e-9 for c in p) for p in val):
                warns.append(f'{L.name}: curved tangents ignored (straight segments used)')
            if kind == 'Mask Parade':
                L.__dict__.setdefault('_m', {})[key] = val
                if key == 'closed' or key == 'vertices':
                    L.mask = L._m
            else:
                node = resolve(L.root, nums)
                if key == 'vertices': node.verts = val
                elif key == 'closed': node.closed = bool(val)
            continue
        m = re.match(r'(\w+)\.(.*)$', ln)
        if not m or m.group(1) not in layers:
            continue
        L, rest = layers[m.group(1)], m.group(2)
        mm = re.match(r'name = "(.*)";', rest)
        if mm: L.name = mm.group(1); continue
        if rest == 'enabled = false;': L.enabled = False; continue
        mm = re.match(r'trackMatteType = TrackMatteType\.(\w+);', rest)
        if mm: L.matte_type = mm.group(1); continue
        mm = re.match(r'setParentWithJump\((\w+)\);', rest)
        if mm: L.parent = layers.get(mm.group(1)); continue
        mm = re.match(r'property\("ADBE Transform Group"\)\.property\("ADBE ([^"]+)"\)\.setValue\((.*)\);', rest)
        if mm: L.tf[mm.group(1)] = json.loads(mm.group(2)); continue
        mm = re.match(r'property\("ADBE Root Vectors Group"\)((?:\.property\((?:\d+|"[^"]+")\))*)(.*);$', rest)
        if mm:
            toks = re.findall(r'\.property\((\d+|"[^"]+")\)', mm.group(1))
            nums = [int(t) for t in toks if t.isdigit()]
            pname = next((t.strip('"') for t in toks if not t.isdigit()), None)
            tail = mm.group(2)
            if tail.startswith('.addProperty('):
                resolve(L.root, nums).children.append(Node(re.search(r'"(.*)"', tail).group(1)))
            elif tail.startswith('.name ='):
                resolve(L.root, nums).name = re.search(r'"(.*)"', tail).group(1)
            elif tail.startswith('.enabled = false'):
                resolve(L.root, nums).enabled = False
            elif tail.startswith('.setValue(') and pname:
                resolve(L.root, nums).props[pname] = json.loads(re.search(r'setValue\((.*)\)', tail).group(1))
            continue
    return warns

def resolve(root, nums):
    """Map an AE property index path onto our simplified tree."""
    if not nums: return root
    node = root.children[nums[0] - 1]
    if len(nums) == 1: return node
    if nums[1] != 2: return node            # 1 = blend mode, 3 = group transform (props live on group)
    for n in nums[2:]:
        if n - 1 < len(node.children): node = node.children[n - 1]
        else: break
    return node

# ----------------------------------------------------------------- emit
def num(x):
    x = round(float(x), 4)
    return str(int(x)) if x == int(x) else ('%.4f' % x).rstrip('0').rstrip('.')
def vec(v): return '[' + ','.join(num(c) for c in v[:2]) + ']'
def hexc(c): return '#%02x%02x%02x' % tuple(max(0, min(255, round(v * 255))) for v in c[:3])
def pascal(s): return ''.join(w[:1].upper() + w[1:] for w in re.split(r'[^0-9A-Za-z]+', s)) or 'Comp'
def q(s): return json.dumps(s, ensure_ascii=False)

def layer_tf(L):
    c = comps[L.comp]
    cx, cy = c['w'] / 2, c['h'] / 2
    default_a = {'shape': [0, 0], 'null': [50, 50],
                 'precomp': [comps[L.source]['w'] / 2, comps[L.source]['h'] / 2] if L.source else [0, 0]}[L.kind]
    p = L.tf.get('Position', [cx, cy]); a = L.tf.get('Anchor Point', default_a)
    s = L.tf.get('Scale', [100, 100]); r = L.tf.get('Rotate Z', 0)
    parts = ['p:' + vec(p)]
    if a[:2] != [0, 0]: parts.append('a:' + vec(a))
    if s[:2] != [100, 100]: parts.append('s:' + vec(s))
    if r: parts.append('r:' + num(r))
    return '{' + ','.join(parts) + '}'

def tconst(L): return 'T_%s_%s' % (pascal(comps[L.comp]['name']), re.sub(r'\W', '', L.var))

def emit_group(g, ind):
    pad = '  ' * ind
    items = [c for c in g.children]
    fill = next((c for c in items if c.type.endswith('Graphic - Fill') and c.enabled), None)
    strk = next((c for c in items if c.type.endswith('Graphic - Stroke') and c.enabled), None)
    trim = next((c for c in items if c.type.endswith('Filter - Trim') and c.enabled), None)
    rep  = next((c for c in items if c.type.endswith('Filter - Repeater') and c.enabled), None)
    paths = [c for c in items if c.type.startswith('ADBE Vector Shape')]
    if not paths or (not fill and not strk): return ''
    assert len(paths) == 1, 'multiple paths per group not supported'
    P = paths[0]
    paint = ''
    if fill: paint += ' fill="%s"' % hexc(fill.props.get('ADBE Vector Fill Color', [1, 0, 0]))
    if strk:
        paint += ' stroke="%s" sw={%s}' % (hexc(strk.props.get('ADBE Vector Stroke Color', [1, 1, 1])),
                                          num(strk.props.get('ADBE Vector Stroke Width', 2)))
    if P.type.endswith('Rect'):
        w, h = P.props.get('ADBE Vector Rect Size', [100, 100])[:2]
        r = P.props.get('ADBE Vector Rect Roundness', 0)
        shape = '<Rect w={%s} h={%s}%s%s />' % (num(w), num(h), ' r={%s}' % num(r) if r else '', paint)
    elif P.type.endswith('Ellipse'):
        w, h = P.props.get('ADBE Vector Ellipse Size', [100, 100])[:2]
        if trim:
            shape = '<Arc w={%s} h={%s} start={%s} end={%s} offset={%s}%s />' % (
                num(w), num(h), num(trim.props.get('ADBE Vector Trim Start', 0)),
                num(trim.props.get('ADBE Vector Trim End', 100)),
                num(trim.props.get('ADBE Vector Trim Offset', 0)), paint)
        else:
            shape = '<Ellipse w={%s} h={%s}%s />' % (num(w), num(h), paint)
    else:
        pts = '[' + ','.join(vec(v) for v in P.verts) + ']'
        shape = '<Poly pts={%s}%s%s />' % (pts, '' if P.closed else ' closed={false}', paint)
    gp = g.props
    gx, gy = gp.get('ADBE Vector Position', [0, 0])[:2]; gr = gp.get('ADBE Vector Rotation', 0)
    attrs = ''.join([' x={%s}' % num(gx) if gx else '', ' y={%s}' % num(gy) if gy else '',
                     ' r={%s}' % num(gr) if gr else ''])
    if rep:
        dx, dy = rep.props.get('ADBE Vector Repeater Position', [100, 0])[:2]
        n = int(rep.props.get('ADBE Vector Repeater Copies', 3))
        shape = '<Rep n={%d} dx={%s} dy={%s}>\n%s  %s\n%s</Rep>' % (n, num(dx), num(dy), pad + '  ', shape, pad + '  ')
        shape = shape.replace('\n' + pad + '    ', '\n' + pad + '    ')
    return '%s<Grp%s>\n%s  %s\n%s</Grp>\n' % (pad, attrs, pad, shape, pad)

def emit_layer(L, stack, ind, parents):
    """stack = comp layer list (top->bottom); returns JSX string."""
    pad = '  ' * ind
    chain, p = [], L.parent
    while p: chain.insert(0, tconst(p)); p = p.parent
    own = tconst(L) if L in parents else layer_tf(L)
    t = '[%s]' % ', '.join(chain + [own]) if chain else own
    attrs = ' name=%s t={%s}' % (q(L.name), t)
    if L.mask and 'vertices' in L.mask:
        attrs += ' mask={[%s]}' % ','.join(vec(v) for v in L.mask['vertices'])
    if L.kind == 'precomp':
        sc = comps[L.source]
        attrs += ' clip={{w:%s,h:%s}}' % (num(sc['w']), num(sc['h']))
    if L.matte_type:
        mode = {'ALPHA': 'alpha', 'ALPHA_INVERTED': 'alphaInverted'}.get(L.matte_type)
        i = stack.index(L)
        if mode and i > 0:
            ml = stack[i - 1]
            attrs += ' matte={{mode:%s,layer:(\n%s\n%s)}}' % (q(mode), emit_layer(ml, stack, ind + 2, parents), pad + '  ')
        else:
            sys.stderr.write('WARN: unsupported matte %s on %s\n' % (L.matte_type, L.name))
    if L.kind == 'precomp':
        body = '%s  <%s />\n' % (pad, pascal(comps[L.source]['name']))
    else:
        body = ''.join(emit_group(g, ind + 1) for g in reversed(L.root.children))
    return '%s<Layer%s>\n%s%s</Layer>' % (pad, attrs, body, pad)

def comp_deps(ls):
    return sorted({pascal(comps[l.source]['name']) for l in ls if l.kind == 'precomp'})

META_TMPL = """
export const BG_BEACH_META = {width: %d, height: %d, fps: %d, durationInFrames: %d, background: %s} as const;

/** Full scene. Pass background={null} for a transparent render. */
export const BGBeachScene: React.FC<{background?: string | null}> = ({background = BG_BEACH_META.background}) => (
  <Svg width={BG_BEACH_META.width} height={BG_BEACH_META.height}>
    {background ? <rect width={BG_BEACH_META.width} height={BG_BEACH_META.height} fill={background} /> : null}
    <BGBeach />
  </Svg>
);"""

def build_files(main_name):
    """Return {relative_path: code}; one file per AE composition."""
    main = next(k for k, v in comps.items() if v['name'] == main_name)
    parents = {l.parent for ls in order.values() for l in ls if l.parent}
    files, index = {}, []
    for cv, ls in order.items():
        c, name = comps[cv], pascal(comps[cv]['name'])
        folder = folders.get(cv, 'misc')
        out = ['/* AUTO-GENERATED by ae2remotion.py — AE comp "%s" (%dx%d, %d layers). */' % (c['name'], c['w'], c['h'], len(ls)),
               "import React from 'react';",
               "import {Arc, Ellipse, Grp, Layer, Place, Poly, Rect, Rep, Svg} from '../ae';",
               "import type {LayerTransform, PlaceProps} from '../ae';"]
        for d in comp_deps(ls):
            dc = next(k for k, v in comps.items() if pascal(v['name']) == d)
            out.append("import {%s} from '../%s/%s';" % (d, folders.get(dc, 'misc'), d))
        out.append('')
        mine = [l for l in ls if l in parents]
        for l in mine:
            out.append('const %s: LayerTransform = %s;' % (tconst(l), layer_tf(l)))
        if mine: out.append('')
        consumed = {ls[i - 1] for i, l in enumerate(ls) if l.matte_type and i > 0}
        draw = [l for l in reversed(ls) if l.enabled and l not in consumed and l.kind != 'null']
        const = re.sub(r'(?<!^)([A-Z])', r'_\1', name).upper()
        out.append('export const %s_SIZE = {width: %s, height: %s} as const;\n' % (const, num(c['w']), num(c['h'])))
        out.append('/** Layers only (no <svg>) — use inside an <svg>. Props: x, y, scale, rotate, flipX, flipY. */')
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
            out.append(META_TMPL % (c['w'], c['h'], c['fps'], round(c['dur'] * c['fps']), q(hexc(c['bg']))))
        files['%s/%s.tsx' % (folder, name)] = '\n'.join(out) + '\n'
        index.append((folder, name, const))
    idx = "/* AUTO-GENERATED */\nexport * from './ae';\n"
    for f, n, k in index:
        extra = ', BGBeachScene, BG_BEACH_META' if n == 'BGBeach' else ''
        idx += "export {%s, %sSvg, %s_SIZE%s} from './%s/%s';\n" % (n, n, k, extra, f, n)
    files['index.ts'] = idx
    cat = "/* AUTO-GENERATED — Root.tsx uses this to show every component in Remotion Studio */\nimport * as C from './index';\n\nexport const CATALOG = [\n"
    for f, n, k in index:
        cat += "  {id: %s, Component: C.%sSvg, ...C.%s_SIZE},\n" % (q(n), n, k)
    files['catalog.ts'] = cat + '];\n'
    return files

if __name__ == '__main__':
    inp, outdir = sys.argv[1], sys.argv[2]
    main_name = sys.argv[3] if len(sys.argv) > 3 else 'BG Beach'
    warns = parse(inp)
    for rel, code in build_files(main_name).items():
        p = os.path.join(outdir, rel); os.makedirs(os.path.dirname(p), exist_ok=True)
        open(p, 'w').write(code); print('wrote', rel)
    for w in sorted(set(warns)): print('WARN', w)
