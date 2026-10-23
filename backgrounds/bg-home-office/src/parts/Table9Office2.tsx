/**
 * AE composition "Table 9 Office 2" — 1000x601, 24 fps, 8 layers (listed TOP -> BOTTOM).
 * Auto-converted from BGHOME_1.JSX (compCode export). Layers with `enabled: false` were switched off in the AE project.
 */
import React from 'react';
import { AEComp, compDef, shapeLayer, nullLayer, mask, rect, fill, group, repeater } from '../ae';

export const table9Office2Comp = compDef(
  'Table 9 Office 2',
  1000,
  601,
  [
    shapeLayer('tableReflections', 'table reflections', { position: [504, 115.5], opacity: 5, enabled: false, blend: 'add' }, [
      group('Rectangle 14', [
        rect([360, 12], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-86, 42] }),
      group('Rectangle 13', [
        rect([162, 15], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [319, 42.5] }),
      group('Rectangle 12', [
        rect([83, 20], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [341.5, 96] }),
      group('Rectangle 11', [
        rect([190, 30], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [204, 141] }),
      group('Rectangle 10', [
        rect([233, 30], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-99.5, 119] }),
      group('Rectangle 9', [
        rect([108, 26], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-211, 278] }),
      group('Rectangle 8', [
        rect([204, 21], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [12, 207.5] }),
      group('Rectangle 7', [
        rect([315, 21], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [213.5, 289.5] }),
      group('Rectangle 6', [
        rect([8, 15], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [366, 363.5] }),
      group('Rectangle 5', [
        rect([11, 11], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-299.5, 363.5] }),
      group('Rectangle 4', [
        rect([12, 12], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-378, 361] }),
      group('Rectangle 3', [
        rect([49, 19], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-369.5, 301.5] }),
      group('Rectangle 2', [
        rect([55, 24], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-339.5, 97] }),
      group('Rectangle 1', [
        rect([102, 14], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-366, 42] }),
    ]),
    nullLayer('null96', 'Null 96', { position: [492.75, 499.25], scale: [110, 110] }),
    shapeLayer('table2', 'Table - 2', { position: [-126.204545, -459.75], parent: 'null96' }, [
      group('Rectangle 1', [
        rect([767, 28], { roundness: 104 }),
        fill('#e0a579'),
      ], { position: [129, 154] }),
    ]),
    shapeLayer('table5', 'Table - 5', { position: [-105.295455, -308.568182], enabled: false, parent: 'null96', masks: [mask([[490.068207, -2.568176], [-279.022736, -2.568176], [-279.022736, 31.068176], [490.068207, 31.068176]])] }, [
      group('Rectangle 1', [
        rect([728, 248]),
        fill('#965b36'),
      ], { position: [107.090909, 137] }),
    ]),
    shapeLayer('table6', 'Table - 6', { position: [-105.295455, -308.568182], parent: 'null96', masks: [mask([[475.522736, -10.75], [-272.659088, -10.75], [-272.659088, 31.068192], [475.522736, 31.068192]])] }, [
      group('Rectangle 4', [
        rect([25, 310]),
        fill('#854f2e'),
      ], { position: [449.818182, 155.181818] }),
      group('Rectangle 3', [
        rect([25, 310]),
        fill('#854f2e'),
      ], { position: [398.909091, 155.181818] }),
      group('Rectangle 2', [
        rect([25, 310]),
        fill('#854f2e'),
      ], { position: [-189.272727, 155.181818] }),
      group('Rectangle 1', [
        rect([25, 310]),
        fill('#854f2e'),
      ], { position: [-240.181818, 155.181818] }),
    ]),
    shapeLayer('table4', 'Table - 4', { position: [-105.295455, -272.204545], parent: 'null96' }, [
      group('Rectangle 4', [
        rect([25, 380]),
        fill('#a36742'),
      ], { position: [449.818182, 155.181818] }),
      group('Rectangle 3', [
        rect([25, 380]),
        fill('#a36742'),
      ], { position: [398.909091, 155.181818] }),
      group('Rectangle 2', [
        rect([25, 380]),
        fill('#a36742'),
      ], { position: [-189.272727, 155.181818] }),
      group('Rectangle 1', [
        rect([25, 380]),
        fill('#a36742'),
      ], { position: [-240.181818, 155.181818] }),
    ]),
    shapeLayer('tableLegsShadow', 'table legs shadow', { position: [-18.204545, -366.522727], opacity: 10, enabled: false, parent: 'null96', masks: [mask([[428, 164.5], [-548, 164.5], [-548, 338.5], [428, 338.5]])] }, [
      group('Rectangle 1', [
        rect([24, 103], { roundness: 8 }),
        fill('#000000'),
      ], { position: [-318.25, 327.5] }),
      repeater(2, { position: [72, 0] }),
      repeater(2, { position: [604, 0], name: 'Repeater 2' }),
    ]),
    shapeLayer('tableLegs', 'table legs', { position: [-18.204545, -379.25], enabled: false, parent: 'null96' }, [
      group('Rectangle 1', [
        rect([24, 103], { roundness: 8 }),
        fill('#7b7fab'),
      ], { position: [-318.25, 327.5] }),
      repeater(2, { position: [72, 0] }),
      repeater(2, { position: [604, 0], name: 'Repeater 2' }),
    ]),
  ],
  { duration: 20, fps: 24 },
);

export const Table9Office2: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <AEComp comp={table9Office2Comp} style={style} />
);
