/**
 * ae.json (hasil extract.cjs)  ->  src/library/**, src/config.ts
 * Jalankan: node tools/extract.cjs && node tools/generate.cjs
 */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const data = require('./ae.json');
const PROJ = require('./project.json');
const NAMES = fs.existsSync(path.join(__dirname, 'names.json')) ? require('./names.json') : { scenery: {}, sections: {} };

// ---------- util ----------
const r2 = (x) => Math.round(x * 100) / 100;
const r3 = (x) => Math.round(x * 1000) / 1000;
const hex = (c) => '#' + c.slice(0, 3).map((v) => Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16).padStart(2, '0')).join('');
const leaf = (n, mn) => (n && n.c ? n.c.find((x) => x.m === mn) : undefined);
const val = (n, mn, def) => { const l = leaf(n, mn); return l && l.v !== undefined ? l.v : def; };
const v2 = (a) => [r3(a[0]), r3(a[1])];
const pascal = (s) => s.replace(/[^A-Za-z0-9]+/g, ' ').trim().split(' ').map((w) => w[0].toUpperCase() + w.slice(1)).join('');
const camel = (s) => { const p = pascal(s); return p[0].toLowerCase() + p.slice(1); };
const slug = (s) => s.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// ---------- konversi pohon properti AE -> data ringkas ----------
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
function pathOf(shape) {
  const o = { v: shape.vertices.map((p) => [r2(p[0]), r2(p[1])]) };
  const zero = (arr) => !arr || !arr.length || arr.every((p) => !p[0] && !p[1]);
  if (!zero(shape.inTangents)) o.i = shape.inTangents.map((p) => [r2(p[0]), r2(p[1])]);
  if (!zero(shape.outTangents)) o.o = shape.outTangents.map((p) => [r2(p[0]), r2(p[1])]);
  if (shape.closed === false) o.c = false;
  return o;
}
function groupXf(tr) {
  const xf = {};
  const a = val(tr, 'ADBE Vector Anchor'); if (a && (a[0] || a[1])) xf.a = v2(a);
  const p = val(tr, 'ADBE Vector Position'); if (p && (p[0] || p[1])) xf.p = v2(p);
  const s = val(tr, 'ADBE Vector Scale'); if (s && !eq(s, [100, 100])) xf.s = v2(s);
  const r = val(tr, 'ADBE Vector Rotation'); if (r) xf.r = r3(r);
  const o = val(tr, 'ADBE Vector Group Opacity'); if (o !== undefined && o !== 100) xf.o = o;
  return Object.keys(xf).length ? xf : undefined;
}
function item(n) {
  if (n.off) return null;
  switch (n.m) {
    case 'ADBE Vector Group': {
      const contents = n.c.find((x) => x.m === 'ADBE Vectors Group');
      const g = { t: 'group' };
      if (n.n) g.name = n.n;
      g.items = (contents.c || []).map(item).filter(Boolean);
      const xf = groupXf(n.c.find((x) => x.m === 'ADBE Vector Transform Group'));
      if (xf) g.xf = xf;
      return g;
    }
    case 'ADBE Vector Shape - Rect': {
      const o = { t: 'rect', size: v2(val(n, 'ADBE Vector Rect Size', [100, 100])) };
      const rd = val(n, 'ADBE Vector Rect Roundness', 0); if (rd) o.round = r3(rd);
      const p = val(n, 'ADBE Vector Rect Position', [0, 0]); if (p[0] || p[1]) o.pos = v2(p);
      return o;
    }
    case 'ADBE Vector Shape - Ellipse': {
      const o = { t: 'ellipse', size: v2(val(n, 'ADBE Vector Ellipse Size', [100, 100])) };
      const p = val(n, 'ADBE Vector Ellipse Position', [0, 0]); if (p[0] || p[1]) o.pos = v2(p);
      return o;
    }
    case 'ADBE Vector Shape - Group': {
      const s = val(n, 'ADBE Vector Shape');
      return s ? { t: 'path', path: pathOf(s) } : null;
    }
    case 'ADBE Vector Graphic - Fill': {
      const o = { t: 'fill', color: hex(val(n, 'ADBE Vector Fill Color', [1, 0, 0, 1])) };
      const op = val(n, 'ADBE Vector Fill Opacity', 100); if (op !== 100) o.o = r3(op);
      const bl = val(n, 'ADBE Vector Blend Mode', 1); if (bl !== 1) o.blend = bl;
      return o;
    }
    case 'ADBE Vector Graphic - Stroke': {
      const o = { t: 'stroke', color: hex(val(n, 'ADBE Vector Stroke Color', [1, 1, 1, 1])), width: r3(val(n, 'ADBE Vector Stroke Width', 2)) };
      const cap = val(n, 'ADBE Vector Stroke Line Cap', 1); if (cap !== 1) o.cap = cap;
      const join = val(n, 'ADBE Vector Stroke Line Join', 1); if (join !== 1) o.join = join;
      const op = val(n, 'ADBE Vector Stroke Opacity', 100); if (op !== 100) o.o = r3(op);
      const bl = val(n, 'ADBE Vector Blend Mode', 1); if (bl !== 1) o.blend = bl;
      return o;
    }
    case 'ADBE Vector Filter - Trim': {
      const o = { t: 'trim' };
      const s = val(n, 'ADBE Vector Trim Start', 0), e = val(n, 'ADBE Vector Trim End', 100), f = val(n, 'ADBE Vector Trim Offset', 0);
      if (s !== 0) o.start = r3(s); if (e !== 100) o.end = r3(e); if (f !== 0) o.offset = r3(f);
      return o;
    }
    case 'ADBE Vector Filter - RC':
      return { t: 'round', radius: r3(val(n, 'ADBE Vector RoundCorner Radius', 10)) };
    case 'ADBE Vector Filter - Repeater': {
      const o = { t: 'repeater', copies: val(n, 'ADBE Vector Repeater Copies', 3) };
      const off = val(n, 'ADBE Vector Repeater Offset', 0); if (off) o.offset = off;
      const tr = leaf(n, 'ADBE Vector Repeater Transform');
      const pos = val(tr, 'ADBE Vector Repeater Position', [100, 0]); o.pos = v2(pos);
      const sc = val(tr, 'ADBE Vector Repeater Scale'); if (sc && !eq(sc, [100, 100])) o.scale = v2(sc);
      const ro = val(tr, 'ADBE Vector Repeater Rotation'); if (ro) o.rotation = r3(ro);
      return o;
    }
    default:
      throw new Error('item tidak dikenal: ' + n.m);
  }
}
function masksOf(l) {
  const mp = leaf({ c: l.tree }, 'ADBE Mask Parade');
  if (!mp || !mp.c) return undefined;
  return mp.c.map((a) => ({
    mode: a.maskMode === 'SUBTRACT' ? 'subtract' : a.maskMode === 'INTERSECT' ? 'intersect' : 'add',
    path: pathOf(val(a, 'ADBE Mask Shape')),
  }));
}
function fxOf(l) {
  const ep = leaf({ c: l.tree }, 'ADBE Effect Parade');
  const g = ep && ep.c && ep.c.find((x) => x.m === 'ADBE Geometry2');
  if (!g) return undefined;
  // sumber hanya men-set 0005 (=30) dan 0006 (=90): dibaca sebagai Skew dan Skew Axis
  return { skew: val(g, 'ADBE Geometry2-0005', 0), axis: val(g, 'ADBE Geometry2-0006', 0) };
}
function layerXf(l, comp, kind) {
  const tr = leaf({ c: l.tree }, 'ADBE Transform Group');
  const xf = {};
  const anc = val(tr, 'ADBE Anchor Point'), pos = val(tr, 'ADBE Position'), sc = val(tr, 'ADBE Scale'), rot = val(tr, 'ADBE Rotate Z'), op = val(tr, 'ADBE Opacity');
  const src = kind === 'precomp' ? data.find((c) => c.name === l.source) : null;
  if (anc && (anc[0] || anc[1] || src)) xf.a = v2(anc); else if (src) xf.a = [src.width / 2, src.height / 2];
  if (pos) xf.p = v2(pos); else if (kind === 'shape' || kind === 'precomp') xf.p = [comp.width / 2, comp.height / 2];
  if (sc && !eq(sc.slice(0, 2), [100, 100])) xf.s = v2(sc);
  if (rot) xf.r = r3(rot);
  if (op !== undefined && op !== 100) xf.o = op;
  return xf;
}

// ---------- serializer TS (ringkas & terbaca) ----------
const isPrim = (v) => v === null || typeof v !== 'object';
const isVec = (v) => Array.isArray(v) && v.length === 2 && v.every((x) => typeof x === 'number');
function fmt(v, ind = '') {
  if (v && v.__ref) return v.__ref;
  if (typeof v === 'string') return JSON.stringify(v).replace(/^"|"$/g, "'").replace(/\\"/g, '"');
  if (isPrim(v)) return String(v);
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    if (v.every(isVec) || v.every((x) => typeof x === 'number')) {
      const parts = v.map((x) => fmt(x));
      let lines = [], cur = '';
      for (const p of parts) { if ((cur + p).length > 110) { lines.push(cur); cur = ''; } cur += p + ','; }
      lines.push(cur);
      return lines.length === 1 ? '[' + lines[0].replace(/,$/, '') + ']' : '[\n' + lines.map((l) => ind + '  ' + l).join('\n') + '\n' + ind + ']';
    }
    return '[\n' + v.map((x) => ind + '  ' + fmt(x, ind + '  ') + ',').join('\n') + '\n' + ind + ']';
  }
  const ks = Object.keys(v);
  const inline = '{ ' + ks.map((k) => `${k}: ${fmt(v[k])}`).join(', ') + ' }';
  const flat = ks.every((k) => isPrim(v[k]) || isVec(v[k]));
  if (flat && inline.length < 120) return inline;
  return '{\n' + ks.map((k) => `${ind}  ${k}: ${fmt(v[k], ind + '  ')},`).join('\n') + '\n' + ind + '}';
}

// ---------- konversi layer / comp ----------
function convertLayer(l, comp, parts) {
  const o = { name: l.name || (l.kind === 'null' ? 'Null' : (typeof l.source === 'string' ? l.source : 'Layer')), kind: l.kind === 'precomp' ? 'part' : l.kind };
  if (l.off) o.hidden = true;
  if (l.blend === 'ADD') o.blend = 'add'; else if (l.blend === 'OVERLAY') o.blend = 'overlay';
  if (l.matte === 'ALPHA') o.matte = 'alpha';
  if (l.parent !== null && l.parent !== undefined) o.parent = l.parent;
  const xf = layerXf(l, comp, l.kind);
  if (Object.keys(xf).length) o.xf = xf;
  if (l.kind === 'precomp') {
    o.part = { __ref: camel(l.source) + 'Comp' };
    if (l.collapse) o.collapse = true;
  }
  if (l.kind === 'shape') {
    const rv = leaf({ c: l.tree }, 'ADBE Root Vectors Group');
    o.contents = (rv && rv.c ? rv.c : []).map(item).filter(Boolean);
    const m = masksOf(l); if (m) o.masks = m;
    const fx = fxOf(l); if (fx) o.fx = fx;
  }
  return o;
}

module.exports = { PROJ, data, NAMES, fmt, convertLayer, layerXf, camel, pascal, slug, v2, r3, root, leaf, val };

if (require.main === module) require('./generate-write.cjs');
