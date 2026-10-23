import type { SceneryData } from '../types';

/**
 * BackClouds — shape layer "BG SHADOWS" dari comp "BG House".
 * Posisi/skala/blend layer ini diatur di src/config.ts (id: 'back-clouds').
 */
export const backClouds: SceneryData = {
  name: 'BG SHADOWS',
  contents: [
    {
      t: 'group',
      name: 'Ellipse 6',
      items: [
        { t: 'ellipse', size: [440,440] },
        { t: 'fill', color: '#abdff4' },
      ],
      xf: { p: [956.222,312] },
    },
    {
      t: 'group',
      name: 'Ellipse 5',
      items: [
        { t: 'ellipse', size: [440,440] },
        { t: 'fill', color: '#abdff4' },
      ],
      xf: { p: [1041.778,110] },
    },
    {
      t: 'group',
      name: 'Ellipse 4',
      items: [
        { t: 'ellipse', size: [440,440] },
        { t: 'fill', color: '#abdff4' },
      ],
      xf: { p: [792,-120.889] },
    },
    {
      t: 'group',
      name: 'Ellipse 7',
      items: [
        { t: 'ellipse', size: [440,440] },
        { t: 'fill', color: '#abdff4' },
      ],
      xf: { p: [-472.889,-221.778] },
    },
    {
      t: 'group',
      name: 'Ellipse 3',
      items: [
        { t: 'ellipse', size: [440,440] },
        { t: 'fill', color: '#abdff4' },
      ],
      xf: { p: [329.333,-272] },
    },
    {
      t: 'group',
      name: 'Ellipse 2',
      items: [
        { t: 'ellipse', size: [368,368] },
        { t: 'fill', color: '#abdff4' },
      ],
      xf: { p: [-722,-88.889] },
    },
    {
      t: 'group',
      name: 'Ellipse 10',
      items: [
        { t: 'ellipse', size: [512,512] },
        { t: 'fill', color: '#abdff4' },
      ],
      xf: { p: [1254.667,353.556] },
    },
    {
      t: 'group',
      name: 'Ellipse 9',
      items: [
        { t: 'ellipse', size: [512,512] },
        { t: 'fill', color: '#abdff4' },
      ],
      xf: { p: [1290.222,82.444] },
    },
    {
      t: 'group',
      name: 'Ellipse 8',
      items: [
        { t: 'ellipse', size: [512,512] },
        { t: 'fill', color: '#abdff4' },
      ],
      xf: { p: [-1203.111,198] },
    },
    {
      t: 'group',
      name: 'Ellipse 1',
      items: [
        { t: 'ellipse', size: [512,512] },
        { t: 'fill', color: '#abdff4' },
      ],
      xf: { p: [-754.222,211.333] },
    },
  ],
  masks: [
    {
      mode: 'add',
      path: {
        v: [[1286,-676],[-1320,-676],[-1320,456],[1286,456]],
      },
    },
  ],
};
