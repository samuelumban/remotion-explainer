/**
 * AE composition "Table Picture 3 Back" — 218x217, 24 fps, 3 layers (listed TOP -> BOTTOM).
 * Auto-converted from BGHOME_1.JSX (compCode export). Layers with `enabled: false` were switched off in the AE project.
 */
import React from 'react';
import { AEComp, compDef, shapeLayer, path, fill, group } from '../ae';

export const tablePicture3BackComp = compDef(
  'Table Picture 3 Back',
  218,
  217,
  [
    shapeLayer('picture3', 'picture - 3', { position: [-295.499986, 124] }, [
      group('Shape 1', [
        path([[423.5, -23], [395, -23], [410, 26.75], [438.5, 26.75]]),
        fill('#44b758'),
      ]),
    ]),
    shapeLayer('picture2', 'picture - 2', { position: [-295.499986, 124] }, [
      group('Shape 1', [
        path([[448.5, -57], [381.75, -57], [360.5, 26], [427.25, 26]]),
        fill('#8ac364'),
      ]),
    ]),
    shapeLayer('picture1', 'picture - 1', { position: [-301.499986, 124] }, [
      group('Shape 1', [
        path([[448.5, -57], [381.75, -57], [360.5, 26], [427.25, 26]]),
        fill('#c4fa8d'),
      ]),
    ]),
  ],
  { duration: 20, fps: 24 },
);

export const TablePicture3Back: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <AEComp comp={tablePicture3BackComp} style={style} />
);
