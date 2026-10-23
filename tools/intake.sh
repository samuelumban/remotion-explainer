#!/usr/bin/env bash
# Cara pakai (dari folder remotion-explainer):
#   ./tools/intake.sh <file.zip> <characters|backgrounds> <nama-folder>
# Contoh:
#   ./tools/intake.sh ~/Downloads/karakter-02.zip characters karakter-02
set -euo pipefail

ZIP="$1"; KIND="$2"; NAME="$3"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/$KIND/$NAME"
TMP="$(mktemp -d)"

[ -f "$ZIP" ] || { echo "ZIP tidak ditemukan: $ZIP"; exit 1; }
[ -e "$DEST" ] && { echo "Folder sudah ada: $DEST (hapus dulu atau pakai nama lain)"; exit 1; }

unzip -q "$ZIP" -d "$TMP"

# Jika ZIP punya satu folder pembungkus, masuk ke dalamnya
SRC="$TMP"
ENTRIES=("$TMP"/*)
if [ ${#ENTRIES[@]} -eq 1 ] && [ -d "${ENTRIES[0]}" ]; then SRC="${ENTRIES[0]}"; fi

mkdir -p "$DEST"
cp -r "$SRC"/. "$DEST"/

# Buang folder yang tidak perlu dibaca AI maupun GitHub
rm -rf "$DEST/node_modules" "$DEST/out" "$DEST/.cache" "$DEST/dist"
find "$DEST" -name ".DS_Store" -delete

# Catat asal file agar mudah dilacak
{
  echo "Sumber : $(basename "$ZIP")"
  echo "Tanggal: $(date '+%Y-%m-%d %H:%M')"
} > "$DEST/INTAKE.txt"

rm -rf "$TMP"

echo "Selesai: $DEST"
echo "File besar (>200KB), periksa apakah perlu:"
find "$DEST" -type f -size +200k -exec ls -lh {} \; || true
echo "Jangan lupa: masuk ke $DEST lalu jalankan 'npm install' jika ingin menjalankan proyeknya."
