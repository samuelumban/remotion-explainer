/**
 * AE composition "Mug" — 150x150, 24 fps, 3 layers (listed TOP -> BOTTOM).
 * Auto-converted from BGHOME_1.JSX (compCode export). Layers with `enabled: false` were switched off in the AE project.
 */
import React from 'react';
import { AEComp, compDef, shapeLayer, mask, rect, fill, stroke, group } from '../ae';

export const mugComp = compDef(
  'Mug',
  150,
  150,
  [
    shapeLayer('mug3', 'Mug - 3', { position: [166.045455, 90.5], masks: [mask([[-19, -49.5], [-152.5, -49.5], [-152.5, 47], [-19, 47]])] }, [
      group('Rectangle 1', [
        rect([56, 84], { roundness: 15 }),
        fill('#cddee6'),
      ], { position: [-86.5, -35.5] }),
    ]),
    shapeLayer('mug2', 'Mug - 2', { position: [178.545455, 89.5] }, [
      group('Rectangle 1', [
        rect([34.25, 23], { roundness: 12 }),
        stroke('#cddee6', 7),
        fill('#e2e2e2', { enabled: false }),
      ], { position: [-124.375, -21.75] }),
    ]),
    shapeLayer('mug1', 'Mug - 1', { position: [170.545455, 81.5] }, [
      group('Rectangle 1', [
        rect([60, 9.5], { roundness: 20 }),
        fill('#cddee6'),
      ], { position: [-92, 19.75] }),
    ]),
  ],
  { duration: 20, fps: 24 },
);

export const Mug: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <AEComp comp={mugComp} style={style} />
);
