import type { CompData } from '../../ae';
import { makePart } from '../makePart';


/**
 * Tree 1 — 700×1080px, 9 layer
 * (precomp "Tree 1" di After Effects; layer diurutkan dari ATAS ke BAWAH)
 */
export const tree1Comp: CompData = {
  name: 'Tree 1',
  width: 700,
  height: 1080,
  layers: [
    {
      name: 'Shape Layer 70',
      kind: 'shape',
      xf: { a: [359.5,145.5], p: [250,467.5] },
      contents: [
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [30,30] },
            { t: 'fill', color: '#a0dadb' },
          ],
          xf: { p: [359.5,145.5] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[383.5,145],[338,145],[338,165],[383.5,165]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 69',
      kind: 'shape',
      xf: { a: [359.5,145.5], p: [437.5,490.5] },
      contents: [
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [30,30] },
            { t: 'fill', color: '#a0dadb' },
          ],
          xf: { p: [359.5,145.5] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[383.5,145],[338,145],[338,165],[383.5,165]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 76',
      kind: 'shape',
      xf: { a: [359.5,145.5], p: [392,282] },
      contents: [
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [30,30] },
            { t: 'fill', color: '#a0dadb' },
          ],
          xf: { p: [359.5,145.5] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[383.5,145],[338,145],[338,165],[383.5,165]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 73',
      kind: 'shape',
      xf: { a: [359.5,145.5], p: [301,208] },
      contents: [
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [30,30] },
            { t: 'fill', color: '#a0dadb' },
          ],
          xf: { p: [359.5,145.5] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[383.5,145],[338,145],[338,165],[383.5,165]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 68',
      kind: 'shape',
      xf: { a: [359.5,145.5], p: [315.5,374] },
      contents: [
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [30,30] },
            { t: 'fill', color: '#a0dadb' },
          ],
          xf: { p: [359.5,145.5] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[383.5,145],[338,145],[338,165],[383.5,165]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 66',
      kind: 'shape',
      xf: { a: [359.5,145.5], p: [304,566.5], s: [60,60] },
      contents: [
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [30,30] },
            { t: 'fill', color: '#a0dadb' },
          ],
          xf: { p: [359.5,145.5] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[383.5,145],[338,145],[338,165],[383.5,165]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 65',
      kind: 'shape',
      blend: 'add',
      xf: { p: [350,540], o: 5 },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [9,235], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-14.5,246.5] },
        },
      ],
    },
    {
      name: 'Shape Layer 2',
      kind: 'shape',
      xf: { a: [554,-139], p: [346,401] },
      contents: [
        {
          t: 'group',
          name: 'Ellipse 2',
          items: [
            { t: 'ellipse', size: [364,364] },
            { t: 'fill', color: '#66c6c2' },
          ],
          xf: { p: [554,-58] },
        },
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [272,272] },
            { t: 'fill', color: '#66c6c2' },
          ],
          xf: { p: [554,-266] },
        },
      ],
    },
    {
      name: 'Shape Layer 3',
      kind: 'shape',
      xf: { a: [554,199], p: [346,739] },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[554,10],[554,388]],
                c: false,
              },
            },
            { t: 'stroke', color: '#7a8d9c', width: 40 },
            { t: 'fill', color: '#92b859' },
          ],
        },
      ],
    },
  ],
};

export const Tree1 = makePart(tree1Comp);
