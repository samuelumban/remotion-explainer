import type { CompData } from '../../ae';
import { makePart } from '../makePart';


/**
 * Little Plant 1 — 200×200px, 2 layer
 * (precomp "Little Plant 1" di After Effects; layer diurutkan dari ATAS ke BAWAH)
 */
export const littlePlant1Comp: CompData = {
  name: 'Little Plant 1',
  width: 200,
  height: 200,
  layers: [
    {
      name: 'Shape Layer 5',
      kind: 'shape',
      xf: { a: [390,291.135], p: [102,71.135] },
      contents: [
        {
          t: 'group',
          name: 'Shape 4',
          items: [
            {
              t: 'path',
              path: {
                v: [[389.75,307.5],[376.11,291.19],[356.88,301]],
                i: [[0,0],[12.49,2.57],[0,0]],
                o: [[0,0],[-12.49,-2.57],[0,0]],
                c: false,
              },
            },
            { t: 'fill', color: '#a0ca5f' },
          ],
        },
        {
          t: 'group',
          name: 'Shape 3',
          items: [
            {
              t: 'path',
              path: {
                v: [[391.38,307.38],[406.23,293.11],[423.13,302.25]],
                i: [[0,0],[-12.52,1.73],[0,0]],
                o: [[0,0],[12.52,-1.73],[0,0]],
                c: false,
              },
            },
            { t: 'fill', color: '#a0ca5f' },
          ],
        },
        {
          t: 'group',
          name: 'Shape 2',
          items: [
            {
              t: 'path',
              path: {
                v: [[388.88,287.25],[382.81,275.42],[370.25,279.75]],
                i: [[0,0],[6.81,2.8],[0,0]],
                o: [[0,0],[-6.81,-2.8],[0,0]],
                c: false,
              },
            },
            { t: 'fill', color: '#a0ca5f' },
          ],
        },
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[391.13,286.88],[399.6,275.77],[412.25,281.75]],
                i: [[0,0],[-6.61,1.48],[0,0]],
                o: [[0,0],[7.9,-1.77],[0,0]],
                c: false,
              },
            },
            { t: 'fill', color: '#a0ca5f' },
          ],
        },
      ],
    },
    {
      name: 'Shape Layer 4',
      kind: 'shape',
      xf: { a: [290.5,324.5], p: [102.5,104.5] },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[290.5,362],[290.5,287]],
                c: false,
              },
            },
            { t: 'stroke', color: '#a0ca5f', width: 3, cap: 2 },
            { t: 'fill', color: '#b2b2b2' },
          ],
        },
      ],
    },
  ],
};

export const LittlePlant1 = makePart(littlePlant1Comp);
