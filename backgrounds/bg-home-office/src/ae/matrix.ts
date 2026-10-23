import type { Transform } from './types';

/** 2D affine matrix [a, b, c, d, e, f] — same layout as CSS/SVG `matrix()`. */
export type Mat = readonly [number, number, number, number, number, number];

export const IDENTITY: Mat = [1, 0, 0, 1, 0, 0];

/** m · n  (n is applied first). */
export const mul = (m: Mat, n: Mat): Mat => [
  m[0] * n[0] + m[2] * n[1],
  m[1] * n[0] + m[3] * n[1],
  m[0] * n[2] + m[2] * n[3],
  m[1] * n[2] + m[3] * n[3],
  m[0] * n[4] + m[2] * n[5] + m[4],
  m[1] * n[4] + m[3] * n[5] + m[5],
];

export const translate = (x: number, y: number): Mat => [1, 0, 0, 1, x, y];
export const scale = (sx: number, sy: number): Mat => [sx, 0, 0, sy, 0, 0];
export const rotate = (deg: number): Mat => {
  const r = (deg * Math.PI) / 180;
  const c = Math.cos(r);
  const s = Math.sin(r);
  return [c, s, -s, c, 0, 0];
};

/**
 * After Effects layer / group transform:
 *   M = T(position) · R(rotation) · S(scale) · T(-anchor)
 */
export const fromTransform = (t: Transform): Mat =>
  mul(
    mul(mul(translate(t.position[0], t.position[1]), rotate(t.rotation)), scale(t.scale[0] / 100, t.scale[1] / 100)),
    translate(-t.anchor[0], -t.anchor[1]),
  );

const r6 = (n: number) => String(Math.round(n * 1e6) / 1e6 + 0);

/** Valid for both the CSS `transform` property and the SVG `transform` attribute. */
export const toMatrixString = (m: Mat): string => `matrix(${m.map(r6).join(',')})`;
