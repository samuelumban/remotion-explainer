// Renderer: scene graph AE -> SVG (React). Satu pohon per frame, deterministik (aman untuk Remotion).
import React from 'react';
import { Runtime, Mat, mul, trans, rot, scl, IDENT } from './runtime';
import { Geom, rectGeom, ellipseGeom, pathGeom, xform, toD, groupMatrix } from './shapes';

const h = React.createElement;
const NO_MATTE = 5012, ALPHA = 5013, ALPHA_INV = 5014;
const MASK_NONE = 6812, MASK_ADD = 6813, MASK_SUB = 6814;
const BIG = 60000;

type Ctx = { rt: Runtime; defs: React.ReactNode[]; n: number; memo: Map<string, string>; matteColor: string | null };
const mstr = (m: Mat) => `matrix(${m.map(v => Math.round(v * 10000) / 10000).join(' ')})`;
const col = (c: number[], ctx: Ctx) => ctx.matteColor ?? `rgb(${Math.round(c[0] * 255)},${Math.round(c[1] * 255)},${Math.round(c[2] * 255)})`;
const kid = (n: any, mn: string) => (n.c || []).find((x: any) => x.mn === mn);
const val = (ctx: Ctx, n: any, mn: string, d: any) => { const k = n && kid(n, mn); return k ? ctx.rt.evalProp(k, d) : d; };
const uid = (ctx: Ctx, p: string) => `${p}${++ctx.n}`;

// ------------------------------------------------------------------------- shape contents
type Op = { k: 'group'; node: any } | { k: 'paint'; node: any; paths: Geom[] } | { k: 'repeat'; ms: Mat[]; ops: Op[] };

function renderContainer(ctx: Ctx, items: any[]): React.ReactNode[] {
  const rt = ctx.rt;
  let ops: Op[] = []; let paths: Geom[] = [];
  for (const it of items) {
    if (it.off) continue;
    switch (it.mn) {
      case 'ADBE Vector Group': ops.push({ k: 'group', node: it }); break;
      case 'ADBE Vector Shape - Rect': paths.push(rectGeom(val(ctx, it, 'ADBE Vector Rect Size', [100, 100]), val(ctx, it, 'ADBE Vector Rect Position', [0, 0]), val(ctx, it, 'ADBE Vector Rect Roundness', 0))); break;
      case 'ADBE Vector Shape - Ellipse': paths.push(ellipseGeom(val(ctx, it, 'ADBE Vector Ellipse Size', [100, 100]), val(ctx, it, 'ADBE Vector Ellipse Position', [0, 0]))); break;
      case 'ADBE Vector Shape - Group': { const g = pathGeom(val(ctx, it, 'ADBE Vector Shape', null)); if (g) paths.push(g); break; }
      case 'ADBE Vector Graphic - Fill': case 'ADBE Vector Graphic - Stroke': ops.push({ k: 'paint', node: it, paths: [...paths] }); break;
      case 'ADBE Vector Filter - Trim': {
        const s = val(ctx, it, 'ADBE Vector Trim Start', 0), e = val(ctx, it, 'ADBE Vector Trim End', 100), off = val(ctx, it, 'ADBE Vector Trim Offset', 0);
        paths = paths.map(g => ({ ...g, trim: { s: s / 100, e: e / 100, off: off / 360 } })); break;
      }
      case 'ADBE Vector Filter - Repeater': {
        const N = Math.max(0, Math.round(val(ctx, it, 'ADBE Vector Repeater Copies', 3)));
        const T = kid(it, 'ADBE Vector Repeater Transform') || it;
        const a = val(ctx, T, 'ADBE Vector Repeater Anchor', [0, 0]), p = val(ctx, T, 'ADBE Vector Repeater Position', [0, 0]);
        const s = val(ctx, T, 'ADBE Vector Repeater Scale', [100, 100]), r = val(ctx, T, 'ADBE Vector Repeater Rotation', 0);
        const step: Mat = mul(mul(mul(trans(p[0], p[1]), rot(r)), scl(s[0] / 100, s[1] / 100)), IDENT);
        const ms: Mat[] = []; let cur: Mat = IDENT;
        for (let k = 0; k < N; k++) { ms.push(mul(mul(trans(a[0], a[1]), cur), trans(-a[0], -a[1]))); cur = mul(cur, step); }
        ops = [{ k: 'repeat', ms, ops }];
        paths = ms.flatMap(m => paths.map(g => xform(g, m)));
        break;
      }
    }
  }
  const out: React.ReactNode[] = [];
  const emit = (list: Op[], keyp: string): React.ReactNode[] => {
    const r: React.ReactNode[] = [];
    for (let i = list.length - 1; i >= 0; i--) {           // bawah -> atas
      const op = list[i], key = `${keyp}.${i}`;
      if (op.k === 'repeat') {
        for (let k = op.ms.length - 1; k >= 0; k--) r.push(h('g', { key: `${key}r${k}`, transform: mstr(op.ms[k]) }, emit(op.ops, `${key}r${k}`)));
      } else if (op.k === 'group') {
        const g = op.node, T = g.c[2], cont = g.c[1];
        const m = groupMatrix(val(ctx, T, 'ADBE Vector Anchor', [0, 0]), val(ctx, T, 'ADBE Vector Position', [0, 0]), val(ctx, T, 'ADBE Vector Scale', [100, 100]), val(ctx, T, 'ADBE Vector Rotation', 0));
        const o = val(ctx, T, 'ADBE Vector Group Opacity', 100) / 100;
        r.push(h('g', { key, transform: mstr(m), opacity: o < 1 ? o : undefined }, renderContainer(ctx, cont.c || [])));
      } else {
        const n = op.node; if (!op.paths.length) continue;
        const isFill = n.mn === 'ADBE Vector Graphic - Fill';
        const c = val(ctx, n, isFill ? 'ADBE Vector Fill Color' : 'ADBE Vector Stroke Color', [1, 1, 1, 1]);
        const opa = val(ctx, n, isFill ? 'ADBE Vector Fill Opacity' : 'ADBE Vector Stroke Opacity', 100) / 100;
        if (isFill) {
          r.push(h('path', { key, d: op.paths.map(toD).join(''), fill: col(c, ctx), fillOpacity: opa < 1 ? opa : undefined, fillRule: val(ctx, n, 'ADBE Vector Fill Rule', 1) === 2 ? 'evenodd' : 'nonzero' }));
        } else {
          const w = val(ctx, n, 'ADBE Vector Stroke Width', 2);
          const cap = ['butt', 'butt', 'round', 'square'][val(ctx, n, 'ADBE Vector Stroke Line Cap', 1)] || 'butt';
          const join = ['miter', 'miter', 'round', 'bevel'][val(ctx, n, 'ADBE Vector Stroke Line Join', 1)] || 'miter';
          const dn = kid(n, 'ADBE Vector Stroke Dashes'); let dash: string | undefined;
          if (dn) { const d1 = val(ctx, dn, 'ADBE Vector Stroke Dash 1', 0); const g1 = val(ctx, dn, 'ADBE Vector Stroke Gap 1', d1); if (d1 > 0) dash = `${d1} ${g1}`; }
          const base: any = { fill: 'none', stroke: col(c, ctx), strokeOpacity: opa < 1 ? opa : undefined, strokeWidth: w, strokeLinecap: cap, strokeLinejoin: join, strokeDasharray: dash };
          const trimmed = op.paths.filter(g => g.trim), plain = op.paths.filter(g => !g.trim);
          if (plain.length) r.push(h('path', { key, d: plain.map(toD).join(''), ...base }));
          trimmed.forEach((g, q) => {
            const t = g.trim!, len = Math.max((t.e - t.s) * 1000, 0);
            r.push(h('path', { key: `${key}t${q}`, d: toD(g), pathLength: 1000, ...base, strokeDasharray: `${len} ${2000}`, strokeDashoffset: -(t.s + t.off) * 1000 }));
          });
        }
      }
    }
    return r;
  };
  return emit(ops, 'o');
}

// ------------------------------------------------------------------------- mask layer
function expandGeom(g: Geom, e: number): Geom {
  if (!e || g.v.length !== 4) return g;
  const xs = g.v.map(p => p[0]), ys = g.v.map(p => p[1]);
  const x0 = Math.min(...xs) - e, x1 = Math.max(...xs) + e, y0 = Math.min(...ys) - e, y1 = Math.max(...ys) + e;
  if (x1 <= x0 || y1 <= y0) return { ...g, v: [[0, 0], [0, 0], [0, 0], [0, 0]] };
  return { v: [[x1, y0], [x1, y1], [x0, y1], [x0, y0]], i: g.i, o: g.o, closed: true };
}
function layerMask(ctx: Ctx, L: any): string | null {
  const atoms = (L.masks || []).filter((a: any) => (a.mm ?? MASK_ADD) !== MASK_NONE);
  if (!atoms.length) return null;
  const id = uid(ctx, 'lm');
  const bg = (atoms[0].mm ?? MASK_ADD) === MASK_SUB ? '#fff' : '#000';
  const ps = atoms.map((a: any, q: number) => {
    const g = pathGeom(val(ctx, a, 'ADBE Mask Shape', null)); if (!g) return null;
    const e = val(ctx, a, 'ADBE Mask Offset', 0);
    return h('path', { key: q, d: toD(expandGeom(g, e)), fill: (a.mm ?? MASK_ADD) === MASK_SUB ? '#000' : '#fff' });
  });
  ctx.defs.push(h('mask', { key: id, id, maskUnits: 'userSpaceOnUse', x: -BIG, y: -BIG, width: BIG * 2, height: BIG * 2 }, h('rect', { x: -BIG, y: -BIG, width: BIG * 2, height: BIG * 2, fill: bg }), ps));
  return id;
}
function layerFilter(ctx: Ctx, L: any, w: number, hh: number): string | null {
  const fx = (L.fx || []).find((e: any) => e.mn === 'ADBE Pro Levels2' && !e.off);
  if (!fx) return null;
  const gamma = val(ctx, fx, 'ADBE Pro Levels2-0006', 1);           // Levels (Individual) — gamma; <1 = lebih gelap
  if (!gamma || Math.abs(gamma - 1) < 1e-4) return null;
  const id = uid(ctx, 'fx'), ex = 1 / gamma;
  ctx.defs.push(h('filter', { key: id, id, filterUnits: 'userSpaceOnUse', x: 0, y: 0, width: w, height: hh, colorInterpolationFilters: 'sRGB' },
    h('feComponentTransfer', null, ['R', 'G', 'B'].map(c => h(`feFunc${c}`, { key: c, type: 'gamma', amplitude: 1, exponent: ex, offset: 0 })))));
  return id;
}

// ------------------------------------------------------------------------- layer & comp
function compUse(ctx: Ctx, name: string): React.ReactNode {
  if (ctx.matteColor) return h('g', null, renderComp(ctx, ctx.rt.scene.comps[name]));
  let id = ctx.memo.get(name);
  if (!id) {
    id = 'c' + ctx.memo.size + '_' + name.replace(/[^A-Za-z0-9]/g, '');
    ctx.memo.set(name, id);
    const content = renderComp(ctx, ctx.rt.scene.comps[name]);
    ctx.defs.push(h('g', { key: id, id }, content));
  }
  return h('use', { href: '#' + id });
}
function renderLayer(ctx: Ctx, comp: any, L: any, asMatte = false): React.ReactNode {
  const rt = ctx.rt;
  let content: React.ReactNode, w = 0, hh = 0;
  if (L.type === 'shape') { if (!L.root) return null; content = renderContainer(ctx, L.root.c || []); }
  else if (L.type === 'precomp') { const s = rt.scene.comps[L.src]; w = s.w; hh = s.h; content = compUse(ctx, L.src); }
  else return null;

  if (L.type === 'precomp' && !L.collapse) {
    const id = uid(ctx, 'cl');
    ctx.defs.push(h('clipPath', { key: id, id }, h('rect', { x: 0, y: 0, width: w, height: hh })));
    content = h('g', { clipPath: `url(#${id})` }, content);
  }
  const mk = layerMask(ctx, L);
  if (mk) content = h('g', { mask: `url(#${mk})` }, content);
  const fid = L.type === 'precomp' ? layerFilter(ctx, L, w, hh) : null;
  const op = rt.opacity(L);
  let node: React.ReactNode = h('g', { key: L.i, transform: mstr(rt.world(L)), opacity: op < 1 ? op : undefined, filter: fid ? `url(#${fid})` : undefined }, content);

  if (!asMatte && L.matte && L.matte !== NO_MATTE && L.i > 1) {
    const M = comp.layers[L.i - 2];
    const id = uid(ctx, 'mt');
    const inv = L.matte === ALPHA_INV;
    const saved = ctx.matteColor; ctx.matteColor = inv ? '#000' : '#fff';
    const mnode = renderLayer(ctx, comp, M, true);
    ctx.matteColor = saved;
    ctx.defs.push(h('mask', { key: id, id, maskUnits: 'userSpaceOnUse', x: -BIG, y: -BIG, width: BIG * 2, height: BIG * 2 },
      inv ? h('rect', { x: -BIG, y: -BIG, width: BIG * 2, height: BIG * 2, fill: '#fff' }) : null, mnode));
    node = h('g', { key: L.i, mask: `url(#${id})` }, node);
  }
  return node;
}
function renderComp(ctx: Ctx, comp: any): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  for (let i = comp.layers.length - 1; i >= 0; i--) {
    const L = comp.layers[i];
    if (L.guide || !L.enabled) continue;
    const n = renderLayer(ctx, comp, L);
    if (n) out.push(n);
  }
  return out;
}

export function buildSvg(rt: Runtime, timeSec: number, opts: { background?: boolean; width?: number; height?: number } = {}): React.ReactElement {
  rt.setTime(timeSec);
  const main = rt.scene.comps[rt.scene.main];
  const ctx: Ctx = { rt, defs: [], n: 0, memo: new Map(), matteColor: null };
  const body = renderComp(ctx, main);
  const bg = main.bg ? `rgb(${main.bg.map((v: number) => Math.round(v * 255)).join(',')})` : '#c2c2c2';
  return h('svg', { xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', width: opts.width ?? main.w, height: opts.height ?? main.h, viewBox: `0 0 ${main.w} ${main.h}` },
    h('defs', null, ctx.defs),
    opts.background === false ? null : h('rect', { width: main.w, height: main.h, fill: bg }),
    h('g', { id: 'scene' }, body));
}

/** Render satu komposisi saja (debug / verifikasi bagian tubuh). */
export function buildCompSvg(rt: Runtime, timeSec: number, name: string, bg = '#ddd'): React.ReactElement {
  rt.setTime(timeSec);
  const comp = rt.scene.comps[name];
  const ctx: Ctx = { rt, defs: [], n: 0, memo: new Map(), matteColor: null };
  const body = renderComp(ctx, comp);
  return h('svg', { xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', width: comp.w, height: comp.h, viewBox: `0 0 ${comp.w} ${comp.h}` },
    h('defs', null, ctx.defs), h('rect', { width: comp.w, height: comp.h, fill: bg }), h('g', null, body));
}
