import type { CompData } from '../../ae';
import { makePart } from '../makePart';


/**
 * Street Light — 450×1080px, 11 layer
 * (precomp "Street Light" di After Effects; layer diurutkan dari ATAS ke BAWAH)
 */
export const streetLightComp: CompData = {
  name: 'Street Light',
  width: 450,
  height: 1080,
  layers: [
    {
      name: 'reflection',
      kind: 'shape',
      xf: { p: [773,540] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [7,62], round: 20 },
            { t: 'fill', color: '#b68fc1' },
          ],
          xf: { p: [-560.625,322.25] },
        },
        {
          t: 'group',
          name: 'Ellipse 4',
          items: [
            { t: 'ellipse', size: [8.5,8.5] },
            { t: 'fill', color: '#b68fc1' },
          ],
          xf: { p: [-560.875,266] },
        },
        {
          t: 'group',
          name: 'Ellipse 3',
          items: [
            { t: 'ellipse', size: [10.5,10.5] },
            { t: 'fill', color: '#b68fc1' },
          ],
          xf: { p: [-558.5,-202.5] },
        },
        {
          t: 'group',
          name: 'Ellipse 2',
          items: [
            { t: 'ellipse', size: [7,7] },
            { t: 'fill', color: '#b68fc1' },
          ],
          xf: { p: [-575.25,-246.25] },
        },
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [9.5,9.5] },
            { t: 'fill', color: '#b68fc1' },
          ],
          xf: { p: [-562.25,-356] },
        },
      ],
    },
    {
      name: 'Light',
      kind: 'shape',
      hidden: true,
      xf: { a: [-547,-284], p: [226,238] },
      contents: [
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [291,291] },
            { t: 'fill', color: '#ffffff', o: 20 },
          ],
          xf: { p: [-547,-284] },
        },
      ],
    },
    {
      name: 'decoration',
      kind: 'shape',
      xf: { p: [773,540] },
      contents: [
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [48,48] },
            { t: 'fill', color: '#7653a3' },
          ],
          xf: { p: [-546,-192] },
        },
      ],
    },
    {
      name: 'Lightbulb',
      kind: 'shape',
      xf: { p: [771.5,540] },
      contents: [
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [28.5,28.5] },
            { t: 'fill', color: '#fbe56e' },
          ],
          xf: { p: [-544.5,-283.5] },
        },
      ],
    },
    {
      name: 'top 3',
      kind: 'shape',
      xf: { p: [773,540] },
      contents: [
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [68,68] },
            { t: 'fill', color: '#652d8e' },
          ],
          xf: { p: [-546,-336] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[-391,-417],[-664,-417],[-664,-337],[-391,-337]],
          },
        },
        {
          mode: 'intersect',
          path: {
            v: [[-471,-346],[-650,-346],[-665,-331],[-650,-316],[-471,-316],[-456,-331]],
            i: [[8.28,0],[0,0],[0,-8.28],[-8.28,0],[0,0],[0,8.28]],
            o: [[0,0],[-8.28,0],[0,8.28],[0,0],[8.28,0],[0,-8.28]],
          },
        },
      ],
    },
    {
      name: 'top 2',
      kind: 'shape',
      xf: { p: [773,540] },
      contents: [
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [68,68] },
            { t: 'fill', color: '#7653a3' },
          ],
          xf: { p: [-546,-336] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[-391,-417],[-664,-417],[-664,-337],[-391,-337]],
          },
        },
      ],
    },
    {
      name: 'top',
      kind: 'shape',
      xf: { p: [773.5,543] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 2',
          items: [
            { t: 'rect', size: [74,18], round: 20 },
            { t: 'fill', color: '#7653a3' },
          ],
          xf: { p: [-546,-246] },
        },
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [94,16], round: 20 },
            { t: 'fill', color: '#7653a3' },
          ],
          xf: { p: [-546,-334] },
        },
      ],
    },
    {
      name: 'lightbulb mount',
      kind: 'shape',
      xf: { p: [773,540] },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[-546,-274.5],[-546,-249.75]],
                c: false,
              },
            },
            { t: 'stroke', color: '#cec5e2', width: 10 },
            { t: 'fill', color: '#fff0c6' },
          ],
        },
      ],
    },
    {
      name: 'Light glass',
      kind: 'shape',
      xf: { p: [771,540] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [63.5,95], round: 20 },
            { t: 'fill', color: '#a0dadb' },
          ],
          xf: { p: [-544.25,-295.5] },
        },
      ],
    },
    {
      name: 'shadows',
      kind: 'shape',
      xf: { p: [773,540] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 2',
          items: [
            { t: 'rect', size: [25,1046], round: 46 },
            { t: 'fill', color: '#652d8e' },
          ],
          xf: { p: [-546,140] },
        },
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [50,284], round: 46 },
            { t: 'fill', color: '#652d8e' },
          ],
          xf: { p: [-546,390] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[-524.25,-173],[-567.25,-173],[-578,-162.25],[-567.25,-151.5],[-524.25,-151.5],[-513.5,-162.25]],
            i: [[5.94,0],[0,0],[0,-5.94],[-5.94,0],[0,0],[0,5.94]],
            o: [[0,0],[-5.94,0],[0,5.94],[0,0],[5.94,0],[0,-5.94]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[-507.5,-241],[-583,-241],[-592.5,-231.5],[-583,-222],[-507.5,-222],[-498,-231.5]],
            i: [[5.25,0],[0,0],[0,-5.25],[-5.25,0],[0,0],[0,5.25]],
            o: [[0,0],[-5.25,0],[0,5.25],[0,0],[5.25,0],[0,-5.25]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[-517.75,368.5],[-574.75,368.5],[-580.5,374.25],[-574.75,380],[-517.75,380],[-512,374.25]],
            i: [[3.18,0],[0,0],[0,-3.18],[-3.18,0],[0,0],[0,3.18]],
            o: [[0,0],[-3.18,0],[0,3.18],[0,0],[3.18,0],[0,-3.18]],
          },
        },
      ],
    },
    {
      name: 'Main',
      kind: 'shape',
      xf: { p: [773,540] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 2',
          items: [
            { t: 'rect', size: [25,1046], round: 46 },
            { t: 'fill', color: '#7653a3' },
          ],
          xf: { p: [-546,140] },
        },
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [50,284], round: 46 },
            { t: 'fill', color: '#7653a3' },
          ],
          xf: { p: [-546,390] },
        },
      ],
      masks: [
        {
          mode: 'subtract',
          path: {
            v: [[-530,-332],[-563,-332],[-583,-312],[-583,-267],[-563,-247],[-530,-247],[-510,-267],[-510,-312]],
            i: [[11.05,0],[0,0],[0,-11.05],[0,0],[-11.05,0],[0,0],[0,11.05],[0,0]],
            o: [[0,0],[-11.05,0],[0,0],[0,11.05],[0,0],[11.05,0],[0,0],[0,-11.05]],
          },
        },
        {
          mode: 'intersect',
          path: {
            v: [[-310,-510],[-732,-510],[-752,-490],[-752,370],[-732,390],[-310,390],[-290,370],[-290,-490]],
            i: [[11.05,0],[0,0],[0,-11.05],[0,0],[-11.05,0],[0,0],[0,11.05],[0,0]],
            o: [[0,0],[-11.05,0],[0,0],[0,11.05],[0,0],[11.05,0],[0,0],[0,-11.05]],
          },
        },
        {
          mode: 'subtract',
          path: {
            v: [[-495.56,269.5],[-521.06,269.5],[-524.56,273],[-521.06,276.5],[-495.56,276.5],[-492.06,273]],
            i: [[1.93,0],[0,0],[0,-1.93],[-1.93,0],[0,0],[0,1.93]],
            o: [[0,0],[-1.93,0],[0,1.93],[0,0],[1.93,0],[0,-1.93]],
          },
        },
        {
          mode: 'subtract',
          path: {
            v: [[-571.06,270.25],[-618.56,270.25],[-621.81,273.5],[-618.56,276.75],[-571.06,276.75],[-567.81,273.5]],
            i: [[1.79,0],[0,0],[0,-1.79],[-1.79,0],[0,0],[0,1.79]],
            o: [[0,0],[-1.79,0],[0,1.79],[0,0],[1.79,0],[0,-1.79]],
          },
        },
      ],
    },
  ],
};

export const StreetLight = makePart(streetLightComp);
