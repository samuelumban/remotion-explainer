# BG Beach — library komponen Remotion

Dikonversi otomatis dari `BGBEAC_1.JSX` (After Effects compCode).

    npm install
    npm run dev      # Remotion Studio -> lihat "Catalog-*" untuk tiap komponen
    npm run still    # out/bg-beach.png
    npm run render   # out/bg-beach.mp4

## Struktur
    src/library/
      ae.tsx                      helper (Layer, Rect, Ellipse, Arc, Place, Svg, ...)
      backgrounds/BGBeach.tsx     scene penuh (+ BGBeachScene)
      nature/Palm.tsx  Cloud1.tsx  Cloud2.tsx  Cloud3.tsx
      icons-miscellaneous/SandCastle.tsx
      index.ts                    export semua
      catalog.ts                  daftar untuk galeri di Studio

## Cara pakai
    import {Palm, Cloud1, SandCastle, PALM_SIZE} from './library';

    <svg viewBox="0 0 2560 1440">
      <Palm x={200} y={600} scale={0.9} flipX />
      <Cloud1 x={900} y={120} />
      <SandCastle x={1600} y={1000} rotate={-5} />
    </svg>

Props semua komponen: x, y, scale, rotate, flipX, flipY (pivot = tengah komponen).
Versi standalone (sudah berisi <svg>): PalmSvg, Cloud1Svg, ...

## Konversi ulang / tambah comp lain
    python3 ae2remotion.py INPUT.jsx src/library "Nama Comp Utama"
