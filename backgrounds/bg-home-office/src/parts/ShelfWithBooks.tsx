/**
 * AE composition "Shelf with books" — 2560x1440, 24 fps, 17 layers (listed TOP -> BOTTOM).
 * Auto-converted from BGHOME_1.JSX (compCode export). Layers with `enabled: false` were switched off in the AE project.
 */
import React from 'react';
import { AEComp, compDef, shapeLayer, rect, fill, group, repeater } from '../ae';

export const shelfWithBooksComp = compDef(
  'Shelf with books',
  2560,
  1440,
  [
    shapeLayer('shapeLayer91', 'Shape Layer 4', { position: [1278, 717] }, [
      group('Rectangle 1', [
        rect([416, 30], { roundness: 357 }),
        fill('#3d79bd'),
      ], { position: [708, -246] }),
      repeater(5, { position: [0, 137] }),
    ]),
    shapeLayer('shapeLayer92', 'Shape Layer 3', { position: [1258, 704] }, [
      group('Rectangle 2', [
        rect([30, 710], { roundness: 108 }),
        fill('#3d79bd'),
      ], { position: [921, 107] }),
      group('Rectangle 1', [
        rect([30, 710], { roundness: 108 }),
        fill('#3d79bd'),
      ], { position: [535, 107] }),
    ]),
    shapeLayer('shapeLayer93', 'Shape Layer 17', { position: [1280, 720] }, [
      group('Rectangle 2', [
        rect([22, 72], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [860, -32] }),
      group('Rectangle 1', [
        rect([21, 88], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [831.5, -39] }),
    ]),
    shapeLayer('shapeLayer94', 'Shape Layer 18', { position: [1354, 863] }, [
      group('Rectangle 1', [
        rect([23, 83], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [659.5, 127.5], rotation: -90 }),
    ]),
    shapeLayer('shapeLayer95', 'Shape Layer 13', { position: [1302, 565] }, [
      group('Rectangle 1', [
        rect([23, 83], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [659.5, 127.5], rotation: -90 }),
    ]),
    shapeLayer('shapeLayer96', 'Shape Layer 15', { position: [1443, 452] }, [
      group('Rectangle 1', [
        rect([23, 83], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [659.5, 127.5], rotation: -90 }),
    ]),
    shapeLayer('shapeLayer97', 'Shape Layer 14', { position: [1391, 590] }, [
      group('Rectangle 1', [
        rect([23, 83], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [659.5, 127.5], rotation: -90 }),
    ]),
    shapeLayer('shapeLayer98', 'Shape Layer 12', { position: [1302, 590] }, [
      group('Rectangle 1', [
        rect([23, 83], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [659.5, 127.5], rotation: -90 }),
    ]),
    shapeLayer('shapeLayer99', 'Shape Layer 16', { position: [1428, 418] }, [
      group('Rectangle 1', [
        rect([23, 83], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [658.5, 114.5], rotation: -45 }),
    ]),
    shapeLayer('shapeLayer100', 'Shape Layer 11', { position: [1183, 446] }, [
      group('Rectangle 1', [
        rect([23, 83], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [658.5, 114.5], rotation: -45 }),
    ]),
    shapeLayer('shapeLayer101', 'Shape Layer 10', { position: [1280, 720] }, [
      group('Rectangle 1', [
        rect([23, 83], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [691.5, 114.5], rotation: 45 }),
    ]),
    shapeLayer('shapeLayer102', 'Shape Layer 20', { anchor: [550, -34], position: [1867, 1143.5], rotation: -90 }, [
      group('Rectangle 1', [
        rect([25, 97], { roundness: 9 }),
        fill('#3d79bd'),
      ], { position: [561.5, -36.5] }),
      repeater(3, { position: [29, 0] }),
    ]),
    shapeLayer('shapeLayer103', 'Shape Layer 19', { position: [1521, 990] }, [
      group('Rectangle 1', [
        rect([25, 97], { roundness: 9 }),
        fill('#3d79bd'),
      ], { position: [561.5, -36.5] }),
      repeater(3, { position: [29, 0] }),
    ]),
    shapeLayer('shapeLayer104', 'Shape Layer 6', { position: [1280, 720] }, [
      group('Rectangle 1', [
        rect([25, 97], { roundness: 9 }),
        fill('#3d79bd'),
      ], { position: [561.5, -36.5] }),
      repeater(3, { position: [29, 0] }),
    ]),
    shapeLayer('shapeLayer105', 'Shape Layer 5', { position: [1454, 856] }, [
      group('Rectangle 1', [
        rect([25, 97], { roundness: 9 }),
        fill('#3d79bd'),
      ], { position: [561.5, -36.5] }),
      repeater(5, { position: [29, 0] }),
    ]),
    shapeLayer('shapeLayer106', 'Shape Layer 8', { position: [1360, 583] }, [
      group('Rectangle 1', [
        rect([25, 97], { roundness: 9 }),
        fill('#3d79bd'),
      ], { position: [561.5, -36.5] }),
      repeater(5, { position: [29, 0] }),
    ]),
    shapeLayer('shapeLayer107', 'Shape Layer 21', { position: [1465, 1135.5] }, [
      group('Rectangle 1', [
        rect([25, 97], { roundness: 9 }),
        fill('#3d79bd'),
      ], { position: [561.5, -36.5] }),
      repeater(5, { position: [29, 0] }),
    ]),
  ],
  { duration: 20, fps: 24 },
);

export const ShelfWithBooks: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <AEComp comp={shelfWithBooksComp} style={style} />
);
