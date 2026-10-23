// Executes the compCode-generated ExtendScript against a mock of the After Effects
// object model and dumps the resulting scene graph (comps, layers, shape contents,
// masks, effects, parenting) as JSON. No regex parsing of the script body.
const fs = require('fs');
const vm = require('vm');

const SRC = process.argv[2];
const OUT = process.argv[3];
let code = fs.readFileSync(SRC, 'utf8');

// varName comments: layer display name -> JS variable name (used as stable ids)
const varNameByOrder = [];
for (const m of code.matchAll(/\/\/ Add (?:Shape Layer|existing composition) "([^"]*)", varName "([^"]*)";/g)) {
  varNameByOrder.push({ name: m[1], varName: m[2] });
}

const unknownKeys = new Set();
const usedKeys = new Set();

class Prop {
  constructor(key) { this.key = key; this.value = undefined; }
  setValue(v) { this.value = v; usedKeys.add(this.key); }
}

class Node {
  constructor(kind, matchName) {
    this.kind = kind; this.matchName = matchName;
    this.name = ''; this.enabled = true; this.children = []; this.named = {};
    this.color = null; this.maskMode = 'ADD';
    if (kind === 'group') {
      this.children = [new Prop('groupBlend'), new Node('contents'), new Node('transform')];
    } else if (kind === 'repeater') {
      this.children = [new Prop('r1'), new Prop('r2'), new Prop('r3'), new Node('rtransform')];
    }
  }
  property(k) {
    if (typeof k === 'number') {
      const c = this.children[k - 1];
      if (!c) throw new Error(`no child ${k} on ${this.kind}`);
      return c;
    }
    if (!this.named[k]) this.named[k] = new Prop(k);
    return this.named[k];
  }
  addProperty(mn) {
    const map = {
      'ADBE Vector Group': 'group', 'ADBE Vector Shape - Rect': 'rect',
      'ADBE Vector Shape - Ellipse': 'ellipse', 'ADBE Vector Shape - Group': 'path',
      'ADBE Vector Graphic - Stroke': 'stroke', 'ADBE Vector Graphic - Fill': 'fill',
      'ADBE Vector Filter - Repeater': 'repeater', 'ADBE Vector Filter - Trim': 'trim',
      'ADBE Mask Atom': 'mask', 'ADBE Fill': 'effectFill',
    };
    const kind = map[mn];
    if (!kind) throw new Error('unsupported addProperty ' + mn);
    const n = new Node(kind, mn);
    this.children.push(n);
    return n;
  }
}

class Layer {
  constructor(comp, type, source) {
    this.comp = comp; this.type = type; this.source = source;
    this.name = ''; this.label = 0; this.shy = false; this.enabled = true;
    this.blendingMode = 'NORMAL'; this.threeDLayer = false; this.collapseTransformation = false;
    this.outPoint = null; this.parentLayer = null; this.selected = false;
    this.transform = new Node('transform');
    this.contents = new Node('contents');
    this.masks = new Node('masks');
    this.effects = new Node('effects');
    const sw = source ? source.width : 0, sh = source ? source.height : 0;
    // AE defaults: position = comp centre; anchor = source centre for AV layers,
    // (0,0) for shape layers. Null layers: anchor (0,0) (verified geometrically,
    // see README "Notes on parenting").
    this.defaults = {
      anchor: type === 'comp' ? [sw / 2, sh / 2] : [0, 0],
      position: [comp.width / 2, comp.height / 2],
    };
  }
  property(k) {
    if (k === 'ADBE Root Vectors Group') return this.contents;
    if (k === 'ADBE Transform Group') return this.transform;
    if (k === 'ADBE Mask Parade') return this.masks;
    if (k === 'ADBE Effect Parade') return this.effects;
    throw new Error('layer prop ' + k);
  }
  moveToEnd() { const a = this.comp.arr; a.splice(a.indexOf(this), 1); a.push(this); }
  setParentWithJump(p) { this.parentLayer = p; }
  replaceSource(src) { this.source = src; }
  remove() { const a = this.comp.arr; a.splice(a.indexOf(this), 1); }
}

const mkLayers = (comp) => ({
  addShape() { const l = new Layer(comp, 'shape', null); comp.arr.unshift(l); return l; },
  add(src) { const l = new Layer(comp, 'comp', src); comp.arr.unshift(l); return l; },
  addNull() {
    const src = { name: 'Null', width: 100, height: 100, label: 0, mainSource: { color: [1, 1, 1] },
      parentFolder: { numItems: 0, remove() {} }, remove() {} };
    const l = new Layer(comp, 'null', src); comp.arr.unshift(l); return l;
  },
});

const allComps = [];
const mkComp = (name, w, h, par, dur, fps) => {
  const c = { name, width: w, height: h, pixelAspect: par, duration: dur, frameRate: fps, arr: [],
    bgColor: [0, 0, 0], openInViewer() {}, remove() {} };
  c.layers = mkLayers(c);
  allComps.push(c);
  return c;
};
const mkFolder = (name) => ({ name, items: [], numItems: 0, label: 0, parentFolder: null, remove() {} });

const app = {
  beginUndoGroup() {}, endUndoGroup() {},
  project: { rootFolder: mkFolder('root'), items: { addFolder: mkFolder, addComp: mkComp } },
};

class Shape { constructor() { this.vertices = []; this.inTangents = []; this.outTangents = []; this.closed = true; } }

const sandbox = {
  app, Shape, alert: console.log, File: { decode: (s) => s }, FolderItem: function () {},
  BlendingMode: new Proxy({}, { get: (_, k) => String(k) }),
  MaskMode: new Proxy({}, { get: (_, k) => String(k) }),
  console,
};
vm.createContext(sandbox);
code += '\n;compCode_20180826_175811();';
vm.runInContext(code, sandbox, { filename: 'BGHOME_1.JSX' });

// ---------------------------------------------------------------- serialise
const val = (n, key, def) => {
  const p = n.named[key];
  return p && p.value !== undefined ? p.value : def;
};
const round = (x) => Math.round(x * 1e6) / 1e6;
const rv = (a) => (Array.isArray(a) ? a.map(round) : round(a));

function serShape(sh) {
  const o = { vertices: sh.vertices.map(rv), closed: !!sh.closed };
  if (sh.inTangents.length) o.inTangents = sh.inTangents.map(rv);
  if (sh.outTangents.length) o.outTangents = sh.outTangents.map(rv);
  return o;
}

function serTransformGroup(t, defs) {
  const g = (k, d) => rv(val(t, k, d));
  const pos = val(t, 'ADBE Position', defs.position);
  const anc = val(t, 'ADBE Anchor Point', defs.anchor);
  const scl = val(t, 'ADBE Scale', [100, 100, 100]);
  return {
    anchor: [round(anc[0]), round(anc[1])],
    position: [round(pos[0]), round(pos[1])],
    scale: [round(scl[0]), round(scl[1])],
    rotation: g('ADBE Rotate Z', 0),
    opacity: g('ADBE Opacity', 100),
  };
}

function serItem(n) {
  const base = { name: n.name };
  if (!n.enabled) base.enabled = false;
  switch (n.kind) {
    case 'rect':
      return { t: 'rect', ...base, size: rv(val(n, 'ADBE Vector Rect Size', [100, 100])),
        position: rv(val(n, 'ADBE Vector Rect Position', [0, 0])),
        roundness: rv(val(n, 'ADBE Vector Rect Roundness', 0)) };
    case 'ellipse':
      return { t: 'ellipse', ...base, size: rv(val(n, 'ADBE Vector Ellipse Size', [100, 100])),
        position: rv(val(n, 'ADBE Vector Ellipse Position', [0, 0])) };
    case 'path':
      return { t: 'path', ...base, ...serShape(val(n, 'ADBE Vector Shape', new Shape())) };
    case 'fill':
      return { t: 'fill', ...base, color: rv(val(n, 'ADBE Vector Fill Color', [1, 0, 0, 1])),
        opacity: rv(val(n, 'ADBE Vector Fill Opacity', 100)),
        _colorSet: n.named['ADBE Vector Fill Color'] !== undefined };
    case 'stroke':
      return { t: 'stroke', ...base, color: rv(val(n, 'ADBE Vector Stroke Color', [1, 1, 1, 1])),
        width: rv(val(n, 'ADBE Vector Stroke Width', 2)),
        opacity: rv(val(n, 'ADBE Vector Stroke Opacity', 100)),
        cap: val(n, 'ADBE Vector Stroke Line Cap', 1), join: val(n, 'ADBE Vector Stroke Line Join', 1),
        _colorSet: n.named['ADBE Vector Stroke Color'] !== undefined };
    case 'repeater': {
      const rt = n.children[3];
      return { t: 'repeater', ...base, copies: val(n, 'ADBE Vector Repeater Copies', 3),
        position: rv(val(rt, 'ADBE Vector Repeater Position', [100, 0])),
        anchor: rv(val(rt, 'ADBE Vector Repeater Anchor', [0, 0])),
        scale: rv(val(rt, 'ADBE Vector Repeater Scale', [100, 100])),
        rotation: rv(val(rt, 'ADBE Vector Repeater Rotation', 0)),
        startOpacity: rv(val(rt, 'ADBE Vector Repeater Start Opacity', 100)),
        endOpacity: rv(val(rt, 'ADBE Vector Repeater End Opacity', 100)) };
    }
    case 'trim':
      return { t: 'trim', ...base, start: rv(val(n, 'ADBE Vector Trim Start', 0)),
        end: rv(val(n, 'ADBE Vector Trim End', 100)), offset: rv(val(n, 'ADBE Vector Trim Offset', 0)) };
    case 'group': {
      const tr = n.children[2];
      const tdefs = { anchor: [0, 0], position: [0, 0] };
      const t = serTransformGroup({ named: {
        'ADBE Position': tr.named['ADBE Vector Position'], 'ADBE Anchor Point': tr.named['ADBE Vector Anchor'],
        'ADBE Scale': tr.named['ADBE Vector Scale'], 'ADBE Rotate Z': tr.named['ADBE Vector Rotation'],
        'ADBE Opacity': tr.named['ADBE Vector Group Opacity'] } }, tdefs);
      return { t: 'group', ...base, transform: t, contents: n.children[1].children.map(serItem) };
    }
    default: throw new Error('serItem ' + n.kind);
  }
}

function serLayer(l, i) {
  const defs = l.defaults;
  const t = serTransformGroup(l.transform, defs);
  const o = {
    id: null, name: l.name || (l.source && l.source.name) || '', type: l.type,
    ...(l.type === 'comp' ? { source: l.source.name } : {}),
    ...(l.enabled ? {} : { enabled: false }),
    
    ...(l.blendingMode !== 'NORMAL' ? { blend: l.blendingMode } : {}),
    ...(l.collapseTransformation ? { collapse: true } : {}),
    ...(l.threeDLayer ? { threeD: true } : {}),
    ...(l.shy ? { shy: true } : {}),
    ...(l.outPoint != null ? { outPoint: round(l.outPoint) } : {}),
    ...t,
  };
  const eff = l.effects.children.map((e) => {
    if (e.kind !== 'effectFill') throw new Error('effect ' + e.matchName);
    return { type: 'fill', color: rv(val(e, 'ADBE Fill-0002', [1, 0, 0, 1])) };
  });
  if (eff.length) o.effects = eff;
  const masks = l.masks.children.map((m) => {
    const sh = val(m, 'ADBE Mask Shape', null);
    const mo = m.named['ADBE Mask Offset'];
    return { name: m.name, mode: m.maskMode, ...serShape(sh),
      ...(mo && mo.value ? { expansion: rv(mo.value) } : {}) };
  });
  if (masks.length) o.masks = masks;
  if (l.type === 'shape') o.contents = l.contents.children.map(serItem);
  return o;
}

const comps = allComps.filter((c) => c.name !== 'tempNullComp');
const out = [];
// varName assignment: comps' layers are created in script order; the varName comment
// list is in the same order as layer creation, grouped by comp.
let vi = 0;
for (const c of comps) {
  // layers were created in order and reversed by unshift+moveToEnd => arr is top..bottom
  // creation order = reverse of arr
  const created = [...c.arr];
  const idByLayer = new Map();
  for (const l of created) {
    if (l.type === 'null') { idByLayer.set(l, 'null96'); continue; }
    const entry = varNameByOrder[vi++];
    const lname = l.name || (l.source && l.source.name);
    if (!entry || entry.name !== lname) {
      throw new Error(`varName mismatch: ${entry && entry.name} vs ${lname}`);
    }
    idByLayer.set(l, entry.varName);
  }
  const layers = c.arr.map((l, i) => {
    const o = serLayer(l, i);
    o.id = idByLayer.get(l);
    return o;
  });
  // resolve parent ids
  c.arr.forEach((l, i) => { if (l.parentLayer) layers[i].parent = idByLayer.get(l.parentLayer); });
  layers.forEach((o) => { delete o._parentRef; });
  out.push({ name: c.name, width: c.width, height: c.height, duration: round(c.duration),
    frameRate: c.frameRate, bgColor: c.bgColor.map(round), layers });
}

fs.writeFileSync(OUT, JSON.stringify(out, null, 1));
console.log('comps:', out.map((c) => `${c.name} (${c.layers.length})`).join(', '));
console.log('named keys set:', [...usedKeys].sort().join(' | '));
