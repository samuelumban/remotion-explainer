import type { CompData } from '../../ae';
import { makePart } from '../makePart';
import { door1HomeComp } from './Door1Home';

/**
 * House — 2560×1440px, 41 layer
 * (precomp "House" di After Effects; layer diurutkan dari ATAS ke BAWAH)
 */
export const houseComp: CompData = {
  name: 'House',
  width: 2560,
  height: 1440,
  layers: [
    {
      name: 'Shape Layer 43',
      kind: 'shape',
      xf: { p: [1257,723] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [206,346], round: 84 },
            { t: 'fill', color: '#d3eef5' },
          ],
          xf: { p: [517,-208] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[744,-474],[288,-474],[288,-276],[744,-276]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 42',
      kind: 'shape',
      xf: { p: [1257,723] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [250,384], round: 100 },
            { t: 'fill', color: '#b8b0d7' },
          ],
          xf: { p: [517,-208] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[744,-474],[288,-474],[288,-257],[744,-257]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 40',
      kind: 'shape',
      blend: 'overlay',
      xf: { p: [1304,680], o: 20 },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[498.75,-358],[346,-214],[192.75,-358]],
              },
            },
            { t: 'fill', color: '#000000' },
          ],
        },
      ],
    },
    {
      name: 'Shape Layer 39',
      kind: 'shape',
      xf: { p: [1279,717] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 2',
          items: [
            { t: 'rect', size: [18,100] },
            { t: 'fill', color: '#b8b0d7' },
          ],
          xf: { p: [8,-231] },
        },
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [18,100] },
            { t: 'fill', color: '#b8b0d7' },
          ],
          xf: { p: [-186,-231] },
        },
      ],
    },
    {
      name: 'Shape Layer 37',
      kind: 'shape',
      xf: { p: [1277,717] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [327,22], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-217.5,260.5] },
        },
      ],
    },
    {
      name: 'Door 1 Home',
      kind: 'part',
      xf: { a: [222,511], p: [1376.002,1133.999], s: [100.002,100.002] },
      part: door1HomeComp,
      collapse: true,
    },
    {
      name: 'Flowers 4',
      kind: 'shape',
      blend: 'add',
      parent: 7,
      xf: { p: [0,0], o: 5 },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[285,195],[247,199],[184,216],[137,216],[82,201],[24,197],[-18,216],[-52,229],[-48,266],[328,267],[327,217]],
              },
            },
            { t: 'fill', color: '#ffffff' },
          ],
        },
        {
          t: 'group',
          name: 'Ellipse 9',
          items: [
            { t: 'ellipse', size: [32,32] },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [138.5,215.5] },
        },
        {
          t: 'group',
          name: 'Ellipse 8',
          items: [
            { t: 'ellipse', size: [50,50] },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [172,219] },
        },
        {
          t: 'group',
          name: 'Ellipse 7',
          items: [
            { t: 'ellipse', size: [40,40] },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [294,199] },
        },
        {
          t: 'group',
          name: 'Ellipse 6',
          items: [
            { t: 'ellipse', size: [58,58] },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [329,217.5] },
        },
        {
          t: 'group',
          name: 'Ellipse 5',
          items: [
            { t: 'ellipse', size: [88,88] },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [236.5,211] },
        },
        {
          t: 'group',
          name: 'Ellipse 4',
          items: [
            { t: 'ellipse', size: [74,74] },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [100,202.5] },
        },
        {
          t: 'group',
          name: 'Ellipse 3',
          items: [
            { t: 'ellipse', size: [52,52] },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [47,207.5] },
        },
        {
          t: 'group',
          name: 'Ellipse 2',
          items: [
            { t: 'ellipse', size: [58,58] },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-2,196.5] },
        },
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [78,78] },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-42,220.5] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[100,177.5],[86.5,191.25],[113.5,191.25]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[167,220],[153.5,233.75],[180.5,233.75]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[61.25,220],[47.75,233.75],[74.75,233.75]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[236.5,179],[223,192.75],[250,192.75]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[294.25,192.75],[280.75,206.5],[307.75,206.5]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[324.56,219.27],[311.06,233.02],[338.06,233.02]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[-1.5,186],[-15,199.75],[12,199.75]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[-38.89,213.14],[-52.39,226.89],[-25.39,226.89]],
          },
        },
      ],
    },
    {
      name: 'Flowers 3',
      kind: 'shape',
      xf: { a: [138.5,267], p: [1058,969.75], s: [80.8,80.8] },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [
                  [285,195],[247,199],[184,216],[137,216],[82,201],[24,197],[-18,216],[-52,229],[-42.43,263.52],[328,267],
                  [327,217],
                ],
              },
            },
            { t: 'fill', color: '#30b44f' },
          ],
        },
        {
          t: 'group',
          name: 'Ellipse 9',
          items: [
            { t: 'ellipse', size: [32,32] },
            { t: 'fill', color: '#30b44f' },
          ],
          xf: { p: [138.5,215.5] },
        },
        {
          t: 'group',
          name: 'Ellipse 8',
          items: [
            { t: 'ellipse', size: [50,50] },
            { t: 'fill', color: '#30b44f' },
          ],
          xf: { p: [163.337,214.668], s: [154.649,154.649] },
        },
        {
          t: 'group',
          name: 'Ellipse 7',
          items: [
            { t: 'ellipse', size: [40,40] },
            { t: 'fill', color: '#30b44f' },
          ],
          xf: { p: [300.807,222.515], s: [208.147,208.147] },
        },
        {
          t: 'group',
          name: 'Ellipse 6',
          items: [
            { t: 'ellipse', size: [58,58] },
            { t: 'fill', color: '#30b44f' },
          ],
          xf: { p: [309.817,217.5] },
        },
        {
          t: 'group',
          name: 'Ellipse 5',
          items: [
            { t: 'ellipse', size: [88,88] },
            { t: 'fill', color: '#30b44f' },
          ],
          xf: { p: [236.5,211] },
        },
        {
          t: 'group',
          name: 'Ellipse 4',
          items: [
            { t: 'ellipse', size: [74,74] },
            { t: 'fill', color: '#30b44f' },
          ],
          xf: { p: [88.861,210.545], s: [130.382,130.382] },
        },
        {
          t: 'group',
          name: 'Ellipse 3',
          items: [
            { t: 'ellipse', size: [52,52] },
            { t: 'fill', color: '#30b44f' },
          ],
          xf: { p: [47,207.5] },
        },
        {
          t: 'group',
          name: 'Ellipse 2',
          items: [
            { t: 'ellipse', size: [58,58] },
            { t: 'fill', color: '#30b44f' },
          ],
          xf: { p: [9.757,212.589], s: [142.656,142.656] },
        },
        {
          t: 'group',
          name: 'Ellipse 1',
          items: [
            { t: 'ellipse', size: [78,78] },
            { t: 'fill', color: '#30b44f' },
          ],
          xf: { p: [-32.718,218.025], s: [83.859,83.859] },
        },
      ],
    },
    {
      name: 'Reflections',
      kind: 'shape',
      blend: 'add',
      xf: { p: [1280,758], o: 5 },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 28',
          items: [
            { t: 'rect', size: [72,30], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-540,-219] },
        },
        {
          t: 'group',
          name: 'Rectangle 29',
          items: [
            { t: 'rect', size: [131,30], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [665,-203] },
        },
        {
          t: 'group',
          name: 'Rectangle 27',
          items: [
            { t: 'rect', size: [72,30], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [370,-228] },
        },
        {
          t: 'group',
          name: 'Rectangle 26',
          items: [
            { t: 'rect', size: [276,34], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [367,-486] },
        },
        {
          t: 'group',
          name: 'Rectangle 25',
          items: [
            { t: 'rect', size: [248,32], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-407,-405] },
        },
        {
          t: 'group',
          name: 'Rectangle 15',
          items: [
            { t: 'rect', size: [89.5,14.5], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [149.25,-424.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 14',
          items: [
            { t: 'rect', size: [117.5,9.5], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-538.25,222.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 13',
          items: [
            { t: 'rect', size: [89,8.5], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-618.5,10.25] },
        },
        {
          t: 'group',
          name: 'Rectangle 12',
          items: [
            { t: 'rect', size: [107,11.5], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-142.5,207.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 11',
          items: [
            { t: 'rect', size: [103.5,10], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-293.25,-5.5] },
        },
        {
          t: 'group',
          name: 'Rectangle 10',
          items: [
            { t: 'rect', size: [8,8], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-88.75,-333] },
        },
        {
          t: 'group',
          name: 'Rectangle 9',
          items: [
            { t: 'rect', size: [21.5,8], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-188.75,-225] },
        },
        {
          t: 'group',
          name: 'Rectangle 8',
          items: [
            { t: 'rect', size: [52.5,8], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-3.75,-225] },
        },
        {
          t: 'group',
          name: 'Rectangle 7',
          items: [
            { t: 'rect', size: [52.5,14], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [226.75,-132] },
        },
        {
          t: 'group',
          name: 'Rectangle 6',
          items: [
            { t: 'rect', size: [72.5,14], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-340.25,-132] },
        },
        {
          t: 'group',
          name: 'Rectangle 5',
          items: [
            { t: 'rect', size: [241.5,14], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-65.25,-132] },
        },
        {
          t: 'group',
          name: 'Rectangle 4',
          items: [
            { t: 'rect', size: [55.5,14], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [489.75,-136] },
        },
        {
          t: 'group',
          name: 'Rectangle 3',
          items: [
            { t: 'rect', size: [152.5,14], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [656.75,-136] },
        },
        {
          t: 'group',
          name: 'Rectangle 2',
          items: [
            { t: 'rect', size: [152.5,14], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-591.25,-136] },
        },
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [67.5,14], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-768.75,-136] },
        },
      ],
    },
    {
      name: 'Window - 7',
      kind: 'shape',
      xf: { p: [1275.5,750.5] },
      contents: [
        {
          t: 'group',
          name: 'Shape 2',
          items: [
            {
              t: 'path',
              path: {
                v: [[-164,-19.5],[-164.5,204.5]],
              },
            },
            { t: 'stroke', color: '#b8b0d7', width: 14 },
            { t: 'fill', color: '#c6c6c6' },
          ],
        },
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[-272.5,-16],[-272.5,207.5]],
                c: false,
              },
            },
            { t: 'stroke', color: '#b8b0d7', width: 14 },
            { t: 'fill', color: '#c6c6c6' },
          ],
        },
      ],
    },
    {
      name: 'Window - 3',
      kind: 'shape',
      xf: { p: [1275.5,758] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [288,236] },
            { t: 'stroke', color: '#b8b0d7', width: 15 },
            { t: 'fill', color: '#d3eef5' },
          ],
          xf: { p: [-216.5,88.5] },
        },
      ],
    },
    {
      name: 'Bricks',
      kind: 'shape',
      blend: 'overlay',
      xf: { p: [1280,758], o: 15 },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 5',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-511.5,-27.5] },
        },
        {
          t: 'group',
          name: 'Rectangle 4',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-580.25,-67.25] },
        },
        {
          t: 'group',
          name: 'Rectangle 15',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [238.25,339.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 18',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-65.75,-64.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 20',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [766.75,-64.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 17',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [168.75,-64.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 24',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [766.25,364.25] },
        },
        {
          t: 'group',
          name: 'Rectangle 23',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [766.25,254.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 22',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [488.25,-64.25] },
        },
        {
          t: 'group',
          name: 'Rectangle 21',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [334.25,-20.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 19',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [745.25,-37.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 16',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [191.25,-37.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 14',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [254.75,312.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 13',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-157.25,312.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 12',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-179.25,337.25] },
        },
        {
          t: 'group',
          name: 'Rectangle 11',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-386.25,337.25] },
        },
        {
          t: 'group',
          name: 'Rectangle 3',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-729.25,-51.75] },
        },
        {
          t: 'group',
          name: 'Rectangle 10',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-364.75,361.5] },
        },
        {
          t: 'group',
          name: 'Rectangle 2',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-707.75,-27.5] },
        },
        {
          t: 'group',
          name: 'Rectangle 9',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-409.25,361.5] },
        },
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-752.25,-27.5] },
        },
        {
          t: 'group',
          name: 'Rectangle 7',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-729.25,277.25] },
        },
        {
          t: 'group',
          name: 'Rectangle 8',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-752.25,185.5] },
        },
        {
          t: 'group',
          name: 'Rectangle 6',
          items: [
            { t: 'rect', size: [40.5,20], round: 5 },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-752.25,253.5] },
        },
      ],
    },
    {
      name: 'Shape Layer 11',
      kind: 'shape',
      xf: { p: [1280,811] },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[-88,-445.5],[-298,-294],[-298,-270.5],[120.4,-270.56],[120.5,-294]],
              },
            },
            { t: 'stroke', color: '#b8b0d7', width: 21 },
            { t: 'fill', color: '#d3eef5' },
          ],
        },
      ],
    },
    {
      name: 'Shape Layer 4',
      kind: 'shape',
      xf: { p: [1275,824] },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[340,-249],[-82,-569],[-505,-249],[-505,-208],[-83,-524],[340,-208]],
              },
            },
            { t: 'fill', color: '#ffffff' },
          ],
        },
      ],
    },
    {
      name: 'Shape Layer 5',
      kind: 'shape',
      xf: { p: [1275,851] },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[310,-243],[-475,-243],[-475,-208],[310,-208]],
              },
            },
            { t: 'fill', color: '#b8b0d7' },
          ],
        },
      ],
    },
    {
      name: 'Shape Layer 13',
      kind: 'shape',
      blend: 'overlay',
      xf: { p: [1275,824], o: 20 },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[310,-249],[-79,-537],[-475,-249],[-475,-208],[-83,-497],[310,-208]],
              },
            },
            { t: 'fill', color: '#000000' },
          ],
        },
      ],
    },
    {
      name: 'Shape Layer 6',
      kind: 'shape',
      xf: { p: [1275,824] },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[310,-249],[-79,-543],[-475,-249],[-475,-208],[310,-208]],
              },
            },
            { t: 'fill', color: '#9b74b3' },
          ],
        },
      ],
    },
    {
      name: 'Shape Layer 14',
      kind: 'shape',
      blend: 'overlay',
      xf: { p: [1280,824], o: 20 },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [725,620] },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [-89,102] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[432,-255],[-615,-255],[-615,-169],[432,-169]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 27',
      kind: 'shape',
      xf: { p: [1280,824] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [725,620] },
            { t: 'fill', color: '#7653a3' },
          ],
          xf: { p: [-89,102] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[388,264],[-576,264],[-576,356],[388,356]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 15',
      kind: 'shape',
      xf: { p: [1280,732] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 4',
          items: [
            { t: 'rect', size: [40,39], round: 5 },
            { t: 'fill', color: '#b8b0d7' },
          ],
          xf: { p: [-435,-2.5] },
        },
        {
          t: 'group',
          name: 'Rectangle 2',
          items: [
            { t: 'rect', size: [40,39], round: 5 },
            { t: 'fill', color: '#b8b0d7' },
          ],
          xf: { p: [256.25,-2.5] },
        },
        {
          t: 'group',
          name: 'Rectangle 3',
          items: [
            { t: 'rect', size: [22,39], round: 5 },
            { t: 'fill', color: '#b8b0d7' },
          ],
          xf: { p: [-442.5,-60.5] },
        },
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [22,39], round: 5 },
            { t: 'fill', color: '#b8b0d7' },
          ],
          xf: { p: [265,-60.5] },
        },
        { t: 'repeater', copies: 4, pos: [0,118] },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[444,-264],[-558,-264],[-558,318],[444,318]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 2',
      kind: 'shape',
      xf: { p: [1280,824] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [725,620] },
            { t: 'fill', color: '#9b74b3' },
          ],
          xf: { p: [-89,102] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[668,-326],[-858,-326],[-858,356],[668,356]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 7',
      kind: 'shape',
      xf: { p: [1302,764] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [135,30], round: 10 },
            { t: 'fill', color: '#b8b0d7' },
          ],
          xf: { p: [114,-429] },
        },
      ],
    },
    {
      name: 'Shape Layer 9',
      kind: 'shape',
      blend: 'overlay',
      xf: { p: [1302,764], o: 15 },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [110,168] },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [114,-344] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[267,-452],[-11,-452],[-11,-397],[267,-397]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 10',
      kind: 'shape',
      blend: 'overlay',
      xf: { p: [1302,764], o: 10 },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [110,168] },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [114,-344] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[181.25,-413],[132.25,-413],[119,-399.75],[132.25,-386.5],[181.25,-386.5],[194.5,-399.75]],
            i: [[7.32,0],[0,0],[0,-7.32],[-7.32,0],[0,0],[0,7.32]],
            o: [[0,0],[-7.32,0],[0,7.32],[0,0],[7.32,0],[0,-7.32]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[94.25,-413],[45.25,-413],[32,-399.75],[45.25,-386.5],[94.25,-386.5],[107.5,-399.75]],
            i: [[7.32,0],[0,0],[0,-7.32],[-7.32,0],[0,0],[0,7.32]],
            o: [[0,0],[-7.32,0],[0,7.32],[0,0],[7.32,0],[0,-7.32]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[137.25,-378.5],[88.25,-378.5],[75,-365.25],[88.25,-352],[137.25,-352],[150.5,-365.25]],
            i: [[7.32,0],[0,0],[0,-7.32],[-7.32,0],[0,0],[0,7.32]],
            o: [[0,0],[-7.32,0],[0,7.32],[0,0],[7.32,0],[0,-7.32]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[221.25,-378.5],[172.25,-378.5],[159,-365.25],[172.25,-352],[221.25,-352],[234.5,-365.25]],
            i: [[7.32,0],[0,0],[0,-7.32],[-7.32,0],[0,0],[0,7.32]],
            o: [[0,0],[-7.32,0],[0,7.32],[0,0],[7.32,0],[0,-7.32]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[54.25,-378.5],[5.25,-378.5],[-8,-365.25],[5.25,-352],[54.25,-352],[67.5,-365.25]],
            i: [[7.32,0],[0,0],[0,-7.32],[-7.32,0],[0,0],[0,7.32]],
            o: [[0,0],[-7.32,0],[0,7.32],[0,0],[7.32,0],[0,-7.32]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[178.25,-344.5],[129.25,-344.5],[116,-331.25],[129.25,-318],[178.25,-318],[191.5,-331.25]],
            i: [[7.32,0],[0,0],[0,-7.32],[-7.32,0],[0,0],[0,7.32]],
            o: [[0,0],[-7.32,0],[0,7.32],[0,0],[7.32,0],[0,-7.32]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[92.25,-344.5],[43.25,-344.5],[30,-331.25],[43.25,-318],[92.25,-318],[105.5,-331.25]],
            i: [[7.32,0],[0,0],[0,-7.32],[-7.32,0],[0,0],[0,7.32]],
            o: [[0,0],[-7.32,0],[0,7.32],[0,0],[7.32,0],[0,-7.32]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[217.75,-312.5],[168.75,-312.5],[155.5,-299.25],[168.75,-286],[217.75,-286],[231,-299.25]],
            i: [[7.32,0],[0,0],[0,-7.32],[-7.32,0],[0,0],[0,7.32]],
            o: [[0,0],[-7.32,0],[0,7.32],[0,0],[7.32,0],[0,-7.32]],
          },
        },
      ],
    },
    {
      name: 'Komin',
      kind: 'shape',
      xf: { p: [1302,774] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [110,168] },
            { t: 'fill', color: '#9b74b3' },
          ],
          xf: { p: [114,-344] },
        },
      ],
    },
    {
      name: 'Shape Layer 33',
      kind: 'shape',
      xf: { p: [1279,721] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [1730,37] },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [57.5,-100.5] },
        },
      ],
    },
    {
      name: 'Shape Layer 24',
      kind: 'shape',
      xf: { p: [1328,758] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [1708,37] },
            { t: 'fill', color: '#9b74b3' },
          ],
          xf: { p: [7.5,-100.5] },
        },
      ],
    },
    {
      name: 'Shape Layer 31',
      kind: 'shape',
      xf: { p: [1272,758] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [478,407], round: 1 },
            { t: 'stroke', color: '#ffffff', width: 17 },
          ],
          xf: { p: [574,206] },
        },
      ],
    },
    {
      name: 'Shape Layer 30',
      kind: 'shape',
      xf: { p: [1280,769] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [481,13] },
            { t: 'fill', color: '#cec5e2' },
          ],
          xf: { p: [565,27.75] },
        },
        { t: 'repeater', copies: 11, pos: [0,36] },
      ],
    },
    {
      name: 'Shape Layer 29',
      kind: 'shape',
      xf: { p: [1272,758] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [476,406] },
            { t: 'fill', color: '#e7dfee' },
          ],
          xf: { p: [573,206] },
        },
      ],
    },
    {
      name: 'Shape Layer 25',
      kind: 'shape',
      blend: 'overlay',
      xf: { p: [1280,824], o: 20 },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [1557,500] },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [7,102] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[958,-230],[-1232,-230],[-1232,-134],[958,-134]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 26',
      kind: 'shape',
      xf: { p: [1328,824] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [1656,500] },
            { t: 'fill', color: '#652d8e' },
          ],
          xf: { p: [8.5,102] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[860,266],[-1192,266],[-1192,390],[860,390]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 32',
      kind: 'shape',
      blend: 'overlay',
      xf: { p: [1280,824], o: 20 },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [1557,500] },
            { t: 'fill', color: '#000000' },
          ],
          xf: { p: [7,102] },
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[304,-176],[-485,-176],[-485,344],[304,344]],
          },
        },
      ],
    },
    {
      name: 'Shape Layer 38',
      kind: 'shape',
      xf: { p: [930,704] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [327,22], round: 20 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-217.5,260.5] },
        },
      ],
    },
    {
      name: 'Window - 6',
      kind: 'shape',
      xf: { p: [920.5,770.5] },
      contents: [
        {
          t: 'group',
          name: 'Shape 3',
          items: [
            {
              t: 'path',
              path: {
                v: [[-368.5,193],[-64.5,193]],
                c: false,
              },
            },
            { t: 'stroke', color: '#b8b0d7', width: 15 },
            { t: 'fill', color: '#c6c6c6' },
          ],
        },
        {
          t: 'group',
          name: 'Shape 2',
          items: [
            {
              t: 'path',
              path: {
                v: [[-164,-19.5],[-164,191.5]],
              },
            },
            { t: 'stroke', color: '#b8b0d7', width: 15 },
            { t: 'fill', color: '#c6c6c6' },
          ],
        },
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[-272.5,-16],[-272.5,190.5]],
                c: false,
              },
            },
            { t: 'stroke', color: '#b8b0d7', width: 15 },
            { t: 'fill', color: '#c6c6c6' },
          ],
        },
      ],
    },
    {
      name: 'Window - 5',
      kind: 'shape',
      hidden: true,
      xf: { p: [920.5,787], o: 5 },
      contents: [
        {
          t: 'group',
          name: 'Shape 3',
          items: [
            {
              t: 'path',
              path: {
                v: [[-368.5,193],[-64.5,193]],
                c: false,
              },
            },
            { t: 'stroke', color: '#000000', width: 27 },
            { t: 'fill', color: '#c6c6c6' },
          ],
        },
      ],
    },
    {
      name: 'Window - 4',
      kind: 'shape',
      xf: { p: [920.5,755] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [265,215] },
            { t: 'stroke', color: '#b8b0d7', width: 15 },
            { t: 'fill', color: '#d3eef5' },
          ],
          xf: { p: [-216.5,102.5] },
        },
      ],
    },
    {
      name: 'Shape Layer 3',
      kind: 'shape',
      xf: { p: [1283.5,824] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [1657,500] },
            { t: 'fill', color: '#7653a3' },
          ],
          xf: { p: [53,102] },
        },
      ],
    },
    {
      name: 'Shape Layer 35',
      kind: 'shape',
      hidden: true,
      blend: 'overlay',
      xf: { p: [1280,760], o: 12 },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[580,-388],[-574,-388],[-817.5,-156.5],[827,-156.5]],
              },
            },
            { t: 'fill', color: '#000000' },
          ],
        },
      ],
      masks: [
        {
          mode: 'add',
          path: {
            v: [[900,-390],[-894,-390],[-894,-374],[900,-374]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[900,-350],[-894,-350],[-894,-334],[900,-334]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[900,-310],[-894,-310],[-894,-294],[900,-294]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[900,-270],[-894,-270],[-894,-254],[900,-254]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[900,-230],[-894,-230],[-894,-214],[900,-214]],
          },
        },
        {
          mode: 'add',
          path: {
            v: [[900,-190],[-894,-190],[-894,-174],[900,-174]],
          },
        },
      ],
    },
    {
      name: 'ROOF',
      kind: 'shape',
      xf: { p: [1280,760] },
      contents: [
        {
          t: 'group',
          name: 'Shape 1',
          items: [
            {
              t: 'path',
              path: {
                v: [[468,-607.5],[-357,-607],[-817.5,-156.5],[933,-158]],
              },
            },
            { t: 'fill', color: '#e9c7df' },
          ],
        },
      ],
    },
    {
      name: 'Shape Layer 36',
      kind: 'shape',
      xf: { p: [1280.5,758] },
      contents: [
        {
          t: 'group',
          name: 'Rectangle 2',
          items: [
            { t: 'rect', size: [31,38], round: 6 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [-763.5,225] },
        },
        {
          t: 'group',
          name: 'Rectangle 1',
          items: [
            { t: 'rect', size: [31,38], round: 6 },
            { t: 'fill', color: '#ffffff' },
          ],
          xf: { p: [876.5,225] },
        },
      ],
    },
  ],
};

export const House = makePart(houseComp);
