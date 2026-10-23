import React from 'react';
import { Composition } from 'remotion';
import { BGHouse } from './BGHouse';
import { PartPreview } from './PartPreview';
import { COMP_CONFIG } from './config';
import { PARTS } from './library/parts';

export const RemotionRoot: React.FC = () => (
  <>
    {/* Background lengkap */}
    <Composition
      id={COMP_CONFIG.id}
      component={BGHouse}
      width={COMP_CONFIG.width}
      height={COMP_CONFIG.height}
      fps={COMP_CONFIG.fps}
      durationInFrames={COMP_CONFIG.durationInFrames}
    />
    {/* Setiap part library sebagai composition sendiri (untuk preview / dipakai ulang) */}
    {Object.values(PARTS).map((p) => (
      <Composition
        key={p.name}
        id={`Part-${p.name.replace(/\W+/g, '')}`}
        component={PartPreview}
        defaultProps={{ part: p.name }}
        width={p.width}
        height={p.height}
        fps={COMP_CONFIG.fps}
        durationInFrames={COMP_CONFIG.fps}
      />
    ))}
  </>
);
