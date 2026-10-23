import fs from 'node:fs';
import { Runtime } from '../src/engine/runtime';
const scene = JSON.parse(fs.readFileSync('public/scene.json', 'utf8'));
const rt = new Runtime(scene);
const main = scene.comps[scene.main];
const t = +(process.argv[2] ?? 1.0);
rt.setTime(t);
const names = ['C_HAND L','C_BODY','C_HIPS','C_FEET L','Ctrl Limbs','UPPER ARM L','FOREARM L','HAND L','UPPER ARM R','FOREARM R','HAND R','BODY 1','HIPS','THIGH L','CLAF L','FEET L2','Face Shape','NECK'];
const f = (v: any) => Array.isArray(v) ? '[' + v.map((x: number) => +x.toFixed(2)).join(',') + ']' : +(+v).toFixed(2);
for (const n of names) {
  const L = main.layers.find((l: any) => l.name === n);
  console.log(n.padEnd(12), 'pos', f(rt.tf(L, 'position')), 'anc', f(rt.tf(L, 'anchor')), 'scl', f(rt.tf(L, 'scale')), 'rot', f(rt.tf(L, 'rotation')));
}
const lim = main.layers.find((l: any) => l.name === 'Ctrl Limbs');
console.log('Limbs params', [2,3,4,5,8,9,10,11,14,18,24,25].map(i => i + '=' + f(rt.evalProp(rt.effectParam(lim.fx[0], i).__nodeHack ?? lim.fx[0].c.find((c:any)=>c.mn.endsWith(String(i).padStart(4,'0'))) ?? { mn:'x', id:-1, v:0 }))).join(' '));
console.log('errors', [...rt.errors].slice(0, 15));
