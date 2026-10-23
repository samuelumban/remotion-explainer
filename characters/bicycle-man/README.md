# Bicycle Man — After Effects (compCode .jsx) → Remotion

## Pakai
```bash
npm i
npm run convert     # 04BICY_1.JSX -> public/scene.json (otomatis, ganti file .jsx lain bila perlu)
npm run verify      # cek proporsi tangan↔badan + akurasi IK
npm run dev         # Remotion Studio
npm run render      # out/bicycle-man.mp4 (1920x1080, 24 fps, 18 s)
```

## Cara kerja konverter
`tools/jsx-to-scene.mjs` **menjalankan JSX asli** di host ExtendScript tiruan, lalu mengekspor scene graph
(69 komposisi, 277 layer, keyframe + ease + tangen spasial, mask, track matte, 171 ekspresi).
Ekspresi AE ditulis ulang (AST) ke JS dengan aritmatika vektor (`tools/expr-transform.mjs`) dan
dievaluasi runtime (`src/engine/runtime.ts`) termasuk `toWorld`, `effect()`, dan referensi-diri ala Duik IK.
`src/engine/render.tsx` menggambar SVG per frame (fungsi murni waktu → aman untuk render paralel).

## Proporsi tangan ke badan
Tangan tidak diskalakan manual: skala komposisi `Hand` = `Limbs Control(8)%` (60 %), sama dengan lebar lengan bawah.
Terukur (`npm run verify`): tangan 59,4×92,4 px; lebar tangan/lebar lengan bawah = 0,99; tinggi tangan/panjang lengan bawah = 0,37;
tinggi tangan/tinggi torso = 0,30. Batas toleransi ada di `src/rig.config.ts` (`PROPORTION_GUARD`); skrip gagal bila keluar batas.

## Asumsi & batasan (jujur)
- Parameter "Base" pseudo-effect `EVT4.1 Limbs Control` (14–21) berasal dari preset `.ffx` yang tidak ada di JSX. Diisi = nilai desain
  pria (`PSEUDO_DEFAULTS`); bila rig aslimu berbeda, ubah di situ. Slider Man/Woman default 0 (pria).
- Layer *guide* (controller, joystick, teks) tidak dirender, sama seperti render AE.
- Belum diimplementasi: blend mode Add (1 layer), efek Transform pada mata (default identitas), feather mask.
- Levels dibaca sebagai Gamma (param 0006=0,7 → lebih gelap) — asumsi urutan param.
- Remotion tidak bisa dipasang di sandbox (tanpa jaringan): lapisan Remotion (`Root`, `BicycleMan`) belum dijalankan di sini; mesin
  render (runtime + SVG) diuji lewat `tsx` + sharp. Jalankan `npm i && npm run dev` untuk memastikan.
- Loop kerja asli di AE 5,08 dtk; di sini durasi penuh 18 dtk (ubah di `VIDEO`).
