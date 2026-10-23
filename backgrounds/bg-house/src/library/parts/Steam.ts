import type { CompData } from '../../ae';
import { makePart } from '../makePart';


/**
 * Steam — 200×200px, 1 layer
 * (precomp "Steam" di After Effects; layer diurutkan dari ATAS ke BAWAH)
 */
export const steamComp: CompData = {
  name: 'Steam',
  width: 200,
  height: 200,
  layers: [
    {
      name: 'steam',
      kind: 'shape',
      xf: { p: [513,130], o: 30 },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 5',
          items: [
            { t: 'rect', size: [54,20], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-431,17] },
        },
        {
          t: 'group',
          name: 'Rectangle 4',
          items: [
            { t: 'rect', size: [152,20], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-408,-3] },
        },
        {
          t: 'group',
          name: 'Rectangle 3',
          items: [
            { t: 'rect', size: [123,20], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-417.25,-23] },
        },
        {
          t: 'group',
          name: 'Rectangle 2',
          items: [
            { t: 'rect', size: [152,20], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-408,-43] },
        },
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [152,20], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-408,-63] },
        },
      ],
      masks: [
        {
          mode: 'subtract',
          path: {
            v: [[-436.75,-53.5],[-484,-53.5],[-494.25,-43.25],[-484,-33],[-436.75,-33],[-426.5,-43.25]],
            i: [[5.66,0],[0,0],[0,-5.66],[-5.66,0],[0,0],[0,5.66]],
            o: [[0,0],[-5.66,0],[0,5.66],[0,0],[5.66,0],[0,-5.66]],
          },
        },
        {
          mode: 'subtract',
          path: {
            v: [[-331.37,-53],[-377.12,-53],[-387,-43.12],[-377.12,-33.25],[-331.37,-33.25],[-321.5,-43.12]],
            i: [[5.45,0],[0,0],[0,-5.45],[-5.45,0],[0,0],[0,5.45]],
            o: [[0,0],[-5.45,0],[0,5.45],[0,0],[5.45,0],[0,-5.45]],
          },
        },
        {
          mode: 'subtract',
          path: {
            v: [[-444.75,-13.25],[-487.5,-13.25],[-497.75,-3],[-487.5,7.25],[-444.75,7.25],[-434.5,-3]],
            i: [[5.66,0],[0,0],[0,-5.66],[-5.66,0],[0,0],[0,5.66]],
            o: [[0,0],[-5.66,0],[0,5.66],[0,0],[5.66,0],[0,-5.66]],
          },
        },
        {
          mode: 'subtract',
          path: {
            v: [[-335.75,-12.75],[-411,-12.75],[-421,-2.75],[-411,7.25],[-335.75,7.25],[-325.75,-2.75]],
            i: [[5.52,0],[0,0],[0,-5.52],[-5.52,0],[0,0],[0,5.52]],
            o: [[0,0],[-5.52,0],[0,5.52],[0,0],[5.52,0],[0,-5.52]],
          },
        },
      ],
    },
  ],
};

export const Steam = makePart(steamComp);
