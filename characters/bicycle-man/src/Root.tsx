import React from 'react';
import { Composition } from 'remotion';
import { BicycleMan } from './BicycleMan';
import { VIDEO } from './rig.config';

export const Root: React.FC = () => (
  <Composition
    id="BicycleMan"
    component={BicycleMan}
    width={VIDEO.width}
    height={VIDEO.height}
    fps={VIDEO.fps}
    durationInFrames={Math.round(VIDEO.durationInSeconds * VIDEO.fps)}
  />
);
