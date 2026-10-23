import React, { useMemo } from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import scene from '../public/scene.json';
import { Runtime } from './engine/runtime';
import { buildSvg } from './engine/render';

export const BicycleMan: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rt = useMemo(() => new Runtime(scene as any), []);
  // Semua animasi = fungsi murni dari waktu (frame/fps) -> deterministik untuk render paralel Remotion.
  return <AbsoluteFill>{buildSvg(rt, frame / fps)}</AbsoluteFill>;
};
