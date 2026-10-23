import type { PathData, Vec2, Xf } from './types';

const n = (x: number) => String(Math.round(x * 1000) / 1000);

/** Matriks affine SVG: [a, b, c, d, e, f] */
export type Mat = [number, number, number, number, number, number];
export const IDENTITY: Mat = [1, 0, 0, 1, 0, 0];
export const mul = (m: Mat, k: Mat): Mat => [
  m[0] * k[0] + m[2] * k[1],
  m[1] * k[0] + m[3] * k[1],
  m[0] * k[2] + m[2] * k[3],
  m[1] * k[2] + m[3] * k[3],
  m[0] * k[4] + m[2] * k[5] + m[4],
  m[1] * k[4] + m[3] * k[5] + m[5],
];
export const translate = (x: number, y: number): Mat => [1, 0, 0, 1, x, y];
export const rotate = (deg: number): Mat => {
  const r = (deg * Math.PI) / 180;
  const c = Math.cos(r);
  const s = Math.sin(r);
  return [c, s, -s, c, 0, 0];
};
export const scale = (sx: number, sy: number): Mat => [sx, 0, 0, sy, 0, 0];
export const toCss = (m: Mat) => `matrix(${m.map((v) => Math.round(v * 1e6) / 1e6).join(' ')})`;

/** T(position) · R(rotation) · S(scale) · T(-anchor)  — urutan transform AE. */
export const xfMatrix = (xf: Xf | undefined): Mat => {
  const a = xf?.a ?? [0, 0];
  const p = xf?.p ?? [0, 0];
  const s = xf?.s ?? [100, 100];
  let m = translate(p[0], p[1]);
  if (xf?.r) m = mul(m, rotate(xf.r));
  m = mul(m, scale(s[0] / 100, s[1] / 100));
  return mul(m, translate(-a[0], -a[1]));
};

/** Path bezier AE -> atribut `d` SVG */
export const pathToD = (p: PathData): string => {
  const V = p.v;
  if (!V.length) return '';
  const I = p.i ?? [];
  const O = p.o ?? [];
  const seg = (a: number, b: number) => {
    const o = O[a] ?? [0, 0];
    const i = I[b] ?? [0, 0];
    if (o[0] || o[1] || i[0] || i[1]) {
      return `C${n(V[a][0] + o[0])} ${n(V[a][1] + o[1])} ${n(V[b][0] + i[0])} ${n(V[b][1] + i[1])} ${n(V[b][0])} ${n(V[b][1])}`;
    }
    return `L${n(V[b][0])} ${n(V[b][1])}`;
  };
  let d = `M${n(V[0][0])} ${n(V[0][1])}`;
  for (let k = 1; k < V.length; k++) d += seg(k - 1, k);
  if (p.c !== false) d += seg(V.length - 1, 0) + 'Z';
  return d;
};

/** Rectangle Path AE: mulai dari kanan-atas, searah jarum jam. */
export const rectToD = (size: Vec2, pos: Vec2 = [0, 0], round = 0): string => {
  const [w, h] = size;
  const R = pos[0] + w / 2;
  const L = pos[0] - w / 2;
  const T = pos[1] - h / 2;
  const B = pos[1] + h / 2;
  const r = Math.max(0, Math.min(round, w / 2, h / 2));
  if (!r) return `M${n(R)} ${n(T)}L${n(R)} ${n(B)}L${n(L)} ${n(B)}L${n(L)} ${n(T)}Z`;
  return (
    `M${n(R)} ${n(T + r)}L${n(R)} ${n(B - r)}A${n(r)} ${n(r)} 0 0 1 ${n(R - r)} ${n(B)}` +
    `L${n(L + r)} ${n(B)}A${n(r)} ${n(r)} 0 0 1 ${n(L)} ${n(B - r)}L${n(L)} ${n(T + r)}` +
    `A${n(r)} ${n(r)} 0 0 1 ${n(L + r)} ${n(T)}L${n(R - r)} ${n(T)}A${n(r)} ${n(r)} 0 0 1 ${n(R)} ${n(T + r)}Z`
  );
};

/** Ellipse Path AE: mulai dari atas, searah jarum jam. */
export const ellipseToD = (size: Vec2, pos: Vec2 = [0, 0]): string => {
  const rx = size[0] / 2;
  const ry = size[1] / 2;
  const [cx, cy] = pos;
  return `M${n(cx)} ${n(cy - ry)}A${n(rx)} ${n(ry)} 0 1 1 ${n(cx)} ${n(cy + ry)}A${n(rx)} ${n(ry)} 0 1 1 ${n(cx)} ${n(cy - ry)}Z`;
};

/** "Round Corners" untuk path poligon (segmen lurus). */
export const roundCorners = (p: PathData, radius: number): string => {
  const V = p.v;
  const closed = p.c !== false;
  const len = V.length;
  if (len < 3 || radius <= 0) return pathToD(p);
  const pts: string[] = [];
  const get = (k: number) => V[(k + len) % len];
  for (let k = 0; k < len; k++) {
    const cur = get(k);
    if (!closed && (k === 0 || k === len - 1)) {
      pts.push(`${k === 0 ? 'M' : 'L'}${n(cur[0])} ${n(cur[1])}`);
      continue;
    }
    const prev = get(k - 1);
    const next = get(k + 1);
    const u: Vec2 = [prev[0] - cur[0], prev[1] - cur[1]];
    const w: Vec2 = [next[0] - cur[0], next[1] - cur[1]];
    const lu = Math.hypot(u[0], u[1]);
    const lw = Math.hypot(w[0], w[1]);
    if (!lu || !lw) {
      pts.push(`${k === 0 ? 'M' : 'L'}${n(cur[0])} ${n(cur[1])}`);
      continue;
    }
    const uu: Vec2 = [u[0] / lu, u[1] / lu];
    const ww: Vec2 = [w[0] / lw, w[1] / lw];
    const cos = Math.max(-1, Math.min(1, uu[0] * ww[0] + uu[1] * ww[1]));
    const theta = Math.acos(cos);
    if (theta < 1e-3 || Math.abs(Math.PI - theta) < 1e-3) {
      pts.push(`${k === 0 ? 'M' : 'L'}${n(cur[0])} ${n(cur[1])}`);
      continue;
    }
    const tanHalf = Math.tan(theta / 2);
    const t = Math.min(radius / tanHalf, lu / 2, lw / 2);
    const r = t * tanHalf;
    const p1: Vec2 = [cur[0] + uu[0] * t, cur[1] + uu[1] * t];
    const p2: Vec2 = [cur[0] + ww[0] * t, cur[1] + ww[1] * t];
    const sweep = uu[0] * ww[1] - uu[1] * ww[0] > 0 ? 0 : 1;
    pts.push(`${k === 0 ? 'M' : 'L'}${n(p1[0])} ${n(p1[1])}A${n(r)} ${n(r)} 0 0 ${sweep} ${n(p2[0])} ${n(p2[1])}`);
  }
  return pts.join('') + (closed ? 'Z' : '');
};
