// Runtime: evaluasi properti (keyframe + ekspresi AE), matriks layer, dan referensi ekspresi.
import { baseValue } from './anim';
import { PSEUDO_DEFAULTS } from '../rig.config';

export type Mat = [number, number, number, number, number, number];
export const IDENT: Mat = [1, 0, 0, 1, 0, 0];
export const mul = (m: Mat, n: Mat): Mat => [
  m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1],
  m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3],
  m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]];
export const trans = (x: number, y: number): Mat => [1, 0, 0, 1, x, y];
export const rot = (deg: number): Mat => { const r = (deg * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r); return [c, s, -s, c, 0, 0]; };
export const scl = (x: number, y: number): Mat => [x, 0, 0, y, 0, 0];
export const apply = (m: Mat, x: number, y: number) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];

const isRef = (x: any) => x && x.__isRef;
export const un = (x: any): any => (isRef(x) ? x.__val() : x);
const vec = (a: any, b: any, f: (x: number, y: number) => number): any => {
  a = un(a); b = un(b);
  if (Array.isArray(a) || Array.isArray(b)) {
    const n = Math.max(Array.isArray(a) ? a.length : 0, Array.isArray(b) ? b.length : 0);
    const g = (v: any, i: number) => (Array.isArray(v) ? (v[i] ?? 0) : v);
    return Array.from({ length: n }, (_, i) => f(g(a, i), g(b, i)));
  }
  return f(a, b);
};
const API_MATH = {
  $a: (a: any, b: any) => { a = un(a); b = un(b); return typeof a === 'string' || typeof b === 'string' ? a + b : vec(a, b, (x, y) => x + y); },
  $s: (a: any, b: any) => vec(a, b, (x, y) => x - y),
  $m: (a: any, b: any) => vec(a, b, (x, y) => x * y),
  $d: (a: any, b: any) => vec(a, b, (x, y) => x / y),
  $n: (a: any) => { a = un(a); return Array.isArray(a) ? a.map(v => -v) : -a; },
  clamp: (v: any, lo: any, hi: any) => vec(vec(v, lo, Math.max), hi, Math.min),
  length: (a: any, b?: any) => { a = un(a); if (b === undefined) return Array.isArray(a) ? Math.hypot(...a) : Math.abs(a); b = un(b); return Math.hypot(...a.map((v: number, i: number) => v - b[i])); },
  radiansToDegrees: (r: any) => (+un(r) * 180) / Math.PI,
  degreesToRadians: (d: any) => (+un(d) * Math.PI) / 180,
};
(API_MATH as any).linear = function (t: any, a: any, b: any, c?: any, d?: any) {
  t = +un(t);
  if (c === undefined) { c = a; d = b; a = 0; b = 1; }
  a = +un(a); b = +un(b); c = un(c); d = un(d);
  const k = Math.min(Math.max((t - a) / (b - a), 0), 1);
  return vec(c, d, (x, y) => x + (y - x) * k);
};
const GLOBALS: any = { Math, Array, Object, Number, String, Boolean, parseFloat, parseInt, isNaN, NaN, Infinity, JSON, undefined };

let NID = 0;
const SPATIAL = new Set(['ADBE Position', 'ADBE Anchor Point', 'ADBE Scale']);

export class Runtime {
  scene: any; t = 0;
  private cache = new Map<number, any>();
  private stack: any[] = [];
  private minHit = Infinity;
  private compiled = new Map<any, Function>();
  errors = new Map<string, string>();

  constructor(scene: any) {
    this.scene = scene;
    const walk = (n: any, parent: any, L: any) => { n.id = ++NID; n.$p = parent; n.$L = L; (n.c || []).forEach((c: any) => walk(c, n, L)); };
    for (const comp of Object.values<any>(scene.comps)) {
      comp.byName = new Map();
      for (const L of comp.layers) {
        L.$comp = comp; L.tf = {}; L.fx = []; L.masks = []; L.root = null;
        if (!comp.byName.has(L.name)) comp.byName.set(L.name, L);
        L.props.forEach((p: any) => walk(p, null, L));
        for (const p of L.props) {
          if (p.mn === 'ADBE Transform Group') for (const c of p.c || []) L.tf[c.mn] = c;
          if (p.mn === 'ADBE Effect Parade') L.fx = p.c || [];
          if (p.mn === 'ADBE Mask Parade') L.masks = p.c || [];
          if (p.mn === 'ADBE Root Vectors Group') L.root = p;
        }
      }
    }
  }
  setTime(t: number) { this.t = t; this.cache.clear(); this.stack.length = 0; this.minHit = Infinity; }
  layerOf(comp: any, i: number) { return comp.layers[i - 1]; }
  srcComp(L: any) { return this.scene.comps[L.src]; }

  // ----------------------------------------------------------------- properti
  defaultFor(node: any): any {
    const m = /^(.*)-(\d{4})$/.exec(node.mn);
    if (m && node.$p) { const eff = node.$p.n || node.$p.mn; const d = PSEUDO_DEFAULTS[eff]?.[+m[2]]; if (d !== undefined) return d; }
    return 0;
  }
  evalProp(node: any, dflt?: any): any {
    const cached = this.cache.get(node.id);
    if (cached !== undefined) return cached;
    let base = node.k?.length ? baseValue(node, this.t) : node.v;
    if (base === undefined) base = dflt !== undefined ? dflt : this.defaultFor(node);
    if (!node.x || node.off) return base;
    if (this.stack.includes(node)) { this.minHit = Math.min(this.minHit, this.stack.indexOf(node)); return base; }
    const j = this.stack.length, saved = this.minHit;
    this.minHit = Infinity; this.stack.push(node);
    let res: any;
    try { res = this.runExpr(node, base); }
    catch (e: any) { res = base; const key = `${node.$L?.name}:${node.mn}`; if (!this.errors.has(key)) this.errors.set(key, String(e && e.message)); }
    this.stack.pop();
    const tainted = this.minHit < j;
    if (!tainted) this.cache.set(node.id, res);
    this.minHit = Math.min(saved, tainted ? this.minHit : Infinity);
    return res;
  }

  // ----------------------------------------------------------------- transform layer
  defaults(L: any) {
    const comp = L.$comp;
    if (L.type === 'precomp') { const s = this.srcComp(L); return { anchor: [s.w / 2, s.h / 2, 0], position: [comp.w / 2, comp.h / 2, 0] }; }
    if (L.type === 'solid' || L.type === 'null') { const [w, h] = L.solidSize || [100, 100]; return { anchor: [w / 2, h / 2, 0], position: [comp.w / 2, comp.h / 2, 0] }; }
    return { anchor: [0, 0, 0], position: [comp.w / 2, comp.h / 2, 0] };   // shape/text: posisi default = pusat komp
  }
  tf(L: any, k: 'anchor' | 'position' | 'scale' | 'rotation' | 'opacity') {
    const mn = { anchor: 'ADBE Anchor Point', position: 'ADBE Position', scale: 'ADBE Scale', rotation: 'ADBE Rotate Z', opacity: 'ADBE Opacity' }[k];
    const d: any = { ...this.defaults(L), scale: [100, 100, 100], rotation: 0, opacity: 100 };
    const node = L.tf[mn];
    if (!node) return d[k];
    return this.evalProp(node, d[k]);
  }
  local(L: any): Mat {
    const a = this.tf(L, 'anchor'), p = this.tf(L, 'position'), s = this.tf(L, 'scale'), r = this.tf(L, 'rotation');
    return mul(mul(mul(trans(p[0], p[1]), rot(r)), scl(s[0] / 100, s[1] / 100)), trans(-a[0], -a[1]));
  }
  world(L: any): Mat {
    const m = this.local(L);
    return L.parent ? mul(this.world(this.layerOf(L.$comp, L.parent)), m) : m;
  }
  opacity(L: any) { return Math.min(Math.max(this.tf(L, 'opacity') / 100, 0), 1); }

  // ----------------------------------------------------------------- ekspresi
  private compile(node: any) {
    let f = this.compiled.get(node);
    if (!f) { f = new Function('$env', `with($env){ return (function(){ ${node.x}\n })(); }`); this.compiled.set(node, f); }
    return f;
  }
  private runExpr(node: any, base: any) {
    const L = node.$L, rt = this;
    const local: any = Object.create(null);
    const lref = this.layerRef(L);
    const api: any = {
      ...GLOBALS, ...API_MATH, value: base, time: this.t, thisLayer: lref, thisComp: this.compRef(L.$comp),
      thisProperty: this.propRef(node), transform: lref.transform, effect: lref.effect, content: lref.content,
      comp: (n: string) => rt.compRef(rt.scene.comps[un(n)] || rt.scene.comps[String(un(n)).replace(/^name:/, '')]),
      position: lref.position, anchorPoint: lref.anchorPoint, scale: lref.scale, rotation: lref.rotation, opacity: lref.opacity,
    };
    const env = new Proxy(local, {
      has: (_t, k) => typeof k === 'string',
      get: (t, k: any) => (k === Symbol.unscopables ? undefined : k in t ? t[k] : api[k]),
      set: (t, k: any, v) => { t[k] = v; return true; },
    });
    const out = this.compile(node)(env);
    return this.clean(un(out), node);
  }
  private clean(v: any, node: any) {
    if (Array.isArray(v)) v = v.map(un);
    if (typeof v === 'number' && !isFinite(v)) throw new Error('NaN/Infinity');
    if (Array.isArray(v) && v.some(x => typeof x === 'number' && !isFinite(x))) throw new Error('NaN/Infinity');
    return v;
  }

  // ----------------------------------------------------------------- referensi (Proxy callable)
  mk(kind: string, getVal: () => any, call: (a: any[]) => any, members: (k: string) => any) {
    const fn: any = function () {};
    return new Proxy(fn, {
      apply: (_t, _this, args) => call(args.map(un)),
      get: (_t, k: any) => {
        if (k === '__isRef') return true;
        if (k === '__val') return getVal;
        if (k === Symbol.toPrimitive) return () => { const v = getVal(); return Array.isArray(v) ? v.join(',') : v; };
        if (k === 'valueOf') return () => getVal();
        if (k === 'toString') return () => String(getVal());
        if (typeof k === 'string' && /^\d+$/.test(k)) return getVal()[+k];
        if (k === 'length') { const v = getVal(); return Array.isArray(v) ? v.length : 1; }
        return members(k);
      },
    });
  }
  propRef(node: any): any {
    const rt = this;
    const val = () => { let v = rt.evalProp(node, undefined); if (SPATIAL.has(node.mn) && Array.isArray(v) && v.length === 3) v = v.slice(0, 2); return v; };
    const child = (a: any) => rt.childRef(node, a);
    return this.mk('prop', val, args => child(args[0]), k => {
      if (k === 'value') return val();
      if (k === 'active') return true;
      if (k === 'name') return node.n || node.mn;
      if (k === 'size') { const c = (node.c || []).find((x: any) => /Size$/.test(x.mn)); return c ? rt.propRef(c) : undefined; }
      return undefined;
    });
  }
  childRef(node: any, a: any) {
    const kids: any[] = node.c || [];
    if (typeof a === 'number') {
      if (node.$isEffect) { /* indeks parameter efek = sufiks */ return this.effectParam(node, a); }
      const k = kids[a - 1]; if (!k) throw new Error('property idx ' + a); return this.propRef(k);
    }
    let k = kids.find(x => x.mn === a) || kids.find(x => x.n === a);
    if (!k && (a === 'Slider' || a === 'Angle' || a === 'Checkbox')) return this.effectParam(node, 1);
    const sfx = typeof a === 'string' ? /-(\d{4})$/.exec(a) : null;   // parameter efek yang belum pernah di-set -> default
    if (!k && sfx) return this.effectParam(node, +sfx[1]);
    if (!k) throw new Error('property ' + a);
    return this.propRef(k);
  }
  effectParam(eff: any, idx: number) {
    const suffix = String(idx).padStart(4, '0');
    let k = (eff.c || []).find((x: any) => x.mn.endsWith('-' + suffix));
    if (!k) { k = { mn: `${eff.mn}-${suffix}`, id: -(++NID), $p: eff, $L: eff.$L, c: [] }; (eff.c ||= []).push(k); }
    return this.propRef(k);
  }
  layerRef(L: any): any {
    const rt = this;
    const T = (mn: string) => L.tf[mn] ? rt.propRefDefault(L, mn) : rt.propRefDefault(L, mn);
    const tfObj: any = {};
    const names: any = { position: 'ADBE Position', anchorPoint: 'ADBE Anchor Point', scale: 'ADBE Scale', rotation: 'ADBE Rotate Z', opacity: 'ADBE Opacity' };
    for (const [k, mn] of Object.entries<string>(names)) Object.defineProperty(tfObj, k, { get: () => T(mn), enumerable: true });
    const effect = (n: any) => {
      n = un(n);
      const fx = typeof n === 'number' ? L.fx[n - 1] : L.fx.find((e: any) => (e.n || e.mn) === n || e.mn === n);
      if (!fx) throw new Error('effect ' + n);
      fx.$isEffect = true;
      return rt.propRef(fx);
    };
    const find = (list: any[], n: any) => list.find(x => (x.n || x.mn) === n || x.mn === n);
    const content = (n: any) => {
      let cur: any = L.root; if (!cur) throw new Error('no contents');
      const hit = find(cur.c || [], un(n)); if (!hit) throw new Error('content ' + n);
      return rt.contentRef(hit);
    };
    const generic = (a: any[]) => {
      const n = a[0];
      if (n === 'ADBE Effect Parade') return rt.groupRef(L.props.find((p: any) => p.mn === n), true);
      if (n === 'ADBE Transform Group') return rt.groupRef(L.props.find((p: any) => p.mn === n), false, L);
      const g = L.props.find((p: any) => p.mn === n || p.n === n);
      if (!g) throw new Error('layer prop ' + n);
      return rt.groupRef(g, false, L);
    };
    return this.mk('layer', () => 0, generic, k => {
      if (k === 'transform') return tfObj;
      if (k in names) return T(names[k]);
      if (k === 'effect') return effect;
      if (k === 'content') return content;
      if (k === 'name') return L.name;
      if (k === 'index') return L.i;
      if (k === 'toWorld' || k === 'toComp') return (p: any) => { p = un(p); const m = rt.world(L); const r = apply(m, p[0], p[1]); return p.length > 2 ? [...r, p[2]] : r; };
      if (k === 'fromWorld' || k === 'fromComp') return (p: any) => { p = un(p); const m = rt.world(L); const det = m[0] * m[3] - m[1] * m[2]; const x = p[0] - m[4], y = p[1] - m[5]; return [(m[3] * x - m[2] * y) / det, (-m[1] * x + m[0] * y) / det]; };
      if (k === 'width') return L.type === 'precomp' ? rt.srcComp(L).w : (L.solidSize?.[0] ?? 100);
      if (k === 'height') return L.type === 'precomp' ? rt.srcComp(L).h : (L.solidSize?.[1] ?? 100);
      if (k === 'active' || k === 'enabled') return L.enabled;
      return undefined;
    });
  }
  /** referensi properti transform dengan default AE bila tidak pernah di-set */
  propRefDefault(L: any, mn: string) {
    const rt = this;
    const key = ({ 'ADBE Position': 'position', 'ADBE Anchor Point': 'anchor', 'ADBE Scale': 'scale', 'ADBE Rotate Z': 'rotation', 'ADBE Opacity': 'opacity' } as any)[mn];
    const val = () => { let v = rt.tf(L, key); if (Array.isArray(v) && v.length === 3) v = v.slice(0, 2); return v; };
    return this.mk('prop', val, () => { throw new Error('no child'); }, k => (k === 'value' ? val() : k === 'active' ? true : undefined));
  }
  groupRef(node: any, isEffects: boolean, L?: any): any {
    const rt = this;
    const call = (a: any[]) => {
      const n = a[0];
      let k: any;
      if (typeof n === 'number') k = (node.c || [])[n - 1];
      else k = (node.c || []).find((x: any) => x.mn === n || x.n === n);
      if (!k && L && node.mn === 'ADBE Transform Group') return rt.propRefDefault(L, n);
      if (!k) throw new Error('group child ' + n);
      if (isEffects) k.$isEffect = true;
      return rt.propRef(k);
    };
    return this.mk('group', () => 0, call, () => undefined);
  }
  contentRef(node: any): any {
    const rt = this;
    return this.mk('content', () => 0, a => { const n = a[0]; const inner = node.mn === 'ADBE Vector Group' ? node.c[1] : node; const hit = (inner.c || []).find((x: any) => (x.n || x.mn) === n || x.mn === n); if (!hit) throw new Error('content ' + n); return rt.contentRef(hit); }, k => {
      if (k === 'content') return (n: any) => { const inner = node.mn === 'ADBE Vector Group' ? node.c[1] : node; const hit = (inner.c || []).find((x: any) => (x.n || x.mn) === un(n)); if (!hit) throw new Error('content ' + n); return rt.contentRef(hit); };
      if (k === 'size') { const c = (node.c || []).find((x: any) => /Size$/.test(x.mn)); return c ? rt.propRef(c) : undefined; }
      return undefined;
    });
  }
  compRef(comp: any): any {
    const rt = this;
    return this.mk('comp', () => 0, () => 0, k => {
      if (k === 'layer') return (n: any) => {
        n = un(n);
        const L = typeof n === 'number' ? comp.layers[n - 1] : comp.byName.get(n);
        if (!L) throw new Error('layer ' + n);
        return rt.layerRef(L);
      };
      if (k === 'width') return comp.w; if (k === 'height') return comp.h; if (k === 'duration') return comp.dur;
      return undefined;
    });
  }
}
