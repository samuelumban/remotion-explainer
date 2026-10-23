import type { CompData } from '../../ae';
import { makePart } from '../makePart';


/**
 * Door 1 Home — 452×718px, 11 layer
 * (precomp "Door 1 Home" di After Effects; layer diurutkan dari ATAS ke BAWAH)
 */
export const door1HomeComp: CompData = {
  name: 'Door 1 Home',
  width: 452,
  height: 718,
  layers: [
    {
      name: 'Reflections 2',
      kind: 'shape',
      hidden: true,
      blend: 'add',
      xf: { p: [126,165.5], o: 5 },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 24',
          items: [
            { t: 'rect', size: [11.25,3.375], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [154.625,200.375] },
        },
        {
          t: 'group',
          name: 'Rectangle 22',
          items: [
            { t: 'rect', size: [41,8.5], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [128,320.25] },
        },
        {
          t: 'group',
          name: 'Rectangle 20',
          items: [
            { t: 'rect', size: [41,8.5], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [128,233.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 18',
          items: [
            { t: 'rect', size: [41,8.5], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [128,143.25] },
        },
        {
          t: 'group',
          name: 'Rectangle 21',
          items: [
            { t: 'rect', size: [41,8.5], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [61,320.25] },
        },
        {
          t: 'group',
          name: 'Rectangle 19',
          items: [
            { t: 'rect', size: [41,8.5], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [61,233.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 17',
          items: [
            { t: 'rect', size: [41,8.5], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [61,143.25] },
        },
        {
          t: 'group',
          name: 'Rectangle 16',
          items: [
            { t: 'rect', size: [72.5,11.5], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [94.75,53.75] },
        },
      ],
    },
    {
      name: 'Shape Layer 39',
      kind: 'shape',
      hidden: true,
      xf: { p: [126.313,125.75] },
      contents: [
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [6.125,6.125] },
            { t: 'fill', color: '#5f5f5f' },
          ],
          xf: { p: [162.625,209.813] },
        },
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [3.875,9.938], round: 20 },
            { t: 'fill', color: '#5f5f5f' },
          ],
          xf: { p: [162.625,212.844] },
        },
      ],
    },
    {
      name: 'Shape Layer 38',
      kind: 'shape',
      xf: { p: [130,123.5] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [18,18], round: 20 },
            { t: 'fill', color: '#febf3e' },
          ],
          xf: { p: [151.375,201.625] },
        },
      ],
    },
    {
      name: 'Shape Layer 37',
      kind: 'shape',
      xf: { p: [126,125] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [21,47], round: 20 },
            { t: 'fill', color: '#a36742' },
          ],
          xf: { p: [162.75,202] },
        },
      ],
    },
    {
      name: 'Shape Layer 23',
      kind: 'shape',
      blend: 'overlay',
      xf: { p: [126,165], o: 30 },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 2',
          items: [
            { t: 'rect', size: [4.25,4.25], round: 20 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [213.75,127] },
        },
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [15.25,3.125], round: 20 },
            { t: 'fill', color: '#000000' },
            { t: 'repeater', copies: 3, pos: [0,5] },
          ],
          xf: { p: [213.875,134.313] },
        },
      ],
    },
    {
      name: 'Shape Layer 22',
      kind: 'shape',
      xf: { p: [124.5,165] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [23.5,39], round: 20 },
            { t: 'fill', color: '#b8b0d7' },
          ],
          xf: { p: [215.25,135.5] },
        },
      ],
    },
    {
      name: 'Shape Layer 21',
      kind: 'shape',
      xf: { p: [142,114] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [82,39], round: 20 },
            { t: 'fill', color: '#9862b4' },
          ],
          xf: { p: [77.5,-29] },
        },
      ],
    },
    {
      name: 'Shape Layer 19',
      kind: 'shape',
      xf: { p: [142,165] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [276.5,65], round: 20 },
            { t: 'fill', color: '#4d176c' },
          ],
          xf: { p: [78.75,379] },
        },
      ],
    },
    {
      name: 'Shape Layer 40',
      kind: 'shape',
      hidden: true,
      xf: { p: [126,130] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [156,356], round: 14 },
            { t: 'stroke', color: '#a36742', width: 10 },
          ],
          xf: { p: [94.5,193] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[376,-116],[-274,-116],[-274,400],[376,400]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 20',
      kind: 'shape',
      xf: { p: [126,136] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [150,504], round: 81 },
            { t: 'fill', color: '#fcb683' },
          ],
          xf: { p: [94.5,262] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[177.5,288],[12.5,288.25],[12.5,360.75],[177.5,360.5]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[177.5,200.25],[12.5,200.5],[12.5,273],[177.5,272.75]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[177.5,110.75],[12.5,111],[12.5,183.5],[177.5,183.25]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[177,2.25],[12,2.5],[12.5,95],[177.5,94.75]],
          },
        },
        {
          mode: 'subtract',
          path: {
            v: [[102,104.5],[88.5,104.5],[88.5,485.5],[102,485.5]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 18',
      kind: 'shape',
      xf: { p: [126,136] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [190,544], round: 161 },
            { t: 'stroke', color: '#a36742', width: 10 },
            { t: 'fill', color: '#bf8351' },
          ],
          xf: { p: [94.5,262] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[376,-116],[-274,-116],[-274,400],[376,400]],
          },
        },
      ],
    },
  ],
};

export const Door1Home = makePart(door1HomeComp);
