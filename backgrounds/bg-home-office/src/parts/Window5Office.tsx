/**
 * AE composition "Window 5 Office" — 1920x1080, 24 fps, 13 layers (listed TOP -> BOTTOM).
 * Auto-converted from BGHOME_1.JSX (compCode export). Layers with `enabled: false` were switched off in the AE project.
 */
import React from 'react';
import { AEComp, compDef, shapeLayer, mask, rect, path, fill, stroke, group, repeater } from '../ae';

export const window5OfficeComp = compDef(
  'Window 5 Office',
  1920,
  1080,
  [
    shapeLayer('shapeLayer76', 'Shape Layer 1', { position: [960, 540] }, [
      group('Rectangle 1', [
        rect([302, 20], { roundness: 20 }),
        fill('#65a8dc'),
        repeater(12, { position: [0, 36] }),
      ], { position: [-551, -236] }),
    ]),
    shapeLayer('lWindowReflections', 'L Window Reflections ', { position: [2074, 642], opacity: 5, enabled: false, blend: 'add' }, [
      group('Rectangle 5', [
        rect([54, 12], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-687, 110] }),
      group('Rectangle 4', [
        rect([25, 12], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-396, 110] }),
      group('Rectangle 3', [
        rect([95, 12], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-568, 110] }),
      group('Rectangle 6', [
        rect([12, 232], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-766, -134] }),
      group('Rectangle 2', [
        rect([12, 150], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-349, -193] }),
      group('Rectangle 1', [
        rect([141, 12], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-601, -383] }),
    ]),
    shapeLayer('rWindowReflections', 'R Window Reflections', { position: [966, 642], opacity: 5, enabled: false, blend: 'add' }, [
      group('Rectangle 5', [
        rect([54, 12], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-687, 110] }),
      group('Rectangle 4', [
        rect([25, 12], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-396, 110] }),
      group('Rectangle 3', [
        rect([95, 12], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-568, 110] }),
      group('Rectangle 6', [
        rect([12, 232], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-766, -134] }),
      group('Rectangle 2', [
        rect([12, 150], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-349, -193] }),
      group('Rectangle 1', [
        rect([141, 12], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-601, -383] }),
    ]),
    shapeLayer('blinds', 'blinds', { position: [951.5, 637], enabled: false }, [
      group('Shape 1', [
        path([[-361, -338], [-707.5, -338], [-724.5, -318.5], [-377, -318.5]]),
        fill('#f1e6fa'),
      ]),
      repeater(5, { position: [0, 38] }),
      repeater(2, { position: [1107, 0], name: 'Repeater 2' }),
    ]),
    shapeLayer('blinds2', 'blinds 2', { position: [966, 642], opacity: 5, enabled: false }, [
      group('Rectangle 2', [
        rect([15, 31], { roundness: 10 }),
        fill('#000000'),
      ], { position: [-413, 12.5] }),
      group('Rectangle 1', [
        rect([8, 387]),
        fill('#000000'),
      ], { position: [-413, -180.5] }),
      repeater(2, { position: [1107, 0], name: 'Repeater 2' }),
    ]),
    shapeLayer('windowsTop', 'windows top', { position: [968.5, 645] }, [
      group('Rectangle 1', [
        rect([432, 30], { roundness: 34 }),
        fill('#3d79bd'),
        repeater(2, { position: [1107, 0] }),
      ], { position: [-559, -384.5] }),
    ]),
    shapeLayer('windows3', 'windows 3', { position: [2073, 620], opacity: 30, enabled: false, masks: [mask([[-230, -624], [-359.999878, -624], [-1084, 152], [-954, 152]]), mask([[16, -410], [-113.999878, -410], [-838, 366], [-708, 366]]), mask([[-160, -420], [-211.999878, -420], [-936, 356], [-884, 356]])] }, [
      group('Rectangle 1', [
        rect([392, 467]),
        fill('#d9dcef'),
        repeater(2, { position: [1107, 0] }),
      ], { position: [-557, -112] }),
    ]),
    shapeLayer('windows2', 'windows 2', { position: [966, 620], enabled: false, masks: [mask([[-224, -624], [-353.999878, -624], [-1084, 152], [-954, 152]]), mask([[22, -410], [-107.999878, -410], [-838, 366], [-708, 366]]), mask([[-154, -420], [-205.999878, -420], [-936, 356], [-884, 356]])] }, [
      group('Rectangle 1', [
        rect([328, 467]),
        fill('#4d87c6'),
        repeater(2, { position: [1107, 0] }),
      ], { position: [-557, -112] }),
    ]),
    shapeLayer('windows', 'windows', { position: [966, 620] }, [
      group('Rectangle 1', [
        rect([354, 489], { roundness: 5 }),
        stroke('#3d79bd', 26),
        fill('#28599c'),
        repeater(2, { position: [1107, 0] }),
      ], { position: [-557, -112] }),
    ]),
    shapeLayer('windowsShadow', 'windows shadow', { position: [966, 680], opacity: 5, enabled: false }, [
      group('Rectangle 1', [
        rect([418, 492]),
        stroke('#000000', 26),
        fill('#000000'),
        repeater(2, { position: [1107, 0] }),
      ], { position: [-557, -112] }),
    ]),
    shapeLayer('pelmetReflections', 'pelmet reflections', { position: [966, 642], opacity: 5, enabled: false, blend: 'add' }, [
      group('Rectangle 4', [
        rect([439.5, 6.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-185.25, -433.75] }),
      group('Rectangle 6', [
        rect([25.5, 6.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [558.75, -433.75] }),
      group('Rectangle 5', [
        rect([200.5, 6.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [727.75, -433.75] }),
      group('Rectangle 3', [
        rect([101.5, 6.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [310.75, -433.75] }),
      group('Rectangle 2', [
        rect([40.5, 6.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-602.75, -433.75] }),
      group('Rectangle 1', [
        rect([155.5, 6.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [-756.75, -433.75] }),
    ]),
    shapeLayer('pelmet', 'pelmet', { position: [966, 618], enabled: false }, [
      group('Rectangle 1', [
        rect([1693, 27], { roundness: 24 }),
        fill('#c5c9e6'),
      ], { position: [0, -438] }),
    ]),
    shapeLayer('pelmetShadow', 'pelmet shadow', { position: [966, 634], opacity: 5, enabled: false }, [
      group('Rectangle 1', [
        rect([1666, 32]),
        fill('#000000'),
      ], { position: [0, -438] }),
    ]),
  ],
  { duration: 20, fps: 24 },
);

export const Window5Office: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <AEComp comp={window5OfficeComp} style={style} />
);
