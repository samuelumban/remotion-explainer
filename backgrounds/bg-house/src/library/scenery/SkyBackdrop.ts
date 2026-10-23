import type { SceneryData } from '../types';

/**
 * SkyBackdrop — shape layer "Shape Layer 1" dari comp "BG House".
 * Posisi/skala/blend layer ini diatur di src/config.ts (id: 'sky-backdrop').
 */
export const skyBackdrop: SceneryData = {
  name: 'Shape Layer 1',
  contents: [
    {
      t: 'group',
      name: 'Rectangle 1',
      items: [
        { t: 'rect', size: [2612,1492] },
        { t: 'fill', color: '#abdff5' },
      ],
      xf: { p: [-2,-6] },
    },
  ],
};
