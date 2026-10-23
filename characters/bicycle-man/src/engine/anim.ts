// Interpolasi keyframe ala After Effects (temporal bezier speed/influence + spatial tangent).
const HOLD = 6614, LINEAR = 6612;

type V = number | number[];
const isArr = Array.isArray;

function cubic(p0: number, p1: number, p2: number, p3: number, s: number) {
  const m = 1 - s;
  return m * m * m * p0 + 3 * m * m * s * p1 + 3 * m * s * s * p2 + s * s * s * p3;
}

/** Selesaikan x(s)=tau pada bezier temporal lalu kembalikan y(s). */
function temporalBezier(dt: number, tau: number, va: number, vb: number, sOut: number, iOut: number, sIn: number, iIn: number) {
  const x1 = (iOut / 100) * dt, x2 = dt - (iIn / 100) * dt;
  const y1 = va + sOut * x1, y2 = vb - sIn * (dt - x2);
  let lo = 0, hi = 1, s = tau / dt;
  for (let i = 0; i < 40; i++) {
    const x = cubic(0, x1, x2, dt, s);
    if (Math.abs(x - tau) < 1e-7) break;
    if (x < tau) lo = s; else hi = s;
    s = (lo + hi) / 2;
  }
  return cubic(va, y1, y2, vb, s);
}

function pathLenTable(a: number[], b: number[], so: number[], si: number[]) {
  const N = 40, pts: number[][] = [], cum = [0];
  for (let i = 0; i <= N; i++) {
    const s = i / N;
    pts.push(a.map((_, d) => cubic(a[d], a[d] + (so[d] || 0), b[d] + (si[d] || 0), b[d], s)));
  }
  for (let i = 1; i <= N; i++) cum.push(cum[i - 1] + Math.hypot(...pts[i].map((v, d) => v - pts[i - 1][d])));
  return { pts, cum, N };
}

export function keyValue(node: any, t: number): V {
  const ks = node.k as any[];
  if (t <= ks[0].t) return ks[0].v;
  const last = ks[ks.length - 1];
  if (t >= last.t) return last.v;
  let i = 0;
  while (i < ks.length - 2 && ks[i + 1].t <= t) i++;
  const a = ks[i], b = ks[i + 1], dt = b.t - a.t, tau = t - a.t;
  if (a.io === HOLD) return a.v;
  const linear = a.io === LINEAR && b.ii === LINEAR || (!a.eo && !b.ei);
  const A = a.v, B = b.v;

  // ---- properti spasial (position) dengan tangen
  if (isArr(A) && a.so && b.si && node.mn === 'ADBE Position') {
    const { pts, cum, N } = pathLenTable(A as number[], B as number[], a.so, b.si);
    const L = cum[N];
    let sDist: number;
    if (linear || L < 1e-9 || !a.eo || !b.ei) sDist = (tau / dt) * L;
    else sDist = temporalBezier(dt, tau, 0, L, a.eo[0][0], a.eo[0][1], b.ei[0][0], b.ei[0][1]);
    sDist = Math.min(Math.max(sDist, 0), L);
    let j = 1; while (j < N && cum[j] < sDist) j++;
    const f = (sDist - cum[j - 1]) / Math.max(cum[j] - cum[j - 1], 1e-12);
    return pts[j - 1].map((v, d) => v + (pts[j][d] - v) * f);
  }
  // ---- skalar / vektor biasa
  const dim = (d: number, va: number, vb: number) => {
    if (linear) return va + (vb - va) * (tau / dt);
    const eo = a.eo?.[d] ?? a.eo?.[0], ei = b.ei?.[d] ?? b.ei?.[0];
    if (!eo || !ei) return va + (vb - va) * (tau / dt);
    return temporalBezier(dt, tau, va, vb, eo[0], eo[1], ei[0], ei[1]);
  };
  if (isArr(A)) return (A as number[]).map((va, d) => dim(d, va, (B as number[])[d]));
  if (typeof A === 'number') return dim(0, A, B as number);
  return A; // shape/objek: tahan (tidak ada morph pada file ini)
}

export function baseValue(node: any, t: number): any {
  if (node.k && node.k.length) return keyValue(node, t);
  return node.v;
}
