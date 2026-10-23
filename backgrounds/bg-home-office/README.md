# BG Home Office — Remotion

Konversi `BGHOME_1.JSX` (export compCode After Effects) menjadi komponen Remotion.
Hasil render sama dengan composition di AE (lihat `preview.png`).

## Menjalankan
```bash
npm install
npm start            # Remotion Studio
npm run still        # out/bg-home-office.png (2560x1440)
npm run render       # out/bg-home-office.mp4
```

## Struktur
```
src/
  ae/            Engine reusable (React + SVG murni, tanpa dependensi Remotion)
    types.ts       model data (mirror object model AE)
    dsl.ts         helper: shapeLayer, compLayer, group, rect, ellipse, path, fill, stroke, repeater, trim, mask
    matrix.ts      transform AE: T(position)·R·S·T(-anchor)
    ShapeRenderer  contents shape: fill/stroke, repeater, trim paths, mask add/subtract + expansion
    AEComp.tsx     compose layer bawah→atas: parenting, opacity, blend mode, efek Fill, collapse
    ScaleToFit.tsx skala artwork ke ukuran video lain
  parts/         SATU FILE PER COMPOSITION AE
    BGHomeOffice (root 2560x1440)  Table9Office2  LaptopBack2  Mug  TablePicture3Back
    ChairFront  Drawer  Printer  Plant  Plant2  Window5Office  SmallTree4  Clock  ShelfWithBooks
  Root.tsx       mendaftarkan semua part sebagai Composition (+ Still)
tools/           extract.js + generate.js: regenerasi parts dari JSX asli
```

## Pemakaian di video lain
```tsx
import { BGHomeOffice, Mug, ChairFront } from './parts';
import { ScaleToFit } from './ae';

<ScaleToFit from={[2560, 1440]} to={[1920, 1080]}><BGHomeOffice /></ScaleToFit>
```
Animasikan layer apa pun lewat `overrides` (key = `id` layer):
```tsx
import { AEComp } from './ae';
import { bgHomeOfficeComp } from './parts/BGHomeOffice';
const frame = useCurrentFrame();
<AEComp comp={bgHomeOfficeComp} overrides={{ chairFront: { rotation: Math.sin(frame / 10) * 3 } }} />
```
Layer yang di AE dimatikan (refleksi, bayangan, dll.) tetap ada di data dengan `enabled: false`;
aktifkan lewat `overrides={{ bgShadows: { enabled: true } }}`.

## Catatan fidelity
- Urutan layer & contents: atas → bawah, persis seperti AE.
- Parenting: posisi child ada di layer-space parent (origin kiri-atas), parent di-compose penuh (diverifikasi geometris, mis. mug tepat di atas meja).
- Collapse Transformations → comp tidak di-clip ke frame (tanpa efek). Comp lain di-clip.
- Stroke yang disabled / lebar 0 dibuang dari data (tidak berpengaruh visual). Fill disabled dipertahankan.
- Blend mode: Overlay → `overlay`, Add → `plus-lighter`.
- Tidak ada keyframe/expression di file asli, jadi semuanya statis.
- Trim Paths hanya diterapkan pada stroke ellipse/path (dipakai di part Clock).
