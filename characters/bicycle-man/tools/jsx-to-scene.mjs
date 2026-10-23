#!/usr/bin/env node
// jsx-to-scene.mjs  —  After Effects (compCode) .jsx  ->  scene.json
// Cara kerja: JSX ASLI dijalankan di host ExtendScript tiruan (mock `app`, `Shape`, dsb).
// Hasilnya adalah scene graph murni (komposisi, layer, pohon properti, keyframe, ekspresi)
// yang dibaca runtime Remotion. Tidak ada regex-parsing -> tidak ada bagian JSX yang "terlewat".
import fs from 'node:fs';
import vm from 'node:vm';
import { transformExpression } from './expr-transform.mjs';

const [,, input, output = 'public/scene.json'] = process.argv;
if (!input) { console.error('usage: node tools/jsx-to-scene.mjs <file.jsx> [out.json]'); process.exit(1); }

// ---------------------------------------------------------------- property tree
let UID = 0;
class Prop {
  constructor(mn, parent) {
    this.mn = mn; this.name = mn; this.parent = parent || null; this.kids = [];
    this.v = undefined; this.keys = null; this.expr = null; this.enabled = true; this.vt = 'one';
    this.id = ++UID;
  }
  property(x) {
    if (typeof x === 'number') return this.kids[x - 1] || null;
    let k = this.kids.find(c => c.mn === x) || this.kids.find(c => c.name === x);
    if (!k) { k = new Prop(x, this); this.kids.push(k); }
    return k;
  }
  addProperty(mn) {
    const p = new Prop(mn, this); this.kids.push(p);
    if (mn === 'ADBE Vector Group') { // [blend, contents, transform]
      const b = new Prop('ADBE Vector Blend Mode', p), c = new Prop('ADBE Vectors Group', p), t = new Prop('ADBE Vector Transform Group', p);
      p.kids.push(b, c, t);
    }
    const seed = (...names) => names.forEach(n => p.kids.push(new Prop(n, p)));
    if (mn === 'ADBE Vector Graphic - Stroke')  // indeks AE: Dashes = 9
      seed('ADBE Vector Blend Mode', 'ADBE Vector Composite Order', 'ADBE Vector Stroke Color', 'ADBE Vector Stroke Opacity', 'ADBE Vector Stroke Width', 'ADBE Vector Stroke Line Cap', 'ADBE Vector Stroke Line Join', 'ADBE Vector Stroke Miter Limit', 'ADBE Vector Stroke Dashes');
    if (mn === 'ADBE Vector Filter - Repeater') seed('ADBE Vector Repeater Copies', 'ADBE Vector Repeater Offset', 'ADBE Vector Repeater Order', 'ADBE Vector Repeater Transform');
    return p;
  }
  canAddProperty() { return true; }
  get numProperties() { return this.kids.length; }
  get propertyIndex() { return this.parent ? this.parent.kids.indexOf(this) + 1 : 0; }
  get propertyDepth() { let d = 0, p = this; while (p.parent) { d++; p = p.parent; } return d; }
  get parentProperty() { return this.parent; }
  get propertyValueType() { return PropertyValueType[this.vt] ?? PropertyValueType.OneD; }
  get value() { return this.v === undefined ? (this.mn === 'ADBE Text Document' ? (this.v = {}) : 0) : this.v; }
  set value(x) { this.v = x; }
  _vt(x) { if (Array.isArray(x)) this.vt = x.length === 2 ? 'TwoD' : x.length === 3 ? 'ThreeD' : 'one'; }
  setValue(x) { this.v = ser(x); this._vt(x); }
  setValuesAtTimes(ts, vs) { this.keys = ts.map((t, i) => ({ t, v: ser(vs[i]) })); this._vt(vs[0]); }
  setValueAtTime(t, v) { if (this.mn === 'ADBE Marker') return; (this.keys ||= []).push({ t, v: ser(v) }); }
  setTemporalEaseAtKey(i, inE, outE) { const k = this.keys[i - 1]; k.ei = (inE || []).map(e => [e.speed, e.influence]); if (outE) k.eo = outE.map(e => [e.speed, e.influence]); }
  setInterpolationTypeAtKey(i, a, b) { const k = this.keys[i - 1]; k.ii = a; k.io = b; }
  setSpatialTangentsAtKey(i, a, b) { const k = this.keys[i - 1]; k.si = a; k.so = b; }
  set expression(s) { this.expr = s; }
  get expression() { return this.expr || ''; }
  set maskMode(m) { this.mm = m; }
}
const ser = x => (x instanceof ShapeC ? { vertices: x.vertices, inTangents: x.inTangents, outTangents: x.outTangents, closed: x.closed } : x);

// ---------------------------------------------------------------- AE globals
class ShapeC { constructor() { this.vertices = []; this.inTangents = []; this.outTangents = []; this.closed = true; } }
class KeyframeEase { constructor(speed, influence) { this.speed = speed; this.influence = influence; } }
class MarkerValue { constructor(c) { this.comment = c; } setParameters() {} }
const PropertyValueType = { OneD: 'one', TwoD_SPATIAL: 'TwoD', TwoD: 'TwoD', ThreeD: 'ThreeD', ThreeD_SPATIAL: 'ThreeD', NO_VALUE: 0, one: 'one' };
PropertyValueType.OneD = 'one';
const KeyframeInterpolationType = { LINEAR: 6612, BEZIER: 6613, HOLD: 6614 };
const TrackMatteType = { NO_TRACK_MATTE: 5012, ALPHA: 5013, ALPHA_INVERTED: 5014, LUMA: 5015, LUMA_INVERTED: 5016 };
const MaskMode = { NONE: 6812, ADD: 6813, SUBTRACT: 6814, INTERSECT: 6815, LIGHTEN: 6816, DARKEN: 6817, DIFFERENCE: 6818 };
const BlendingMode = { NORMAL: 5212, ADD: 5220 };
const ParagraphJustification = { CENTER_JUSTIFY: 7415 };

class Layer extends Prop {
  constructor(comp, type) {
    super('LAYER', null);
    Object.assign(this, { comp, type, source: null, enabled: true, shy: false, locked: false, guideLayer: false, selected: false, parentLayer: null, trackMatteType: 5012, collapseTransformation: false, blendingMode: BlendingMode.NORMAL, label: 0, comment: '', outPoint: null, inPoint: null });
    this.name = type === 'shape' ? 'Shape Layer' : type;
  }
  moveToEnd() { const a = this.comp._layers; const i = a.indexOf(this); if (i >= 0) a.splice(i, 1); a.push(this); }
  remove() { const a = this.comp._layers; const i = a.indexOf(this); if (i >= 0) a.splice(i, 1); }
  setParentWithJump(p) { this.parentLayer = p; }
  replaceSource(item) { this.source = item; this.type = 'null'; }
  get index() { return this.comp._layers.indexOf(this) + 1; }
}
class Item { constructor(kind, name) { Object.assign(this, { kind, name, typeName: kind, label: 0, comment: '', parentFolder: null, items: [], mainSource: { color: [1, 1, 1] } }); } remove() {} get numItems() { return 0; } }
class Comp extends Item {
  constructor(name, w, h, pa, dur, fps) {
    super('Composition', name); Object.assign(this, { width: w, height: h, pixelAspect: pa, duration: dur, frameRate: fps, _layers: [] });
    const c = this;
    this.layers = {
      addShape: () => { const l = new Layer(c, 'shape'); c._layers.unshift(l); return l; },
      addNull: () => { const l = new Layer(c, 'null'); l.source = new Item('Footage', 'Null'); l.source.parentFolder = new Item('Folder','Solids'); c._layers.unshift(l); return l; },
      addSolid: (col, name, w, h) => { const l = new Layer(c, 'solid'); l.source = Object.assign(new Item('Footage', name), { mainSource: { color: col }, width: w, height: h }); l.name = name; c._layers.unshift(l); return l; },
      addText: (s) => { const l = new Layer(c, 'text'); l.textString = s; c._layers.unshift(l); return l; },
      add: (item) => { const l = new Layer(c, item instanceof Comp ? 'precomp' : 'solid'); l.source = item; l.name = item.name; c._layers.unshift(l); return l; },
    };
  }
  remove() { const i = projectComps.indexOf(this); if (i >= 0) projectComps.splice(i, 1); }
  openInViewer() {}
}
const projectComps = []; const renames = [];
const rootFolder = new Item('Folder', 'root');
const app = {
  version: '24.0', project: {
    rootFolder, items: {
      addComp: (...a) => { const c = new Comp(...a); projectComps.push(c); return c; },
      addFolder: n => new Item('Folder', n),
    },
    autoFixExpressions: (a, b) => renames.push([a, b]),
  },
  beginUndoGroup() {}, endUndoGroup() {},
};
const sandbox = {
  app, Shape: ShapeC, KeyframeEase, MarkerValue, PropertyValueType, KeyframeInterpolationType, TrackMatteType, MaskMode,
  BlendingMode, ParagraphJustification, FolderItem: Item, File: Object.assign(p => ({ exists: false, path: p }), { decode: s => s }),
  prompt: (_m, def) => def, alert: m => console.error('[alert]', m), parseFloat, console, Math, Array, Object, JSON, Error, String, Number,
};
sandbox.File.decode = s => String(s || '');
const raw = fs.readFileSync(input, 'utf8').replace(/\r/g, '').replace('e.line.toString()', 'String(e.line || e.stack)');
const code = raw.replace(/^\/\/ compCode_\w+\(\);/m, '') + '\n;compCode_main_entry = (function(){ var n=Object.keys(this); })';
// cari nama fungsi compCode_xxx dan panggil
const fn = (raw.match(/function\s+(compCode_\w+)\s*\(/) || [])[1];
if (!fn) throw new Error('fungsi compCode_* tidak ditemukan');
vm.createContext(sandbox);
vm.runInContext(raw + `\n;${fn}();`, sandbox, { filename: input });

// ---------------------------------------------------------------- export
function fixExpr(s) { if (!s) return s; for (const [a, b] of renames) s = s.split(`"${a}"`).join(`"${b}"`).split(`"name:${a}"`).join(`"${b}"`); return s; }
for (const [a, b] of renames) { /* comp rename sudah ditangani prompt()->default; map nama lama -> baru */ }
const compName = c => c.name;
const dumpProp = p => {
  const o = { mn: p.mn };
  if (p.name !== p.mn) o.n = p.name;
  if (p.v !== undefined) o.v = p.v;
  if (p.keys) o.k = p.keys;
  if (p.expr) { o.e = fixExpr(p.expr); try { o.x = transformExpression(o.e); new Function('$a','$s','$m','$d','$n', o.x); } catch (err) { console.error('[expr] gagal transform:', err.message, o.e.slice(0, 80)); } }
  if (p.enabled === false) o.off = 1;
  if (p.mm !== undefined) o.mm = p.mm;
  if (p.kids.length) o.c = p.kids.map(dumpProp);
  return o;
};
const scene = { source: input, comps: {}, main: null, assumptions: {} };
const nameOf = new Map();
for (const c of projectComps) if (c.name !== 'tempNullComp' && c.name !== 'tempComp') nameOf.set(c, c.name);
for (const c of nameOf.keys()) {
  const L = c._layers;
  scene.comps[c.name] = {
    name: c.name, w: c.width, h: c.height, dur: c.duration, fps: c.frameRate, bg: c.bgColor, workArea: c.workAreaDuration,
    layers: L.map((l, i) => ({
      i: i + 1, name: l.name, type: l.type === 'solid' && l.source && l.source.kind === 'Footage' ? 'solid' : l.type,
      src: l.type === 'precomp' ? l.source.name : undefined,
      parent: l.parentLayer ? L.indexOf(l.parentLayer) + 1 : 0,
      enabled: l.enabled, shy: l.shy, guide: l.guideLayer, locked: l.locked,
      matte: l.trackMatteType, collapse: l.collapseTransformation, blend: l.blendingMode, label: l.label,
      out: l.outPoint, text: l.textString, solidSize: l.type === 'solid' ? [l.source.width, l.source.height] : undefined,
      solidColor: l.type === 'solid' ? l.source.mainSource.color : undefined,
      props: l.kids.map(dumpProp),
    })),
  };
}
scene.main = [...nameOf.keys()][0].name;
fs.mkdirSync(output.replace(/[^/]*$/, '') || '.', { recursive: true });
fs.writeFileSync(output, JSON.stringify(scene));
const nl = Object.values(scene.comps).reduce((s, c) => s + c.layers.length, 0);
console.log(`OK  ${Object.keys(scene.comps).length} comps, ${nl} layers -> ${output} (${(fs.statSync(output).size / 1024).toFixed(0)} KB)  main="${scene.main}"`);
