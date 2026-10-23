/**
 * Konfigurasi rig & jaminan proporsi.
 *
 * 1) PSEUDO_DEFAULTS — pseudo-effect "EVT4.1 Limbs Control" dibuat dari preset .ffx yang TIDAK ikut
 *    dalam file .jsx. Parameter "Base …" (14–21) tidak pernah di-set oleh script, jadi nilainya harus
 *    diisi manual. Aturan rig: Base = nilai desain (slider Man/Woman = 0), sehingga selisih
 *    (BL-L), (BT-T), (ZD-D), (ZH-H) bernilai 0 untuk karakter pria. Pasangan indeks: 2→14, 3→15, 4→16,
 *    5→17, 8→18, 9→19, 10→20, 11→21 (nilai sama dengan parameter yang diset di script).
 * 2) PROPORTION_GUARD — batas yang dicek `scripts/verify-proportion.mts` (tangan ↔ lengan bawah ↔ badan).
 */
export const PSEUDO_DEFAULTS: Record<string, Record<number, number>> = {
  'EVT4.1 Limbs Control': { 14: 250, 15: 290.5, 16: 310, 17: 140, 18: 60, 19: 66, 20: 190, 21: 60 },
  'EVT4.1 Rig Control': { 4: 0, 5: 0, 6: 0 }, // 4 == 0 -> IK aktif
};

export const PROPORTION_GUARD = {
  /** lebar tangan (setelah skala komposisi Hand) / lebar lengan bawah */
  handWidthToForearmWidth: [0.85, 1.15] as [number, number],
  /** tinggi tangan / panjang lengan bawah */
  handHeightToForearmLength: [0.25, 0.5] as [number, number],
  /** tinggi tangan / tinggi badan (torso) */
  handHeightToTorso: [0.25, 0.6] as [number, number],
};

export const VIDEO = { width: 1920, height: 1080, fps: 24, durationInSeconds: 18 };
