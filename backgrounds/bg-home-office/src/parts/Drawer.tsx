/**
 * AE composition "Drawer" — 869x407, 24 fps, 7 layers (listed TOP -> BOTTOM).
 * Auto-converted from BGHOME_1.JSX (compCode export). Layers with `enabled: false` were switched off in the AE project.
 */
import React from 'react';
import { AEComp, compDef, shapeLayer, mask, rect, ellipse, fill, stroke, group, repeater } from '../ae';

export const drawerComp = compDef(
  'Drawer',
  869,
  407,
  [
    shapeLayer('shapeLayer13', 'Shape Layer 8', { position: [-93.5, -36.5], opacity: 5, enabled: false, blend: 'add' }, [
      group('Rectangle 14', [
        rect([8, 32], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [306.5, 355] }),
      group('Rectangle 13', [
        rect([8.5, 37], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [796.25, 352.5] }),
      group('Rectangle 12', [
        rect([9, 9], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [683, 164.25] }),
      group('Rectangle 11', [
        rect([9, 9], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [683, 246.25] }),
      group('Rectangle 10', [
        rect([9.5, 9.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [446.25, 246.25] }),
      group('Rectangle 9', [
        rect([10, 10], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [446.75, 165.5] }),
      group('Rectangle 8', [
        rect([74.5, 15], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [391.25, 244] }),
      group('Rectangle 7', [
        rect([108.5, 13.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [607.75, 244.75] }),
      group('Rectangle 6', [
        rect([182.5, 15.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [562.25, 164.25] }),
      group('Rectangle 5', [
        rect([176, 10], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [423, 128] }),
      group('Rectangle 4', [
        rect([35, 10], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [629, 128] }),
      group('Rectangle 3', [
        rect([122, 10], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [734.5, 128] }),
      group('Rectangle 2', [
        rect([53, 14], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [323, 210] }),
      group('Rectangle 1', [
        rect([59.5, 18], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [278.25, 152.5] }),
    ]),
    shapeLayer('shapeLayer6', 'Shape Layer 5', { position: [-45.5, -36.5] }, [
      group('Ellipse 1', [
        ellipse([20, 20]),
        fill('#28599c'),
        repeater(2, { position: [236, 0] }),
        repeater(2, { position: [0, 81], name: 'Repeater 2' }),
      ], { position: [399, 168] }),
    ]),
    shapeLayer('shapeLayer4', 'Shape Layer 4', { position: [-56.5, -108.5] }, [
      group('Rectangle 1', [
        rect([454, 51]),
        stroke('#28599c', 10),
        fill('#6f6f6f', { enabled: false }),
      ], { position: [529.5, 241.5] }),
      repeater(2, { position: [0, 81] }),
    ]),
    shapeLayer('shapeLayer14', 'Shape Layer 3', { position: [-93.5, -112.5], masks: [mask([[936, 158], [318, 158], [318, 430], [936, 430]])] }, [
      group('Rectangle 1', [
        rect([575, 185]),
        fill('#3d79bd'),
      ], { position: [529.5, 287.5] }),
    ]),
    shapeLayer('shapeLayer15', 'Shape Layer 2', { position: [-93.5, -112.5] }, [
      group('Rectangle 1', [
        rect([575, 185]),
        fill('#3d79bd'),
      ], { position: [529.5, 287.5] }),
    ]),
    shapeLayer('shapeLayer16', 'Shape Layer 7', { position: [-93.5, -36.5], masks: [mask([[847, 229], [180, 229], [180, 318.75], [847, 318.75]])] }, [
      group('Rectangle 1', [
        rect([18, 110], { roundness: 4 }),
        fill('#28599c'),
      ], { position: [794.5, 324.5] }),
      repeater(2, { position: [-40, 0] }),
      repeater(2, { position: [-488, 0], name: 'Repeater 2' }),
    ]),
    shapeLayer('shapeLayer17', 'Shape Layer 6', { position: [-93.5, -36.5] }, [
      group('Rectangle 1', [
        rect([18, 110], { roundness: 4 }),
        fill('#3d79bd'),
      ], { position: [794.5, 324.5] }),
      repeater(2, { position: [-40, 0] }),
      repeater(2, { position: [-488, 0], name: 'Repeater 2' }),
    ]),
  ],
  { duration: 20, fps: 24 },
);

export const Drawer: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <AEComp comp={drawerComp} style={style} />
);
