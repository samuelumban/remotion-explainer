import React from 'react';
import { AbsoluteFill } from 'remotion';
import { AeComp, ParentingMode } from './ae';
import { COMP_CONFIG, PARENTING, PLACEMENTS } from './config';
import { buildComp } from './library/compose';

/** Comp utama "BG House" — disusun dari PLACEMENTS (src/config.ts). */
export const bgHouseComp = buildComp('BG House', COMP_CONFIG.width, COMP_CONFIG.height, PLACEMENTS);

export const BGHouse: React.FC<{ parenting?: ParentingMode }> = ({ parenting = PARENTING }) => (
  <AbsoluteFill>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={COMP_CONFIG.width}
      height={COMP_CONFIG.height}
      viewBox={`0 0 ${COMP_CONFIG.width} ${COMP_CONFIG.height}`}
      style={{ display: 'block' }}
    >
      <AeComp comp={bgHouseComp} idp="bg" parenting={parenting} />
    </svg>
  </AbsoluteFill>
);
