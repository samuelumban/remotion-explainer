# Remotion Explainer — Repository Referensi

Repository ini adalah kumpulan karakter dan background untuk membuat video explainer dengan Remotion.
Baca file ini dulu sebelum membuat video.

## Daftar isi

### Karakter (`characters/`)

| Folder | Keterangan |
|---|---|
| `avatar-sam/` | Karakter **Sam** (pria, kemeja biru). Satu file `avatar_sam.ts`, bisa dipakai langsung. |
| `character-01/` | Karakter 01 (hasil konversi After Effects, 68 komponen). |
| `bicycle-man/` | Karakter pria bersepeda (hasil konversi After Effects, ada rig tangan dan kaki). |

### Background (`backgrounds/`)

| Folder | Keterangan |
|---|---|
| `bg-house/` | Rumah, jalan, langit, dan pohon. |
| `bg-garden/` | Taman (2560×1440). |
| `bg-home-office/` | Ruang kerja rumah (2560×1440). |
| `bg-ruang-kelas/` | Ruang kelas. Mencakup semua bagian home office ditambah elemen kelas (papan tulis, pintu, jendela, meja siswa). |
| `bg-beach/` | Pantai. |

### Alat

- `tools/intake.sh`: script untuk memasukkan ZIP baru dengan rapi.

Setiap folder punya `INTAKE.txt` yang mencatat asal ZIP-nya.

## Aturan pemakaian

- Setiap folder proyek berdiri sendiri dan punya `package.json` sendiri.
- Jalankan `npm install` di dalam folder proyek tersebut, bukan di folder utama.
- Jangan mengubah file di folder asli. Jika ingin mengubah, buat salinan folder baru.
- `avatar-sam` adalah satu file, jadi tidak perlu `npm install` untuk dipakai sebagai referensi.

## Cara memakai karakter Sam

File: `characters/avatar-sam/avatar_sam.ts`. Opsi yang tersedia:

- Rambut: `side`, `curly`, `slick`, `snapback`
- Baju: `shirt`, `tshirt`, `bomber`, `hoodie`, `suit`
- Celana: `pants`, `shorts`
- Ekspresi: `neutral`, `happy`, `angry`, `hate`, `nauseous`, `thinking`, `shock`
- Pose: `stand`, `sit`, `crossLegged`, `jump`, `pointUp`, `armsCrossed`, dan lainnya
- Arah pandang: `front`, `lookLeft`, `lookRight`, `lookUp`, `lookDown`

Contoh permintaan ke AI:

> Gunakan karakter Sam dari `characters/avatar-sam/avatar_sam.ts`. Rambut ikal, ekspresi happy, pose menunjuk ke atas, arah pandang ke kamera.

## Menambah ZIP baru

```
bash tools/intake.sh ~/Downloads/nama-file.zip characters nama-folder
bash tools/intake.sh ~/Downloads/nama-file.zip backgrounds nama-folder
```

Lalu commit dan push ke GitHub.
