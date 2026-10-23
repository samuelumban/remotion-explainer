import React from 'react';
import { Composition, Still } from 'remotion';
import { PARTS } from './parts';
import { BGHomeOffice, bgHomeOfficeComp } from './parts/BGHomeOffice';

const frames = (c: { duration: number; fps: number }) => Math.max(1, Math.round(c.duration * c.fps));

/**
 * Studio entries:
 *  - BGHomeOffice        : full 2560x1440 background (20 s @ 24 fps, same as the AE comp)
 *  - BGHomeOffice-Still  : single frame, for `remotion still` PNG export
 *  - <PartName>          : every other AE composition, previewable on its own
 */
export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="BGHomeOffice"
      component={BGHomeOffice}
      width={bgHomeOfficeComp.width}
      height={bgHomeOfficeComp.height}
      fps={bgHomeOfficeComp.fps}
      durationInFrames={frames(bgHomeOfficeComp)}
    />
    <Still
      id="BGHomeOffice-Still"
      component={BGHomeOffice}
      width={bgHomeOfficeComp.width}
      height={bgHomeOfficeComp.height}
    />
    {PARTS.filter((p) => p.id !== 'BGHomeOffice').map((p) => (
      <Composition
        key={p.id}
        id={p.id}
        component={p.Component}
        width={p.comp.width}
        height={p.comp.height}
        fps={p.comp.fps}
        durationInFrames={frames(p.comp)}
      />
    ))}
  </>
);
