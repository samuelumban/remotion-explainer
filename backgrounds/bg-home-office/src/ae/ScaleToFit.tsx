import React from 'react';

/**
 * Scales fixed-size artwork (e.g. the 2560x1440 BG Home Office) into another frame size,
 * e.g. a 1920x1080 video:  <ScaleToFit from={[2560,1440]} to={[width,height]}><BGHomeOffice/></ScaleToFit>
 */
export const ScaleToFit: React.FC<{
  from: [number, number];
  to: [number, number];
  mode?: 'cover' | 'contain';
  children: React.ReactNode;
}> = ({ from, to, mode = 'cover', children }) => {
  const sx = to[0] / from[0];
  const sy = to[1] / from[1];
  const s = mode === 'cover' ? Math.max(sx, sy) : Math.min(sx, sy);
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: to[0], height: to[1], overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          left: (to[0] - from[0] * s) / 2,
          top: (to[1] - from[1] * s) / 2,
          width: from[0],
          height: from[1],
          transform: `scale(${s})`,
          transformOrigin: '0 0',
        }}
      >
        {children}
      </div>
    </div>
  );
};
