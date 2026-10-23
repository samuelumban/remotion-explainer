# Character 01 Basic — library komponen Remotion

Dikonversi otomatis dari 01BLAN_1.JSX (After Effects compCode, EVT4 puppet rig).

    npm install
    npm run dev      # Remotion Studio: "Main" + folder katalog (68 komponen)
    npm run still    # out/main.png
    npm run render   # out/main.mp4

## Struktur
    src/library/
      ae.tsx                     helper (Layer, Rect, Ellipse, Poly, Place, Svg, masks, matte ...)
      character-animations/
        Character01Basic.tsx     scene penuh (+ Character01BasicScene, MainScene)
        character-body-parts/    body/ head/ mouths/   (HandL, ForearmL, FaceShape, Mouth, ...)
        character-textures/      Texture, texture-comps/ (warna & tekstur per bagian)
      index.ts  catalog.ts       export semua + daftar galeri
      rig-report.json            expression yang dievaluasi + catatan/asumsi
    tools/
      ae2remotion.py             konverter (butuh python3 + node)
      ae_expr_eval.js            mini runtime expression AE (acorn + astring)

## Status
- Pose dasar semua layer bentuk, mask Add/Subtract, track matte, parenting, pre-comp: dikonversi.
- Expression rig (Limbs Control, joystick, slider, IK lengan) DIHITUNG saat konversi pada nilai kontrol
  default -> pose awal sama dengan di AE (panjang lengan/kaki, posisi tangan/kaki).
- Belum: kontrol interaktif (props untuk menggerakkan joystick/slider saat runtime), effect Levels,
  layer teks/solid (guide, tidak dirender).
- ASUMSI: parameter tersembunyi 14-21 pada "EVT4.1 Limbs Control" tidak diekspor compCode; dianggap sama
  dengan nilai pasangannya (2-5, 8-11). Bandingkan sekali dengan komposisi asli di AE.

## Outfit (baju)
    src/library/outfits/
      config.ts        SHIRT_VARIANT = 'sma' | 'green'   <- ganti di sini
      palette.ts       warna rambut (hitam), celana (abu-abu gelap), bayangan lutut  <- edit di sini
      ShirtPaint.tsx   cat baju di kanvas tekstur (badan, bahu, lengan): kemeja putih SMA / kaos hijau asli
      SmaCollar.tsx    kerah kemeja (layer di atas NECK)
Kemeja SMA: putih, kerah, placket + 4 kancing, saku dada + emblem bendera Merah Putih di atas saku, name tag, lipatan ujung lengan, badge lengan (placeholder:
ganti dengan logo OSIS/sekolah di `ShirtPaint.tsx`). Celana abu-abu gelap dan rambut hitam diatur lewat `palette.ts`.
Setelah konversi ulang, `tools/apply_outfits.py` memasang kembali hook outfit (sudah termasuk di `npm run convert`).

## Konversi ulang
    npm run convert   (ganti INPUT.jsx)
