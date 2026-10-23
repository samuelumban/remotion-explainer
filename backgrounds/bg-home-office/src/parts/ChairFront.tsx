/**
 * AE composition "Chair Front" — 600x600, 24 fps, 11 layers (listed TOP -> BOTTOM).
 * Auto-converted from BGHOME_1.JSX (compCode export). Layers with `enabled: false` were switched off in the AE project.
 */
import React from 'react';
import { AEComp, compDef, shapeLayer, rect, ellipse, fill, group, repeater } from '../ae';

export const chairFrontComp = compDef(
  'Chair Front',
  600,
  600,
  [
    shapeLayer('arm2', 'arm 2', { position: [125, 73] }, [
      group('Rectangle 1', [
        rect([32, 22.5], { roundness: 20 }),
        fill('#344d5b'),
      ], { position: [99.5, 223.75] }),
    ]),
    shapeLayer('arm', 'arm', { position: [275, 73] }, [
      group('Rectangle 1', [
        rect([32, 22.5], { roundness: 20 }),
        fill('#344d5b'),
      ], { position: [99.5, 223.75] }),
    ]),
    shapeLayer('seat2', 'seat 2', { position: [221, 124] }, [
      group('Rectangle 1', [
        rect([156, 31.5], { roundness: 20 }),
        fill('#66c6c2'),
      ], { position: [79, 223.75] }),
    ]),
    shapeLayer('shapeLayer10', 'Shape Layer 10', { position: [300, 310] }, [
      group('Rectangle 1', [
        rect([112.5, 137.407749], { roundness: 45 }),
        fill('#66c6c2'),
      ], { position: [-0.25, -60.25] }),
    ]),
    shapeLayer('shapeLayer11', 'Shape Layer 9', { position: [300, 310] }, [
      group('Rectangle 1', [
        rect([135.5, 175.5], { roundness: 45 }),
        fill('#1daeab'),
      ], { position: [-0.25, -60.25] }),
    ]),
    shapeLayer('shapeLayer12', 'Shape Layer 8', { position: [281.5, 300], opacity: 5, enabled: false, blend: 'add' }, [
      group('Rectangle 6', [
        rect([39, 5.25], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [26, 42.375] }),
      group('Rectangle 5', [
        rect([101, 4.75], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-30, 24.875] }),
      group('Rectangle 4', [
        rect([28.25, 4], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-48.625, -38.25] }),
      group('Rectangle 3', [
        rect([56.75, 4.25], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [96.125, -38.625] }),
      group('Rectangle 2', [
        rect([31.25, 5.25], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [93.125, -136.625] }),
      group('Rectangle 1', [
        rect([53.75, 5.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [26.375, -130.75] }),
    ]),
    shapeLayer('mount3', 'mount 3', { position: [200.5, 148] }, [
      group('Rectangle 1', [
        rect([91, 36.5], { roundness: 20 }),
        fill('#344d5b'),
      ], { position: [99.5, 210.25] }),
    ]),
    shapeLayer('body', 'body', { position: [200.5, 110] }, [
      group('Rectangle 1', [
        rect([55, 86.5], { roundness: 20 }),
        fill('#344d5b'),
      ], { position: [99.5, 210.25] }),
    ]),
    shapeLayer('mount', 'mount', { position: [200, 270.5] }, [
      group('Rectangle 1', [
        rect([139, 15], { roundness: 20 }),
        fill('#344d5b'),
      ], { position: [99.5, 210.25] }),
    ]),
    shapeLayer('mount2', 'mount 2', { position: [201, 210] }, [
      group('Rectangle 2', [
        rect([15, 130.5], { roundness: 20 }),
        fill('#57636f'),
      ], { position: [99.5, 210.25] }),
      group('Rectangle 1', [
        rect([34, 22.5], { roundness: 20 }),
        fill('#57636f'),
      ], { position: [99.5, 264.25] }),
    ]),
    shapeLayer('wheels', 'wheels', { position: [204.5, 116.5] }, [
      group('Ellipse 1', [
        ellipse([19, 19]),
        fill('#0d3340'),
      ], { position: [40, 378.5] }),
      repeater(3, { position: [56, 0] }),
    ]),
  ],
  { duration: 20.291667, fps: 24 },
);

export const ChairFront: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <AEComp comp={chairFrontComp} style={style} />
);
