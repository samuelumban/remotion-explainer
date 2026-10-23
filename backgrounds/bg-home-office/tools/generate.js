// scene.json (extracted from BGHOME_1.JSX) -> src/parts/*.tsx
const fs = require('fs');
const path = require('path');

const scene = require('./scene.json');
const OUT = path.join(__dirname, '..', 'src', 'parts');
fs.mkdirSync(OUT, { recursive: true });

/* ----------------------------------------------------------------- helpers */
const pascal = (s) => s.replace(/[^A-Za-z0-9]+/g, ' ').trim().split(' ').map((w) => w[0].toUpperCase() + w.slice(1)).join('');
const camel = (s) => pascal(s).replace(/^[A-Z]+(?=[A-Z][a-z])|^[A-Z]/, (m) => m.toLowerCase());
const num = (n) => String(n === 0 ? 0 : n);
const vec = (v) => `[${v.map(num).join(', ')}]`;
const hex = (c) => '#' + c.slice(0, 3).map((x) => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const isDefault = (v, d) => eq(v, d);

const names = new Map(scene.map((c) => [c.name, { P: pascal(c.name), v: camel(c.name) + 'Comp' }]));

/* ------------------------------------------------------------ emit shapes */
function emitOpts(pairs) {
  const parts = pairs.filter(Boolean);
  return parts.length ? `{ ${parts.join(', ')} }` : '';
}

function emitTransformOpts(t) {
  return [
    !isDefault(t.anchor, [0, 0]) && `anchor: ${vec(t.anchor)}`,
    !isDefault(t.position, [0, 0]) && `position: ${vec(t.position)}`,
    !isDefault(t.scale, [100, 100]) && `scale: ${vec(t.scale)}`,
    t.rotation !== 0 && `rotation: ${num(t.rotation)}`,
    t.opacity !== 100 && `opacity: ${num(t.opacity)}`,
  ];
}

const pathOpts = (it) => [
  it.inTangents && `inTangents: [${it.inTangents.map(vec).join(', ')}]`,
  it.outTangents && `outTangents: [${it.outTangents.map(vec).join(', ')}]`,
  it.closed === false && 'closed: false',
];

function emitItem(it, ind) {
  const dis = it.enabled === false;
  switch (it.t) {
    case 'rect':
      return `rect(${vec(it.size)}${(() => { const o = emitOpts([it.roundness && `roundness: ${num(it.roundness)}`, !isDefault(it.position, [0, 0]) && `position: ${vec(it.position)}`]); return o ? ', ' + o : ''; })()})`;
    case 'ellipse':
      return `ellipse(${vec(it.size)}${!isDefault(it.position, [0, 0]) ? `, { position: ${vec(it.position)} }` : ''})`;
    case 'path': {
      const o = emitOpts(pathOpts(it));
      return `path([${it.vertices.map(vec).join(', ')}]${o ? ', ' + o : ''})`;
    }
    case 'fill': {
      const o = emitOpts([it.opacity !== 100 && `opacity: ${num(it.opacity)}`, dis && 'enabled: false']);
      return `fill(${q(hex(it.color))}${o ? ', ' + o : ''})`;
    }
    case 'stroke': {
      const cap = { 1: null, 2: 'round', 3: 'square' }[it.cap];
      const join = { 1: null, 2: 'round', 3: 'bevel' }[it.join];
      const o = emitOpts([it.opacity !== 100 && `opacity: ${num(it.opacity)}`, cap && `cap: ${q(cap)}`, join && `join: ${q(join)}`]);
      return `stroke(${q(hex(it.color))}, ${num(it.width)}${o ? ', ' + o : ''})`;
    }
    case 'repeater': {
      const o = emitOpts([
        !isDefault(it.position, [100, 0]) && `position: ${vec(it.position)}`,
        !isDefault(it.anchor, [0, 0]) && `anchor: ${vec(it.anchor)}`,
        !isDefault(it.scale, [100, 100]) && `scale: ${vec(it.scale)}`,
        it.rotation !== 0 && `rotation: ${num(it.rotation)}`,
        it.startOpacity !== 100 && `startOpacity: ${num(it.startOpacity)}`,
        it.endOpacity !== 100 && `endOpacity: ${num(it.endOpacity)}`,
        it.name !== 'Repeater 1' && `name: ${q(it.name)}`,
      ]);
      return `repeater(${it.copies}${o ? ', ' + o : ''})`;
    }
    case 'trim': {
      const o = emitOpts([it.start !== 0 && `start: ${num(it.start)}`, it.end !== 100 && `end: ${num(it.end)}`, it.offset !== 0 && `offset: ${num(it.offset)}`]);
      return `trim(${o})`;
    }
    case 'group': {
      const o = emitOpts(emitTransformOpts(it.transform));
      const inner = emitItems(it.contents, ind + 1);
      return `group(${q(it.name)}, ${inner}${o ? ', ' + o : ''})`;
    }
  }
  throw new Error('item ' + it.t);
}

// Disabled strokes / zero-width strokes are pure AE boilerplate (no visual effect) -> omitted.
const keep = (it) => !(it.t === 'stroke' && (it.enabled === false || it.width <= 0));

function emitItems(items, ind) {
  const pad = '  '.repeat(ind + 1);
  const end = '  '.repeat(ind);
  const lines = items.filter(keep).map((it) => `${pad}${emitItem(it, ind)},`);
  return `[\n${lines.join('\n')}\n${end}]`;
}

function emitMask(m) {
  const o = emitOpts([
    ...pathOpts(m),
    m.mode === 'SUBTRACT' && "mode: 'subtract'",
    m.expansion && `expansion: ${num(m.expansion)}`,
  ]);
  return `mask(${`[${m.vertices.map(vec).join(', ')}]`}${o ? ', ' + o : ''})`;
}

function emitLayer(l, ind) {
  const pad = '  '.repeat(ind);
  const initPairs = [
    ...emitTransformOpts(l),
    l.enabled === false && 'enabled: false',
    l.parent && `parent: ${q(l.parent)}`,
    l.blend && `blend: ${q(l.blend.toLowerCase())}`,
    l.masks && `masks: [${l.masks.map(emitMask).join(', ')}]`,
    l.effects && `effects: [${l.effects.map((e) => `fillEffect(${q(hex(e.color))})`).join(', ')}]`,
    l.type === 'comp' && l.collapse && 'collapse: true',
  ];
  const init = emitOpts(initPairs);
  if (l.type === 'shape') {
    return `${pad}shapeLayer(${q(l.id)}, ${q(l.name)}, ${init || '{}'}, ${emitItems(l.contents, ind)}),`;
  }
  if (l.type === 'comp') {
    return `${pad}compLayer(${q(l.id)}, ${q(l.name)}, ${names.get(l.source).v}${init ? ', ' + init : ''}),`;
  }
  return `${pad}nullLayer(${q(l.id)}, ${q(l.name)}${init ? ', ' + init : ''}),`;
}

/* --------------------------------------------------------------- per file */
const dslNames = ['compDef', 'shapeLayer', 'compLayer', 'nullLayer', 'fillEffect', 'mask', 'rect', 'ellipse', 'path', 'fill', 'stroke', 'group', 'repeater', 'trim'];

function usedDsl(src) {
  return dslNames.filter((n) => new RegExp(`\\b${n}\\(`).test(src));
}

const partsIndex = [];

for (const c of scene) {
  const { P, v } = names.get(c.name);
  const body = c.layers.map((l) => emitLayer(l, 2)).join('\n');
  const deps = [...new Set(c.layers.filter((l) => l.type === 'comp').map((l) => l.source))];
  const core = `export const ${v} = compDef(\n  ${q(c.name)},\n  ${c.width},\n  ${c.height},\n  [\n${body}\n  ],\n  { duration: ${num(c.duration)}, fps: ${c.frameRate} },\n);\n`;
  const imports = usedDsl(core);
  const header =
    `/**\n * AE composition "${c.name}" — ${c.width}x${c.height}, ${c.frameRate} fps, ${c.layers.length} layers (listed TOP -> BOTTOM).\n` +
    ` * Auto-converted from BGHOME_1.JSX (compCode export). Layers with \`enabled: false\` were switched off in the AE project.\n */\n`;
  const src =
    header +
    `import React from 'react';\n` +
    `import { AEComp, ${imports.join(', ')} } from '../ae';\n` +
    deps.map((d) => `import { ${names.get(d).v} } from './${names.get(d).P}';\n`).join('') +
    `\n${core}\n` +
    `export const ${P}: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (\n  <AEComp comp={${v}} style={style} />\n);\n`;
  fs.writeFileSync(path.join(OUT, `${P}.tsx`), src);
  partsIndex.push({ P, v, name: c.name, w: c.width, h: c.height });
}

// barrel + registry
const barrel =
  `// Every After Effects composition of the original project, one file each.\n` +
  partsIndex.map((p) => `export { ${p.v}, ${p.P} } from './${p.P}';`).join('\n') +
  `\n\n` +
  partsIndex.map((p) => `import { ${p.v}, ${p.P} } from './${p.P}';`).join('\n') +
  `\nimport type { CompDef } from '../ae';\n\n` +
  `/** Registry used by Root.tsx to expose each part as its own Remotion composition. */\n` +
  `export const PARTS: { id: string; comp: CompDef; Component: React.FC }[] = [\n` +
  partsIndex.map((p) => `  { id: ${q(p.P)}, comp: ${p.v}, Component: ${p.P} },`).join('\n') +
  `\n];\n`;
fs.writeFileSync(path.join(OUT, 'index.ts'), barrel.replace("import type { CompDef } from '../ae';", "import type React from 'react';\nimport type { CompDef } from '../ae';"));

console.log('wrote', partsIndex.length, 'parts');
