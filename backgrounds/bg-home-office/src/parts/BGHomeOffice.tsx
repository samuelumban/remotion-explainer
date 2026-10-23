/**
 * AE composition "BG Home Office" — 2560x1440, 24 fps, 21 layers (listed TOP -> BOTTOM).
 * Auto-converted from BGHOME_1.JSX (compCode export). Layers with `enabled: false` were switched off in the AE project.
 */
import React from 'react';
import { AEComp, compDef, shapeLayer, compLayer, fillEffect, rect, ellipse, fill, stroke, group, repeater } from '../ae';
import { table9Office2Comp } from './Table9Office2';
import { laptopBack2Comp } from './LaptopBack2';
import { mugComp } from './Mug';
import { tablePicture3BackComp } from './TablePicture3Back';
import { chairFrontComp } from './ChairFront';
import { drawerComp } from './Drawer';
import { printerComp } from './Printer';
import { plantComp } from './Plant';
import { plant2Comp } from './Plant2';
import { window5OfficeComp } from './Window5Office';
import { smallTree4Comp } from './SmallTree4';
import { clockComp } from './Clock';
import { shelfWithBooksComp } from './ShelfWithBooks';

export const bgHomeOfficeComp = compDef(
  'BG Home Office',
  2560,
  1440,
  [
    shapeLayer('rugParticles', 'Rug particles', { anchor: [-43.125, 390.5], position: [856.875, 1200.5], scale: [100, 68], opacity: 15, blend: 'overlay' }, [
      group('Rectangle 4', [
        rect([20, 6]),
        fill('#000000'),
      ], { position: [-843.5, 449] }),
      group('Rectangle 2', [
        rect([20, 6]),
        fill('#000000'),
      ], { position: [-839.5, 392] }),
      group('Rectangle 5', [
        rect([20, 6]),
        fill('#000000'),
      ], { position: [-837.5, 332] }),
      group('Rectangle 7', [
        rect([20, 6]),
        fill('#000000'),
      ], { position: [-881.25, 417] }),
      group('Rectangle 6', [
        rect([20, 6]),
        fill('#000000'),
      ], { position: [-878.5, 360] }),
      repeater(30, { position: [85, 0] }),
      repeater(3, { position: [0, 167], name: 'Repeater 2' }),
    ]),
    shapeLayer('shapeLayer2', 'Shape Layer 2', { position: [1294, 765] }, [
      group('Rectangle 1', [
        rect([2621, 312]),
        fill('#28599c'),
      ], { position: [-14, 538] }),
    ]),
    compLayer('table9Office2_comp', 'Table 9 Office 2', table9Office2Comp, { anchor: [500, 500.5], position: [1224, 1188], collapse: true }),
    compLayer('laptopBack2_comp', 'Laptop Back 2', laptopBack2Comp, { anchor: [230, 261], position: [1213, 835.6], scale: [110, 110], collapse: true }),
    compLayer('mug_comp', 'Mug', mugComp, { anchor: [76, 105], position: [281, 146.5], parent: 'table9Office2_comp', collapse: true }),
    compLayer('tablePicture3Back_comp', 'Table Picture 3 Back', tablePicture3BackComp, { anchor: [106, 149.5], position: [729, 147.5], parent: 'table9Office2_comp', collapse: true }),
    compLayer('chairFront_comp', 'Chair Front', chairFrontComp, { anchor: [302.100525, 506.20155], position: [1228, 1151], scale: [155, 155], collapse: true }),
    compLayer('drawer_comp', 'Drawer', drawerComp, { anchor: [430.5, 341.5], position: [350, 1167], collapse: true }),
    compLayer('printer_comp', 'Printer', printerComp, { anchor: [178.5, 253], position: [444.5, 81.5], parent: 'drawer_comp', collapse: true }),
    compLayer('plant_comp', 'Plant', plantComp, { anchor: [322, 402], position: [2446, 946], scale: [80, 80], effects: [fillEffect('#3d79bd')] }),
    compLayer('plant2_comp', 'Plant 2', plant2Comp, { anchor: [322, 402], position: [768, 946], scale: [80, 80], effects: [fillEffect('#3d79bd')] }),
    compLayer('window5Office_comp', 'Window 5 Office', window5OfficeComp, { anchor: [960, 510], position: [1272, 534], collapse: true }),
    compLayer('smallTree4_comp', 'Small Tree 4', smallTree4Comp, { anchor: [185.610193, 806.328042], position: [1632.545441, 1144], scale: [60, 60], effects: [fillEffect('#3d79bd')], collapse: true }),
    shapeLayer('clocks4', 'Clocks - 4', { anchor: [15.75, -257], position: [15.455427, -298.02733], rotation: 244, parent: 'clocks1' }, [
      group('Rectangle 1', [
        rect([12, 63], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [15.75, -282.5] }),
    ]),
    shapeLayer('clocks3', 'Clocks - 3', { position: [0, -36], parent: 'clocks1' }, [
      group('Rectangle 1', [
        rect([16, 50], { roundness: 20 }),
        fill('#3d79bd'),
      ], { position: [15.75, -282.5] }),
    ]),
    shapeLayer('clocks1', 'Clocks - 1', { anchor: [15.75, -293.5], position: [1934.75, 337.5], scale: [80, 80] }, [
      group('Ellipse 1', [
        ellipse([152, 152]),
        stroke('#3d79bd', 18),
        fill('#5b9ad3'),
      ], { position: [16, -298] }),
    ]),
    compLayer('clock_comp', 'Clock', clockComp, { anchor: [148, 150], position: [1456, 316], scale: [72, 72], enabled: false, parent: 'window5Office_comp', collapse: true }),
    compLayer('shelfWithBooks_comp', 'Shelf with books', shelfWithBooksComp, { anchor: [1280, 720], position: [1244, 720] }),
    shapeLayer('picturesOnWall', 'Pictures on wall', { position: [1493, 675] }, [
      group('Rectangle 3', [
        rect([88, 90], { roundness: 10 }),
        stroke('#3d79bd', 14),
        fill('#5b9ad3'),
      ], { position: [-134.5, -215] }),
      group('Rectangle 2', [
        rect([180, 90], { roundness: 10 }),
        stroke('#3d79bd', 14),
        fill('#5b9ad3'),
      ], { position: [-56.5, -358] }),
      group('Rectangle 1', [
        rect([120, 90], { roundness: 10 }),
        stroke('#3d79bd', 14),
        fill('#5b9ad3'),
      ], { position: [25.5, -215] }),
    ]),
    shapeLayer('bgShadows', 'BG Shadows', { anchor: [0, 80], position: [966, 724], opacity: 15, enabled: false, parent: 'window5Office_comp', blend: 'overlay' }, [
      group('Rectangle 5', [
        rect([228, 410], { roundness: 20 }),
        fill('#000000'),
      ], { position: [762, 231] }),
      group('Rectangle 4', [
        rect([584, 872], { roundness: 20 }),
        fill('#000000'),
      ], { position: [544, 24] }),
      group('Rectangle 3', [
        rect([466, 642], { roundness: 20 }),
        fill('#000000'),
      ], { position: [115, 99] }),
      group('Rectangle 2', [
        rect([308, 618], { roundness: 20 }),
        fill('#000000'),
      ], { position: [-198, 121] }),
      group('Rectangle 1', [
        rect([548, 633.157729], { roundness: 20 }),
        fill('#000000'),
      ], { position: [-557, -95] }),
    ]),
    shapeLayer('shapeLayer1', 'Shape Layer 1', { position: [1280, 720] }, [
      group('Rectangle 1', [
        rect([2560, 1440]),
        fill('#5089c9'),
      ]),
    ]),
  ],
  { duration: 20, fps: 24 },
);

export const BGHomeOffice: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <AEComp comp={bgHomeOfficeComp} style={style} />
);
