import React, { useId, useMemo } from 'react';
import { IDENTITY, Mat, fromTransform, mul, toMatrixString } from './matrix';
import { ShapeLayerSvg } from './ShapeRenderer';
import type { BlendMode, CompDef, LayerDef, Overrides, Transform } from './types';

const CSS_BLEND: Record<BlendMode, React.CSSProperties['mixBlendMode']> = {
  normal: 'normal',
  overlay: 'overlay',
  add: 'plus-lighter', // AE "Add"
};

const applyOverride = (l: LayerDef, o?: Overrides[string]): LayerDef & Transform => {
  if (!o) return l;
  return { ...l, ...o, enabled: o.enabled ?? l.enabled } as LayerDef & Transform;
};

/** World matrix of every layer, honouring the parent chain (parents may be disabled). */
const worldMatrices = (layers: LayerDef[]): Map<string, Mat> => {
  const byId = new Map(layers.map((l) => [l.id, l] as const));
  const cache = new Map<string, Mat>();
  const visit = (l: LayerDef, depth: number): Mat => {
    const hit = cache.get(l.id);
    if (hit) return hit;
    const local = fromTransform(l);
    const parent = l.parent && depth < 64 ? byId.get(l.parent) : undefined;
    const m = parent ? mul(visit(parent, depth + 1), local) : local;
    cache.set(l.id, m);
    return m;
  };
  layers.forEach((l) => visit(l, 0));
  return cache;
};

export interface AECompProps {
  comp: CompDef;
  /**
   * Clip to the composition frame. AE clips nested comps unless "Collapse Transformations"
   * is on; <CompLayer> handles that for you. Defaults to true.
   */
  clip?: boolean;
  /** Override transform / visibility of layers by `id` (e.g. drive them with useCurrentFrame()). */
  overrides?: Overrides;
  style?: React.CSSProperties;
}

/**
 * Renders a composition exactly like After Effects composes it:
 * layers are drawn bottom -> top, each with its own (parent-aware) transform,
 * opacity, blend mode, masks and effects.
 */
export const AEComp: React.FC<AECompProps> = ({ comp, clip = true, overrides, style }) => {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const layers = useMemo(
    () => comp.layers.map((l) => applyOverride(l, overrides?.[l.id])),
    [comp, overrides],
  );
  const world = useMemo(() => worldMatrices(layers), [layers]);

  const visible = layers.map((l, i) => ({ l, i })).filter(({ l }) => l.enabled && l.type !== 'null');
  const fills = visible.filter(({ l }) => l.effects.length);

  return (
    <div
      style={{
        position: 'relative',
        width: comp.width,
        height: comp.height,
        overflow: clip ? 'hidden' : 'visible',
        isolation: 'isolate', // each comp is its own compositing group (blend modes stay inside)
        ...style,
      }}
    >
      {fills.length ? (
        <svg width={0} height={0} style={{ position: 'absolute' }} aria-hidden>
          <defs>
            {fills.map(({ l, i }) => (
              <filter
                key={l.id}
                id={`${uid}-fx${i}`}
                x={0}
                y={0}
                width={1}
                height={1}
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodColor={l.effects[l.effects.length - 1].color} result="c" />
                <feComposite in="c" in2="SourceAlpha" operator="in" />
              </filter>
            ))}
          </defs>
        </svg>
      ) : null}

      {/* AE lists layers top -> bottom; paint bottom first. */}
      {[...visible].reverse().map(({ l, i }) => {
        const wrap: React.CSSProperties = {
          position: 'absolute',
          left: 0,
          top: 0,
          transform: toMatrixString(world.get(l.id) ?? IDENTITY),
          transformOrigin: '0 0',
          opacity: l.opacity === 100 ? undefined : l.opacity / 100,
          mixBlendMode: CSS_BLEND[l.blend],
          filter: l.effects.length ? `url(#${uid}-fx${i})` : undefined,
        };
        if (l.type === 'shape') {
          return (
            <div key={l.id} data-layer={l.name} style={{ ...wrap, width: 0, height: 0 }}>
              <ShapeLayerSvg layer={l} uid={`${uid}-${i}`} />
            </div>
          );
        }
        if (l.type === 'comp') {
          const src = l.source;
          // Collapse Transformations lifts the frame clip, unless an effect forces a raster.
          const clipSrc = !(l.collapse && !l.effects.length);
          return (
            <div key={l.id} data-layer={l.name} style={{ ...wrap, width: src.width, height: src.height }}>
              <AEComp comp={src} clip={clipSrc} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
