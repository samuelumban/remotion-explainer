// Geometri shape-layer AE -> kurva bezier kanonik -> atribut `d` SVG
import { Mat, mul, trans, rot, scl, apply } from './runtime';

export type Geom = { v: number[][]; i: number[][]; o: number[][]; closed: boolean; trim?: { s: number; e: number; off: number } };
const K = 0.5522847498;

export function rectGeom(size: number[], pos: number[], round: number): Geom {
  const [w, h] = size, [px, py] = pos, x0 = px - w / 2, x1 = px + w / 2, y0 = py - h / 2, y1 = py + h / 2;
  const r = Math.max(0, Math.min(round, Math.abs(w) / 2, Math.abs(h) / 2));
  const Z = [0, 0];
  if (r < 1e-6) return { v: [[x1, y0], [x1, y1], [x0, y1], [x0, y0]], i: [Z, Z, Z, Z], o: [Z, Z, Z, Z], closed: true };
  const q = r * K;
  return {
    v: [[x1 - r, y0], [x1, y0 + r], [x1, y1 - r], [x1 - r, y1], [x0 + r, y1], [x0, y1 - r], [x0, y0 + r], [x0 + r, y0]],
    o: [[q, 0], Z, [0, q], Z, [-q, 0], Z, [0, -q], Z],
    i: [Z, [0, -q], Z, [q, 0], Z, [0, q], Z, [-q, 0]],
    closed: true,
  };
}
export function ellipseGeom(size: number[], pos: number[]): Geom {
  const [w, h] = size, [px, py] = pos, rx = w / 2, ry = h / 2;
  return {
    v: [[px, py - ry], [px + rx, py], [px, py + ry], [px - rx, py]],
    i: [[-rx * K, 0], [0, -ry * K], [rx * K, 0], [0, ry * K]],
    o: [[rx * K, 0], [0, ry * K], [-rx * K, 0], [0, -ry * K]], closed: true,
  };
}
export function pathGeom(s: any): Geom | null {
  if (!s || !s.vertices) return null;
  const n = s.vertices.length;
  return { v: s.vertices, i: s.inTangents?.length ? s.inTangents : Array(n).fill([0, 0]), o: s.outTangents?.length ? s.outTangents : Array(n).fill([0, 0]), closed: !!s.closed };
}
export function xform(g: Geom, m: Mat): Geom {
  const lin = (t: number[]) => [m[0] * t[0] + m[2] * t[1], m[1] * t[0] + m[3] * t[1]];
  return { ...g, v: g.v.map(p => apply(m, p[0], p[1])), i: g.i.map(lin), o: g.o.map(lin) };
}
const f = (x: number) => (Math.round(x * 1000) / 1000).toString();
export function toD(g: Geom): string {
  const n = g.v.length; if (!n) return '';
  let d = `M${f(g.v[0][0])} ${f(g.v[0][1])}`;
  const seg = (a: number, b: number) => {
    const A = g.v[a], B = g.v[b], oa = g.o[a] || [0, 0], ib = g.i[b] || [0, 0];
    if (!oa[0] && !oa[1] && !ib[0] && !ib[1]) return `L${f(B[0])} ${f(B[1])}`;
    return `C${f(A[0] + oa[0])} ${f(A[1] + oa[1])} ${f(B[0] + ib[0])} ${f(B[1] + ib[1])} ${f(B[0])} ${f(B[1])}`;
  };
  for (let k = 1; k < n; k++) d += seg(k - 1, k);
  if (g.closed) { d += seg(n - 1, 0) + 'Z'; }
  return d;
}
export const groupMatrix = (anchor: number[], pos: number[], sc: number[], r: number): Mat =>
  mul(mul(mul(trans(pos[0], pos[1]), rot(r)), scl(sc[0] / 100, sc[1] / 100)), trans(-anchor[0], -anchor[1]));
export { mul, trans, rot, scl };
