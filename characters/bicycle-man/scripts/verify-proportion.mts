import fs from 'node:fs';
import { Runtime, apply } from '../src/engine/runtime';
import { PROPORTION_GUARD as G } from '../src/rig.config';
const scene = JSON.parse(fs.readFileSync('public/scene.json', 'utf8'));
const rt = new Runtime(scene);
const main = scene.comps[scene.main], by = (n: string) => main.layers.find((l: any) => l.name === n);
const lim = by('Ctrl Limbs').fx[0];
const W = (i: number) => rt.evalProp(rt.effectParam(lim, i).__node ?? lim.c.find((c: any) => c.mn.endsWith(String(i).padStart(4, '0'))));
let fail = 0;
for (const t of [0, 1, 2.5, 7.3, 12]) {
  rt.setTime(t);
  const forearmW = W(8), forearmLen = W(2), torsoH = W(4), torsoW = W(10);
  const hs = rt.tf(by('HAND L'), 'scale')[0] / 100;
  const hand = scene.comps['Hand L'].layers.find((l: any) => l.name === 'Hand');        // siluet tangan
  const rect = hand.props[0].c[0].c[1].c[0];                                             // Rectangle Path 1
  const size = rect.c.find((c: any) => c.mn === 'ADBE Vector Rect Size').v;
  const hsc = hand.props.find((p: any) => p.mn === 'ADBE Transform Group').c.find((c: any) => c.mn === 'ADBE Scale').v[0] / 100;
  const handW = size[0] * hsc * hs, handH = size[1] * hsc * hs;
  const r1 = handW / forearmW, r2 = handH / forearmLen, r3 = handH / torsoH;
  const ok = (v: number, [a, b]: number[]) => v >= a && v <= b;
  const good = ok(r1, G.handWidthToForearmWidth) && ok(r2, G.handHeightToForearmLength) && ok(r3, G.handHeightToTorso);
  if (!good) fail++;
  // IK: ujung lengan (HAND L) harus jatuh di controller C_HAND L
  const hl = by('HAND L'), a = rt.tf(hl, 'anchor'), p = apply(rt.world(hl), a[0], a[1]);
  const c = rt.tf(by('C_HAND L'), 'position'), pc = apply(rt.world(by('C_HAND L')), 0, 0);
  const ikErr = Math.hypot(p[0] - pc[0], p[1] - pc[1]);
  console.log(`t=${t}s  hand ${handW.toFixed(1)}x${handH.toFixed(1)}px (scale ${hs * 100}%)  forearm ${forearmW}x${forearmLen}  torso ${torsoW}x${torsoH}` +
    `  | W/forearmW=${r1.toFixed(2)} H/forearmLen=${r2.toFixed(2)} H/torsoH=${r3.toFixed(2)} ${good ? 'OK' : 'LUAR BATAS'}  | IK err=${ikErr.toFixed(2)}px`);
}
process.exit(fail ? 1 : 0);
