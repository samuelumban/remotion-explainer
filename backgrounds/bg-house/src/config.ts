import type { ParentingMode } from './ae';
import type { Placement } from './library/compose';
import * as parts from './library/parts';
import * as scenery from './library/scenery';

/**
 * ============================================================================
 *  CONFIG — BG House
 *  Semua letak komponen (library part & scenery) ada di sini.
 *  Ubah angka di tabel PLACEMENTS untuk menggeser / menskala / merotasi / menyembunyikan.
 * ============================================================================
 */

/** Pengaturan composition (dari comp AE "BG House") */
export const COMP_CONFIG = {
  id: 'BGHouse',
  width: 7680,
  height: 4320,
  fps: 24,
  durationInFrames: 480, // 20s — scene statis (tanpa keyframe)
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
 *  - position : letak anchor di canvas 7680×4320
 *  - scale    : % (negatif = mirror)   - rotation: derajat   - opacity: %
 *  - blend    : 'add' | 'overlay'      - hidden: layer off   - collapse: Collapse Transformations
 */
export const PLACEMENTS: Placement[] = [

  // ── Jalan (bintik tekstur) ──────────────────────────────────────
  { id: 'road-specks-3', source: scenery.roadSpecks3, position: [7039.5,2399.5], opacity: 10 },
  { id: 'road-specks-2', source: scenery.roadSpecks2, position: [1015.5,2399.5], opacity: 10 },
  { id: 'road-specks-1', source: scenery.roadSpecks1, position: [4003.5,2399.5], opacity: 10 },
  { id: 'road', source: scenery.road, position: [3940,2344] },

  // ── Props jalan & halaman ───────────────────────────────────────
  { id: 'steam', source: parts.steamComp, anchor: [92,148], position: [4078,1252], collapse: true },
  { id: 'little-plant-2-1', source: parts.littlePlant2Comp, anchor: [97,172], position: [3041,2820.5], collapse: true },
  { id: 'street-light-1', source: parts.streetLightComp, anchor: [227.299,923.908], position: [1602,2818], scale: [160,160], collapse: true },
  { id: 'street-light-2', source: parts.streetLightComp, anchor: [227.299,923.908], position: [5506,2818], scale: [160,160], collapse: true },
  { id: 'fence-home', source: parts.fenceHomeComp, anchor: [480.5,275], position: [2484,2820], scale: [150,150], collapse: true },
  { id: 'bush-4-1', source: parts.bush4Comp, anchor: [400,470], position: [2473,2815], scale: [54,54], collapse: true },
  { id: 'little-plant-2-2', source: parts.littlePlant2Comp, anchor: [97,172], position: [4415,2820.5], collapse: true },
  { id: 'little-plant-1', source: parts.littlePlant1Comp, anchor: [100,140], position: [2388.75,2820.25], collapse: true },
  { id: 'bush-4-2', source: parts.bush4Comp, anchor: [400,468], position: [4446,2816], scale: [48,48], collapse: true },

  // ── Rumah (2 samping + 1 tengah) ────────────────────────────────
  { id: 'house-2-1', source: parts.house2Comp, anchor: [1285.333,1162.564], position: [-40,2820], scale: [180,180], collapse: true },
  { id: 'house-2-2', source: parts.house2Comp, anchor: [1285.333,1162.564], position: [7568,2820], scale: [180,180], collapse: true },
  { id: 'house', source: parts.houseComp, anchor: [1285.333,1162.564], position: [3844,2820], scale: [180,180], collapse: true },

  // ── Semak & pohon ───────────────────────────────────────────────
  { id: 'bush-2', source: parts.bush2Comp, anchor: [536,664], position: [2472,2820], scale: [110,110], collapse: true },
  { id: 'bush-3-1', source: parts.bush3Comp, anchor: [400,464], position: [1516,2816], scale: [110,110], collapse: true },
  { id: 'bush-3-2', source: parts.bush3Comp, anchor: [400,464], position: [6244,2816], scale: [110,110], collapse: true },
  { id: 'bush-3-3', source: parts.bush3Comp, anchor: [400,464], position: [5524,2816], scale: [110,110], collapse: true },
  { id: 'tree-2-1', source: parts.tree2Comp, anchor: [350,918], position: [5708,2888], scale: [130,130], collapse: true },
  { id: 'tree-1-1', source: parts.tree1Comp, anchor: [350,918], position: [6020,2856], scale: [158,158], collapse: true },
  { id: 'tree-1-2', source: parts.tree1Comp, anchor: [350,918], position: [5540,2856], scale: [110,110], collapse: true },
  { id: 'tree-2-2', source: parts.tree2Comp, anchor: [350,918], position: [1518,2824], scale: [120,120], collapse: true },
  { id: 'tree-1-3', source: parts.tree1Comp, anchor: [350,918], position: [1812,2828], scale: [170,170], collapse: true },
  { id: 'tree-2-3', source: parts.tree2Comp, anchor: [350,918], position: [2118,2824], scale: [116,116], collapse: true },

  // ── Latar belakang (awan biru, langit) ──────────────────────────
  { id: 'back-clouds', source: scenery.backClouds, anchor: [0,204], position: [1231.111,942], parent: 'house' },
  { id: 'sky', source: scenery.sky, position: [3840,2160] },
  { id: 'sky-backdrop', source: scenery.skyBackdrop, position: [3840,2400] },
];
