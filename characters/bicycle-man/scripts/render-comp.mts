import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import sharp from 'sharp';
import { Runtime } from '../src/engine/runtime';
import { buildCompSvg } from '../src/engine/render';
const scene = JSON.parse(fs.readFileSync('public/scene.json', 'utf8'));
const rt = new Runtime(scene);
const names = process.argv.slice(3), t = +process.argv[2];
const tiles: any[] = [];
for (const n of names) {
  const svg = renderToStaticMarkup(buildCompSvg(rt, t, n));
  const c = scene.comps[n];
  const sc = Math.min(1, 520 / Math.max(c.w, c.h));
  const png = await sharp(Buffer.from(svg), { density: 72 * sc }).resize(Math.round(c.w * sc), Math.round(c.h * sc)).flatten({ background: '#ddd' }).png().toBuffer();
  tiles.push({ png, w: Math.round(c.w * sc), h: Math.round(c.h * sc), n });
  console.log(n, c.w + 'x' + c.h, 'errors', [...rt.errors].slice(0, 3));
}
const W = tiles.reduce((s, t) => s + t.w + 10, 0), H = Math.max(...tiles.map(t => t.h));
let x = 0;
await sharp({ create: { width: W, height: H, channels: 3, background: '#fff' } }).composite(tiles.map(t => { const o = { input: t.png, left: x, top: 0 }; x += t.w + 10; return o; })).png().toFile('/tmp/comps.png');
