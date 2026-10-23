/**
 * AE composition "Plant 2" — 644x804, 24 fps, 29 layers (listed TOP -> BOTTOM).
 * Auto-converted from BGHOME_1.JSX (compCode export). Layers with `enabled: false` were switched off in the AE project.
 */
import React from 'react';
import { AEComp, compDef, shapeLayer, mask, rect, ellipse, fill, group } from '../ae';

export const plant2Comp = compDef(
  'Plant 2',
  644,
  804,
  [
    shapeLayer('shapeLayer47', 'Shape Layer 31', { position: [322, 415] }, [
      group('Rectangle 1', [
        rect([138, 29], { roundness: 6 }),
        fill('#7fc4ed'),
      ], { position: [-53.5, 134.5] }),
    ]),
    shapeLayer('shapeLayer48', 'Shape Layer 30', { position: [322, 402], masks: [mask([[64, 140], [-179, 140], [-179, 286], [64, 286]])] }, [
      group('Rectangle 1', [
        rect([121, 138], { roundness: 30 }),
        fill('#65a8dc'),
      ], { position: [-53.5, 181.5] }),
    ]),
    shapeLayer('shapeLayer49', 'Shape Layer 11', { anchor: [168.144086, 166.09828], position: [1.6875, 16.5625], scale: [-28, 28], rotation: -44, parent: 'shapeLayer55', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#8ac364'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer50', 'Shape Layer 10', { anchor: [168.144086, 166.09828], position: [1.6875, -41.4375], scale: [-31, 31], rotation: -33, parent: 'shapeLayer55', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#8ac364'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer51', 'Shape Layer 9', { anchor: [168.144086, 166.09828], position: [1.6875, -107.4375], scale: [-29, 29], rotation: -20, parent: 'shapeLayer55', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#8ac364'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer52', 'Shape Layer 8', { anchor: [168.144086, 166.09828], position: [-1.8125, 16.5625], scale: [28, 28], rotation: 44, parent: 'shapeLayer55', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#8ac364'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer53', 'Shape Layer 7', { anchor: [168.144086, 166.09828], position: [-1.8125, -41.4375], scale: [31, 31], rotation: 33, parent: 'shapeLayer55', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#8ac364'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer54', 'Shape Layer 4', { anchor: [168.144086, 166.09828], position: [-1.8125, -107.4375], scale: [29, 29], rotation: 20, parent: 'shapeLayer55', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#8ac364'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer55', 'Shape Layer 1', { anchor: [-2.245429, 196.773875], position: [259, 596], rotation: -9 }, [
      group('Rectangle 1', [
        rect([6, 410], { roundness: 20 }),
        fill('#07a7c7'),
      ]),
    ]),
    shapeLayer('shapeLayer56', 'Shape Layer 6', { anchor: [166.911732, 153.91339], position: [1, -175], scale: [-28, 28], parent: 'shapeLayer55', masks: [mask([[298, -397], [168.620285, -406.717041], [168.543121, 143.551025], [297.761108, 143.446655]])] }, [
      group('Ellipse 1', [
        ellipse([656, 656]),
        fill('#8ac364'),
      ], { position: [-67, -71] }),
    ]),
    shapeLayer('shapeLayer57', 'Shape Layer 5', { anchor: [166.911732, 153.91339], position: [-1, -175], scale: [28, 28], parent: 'shapeLayer55', masks: [mask([[298, -397], [168.620285, -406.717041], [168.543121, 143.551025], [297.806946, 145.678711]])] }, [
      group('Ellipse 1', [
        ellipse([656, 656]),
        fill('#8ac364'),
      ], { position: [-67, -71] }),
    ]),
    shapeLayer('shapeLayer58', 'Shape Layer 20', { anchor: [168.144086, 166.09828], position: [1.6875, 16.5625], scale: [-28, 28], rotation: -44, parent: 'shapeLayer64', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#18979e'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer59', 'Shape Layer 19', { anchor: [168.144086, 166.09828], position: [1.6875, -41.4375], scale: [-31, 31], rotation: -33, parent: 'shapeLayer64', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#18979e'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer60', 'Shape Layer 18', { anchor: [168.144086, 166.09828], position: [1.6875, -107.4375], scale: [-29, 29], rotation: -20, parent: 'shapeLayer64', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#18979e'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer61', 'Shape Layer 17', { anchor: [168.144086, 166.09828], position: [-1.8125, 16.5625], scale: [28, 28], rotation: 44, parent: 'shapeLayer64', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#18979e'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer62', 'Shape Layer 16', { anchor: [168.144086, 166.09828], position: [-1.8125, -41.4375], scale: [31, 31], rotation: 33, parent: 'shapeLayer64', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#18979e'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer63', 'Shape Layer 15', { anchor: [168.144086, 166.09828], position: [-1.8125, -107.4375], scale: [29, 29], rotation: 20, parent: 'shapeLayer64', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#18979e'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer64', 'Shape Layer 14', { anchor: [2.149243, 198.633786], position: [288, 600], scale: [80, 80], rotation: 12 }, [
      group('Rectangle 1', [
        rect([6, 410], { roundness: 20 }),
        fill('#07a7c7'),
      ]),
    ]),
    shapeLayer('shapeLayer65', 'Shape Layer 13', { anchor: [166.911732, 153.91339], position: [1, -175], scale: [-28, 28], parent: 'shapeLayer64', masks: [mask([[298, -397], [168.620285, -406.717041], [168.543121, 143.551025], [297.761108, 143.446655]])] }, [
      group('Ellipse 1', [
        ellipse([656, 656]),
        fill('#18979e'),
      ], { position: [-67, -71] }),
    ]),
    shapeLayer('shapeLayer66', 'Shape Layer 12', { anchor: [166.911732, 153.91339], position: [-1, -175], scale: [28, 28], parent: 'shapeLayer64', masks: [mask([[298, -397], [168.620285, -406.717041], [168.543121, 143.551025], [297.806946, 145.678711]])] }, [
      group('Ellipse 1', [
        ellipse([656, 656]),
        fill('#18979e'),
      ], { position: [-67, -71] }),
    ]),
    shapeLayer('shapeLayer67', 'Shape Layer 29', { anchor: [168.144086, 166.09828], position: [1.6875, 16.5625], scale: [-28, 28], rotation: -44, enabled: false, parent: 'shapeLayer73', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#8ac364'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer68', 'Shape Layer 28', { anchor: [168.144086, 166.09828], position: [1.6875, -41.4375], scale: [-31, 31], rotation: -33, enabled: false, parent: 'shapeLayer73', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#8ac364'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer69', 'Shape Layer 27', { anchor: [168.144086, 166.09828], position: [1.6875, -107.4375], scale: [-29, 29], rotation: -20, enabled: false, parent: 'shapeLayer73', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#8ac364'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer70', 'Shape Layer 26', { anchor: [168.144086, 166.09828], position: [-1.8125, 16.5625], scale: [28, 28], rotation: 44, enabled: false, parent: 'shapeLayer73', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#18979e'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer71', 'Shape Layer 25', { anchor: [168.144086, 166.09828], position: [-1.8125, -41.4375], scale: [31, 31], rotation: 33, enabled: false, parent: 'shapeLayer73', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#18979e'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer72', 'Shape Layer 24', { anchor: [168.144086, 166.09828], position: [-1.8125, -107.4375], scale: [29, 29], rotation: 20, enabled: false, parent: 'shapeLayer73', masks: [mask([[298, -397], [168.620285, -406.717041], [168.620285, 258.282959], [298, 267.999939]])] }, [
      group('Ellipse 1', [
        ellipse([576, 576]),
        fill('#18979e'),
      ], { position: [5.452652, -71] }),
    ]),
    shapeLayer('shapeLayer73', 'Shape Layer 23', { anchor: [2.149243, 198.633786], position: [268, 600], scale: [71, 71], rotation: -23, enabled: false }, [
      group('Rectangle 1', [
        rect([6, 410], { roundness: 20 }),
        fill('#07a7c7'),
      ]),
    ]),
    shapeLayer('shapeLayer74', 'Shape Layer 22', { anchor: [166.911732, 153.91339], position: [1, -175], scale: [-28, 28], enabled: false, parent: 'shapeLayer73', masks: [mask([[298, -397], [168.620285, -406.717041], [168.543121, 143.551025], [297.761108, 143.446655]])] }, [
      group('Ellipse 1', [
        ellipse([656, 656]),
        fill('#8ac364'),
      ], { position: [-67, -71] }),
    ]),
    shapeLayer('shapeLayer75', 'Shape Layer 21', { anchor: [166.911732, 153.91339], position: [-1, -175], scale: [28, 28], enabled: false, parent: 'shapeLayer73', masks: [mask([[298, -397], [168.620285, -406.717041], [168.543121, 143.551025], [297.806946, 145.678711]])] }, [
      group('Ellipse 1', [
        ellipse([656, 656]),
        fill('#8ac364'),
      ], { position: [-67, -71] }),
    ]),
  ],
  { duration: 20, fps: 24 },
);

export const Plant2: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <AEComp comp={plant2Comp} style={style} />
);
