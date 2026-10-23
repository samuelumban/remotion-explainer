import type { SceneryData } from '../types';

/**
 * Road — shape layer "Ground 2" dari comp "BG House".
 * Posisi/skala/blend layer ini diatur di src/config.ts (id: 'road').
 */
export const road: SceneryData = {
  name: 'Ground 2',
  contents: [
    {
      t: 'group',
      name: 'Rectangle 1',
      items: [
        { t: 'rect', size: [7877,1600] },
        { t: 'fill', color: '#7a8d9c' },
      ],
      xf: { p: [-110,1270] },
    },
  ],
};
