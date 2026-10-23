import type { CompData } from '../../ae';
import { makePart } from '../makePart';


/**
 * Little Plant 2 — 200×200px, 2 layer
 * (precomp "Little Plant 2" di After Effects; layer diurutkan dari ATAS ke BAWAH)
 */
export const littlePlant2Comp: CompData = {
  name: 'Little Plant 2',
  width: 200,
  height: 200,
  layers: [
    {
      name: 'Shape Layer 3',
      kind: 'shape',
      xf: { a: [293.875,268.57], p: [99.875,80.57] },
      contents: [
        {
          t: 'group',
          name: 'Shape 6',
          items: [
            {
              t: 'path',
              path: {
                v: [[292.13,242.5],[297.34,225.63],[314.13,226.5]],
                i: [[0,0],[-7.71,5.28],[0,0]],
                o: [[0,0],[7.66,-5.25],[0,0]],
                c: false,
              },
            },
            { t: 'fill', color: '#8ac364' },
          ],
          xf: { p: [-0.25,0] },
        },
        {
          t: 'group',
          name: 'Shape 5',
          items: [
            {
              t: 'path',
              path: {
                v: [[289,242.25],[283.49,225.71],[267.25,226.5]],
                i: [[0,0],[7.74,6.21],[0,0]],
                o: [[0,0],[-7.74,-6.21],[0,0]],
                c: false,
              },
            },
            { t: 'fill', color: '#8ac364' },
          ],
          xf: { p: [0.75,0] },
        },
        {
          t: 'group',
          name: 'Shape 4',
          items: [
            {
              t: 'path',
              path: {
                v: [[288.75,314],[279.24,293.86],[259.5,296.75]],
                i: [[0,0],[9.99,5.36],[0,0]],
                o: [[0,0],[-9.99,-5.36],[0,0]],
                c: false,
              },
            },
            { t: 'fill', color: '#8ac364' },
          ],
          xf: { p: [1,0] },
        },
        {
          t: 'group',
          name: 'Shape 3',
          items: [
            {
              t: 'path',
              path: {
                v: [[292.25,297.25],[306.22,273.19],[332,277.75]],
                i: [[0,0],[-14.03,7.19],[0,0]],
                o: [[0,0],[14.03,-7.19],[0,0]],
                c: false,
              },
            },
            { t: 'fill', color: '#8ac364' },
          ],
          xf: { p: [-0.5,16.5] },
        },
        {
          t: 'group',
          name: 'Shape 2',
          items: [
            {
              t: 'path',
              path: {
                v: [[288.75,283.5],[276.07,252.47],[248,255.25]],
                i: [[0,0],[15.82,8.22],[0,0]],
                o: [[0,0],[-15.82,-8.22],[0,0]],
                c: false,
              },
            },
            { t: 'fill', color: '#8ac364' },
          ],
          xf: { p: [0.25,0] },
        },
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[292.25,259],[306.96,229.58],[340,230.5]],
                i: [[0,0],[-15.29,10.58],[0,0]],
                o: [[0,0],[15.29,-10.58],[0,0]],
                c: false,
              },
            },
            { t: 'fill', color: '#8ac364' },
          ],
          xf: { p: [-0.5,25] },
        },
      ],
    },
    {
      name: 'Shape Layer 2',
      kind: 'shape',
      xf: { a: [290.5,299.25], p: [96.5,111.25] },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[290.5,362],[290.5,236.5]],
                c: false,
              },
            },
            { t: 'stroke', color: '#8ac364', width: 3, cap: 2 },
            { t: 'fill', color: '#b2b2b2' },
          ],
        },
      ],
    },
  ],
};

export const LittlePlant2 = makePart(littlePlant2Comp);
