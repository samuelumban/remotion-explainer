import React from 'react';
import {AbsoluteFill, Composition, Still} from 'remotion';
import {BGBeachScene, BG_BEACH_META} from './library';
import {CATALOG} from './library/catalog';

const Scene: React.FC = () => (
  <AbsoluteFill>
    <BGBeachScene />
  </AbsoluteFill>
);

const {width, height, fps, durationInFrames} = BG_BEACH_META;

export const RemotionRoot: React.FC = () => (
  <>
    {/* Full scene as video (18 s @ 24 fps) and as a single frame */}
    <Composition id="BGBeach" component={Scene} width={width} height={height} fps={fps} durationInFrames={durationInFrames} />
    <Still id="BGBeachStill" component={Scene} width={width} height={height} />

    {/* Component catalog: one Still per library component (Palm, Cloud1, SandCastle, ...) */}
    {CATALOG.map(({id, Component, width: w, height: h}) => (
      <Still
        key={id}
        id={`Catalog-${id}`}
        width={w}
        height={h}
        component={() => (
          <AbsoluteFill style={{backgroundColor: '#d3eef5'}}>
            <Component />
          </AbsoluteFill>
        )}
      />
    ))}
  </>
);
