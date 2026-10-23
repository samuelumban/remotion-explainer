#!/usr/bin/env python3
"""Re-apply the outfit hooks after running ae2remotion.py (which regenerates the library files).
   Usage: python3 tools/apply_outfits.py src/library
   Idempotent: safe to run more than once."""
import sys, os

lib = sys.argv[1] if len(sys.argv) > 1 else 'src/library'

# 1) texture sheet: the 3 original green shirt layers -> <ShirtPaint /> (variant 'sma' | 'green' in outfits/config.ts)
p = os.path.join(lib, 'character-animations/character-textures/TextureMANNORMIE.tsx')
s = open(p).read()
if '<ShirtPaint />' not in s:
    first = None
    for name in ('Body', 'Shape Layer 94', 'Shape Layer 188'):
        i = s.index('    <Layer name="%s"' % name)
        j = s.index('    </Layer>\n', i) + len('    </Layer>\n')
        s = s[:i] + s[j:]
        first = i if first is None else first
    s = s[:first] + '    <ShirtPaint />\n' + s[first:]
    s = s.replace("import type {LayerTransform, PlaceProps} from '../../ae';",
                  "import type {LayerTransform, PlaceProps} from '../../ae';\nimport {ShirtPaint} from '../../outfits/ShirtPaint';", 1)
    open(p, 'w').write(s)

# 1b) recolour: literal hex fills in the sheet -> PALETTE entries (outfits/palette.ts)
RECOLOR = {'#263997': 'pants', '#2a3085': 'pantsShade', '#a36742': 'hair'}
p = os.path.join(lib, 'character-animations/character-textures/TextureMANNORMIE.tsx')
s = open(p).read()
for hexc, key in RECOLOR.items():
    s = s.replace('fill="%s"' % hexc, 'fill={PALETTE.%s}' % key)
if "import {PALETTE}" not in s:
    s = s.replace("import {ShirtPaint} from '../../outfits/ShirtPaint';",
                  "import {ShirtPaint} from '../../outfits/ShirtPaint';\nimport {PALETTE} from '../../outfits/palette';", 1)
open(p, 'w').write(s)

# 2) scene: collar right above the NECK layer
p = os.path.join(lib, 'character-animations/Character01Basic.tsx')
s = open(p).read()
if '<SmaCollar />' not in s:
    i = s.index('    <Layer name="NECK"'); j = s.index('    </Layer>\n', i) + len('    </Layer>\n')
    neck = s[i:j]; t = neck[neck.index('t={') + 2:neck.index(' clip=')]
    collar = ("    {SHIRT_VARIANT === 'sma' ? (\n      <Layer name=\"COLLAR (SMA)\" t=%s clip={{w:250,h:400}}>\n"
              "        <SmaCollar />\n      </Layer>\n    ) : null}\n") % t
    s = s[:j] + collar + s[j:]
    s = s.replace("import type {LayerTransform, PlaceProps} from '../ae';",
                  "import type {LayerTransform, PlaceProps} from '../ae';\nimport {SHIRT_VARIANT} from '../outfits/config';\nimport {SmaCollar} from '../outfits/SmaCollar';", 1)
    open(p, 'w').write(s)

# 3) index exports
p = os.path.join(lib, 'index.ts')
s = open(p).read()
if 'outfits' not in s:
    s += ("export {ShirtPaint, SMA} from './outfits/ShirtPaint';\nexport {SmaCollar} from './outfits/SmaCollar';\n"
          "export {SHIRT_VARIANT} from './outfits/config';\nexport {PALETTE} from './outfits/palette';\nexport type {ShirtVariant} from './outfits/config';\n")
    open(p, 'w').write(s)
print('outfits applied')
