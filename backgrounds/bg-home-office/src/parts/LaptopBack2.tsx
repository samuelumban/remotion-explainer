/**
 * AE composition "Laptop Back 2" — 480x398, 24 fps, 5 layers (listed TOP -> BOTTOM).
 * Auto-converted from BGHOME_1.JSX (compCode export). Layers with `enabled: false` were switched off in the AE project.
 */
import React from 'react';
import { AEComp, compDef, shapeLayer, mask, rect, ellipse, fill, group, repeater } from '../ae';

export const laptopBack2Comp = compDef(
  'Laptop Back 2',
  480,
  398,
  [
    shapeLayer('shapeLayer8', 'Shape Layer 8', { position: [240, 199], masks: [mask([[9.625, -7.1875], [2.625, -0.1875], [9.625, 6.8125], [16.625, -0.1875]], { inTangents: [[3.865997, 0], [0, -3.865997], [-3.865997, 0], [0, 3.865997]], outTangents: [[-3.865997, 0], [0, 3.865997], [3.865997, 0], [0, -3.865997]], mode: 'subtract', expansion: -1 })] }, [
      group('Ellipse 1', [
        ellipse([20, 20]),
        fill('#ffffff'),
      ], { position: [0, -0.25] }),
    ]),
    shapeLayer('shapeLayer7', 'Shape Layer 7', { position: [223.5, 194] }, [
      group('Rectangle 1', [
        rect([192, 120], { roundness: 14 }),
        fill('#cddee6'),
      ], { position: [16.25, 4.25] }),
    ]),
    shapeLayer('shapeLayer5', 'Shape Layer 5', { position: [162, 151], opacity: 50, enabled: false, blend: 'overlay' }, [
      group('Rectangle 1', [
        rect([6.5, 4.125]),
        fill('#000000'),
        repeater(2, { position: [-13, 0] }),
      ], { position: [-9.75, 106.6875] }),
    ]),
    shapeLayer('shapeLayer9', 'Shape Layer 9', { position: [200.5, 148] }, [
      group('Rectangle 1', [
        rect([230, 16], { roundness: 38 }),
        fill('#acbac2'),
      ], { position: [39.5, 106.25] }),
    ]),
    shapeLayer('shapeLayer3', 'Shape Layer 3', { position: [200.5, 151], enabled: false }, [
      group('Rectangle 1', [
        rect([256, 14], { roundness: 38 }),
        fill('#9290a8'),
      ], { position: [39.5, 106.25] }),
    ]),
  ],
  { duration: 20, fps: 24 },
);

export const LaptopBack2: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <AEComp comp={laptopBack2Comp} style={style} />
);
