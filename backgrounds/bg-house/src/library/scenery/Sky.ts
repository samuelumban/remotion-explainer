import type { SceneryData } from '../types';

/**
 * Sky — shape layer "Shape Layer 2" dari comp "BG House".
 * Posisi/skala/blend layer ini diatur di src/config.ts (id: 'sky').
 */
export const sky: SceneryData = {
  name: 'Shape Layer 2',
  contents: [
    {
      t: 'group',
      name: 'Rectangle 1',
      items: [
        { t: 'rect', size: [7680,4320] },
        { t: 'fill', color: '#d2edf5' },
      ],
    },
  ],
};
