import type { CompData } from '../../ae';
import { makePart } from '../makePart';


/**
 * Fence Home — 989×366px, 2 layer
 * (precomp "Fence Home" di After Effects; layer diurutkan dari ATAS ke BAWAH)
 */
export const fenceHomeComp: CompData = {
  name: 'Fence Home',
  width: 989,
  height: 366,
  layers: [
    {
      name: 'Shape Layer 1',
      kind: 'shape',
      xf: { p: [496.5,183] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [22,206], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-432,9] },
        },
        { t: 'repeater', copies: 10, pos: [83,0] },
      ],
    },
    {
      name: 'fence back',
      kind: 'shape',
      xf: { p: [1186.3,-240.2], s: [140,140] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [539,11], round: 20 },
            { t: 'stroke', color: '#c1c1c1', width: 0 },
            { t: 'fill', color: '#efcbea' },
            { t: 'repeater', copies: 2, pos: [0,59] },
          ],
          xf: { p: [-533.714,269] },
        },
      ],
    },
  ],
};

export const FenceHome = makePart(fenceHomeComp);
