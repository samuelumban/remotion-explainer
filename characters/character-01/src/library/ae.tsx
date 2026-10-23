/**
 * Mini "After Effects → SVG" toolkit used by the generated components.
 * Coordinates follow AE conventions (y down, rotation clockwise, scale in %).
 */
import React, {createContext, useContext, useId} from 'react';

export type Vec = readonly [number, number];
export type LayerTransform = {
  p?: Vec; // Position
  a?: Vec; // Anchor point
  s?: Vec; // Scale (%)
  r?: number; // Rotation (deg)
};

const transformString = ({p = [0, 0], a = [0, 0], s = [100, 100], r = 0}: LayerTransform) =>
  `translate(${p[0]} ${p[1]}) rotate(${r}) scale(${s[0] / 100} ${s[1] / 100}) translate(${-a[0]} ${-a[1]})`;

/** Forces every fill/stroke to one colour (used when drawing track mattes). */
const ForceColor = createContext<string | null>(null);

type Paint = {fill?: string; stroke?: string; sw?: number; cap?: 1 | 2 | 3; dash?: number};
const usePaint = ({fill, stroke, sw, cap, dash}: Paint) => {
  const force = useContext(ForceColor);
  return {
    fill: fill ? force ?? fill : 'none',
    stroke: stroke ? force ?? stroke : 'none',
    strokeWidth: stroke ? sw : undefined,
    strokeLinecap: cap === 2 ? ('round' as const) : cap === 3 ? ('square' as const) : undefined,
    strokeDasharray: dash ? `${dash} ${dash}` : undefined, // AE: gap = dash when only Dash is set
  };
};

const BIG = 100000;
const useUid = () => useId().replace(/[^a-zA-Z0-9_-]/g, '');

// ------------------------------------------------------------------ public API

export type PlaceProps = {
  /** Move the component (px, in the parent's coordinate system). */
  x?: number;
  y?: number;
  /** Uniform scale, 1 = original size. Pivot = centre of the component. */
  scale?: number;
  /** Rotation in degrees (clockwise). Pivot = centre of the component. */
  rotate?: number;
  flipX?: boolean;
  flipY?: boolean;
};

/** Places a component: translate → rotate/scale/flip around its centre. */
export const Place: React.FC<PlaceProps & {width: number; height: number; children?: React.ReactNode}> = ({
  x = 0, y = 0, scale = 1, rotate = 0, flipX = false, flipY = false, width, height, children,
}) => {
  const cx = width / 2, cy = height / 2;
  const sx = scale * (flipX ? -1 : 1), sy = scale * (flipY ? -1 : 1);
  return (
    <g transform={`translate(${x} ${y}) translate(${cx} ${cy}) rotate(${rotate}) scale(${sx} ${sy}) translate(${-cx} ${-cy})`}>
      {children}
    </g>
  );
};

/** A complete <svg> that fills its parent and keeps the AE comp's aspect ratio. */
export const Svg: React.FC<{width: number; height: number; children?: React.ReactNode}> = ({width, height, children}) => (
  <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" style={{display: 'block'}}>
    {children}
  </svg>
);

// ------------------------------------------------------------------ AE primitives

export type MaskDef = {m: 'add' | 'subtract'; p: readonly Vec[]};
export type Matte = {mode: 'alpha' | 'alphaInverted'; layer: React.ReactNode};

type LayerProps = {
  name?: string;
  /** One transform, or a chain [parent, ..., child]. */
  t: LayerTransform | LayerTransform[];
  /** AE masks (polygons in layer space), applied top to bottom: Add = union, Subtract = cut out. */
  masks?: readonly MaskDef[];
  /** Layer opacity 0-1. */
  o?: number;
  /** Blend mode (only AE "Add" is supported). */
  blend?: 'add';
  /** Pre-comp bounds: content is clipped to 0,0 → w,h. */
  clip?: {w: number; h: number};
  /** Track matte taken from the layer above in AE. */
  matte?: Matte;
  children?: React.ReactNode;
};

export const Layer: React.FC<LayerProps> = ({name, t, masks, o, blend, clip, matte, children}) => {
  const uid = useUid();
  const chain = Array.isArray(t) ? t : [t];
  let content = <>{children}</>;

  if (masks && masks.length) {
    const id = `m${uid}`;
    const pts = (p: readonly Vec[]) => p.map((v) => v.join(',')).join(' ');
    if (masks.every((m) => m.m === 'add')) {
      content = (
        <>
          <clipPath id={id}>{masks.map((m, i) => <polygon key={i} points={pts(m.p)} />)}</clipPath>
          <g clipPath={`url(#${id})`}>{content}</g>
        </>
      );
    } else {
      // Sequential Add / Subtract -> luminance mask (a leading Subtract starts from "everything visible").
      content = (
        <>
          <mask id={id} maskUnits="userSpaceOnUse" x={-BIG} y={-BIG} width={2 * BIG} height={2 * BIG}>
            <rect x={-BIG} y={-BIG} width={2 * BIG} height={2 * BIG} fill={masks[0].m === 'subtract' ? '#fff' : '#000'} />
            {masks.map((m, i) => <polygon key={i} points={pts(m.p)} fill={m.m === 'add' ? '#fff' : '#000'} />)}
          </mask>
          <g mask={`url(#${id})`}>{content}</g>
        </>
      );
    }
  }
  if (clip) {
    const id = `c${uid}`;
    content = (
      <>
        <clipPath id={id}>
          <rect width={clip.w} height={clip.h} />
        </clipPath>
        <g clipPath={`url(#${id})`}>{content}</g>
      </>
    );
  }

  const body = (
    <g
      data-name={name}
      transform={chain.map(transformString).join(' ')}
      opacity={o}
      style={blend === 'add' ? {mixBlendMode: 'plus-lighter'} : undefined}
    >
      {content}
    </g>
  );
  if (!matte) return body;

  const inverted = matte.mode === 'alphaInverted';
  const id = `t${uid}`;
  return (
    <g mask={`url(#${id})`}>
      <mask id={id} maskUnits="userSpaceOnUse" x={-BIG} y={-BIG} width={2 * BIG} height={2 * BIG}>
        <rect x={-BIG} y={-BIG} width={2 * BIG} height={2 * BIG} fill={inverted ? '#fff' : '#000'} />
        <ForceColor.Provider value={inverted ? '#000' : '#fff'}>{matte.layer}</ForceColor.Provider>
      </mask>
      {body}
    </g>
  );
};

/** AE shape group with its own position / rotation. */
export const Grp: React.FC<{x?: number; y?: number; r?: number; s?: Vec; children?: React.ReactNode}> = ({
  x = 0, y = 0, r = 0, s = [100, 100], children,
}) => <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s[0] / 100} ${s[1] / 100})`}>{children}</g>;

/** AE Repeater: n copies, each offset by (dx, dy) from the previous. */
export const Rep: React.FC<{n: number; dx: number; dy: number; children?: React.ReactNode}> = ({
  n, dx, dy, children,
}) => (
  <>
    {Array.from({length: n}, (_, i) => (
      <g key={i} transform={`translate(${dx * i} ${dy * i})`}>{children}</g>
    ))}
  </>
);

export const Rect: React.FC<Paint & {w: number; h: number; r?: number}> = ({w, h, r = 0, ...paint}) => {
  const rr = Math.min(r, w / 2, h / 2); // AE clamps roundness
  return <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={rr} ry={rr} {...usePaint(paint)} />;
};

export const Ellipse: React.FC<Paint & {w: number; h: number}> = ({w, h, ...paint}) => (
  <ellipse rx={w / 2} ry={h / 2} {...usePaint(paint)} />
);

/** Ellipse with AE "Trim Paths" (start/end in %, offset in degrees; AE starts at 12 o'clock, clockwise). */
export const Arc: React.FC<Paint & {w: number; h: number; start?: number; end?: number; offset?: number}> = ({
  w, h, start = 0, end = 100, offset = 0, ...paint
}) => {
  const p = usePaint(paint);
  const rx = w / 2, ry = h / 2;
  const a0 = ((-90 + offset + start * 3.6) * Math.PI) / 180;
  const sweepDeg = (end - start) * 3.6;
  if (sweepDeg >= 360) return <ellipse rx={rx} ry={ry} {...p} />;
  const a1 = a0 + (sweepDeg * Math.PI) / 180;
  const d = `M ${rx * Math.cos(a0)} ${ry * Math.sin(a0)} A ${rx} ${ry} 0 ${sweepDeg > 180 ? 1 : 0} 1 ${rx * Math.cos(a1)} ${ry * Math.sin(a1)}`;
  return <path d={d} {...p} />;
};

export const Poly: React.FC<Paint & {pts: readonly Vec[]; closed?: boolean}> = ({pts, closed = true, ...paint}) => {
  const points = pts.map((v) => v.join(',')).join(' ');
  const p = usePaint(paint);
  return closed ? <polygon points={points} {...p} /> : <polyline points={points} {...p} />;
};
