/**
 * AE composition "Small Tree 4" — 389x862, 24 fps, 15 layers (listed TOP -> BOTTOM).
 * Auto-converted from BGHOME_1.JSX (compCode export). Layers with `enabled: false` were switched off in the AE project.
 */
import React from 'react';
import { AEComp, compDef, shapeLayer, mask, rect, ellipse, path, fill, stroke, group } from '../ae';

export const smallTree4Comp = compDef(
  'Small Tree 4',
  389,
  862,
  [
    shapeLayer('shapeLayer79', 'Shape Layer 79', { position: [194.5, 431] }, [
      group('Rectangle 1', [
        rect([162, 22], { roundness: 20 }),
        fill('#e7e2f7'),
      ], { position: [-5.5, 283] }),
    ]),
    shapeLayer('reflections1', 'reflections', { position: [201, 431], opacity: 5, enabled: false, blend: 'add' }, [
      group('Rectangle 2', [
        rect([48, 93.5], { roundness: 37 }),
        fill('#ffffff'),
      ], { position: [-13, 306.75] }),
      group('Rectangle 1', [
        rect([9, 132], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-14.5, 156.5] }),
    ]),
    shapeLayer('shapeLayer78', 'Shape Layer 78', { position: [718.5, 432], masks: [mask([[-410.5, 282], [-639.5, 282], [-639, 424], [-410, 424]])] }, [
      group('Rectangle 1', [
        rect([136, 206], { roundness: 36 }),
        fill('#e7e2f7'),
      ], { position: [-530, 275] }),
    ]),
    shapeLayer('shapeLayer77', 'Shape Layer 70', { anchor: [359.5, 145.5], position: [265, 443], opacity: 14, blend: 'overlay', masks: [mask([[383.5, 145], [338, 145], [338, 165], [383.5, 165]])] }, [
      group('Ellipse 1', [
        ellipse([30, 30]),
        fill('#ffffff'),
      ], { position: [359.5, 145.5] }),
    ]),
    shapeLayer('shapeLayer80', 'Shape Layer 69', { anchor: [359.5, 145.5], position: [253, 372.5], opacity: 14, blend: 'overlay', masks: [mask([[383.5, 145], [338, 145], [338, 165], [383.5, 165]])] }, [
      group('Ellipse 1', [
        ellipse([30, 30]),
        fill('#ffffff'),
      ], { position: [359.5, 145.5] }),
    ]),
    shapeLayer('shapeLayer81', 'Shape Layer 77', { anchor: [359.5, 145.5], position: [128, 496], opacity: 14, blend: 'overlay', masks: [mask([[383.5, 145], [338, 145], [338, 165], [383.5, 165]])] }, [
      group('Ellipse 1', [
        ellipse([30, 30]),
        fill('#ffffff'),
      ], { position: [359.5, 145.5] }),
    ]),
    shapeLayer('shapeLayer82', 'Shape Layer 76', { anchor: [359.5, 145.5], position: [241, 498.5], opacity: 14, blend: 'overlay', masks: [mask([[383.5, 145], [338, 145], [338, 165], [383.5, 165]])] }, [
      group('Ellipse 1', [
        ellipse([30, 30]),
        fill('#ffffff'),
      ], { position: [359.5, 145.5] }),
    ]),
    shapeLayer('shapeLayer83', 'Shape Layer 75', { anchor: [359.5, 145.5], position: [205.5, 448.5], opacity: 14, blend: 'overlay', masks: [mask([[383.5, 145], [338, 145], [338, 165], [383.5, 165]])] }, [
      group('Ellipse 1', [
        ellipse([30, 30]),
        fill('#ffffff'),
      ], { position: [359.5, 145.5] }),
    ]),
    shapeLayer('shapeLayer84', 'Shape Layer 74', { anchor: [359.5, 145.5], position: [196.875, 343.625], scale: [65, 65], opacity: 14, blend: 'overlay', masks: [mask([[383.5, 145], [338, 145], [338, 165], [383.5, 165]])] }, [
      group('Ellipse 1', [
        ellipse([30, 30]),
        fill('#ffffff'),
      ], { position: [359.5, 145.5] }),
    ]),
    shapeLayer('shapeLayer85', 'Shape Layer 68', { anchor: [359.5, 145.5], position: [200, 391.5], opacity: 14, blend: 'overlay', masks: [mask([[383.5, 145], [338, 145], [338, 165], [383.5, 165]])] }, [
      group('Ellipse 1', [
        ellipse([30, 30]),
        fill('#ffffff'),
      ], { position: [359.5, 145.5] }),
    ]),
    shapeLayer('shapeLayer86', 'Shape Layer 67', { anchor: [359.5, 145.5], position: [137, 366.5], opacity: 14, blend: 'overlay', masks: [mask([[383.5, 145], [338, 145], [338, 165], [383.5, 165]])] }, [
      group('Ellipse 1', [
        ellipse([30, 30]),
        fill('#ffffff'),
      ], { position: [359.5, 145.5] }),
    ]),
    shapeLayer('shapeLayer87', 'Shape Layer 66', { anchor: [359.5, 145.5], position: [154.5, 425.5], scale: [60, 60], opacity: 14, blend: 'overlay', masks: [mask([[383.5, 145], [338, 145], [338, 165], [383.5, 165]])] }, [
      group('Ellipse 1', [
        ellipse([30, 30]),
        fill('#ffffff'),
      ], { position: [359.5, 145.5] }),
    ]),
    shapeLayer('shapeLayer88', 'Shape Layer 16', { anchor: [359.5, 145.5], position: [110.5, 445.5], opacity: 14, blend: 'overlay', masks: [mask([[383.5, 145], [338, 145], [338, 165], [383.5, 165]])] }, [
      group('Ellipse 1', [
        ellipse([30, 30]),
        fill('#ffffff'),
      ], { position: [359.5, 145.5] }),
    ]),
    shapeLayer('shapeLayer89', 'Shape Layer 2', { anchor: [554, -139], position: [190.5, 482] }, [
      group('Ellipse 2', [
        ellipse([239, 239]),
        fill('#779924'),
      ], { position: [554, -174] }),
    ]),
    shapeLayer('shapeLayer90', 'Shape Layer 3', { anchor: [554, 199], position: [190.5, 630] }, [
      group('Shape 1', [
        path([[554, -40], [554, 317]], { closed: false }),
        stroke('#a87261', 18),
        fill('#92b859'),
      ]),
    ]),
  ],
  { duration: 20, fps: 24 },
);

export const SmallTree4: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <AEComp comp={smallTree4Comp} style={style} />
);
