const fs = require('fs');
const path = require('path');
const { PROJ, data, NAMES, fmt, convertLayer, camel, pascal, slug, v2, r3, root } = require('./generate.cjs');

const out = (rel, text) => { const f = path.join(root, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, text); };
const main = data.find((c) => c.name === PROJ.main);
const partComps = data.filter((c) => c !== main);

// ---------- 1. PARTS (setiap precomp AE = satu komponen library) ----------
const partInfo = {};
for (const c of partComps) {
  const cls = pascal(c.name), id = camel(c.name) + 'Comp';
  partInfo[c.name] = { cls, id };
  const layers = c.layers.map((l) => convertLayer(l, c));
  const comp = { name: c.name, width: c.width, height: c.height, layers };
  const deps = [...new Set(c.layers.filter((l) => l.kind === 'precomp').map((l) => l.source))];
  const depImports = deps.map((d) => `import { ${camel(d)}Comp } from './${pascal(d)}';`).join('\n');
  const body =
`import type { CompData } from '../../ae';
import { makePart } from '../makePart';
${depImports}

/**
 * ${c.name} — ${c.width}×${c.height}px, ${c.layers.length} layer
 * (precomp "${c.name}" di After Effects; layer diurutkan dari ATAS ke BAWAH)
 */
export const ${id}: CompData = ${fmt(comp)};

export const ${cls} = makePart(${id});
`;
  out(`src/library/parts/${cls}.ts`, body);
}
out('src/library/parts/index.ts',
  partComps.map((c) => `export * from './${partInfo[c.name].cls}';`).join('\n') + `\n\nimport type { CompData } from '../../ae';\n` +
  partComps.map((c) => `import { ${partInfo[c.name].id} } from './${partInfo[c.name].cls}';`).join('\n') +
  `\n\n/** Registry semua part (nama comp AE → data) */\nexport const PARTS: Record<string, CompData> = {\n` +
  partComps.map((c) => `  '${c.name}': ${partInfo[c.name].id},`).join('\n') + `\n};\n`);

// ---------- 2. SCENERY (shape layer milik comp utama) ----------
const sceneryInfo = {};
const usedNames = new Set();
main.layers.forEach((l, i) => {
  if (l.kind !== 'shape') return;
  const nice = NAMES.scenery[l.name] || l.name;
  let cls = pascal(nice); let k = 2; while (usedNames.has(cls)) cls = pascal(nice) + k++;
  usedNames.add(cls);
  sceneryInfo[i] = { cls, id: camel(cls) };
  const c = convertLayer(l, main);
  const piece = { name: l.name, contents: c.contents };
  if (c.masks) piece.masks = c.masks;
  if (c.fx) piece.fx = c.fx;
  out(`src/library/scenery/${cls}.ts`,
`import type { SceneryData } from '../types';

/**
 * ${cls} — shape layer "${l.name}" dari comp "${PROJ.main}".
 * Posisi/skala/blend layer ini diatur di src/config.ts (id: '${slug(cls)}').
 */
export const ${sceneryInfo[i].id}: SceneryData = ${fmt(piece)};
`);
});
const sc = Object.values(sceneryInfo);
out('src/library/scenery/index.ts', sc.map((s) => `export * from './${s.cls}';`).join('\n') + '\n');

// ---------- 3. CONFIG ----------
const counts = {};
main.layers.forEach((l, i) => { const key = l.kind === 'shape' ? 's:' + i : 'p:' + l.source; counts[key] = (counts[key] || 0) + 1; });
const seen = {};
const lines = [];
const placements = [];
const PIDS = {};
{ const sn = {}; main.layers.forEach((l, i) => { if (l.kind === 'shape') PIDS[i] = slug(sceneryInfo[i].cls); else { sn[l.source] = (sn[l.source] || 0) + 1; const total = main.layers.filter((x) => x.source === l.source).length; PIDS[i] = slug(l.source) + (total > 1 ? '-' + sn[l.source] : ''); } }); }
main.layers.forEach((l, i) => {
  const kind = l.kind;
  let id, src, label;
  if (kind === 'shape') { id = slug(sceneryInfo[i].cls); src = 'scenery.' + sceneryInfo[i].id; label = l.name; }
  else { const nm = l.source; seen[nm] = (seen[nm] || 0) + 1; const total = main.layers.filter((x) => x.source === nm).length; id = slug(nm) + (total > 1 ? '-' + seen[nm] : ''); src = 'parts.' + partInfo[nm].id; label = nm; }
  const c = convertLayer(l, main);
  const xf = c.xf || {};
  const parts = [`id: '${id}'`, `source: ${src}`];
  let anchor = xf.a, position = xf.p;
  if (kind === 'part') {
    const pc = data.find((x) => x.name === l.source);
    if (!anchor) anchor = [pc.width / 2, pc.height / 2];
    if (!position) position = [main.width / 2, main.height / 2];
  }
  if (anchor) parts.push(`anchor: ${fmt(anchor)}`);
  if (position) parts.push(`position: ${fmt(position)}`);
  if (xf.s) parts.push(`scale: ${fmt(xf.s)}`);
  if (xf.r) parts.push(`rotation: ${xf.r}`);
  if (xf.o !== undefined) parts.push(`opacity: ${xf.o}`);
  if (c.blend) parts.push(`blend: '${c.blend}'`);
  if (c.hidden) parts.push(`hidden: true`);
  if (l.collapse) parts.push(`collapse: true`);
  if (l.parent !== null && l.parent !== undefined) parts.push(`parent: '${PIDS[l.parent]}'`);
  placements.push({ id, i, label, text: `  { ${parts.join(', ')} },` });
});
const sections = NAMES.sections || {};
placements.forEach((p) => { if (sections[p.id]) lines.push(`\n  // ── ${sections[p.id]} ${'─'.repeat(Math.max(2, 60 - sections[p.id].length))}`); lines.push(p.text); });

out('src/config.ts',
`import type { ParentingMode } from './ae';
import type { Placement } from './library/compose';
import * as parts from './library/parts';
import * as scenery from './library/scenery';

/**
 * ============================================================================
 *  CONFIG — ${PROJ.title}
 *  Semua letak komponen (library part & scenery) ada di sini.
 *  Ubah angka di tabel PLACEMENTS untuk menggeser / menskala / merotasi / menyembunyikan.
 * ============================================================================
 */

/** Pengaturan composition (dari comp AE "${PROJ.main}") */
export const COMP_CONFIG = {
  id: '${PROJ.id}',
  width: ${main.width},
  height: ${main.height},
  fps: ${main.fps},
  durationInFrames: ${Math.round(main.duration * main.fps)}, // ${main.duration}s — scene statis (tanpa keyframe)
} as const;

/**
 * Parenting AE.
 *  'ignore' = literal hasil menjalankan skrip sumber (setParentWithJump mempertahankan posisi visual).
 *  'local'  = nilai transform diperlakukan relatif terhadap parent.
 */
export const PARENTING: ParentingMode = 'local';

/**
 * Tabel penempatan. URUTAN = z-order, dari ATAS (paling depan) ke BAWAH (paling belakang),
 * sama persis dengan timeline AE.
 *  - anchor   : titik anchor layer (piksel, ruang lokal part)
 *  - position : letak anchor di canvas ${main.width}×${main.height}
 *  - scale    : % (negatif = mirror)   - rotation: derajat   - opacity: %
 *  - blend    : 'add' | 'overlay'      - hidden: layer off   - collapse: Collapse Transformations
 */
export const PLACEMENTS: Placement[] = [\n${lines.join('\n')}
];
`);

// ---------- ringkasan ----------
console.log('parts:', partComps.length, ' scenery:', sc.length, ' placements:', placements.length);
fs.writeFileSync(path.join(__dirname, 'placements.txt'), placements.map((p) => `${String(p.i).padStart(2)} ${p.id}  (${p.label})`).join('\n'));
