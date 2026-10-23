#!/usr/bin/env node
/**
 * Mini After Effects expression runtime (rest pose, time = 0).
 * Input : rig.json  (layers, base transforms, effects, vector shapes, expressions)
 * Output: JSON with the evaluated value of every property that has an expression.
 * Vector math (a + b on arrays) is emulated by rewriting + - * / into __op() through an AST pass.
 */
const fs = require('fs');
const acorn = require('acorn');
const astring = require('astring');

const rig = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const OUT = {layers: {}, vectors: {}, errors: []};
const isA = Array.isArray;

// ------------------------------------------------------------ vector math
const sc = (op, x, y) => (op === '+' ? x + y : op === '-' ? x - y : op === '*' ? x * y : x / y);
function __op(op, a, b) {
  if (isA(a) || isA(b)) {
    const n = Math.max(isA(a) ? a.length : 1, isA(b) ? b.length : 1), r = [];
    for (let i = 0; i < n; i++) r.push(sc(op, isA(a) ? (a[i] ?? 0) : a, isA(b) ? (b[i] ?? 0) : b));
    return r;
  }
  return sc(op, a, b);
}
const __neg = (x) => (isA(x) ? x.map((v) => -v) : -x);
const map2 = (a, b, f) => (isA(a) || isA(b)
  ? Array.from({length: Math.max(isA(a) ? a.length : 1, isA(b) ? b.length : 1)}, (_, i) => f(isA(a) ? a[i] ?? 0 : a, isA(b) ? b[i] ?? 0 : b))
  : f(a, b));
const clampN = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
const BUILTINS = {
  clamp: (v, lo, hi) => (isA(v) ? v.map((x) => clampN(x, lo, hi)) : clampN(v, lo, hi)),
  linear(t, a, b, c, d) {
    let tMin, tMax, v1, v2;
    if (arguments.length === 3) { tMin = 0; tMax = 1; v1 = a; v2 = b; } else { tMin = a; tMax = b; v1 = c; v2 = d; }
    const u = tMax === tMin ? 0 : clampN((t - tMin) / (tMax - tMin), 0, 1);
    return map2(v1, v2, (x, y) => x + (y - x) * u);
  },
  length(a, b) {
    if (b === undefined) return isA(a) ? Math.hypot(...a) : Math.abs(a);
    return Math.hypot(...__op('-', a, b));
  },
  radiansToDegrees: (r) => (r * 180) / Math.PI,
  degreesToRadians: (d) => (d * Math.PI) / 180,
  add: (a, b) => __op('+', a, b), sub: (a, b) => __op('-', a, b),
  mul: (a, b) => __op('*', a, b), div: (a, b) => __op('/', a, b),
  ease(t, a, b, c, d) { const u = clampN((t - a) / (b - a), 0, 1), s = u * u * (3 - 2 * u); return map2(c, d, (x, y) => x + (y - x) * s); },
};

// ------------------------------------------------------------ expression compiler
const cache = new Map();
const runner = new Function('__scope', '__op', '__neg', '__code', 'with (__scope) { return eval(__code); }');
function compile(code) {
  if (cache.has(code)) return cache.get(code);
  const ast = acorn.parse(code, {ecmaVersion: 2020, allowReturnOutsideFunction: true});
  const assigned = new Set();
  (function walk(n) {
    if (!n || typeof n !== 'object') return;
    if (isA(n)) { n.forEach(walk); return; }
    for (const k of Object.keys(n)) { const v = n[k]; if (v && typeof v === 'object') walk(v); }
    if (n.type === 'AssignmentExpression' && n.left.type === 'Identifier') assigned.add(n.left.name);
    const call = (name, args) => ({type: 'CallExpression', callee: {type: 'Identifier', name}, arguments: args, optional: false});
    if (n.type === 'BinaryExpression' && '+-*/'.includes(n.operator)) {
      const {left, right, operator} = n;
      Object.keys(n).forEach((k) => delete n[k]);
      Object.assign(n, call('__op', [{type: 'Literal', value: operator, raw: JSON.stringify(operator)}, left, right]));
    } else if (n.type === 'AssignmentExpression' && /^[-+*/]=$/.test(n.operator)) {
      const op = n.operator[0];
      n.right = call('__op', [{type: 'Literal', value: op, raw: JSON.stringify(op)}, n.left, n.right]);
      n.operator = '=';
    } else if (n.type === 'UnaryExpression' && n.operator === '-') {
      const arg = n.argument;
      Object.keys(n).forEach((k) => delete n[k]);
      Object.assign(n, call('__neg', [arg]));
    }
  })(ast);
  const src = (assigned.size ? 'var ' + [...assigned].join(',') + ';\n' : '') + astring.generate(ast);
  cache.set(code, src);
  return src;
}

// ------------------------------------------------------------ rig object model
const comps = {};
for (const c of rig.comps) {
  comps[c.name] = c; c.byName = {}; c.byVar = {};
  c.layers.forEach((L, i) => { L.index = i + 1; L.comp = c; L.cache = {}; L.busy = {}; c.byVar[L.var] = L; if (!(L.name in c.byName)) c.byName[L.name] = L; });
  c.layers.forEach((L) => { L.parentL = L.parent ? c.byVar[L.parent] : null; });
}
const err = (m) => { if (OUT.errors.length < 200) OUT.errors.push(m); };
const TNAME = {'ADBE Position': 'Position', 'ADBE Anchor Point': 'Anchor Point', 'ADBE Scale': 'Scale', 'ADBE Rotate Z': 'Rotate Z', 'ADBE Opacity': 'Opacity'};

function guarded(L, key, base, code) {
  if (key in L.cache) return L.cache[key];
  if (L.busy[key]) return base;                 // self reference == value before the expression
  L.busy[key] = true;
  try { const v = run(code, L, base); L.cache[key] = v; return v; }
  catch (e) { err(`${L.comp.name}/${L.name} ${key}: ${e.message}`); L.cache[key] = base; return base; }
  finally { L.busy[key] = false; }
}
const tval = (L, p) => (L.exprs && L.exprs[p] ? guarded(L, 'T|' + p, L.base[p], L.exprs[p]) : L.base[p]);
function pval(L, fx, id) {
  const base = id in fx.params ? fx.params[id] : (id in fx.defaults ? fx.defaults[id] : 0);
  return fx.exprs[id] ? guarded(L, `P|${fx.idx}|${id}`, base, fx.exprs[id]) : base;
}
function vval(L, gi, ii, prop) {
  const it = L.vectors[gi].items[ii], base = it.props[prop];
  return it.exprs[prop] ? guarded(L, `V|${gi}|${ii}|${prop}`, base, it.exprs[prop]) : base;
}
function own(L, p) {
  const pos = tval(L, 'Position'), a = tval(L, 'Anchor Point'), s = tval(L, 'Scale'), r = (tval(L, 'Rotate Z') * Math.PI) / 180;
  const x = ((p[0] - a[0]) * s[0]) / 100, y = ((p[1] - a[1]) * s[1]) / 100;
  return [pos[0] + x * Math.cos(r) - y * Math.sin(r), pos[1] + x * Math.sin(r) + y * Math.cos(r)];
}
const world = (L, p) => { const q = own(L, p); return L.parentL ? world(L.parentL, q) : q; };

const pid = (fx, k) => (typeof k === 'number' ? `${fx.match}-${String(k).padStart(4, '0')}`
  : /-\d{4}$/.test(k) ? k : ['Slider', 'Angle', 'Checkbox', 'Color'].includes(k) ? fx.match + '-0001' : null);
function fxObj(L, fx) {
  const f = (k) => { const id = pid(fx, k); return id ? pval(L, fx, id) : undefined; };
  f.active = true; return f;
}
function fxGroup(L) {
  return (k) => {
    const fx = typeof k === 'number' ? L.fx[k - 1] : L.fx.find((e) => e.name === k || e.match === k);
    return fx ? fxObj(L, fx) : undefined;
  };
}
function layerObj(L) {
  if (L._obj) return L._obj;
  const f = function (key) {
    if (key === 'ADBE Effect Parade') return fxGroup(L);
    if (key === 'ADBE Transform Group') return (m) => (TNAME[m] ? tval(L, TNAME[m]) : undefined);
    return undefined;
  };
  const def = (k, get) => Object.defineProperty(f, k, {get, configurable: true});
  const tr = {};
  for (const [k, p] of [['position', 'Position'], ['anchorPoint', 'Anchor Point'], ['scale', 'Scale'], ['rotation', 'Rotate Z'], ['opacity', 'Opacity']]) {
    Object.defineProperty(tr, k, {get: () => tval(L, p)}); def(k, () => tval(L, p));
  }
  def('transform', () => tr); def('name', () => L.name); def('index', () => L.index);
  f.effect = (k) => fxGroup(L)(k);
  f.toWorld = (p) => world(L, p); f.toComp = f.toWorld;
  f.content = (gname) => {
    const gi = L.vectors.findIndex((g) => g.name === gname);
    if (gi < 0) throw new Error('content group not found: ' + gname);
    return {content: (iname) => {
      const ii = L.vectors[gi].items.findIndex((i) => i.name === iname);
      if (ii < 0) throw new Error('content item not found: ' + iname);
      const it = L.vectors[gi].items[ii], prop = it.type.endsWith('Rect') ? 'ADBE Vector Rect Size' : 'ADBE Vector Ellipse Size';
      return {get size() { return vval(L, gi, ii, prop); }};
    }};
  };
  return (L._obj = f);
}
function compObj(C) {
  return {name: C.name, width: C.w, height: C.h, layer(k) {
    const L = typeof k === 'number' ? C.layers[k - 1] : C.byName[k];
    if (!L) throw new Error(`layer not found: ${k} in ${C.name}`);
    return layerObj(L);
  }};
}

function run(code, L, value) {
  const scope = Object.assign(Object.create(null), BUILTINS, {
    thisComp: compObj(L.comp), thisLayer: layerObj(L), value, time: 0,
    comp: (n) => { if (!comps[n]) throw new Error('comp not found: ' + n); return compObj(comps[n]); },
    thisProperty: {value},
  });
  const me = layerObj(L);
  for (const k of ['transform', 'effect', 'content', 'position', 'anchorPoint', 'scale', 'rotation', 'opacity', 'toWorld', 'name', 'index'])
    Object.defineProperty(scope, k, {get: () => me[k], configurable: true, enumerable: true});
  const proxy = new Proxy(scope, {
    has: (t, k) => typeof k === 'string' && k in t,
    get: (t, k) => (k === Symbol.unscopables ? undefined : t[k]),
    set: (t, k, v) => { t[k] = v; return true; },
  });
  return runner(proxy, __op, __neg, compile(code));
}

// ------------------------------------------------------------ evaluate every property that has an expression
const clean = (v) => (isA(v) ? v.map((x) => (Number.isFinite(x) ? x : null)) : Number.isFinite(v) ? v : null);
for (const C of rig.comps) for (const L of C.layers) {
  for (const p of Object.keys(L.exprs || {})) {
    const v = clean(tval(L, p));
    if (v === null || (isA(v) && v.includes(null))) { err(`${C.name}/${L.name} ${p}: non-finite result`); continue; }
    (OUT.layers[L.var] = OUT.layers[L.var] || {})[p] = v;
  }
  L.vectors.forEach((g, gi) => g.items.forEach((it, ii) => {
    for (const p of Object.keys(it.exprs || {})) {
      const v = clean(vval(L, gi, ii, p));
      if (v === null || (isA(v) && v.includes(null))) { err(`${C.name}/${L.name} ${p}: non-finite result`); continue; }
      ((OUT.vectors[L.var] = OUT.vectors[L.var] || {})[`${gi}.${ii}`] = OUT.vectors[L.var][`${gi}.${ii}`] || {})[p] = v;
    }
  }));
}
fs.writeFileSync(process.argv[3], JSON.stringify(OUT));
console.log(`evaluated: ${Object.keys(OUT.layers).length} layers, ${Object.keys(OUT.vectors).length} shape layers, ${OUT.errors.length} errors`);
OUT.errors.slice(0, 12).forEach((e) => console.log('  ERR', e));
