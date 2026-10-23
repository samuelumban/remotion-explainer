/**
 * SMA shirt collar: two pointed wings that wrap the neck.
 * Drawn in NECK comp coordinates (250x400, neck centre = 125,200) and placed right above the NECK layer.
 */
import React from 'react';
import {Grp, Poly} from '../ae';
import {SMA} from './ShirtPaint';

const wing = (s: 1 | -1) => [[6 * s, 26], [46 * s, 24], [17 * s, 84]] as const;

export const SmaCollar: React.FC = () => (
  <Grp x={125} y={200}>
    <Poly pts={wing(-1)} fill={SMA.white} stroke={SMA.line} sw={2} />
    <Poly pts={wing(1)} fill={SMA.white} stroke={SMA.line} sw={2} />
  </Grp>
);
