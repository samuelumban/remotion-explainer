/**
 * AE composition "Clock" — 300x300, 24 fps, 6 layers (listed TOP -> BOTTOM).
 * Auto-converted from BGHOME_1.JSX (compCode export). Layers with `enabled: false` were switched off in the AE project.
 */
import React from 'react';
import { AEComp, compDef, shapeLayer, rect, ellipse, fill, stroke, group, trim } from '../ae';

export const clockComp = compDef(
  'Clock',
  300,
  300,
  [
    shapeLayer('clocks5', 'Clocks - 4', { anchor: [15.75, -257], position: [146.455427, 150.97267], rotation: 244 }, [
      group('Rectangle 1', [
        rect([12, 63], { roundness: 20 }),
        fill('#a0dadb'),
      ], { position: [15.75, -282.5] }),
    ]),
    shapeLayer('clocks6', 'Clocks - 3', { position: [131, 413] }, [
      group('Rectangle 1', [
        rect([16, 50], { roundness: 20 }),
        fill('#a0dadb'),
      ], { position: [15.75, -282.5] }),
    ]),
    shapeLayer('clocks2', 'Clocks - 2', { position: [131, 449], enabled: false }, [
      group('Ellipse 1', [
        ellipse([16, 16]),
        fill('#a0dadb'),
      ], { position: [16, -298] }),
    ]),
    shapeLayer('clocks7', 'Clocks - 6', { position: [131, 449], opacity: 5, blend: 'add' }, [
      group('Ellipse 1', [
        ellipse([152, 152]),
        stroke('#ffffff', 8, { cap: 'round', join: 'round' }),
        fill('#c1c1c1', { enabled: false }),
      ], { position: [16, -298] }),
      trim({ end: 21, offset: 289 }),
    ]),
    shapeLayer('clocks8', 'Clocks - 5', { position: [131, 449], opacity: 5, blend: 'add' }, [
      group('Ellipse 1', [
        ellipse([152, 152]),
        stroke('#ffffff', 8, { cap: 'round', join: 'round' }),
        fill('#c1c1c1', { enabled: false }),
      ], { position: [16, -298] }),
      trim({ end: 30, offset: 91 }),
    ]),
    shapeLayer('clocks9', 'Clocks - 1', { position: [131, 449] }, [
      group('Ellipse 1', [
        ellipse([152, 152]),
        stroke('#ffffff', 18),
        fill('#ffffff'),
      ], { position: [16, -298] }),
    ]),
  ],
  { duration: 20, fps: 24 },
);

export const Clock: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <AEComp comp={clockComp} style={style} />
);
