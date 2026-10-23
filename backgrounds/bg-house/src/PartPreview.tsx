import React from 'react';
import { AbsoluteFill } from 'remotion';
import { AeSvg } from './ae';
import { PARTS } from './library/parts';

/** Preview satu part library di atas latar abu-abu (warna viewer AE). */
export const PartPreview: React.FC<{ part: string; background?: string }> = ({ part, background = '#8f8f8f' }) => {
  const comp = PARTS[part];
  return (
    <AbsoluteFill style={{ background }}>
      <AeSvg comp={comp} />
    </AbsoluteFill>
  );
};
