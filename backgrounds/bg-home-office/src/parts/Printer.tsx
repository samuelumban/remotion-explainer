/**
 * AE composition "Printer" — 365x340, 24 fps, 8 layers (listed TOP -> BOTTOM).
 * Auto-converted from BGHOME_1.JSX (compCode export). Layers with `enabled: false` were switched off in the AE project.
 */
import React from 'react';
import { AEComp, compDef, shapeLayer, mask, rect, fill, group, repeater } from '../ae';

export const printerComp = compDef(
  'Printer',
  365,
  340,
  [
    shapeLayer('reflections', 'reflections', { position: [-405.5, 134], opacity: 5, enabled: false, blend: 'add' }, [
      group('Rectangle 9', [
        rect([70, 8.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [567.25, 51.75] }),
      group('Rectangle 8', [
        rect([20, 8.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [636, 51.75] }),
      group('Rectangle 7', [
        rect([16, 4], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [531.25, -6.75] }),
      group('Rectangle 6', [
        rect([18.75, 4.75], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [641.375, -6.125] }),
      group('Rectangle 5', [
        rect([11.5, 3.75], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [639.75, 111.875] }),
      group('Rectangle 4', [
        rect([11.25, 3.75], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [529.625, 111.375] }),
      group('Rectangle 3', [
        rect([11.5, 11.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [501.25, 52.25] }),
      group('Rectangle 2', [
        rect([11.5, 11.5], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [667.25, 51.25] }),
      group('Rectangle 1', [
        rect([96.75, 10.75], { roundness: 20 }),
        fill('#ffffff'),
      ], { position: [575.375, 79.625] }),
    ]),
    shapeLayer('printer7', 'Printer - 7', { position: [-445.5, 134] }, [
      group('Rectangle 1', [
        rect([8.5, 8.5], { roundness: 20 }),
        fill('#3d79bd'),
        repeater(3, { position: [-15, 0] }),
      ], { position: [704.25, 79.25] }),
    ]),
    shapeLayer('printer6', 'Printer - 6', { position: [-445.5, 134], masks: [mask([[796, 10.5], [467.5, 10.5], [467.5, 120], [796, 120]]), mask([[665.875, 99.75], [584.375, 99.75], [577, 107.125], [584.375, 114.5], [665.875, 114.5], [673.25, 107.125]], { inTangents: [[4.07312, 0], [0, 0], [0, -4.07309], [-4.07312, 0], [0, 0], [0, 4.073105]], outTangents: [[0, 0], [-4.07312, 0], [0, 4.073105], [0, 0], [4.07312, 0], [0, -4.07309]], mode: 'subtract' })] }, [
      group('Rectangle 1', [
        rect([150, 50.5], { roundness: 20 }),
        fill('#65a8dc'),
      ], { position: [625, 133.75] }),
    ]),
    shapeLayer('printer5', 'Printer - 5', { position: [-445.5, 134], masks: [mask([[796, 10.5], [467.5, 10.5], [467.5, 120], [796, 120]])] }, [
      group('Rectangle 1', [
        rect([150, 50.5], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [625, 116.75] }),
    ]),
    shapeLayer('printer4', 'Printer - 4', { position: [-447.5, 134], masks: [mask([[680.5, 8.5], [575, 8.5], [555, 28.5], [555, 47.5], [575, 67.5], [680.5, 67.5], [700.5, 47.5], [700.5, 28.5]], { inTangents: [[11.045715, 0], [0, 0], [0, -11.0457], [0, 0], [-11.045715, 0], [0, 0], [0, 11.0457], [0, 0]], outTangents: [[0, 0], [-11.045715, 0], [0, 0], [0, 11.0457], [0, 0], [11.045715, 0], [0, 0], [0, -11.0457]] })] }, [
      group('Rectangle 1', [
        rect([197, 108], { roundness: 20 }),
        fill('#65a8dc'),
      ], { position: [627.5, 96] }),
    ]),
    shapeLayer('printer3', 'Printer - 3', { position: [-446.5, 134.5] }, [
      group('Rectangle 1', [
        rect([87.5, 90]),
        fill('#ffffff'),
      ], { position: [626.25, 7] }),
    ]),
    shapeLayer('printer2', 'Printer - 2', { position: [-447.5, 134], masks: [mask([[796, 10.5], [467.5, 10.5], [467.5, 120], [796, 120]])] }, [
      group('Rectangle 1', [
        rect([197, 108], { roundness: 20 }),
        fill('#65a8dc'),
      ], { position: [627.5, 96] }),
    ]),
    shapeLayer('printer1', 'Printer - 1', { position: [-446.5, 136] }, [
      group('Rectangle 1', [
        rect([156.5, 83.5], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [626.75, 31.25] }),
    ]),
  ],
  { duration: 20, fps: 24 },
);

export const Printer: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <AEComp comp={printerComp} style={style} />
);
