# BG House → Remotion

Konversi skrip After Effects (compCode) comp **"BG House"** (7680×4320, 24 fps) menjadi komponen TypeScript/React untuk Remotion.
Scene statis (tanpa keyframe), seluruhnya vektor → dirender sebagai SVG.

## Jalankan
```bash
npm install
npm start          # Remotion Studio: composition "BGHouse" + "Part-*"
npm run still      # out/bg-house.png
npm run render     # out/bg-house.mp4
```

## Struktur
```
src/
  config.ts          ← LETAK semua komponen (PLACEMENTS), setting comp, mode parenting
  BGHouse.tsx        ← comp utama, disusun dari PLACEMENTS
  Root.tsx           ← composition BGHouse + 14 composition "Part-*"
  ae/                ← runtime renderer AE→SVG (mask, matte, repeater, trim, blend, parenting, paint opacity/blend)
  library/
    parts/           ← 14 komponen (precomp AE): House, House2 (disusun dari Door1Home/2), StreetLight, FenceHome,
                       Steam, Bush2-4, Tree1-2, LittlePlant1-2, Door1Home, Door1Home2
    scenery/         ← 7 shape layer comp utama: Sky, SkyBackdrop, BackClouds, Road, RoadSpecks1-3
tools/               ← extract.cjs (jalankan skrip AE di mock) + generate.cjs (→ TS); `npm run convert`
source/              ← skrip AE asli
```
Part bisa bersarang (House memakai Door1Home). Pakai: `<House />` (svg mandiri) atau `<House standalone={false} />` di dalam `<svg>`.

## Config
Urutan `PLACEMENTS` = z-order (atas → bawah, sama dengan timeline AE). Kolom: `anchor`, `position`, `scale` (%),
`rotation`, `opacity`, `blend`, `hidden`, `collapse`, `parent` (id placement lain).

## Catatan fidelitas
- `PARENTING = 'local'`: `BackClouds` di-parent ke `house` (juga `Flowers 4` → `Flowers 3` di dalam House).
- Expression `wiggle(0.4,5)` pada scale layer "Light" (Street Light) tidak diekspor: dirender statis pada nilai dasar.
- Layer dengan eye off di AE tetap ada dengan `hidden: true`; fill/stroke yang disabled tidak diekspor.
- Blend Add → `plus-lighter`, Overlay → `overlay`; blend per fill/stroke dipetakan ke `mix-blend-mode`.
- Area mask dibatasi (bukan ±40000 px) agar mask tetap ter-render di kanvas 8K.
