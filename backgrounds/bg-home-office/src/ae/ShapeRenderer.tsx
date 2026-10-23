import React from 'react';
import { IDENTITY, fromTransform, mul, rotate, scale as scaleM, toMatrixString, translate } from './matrix';
import type {
  BezierPath,
  EllipseItem,
  FillItem,
  MaskDef,
  PathItem,
  RectItem,
  RepeaterItem,
  ShapeItem,
  ShapeLayerDef,
  StrokeItem,
  TrimItem,
} from './types';

/* ------------------------------------------------------------------ geometry */

const f = (n: number) => String(Math.round(n * 1e4) / 1e4 + 0);

/** AE bezier (vertices + relative in/out tangents) -> SVG path data. */
export const bezierToD = (p: BezierPath): string => {
  const n = p.vertices.length;
  if (!n) return '';
  const seg = (i: number, j: number) => {
    const v0 = p.vertices[i];
    const v1 = p.vertices[j];
    const o = p.outTangents?.[i] ?? [0, 0];
    const t = p.inTangents?.[j] ?? [0, 0];
    if (!o[0] && !o[1] && !t[0] && !t[1]) return `L${f(v1[0])} ${f(v1[1])}`;
    return `C${f(v0[0] + o[0])} ${f(v0[1] + o[1])} ${f(v1[0] + t[0])} ${f(v1[1] + t[1])} ${f(v1[0])} ${f(v1[1])}`;
  };
  let d = `M${f(p.vertices[0][0])} ${f(p.vertices[0][1])}`;
  for (let i = 0; i < n - 1; i++) d += seg(i, i + 1);
  if (p.closed) d += seg(n - 1, 0) + 'Z';
  return d;
};

/** AE ellipse paths start at 12 o'clock and run clockwise (matters for Trim Paths). */
const ellipseD = (cx: number, cy: number, rx: number, ry: number) =>
  `M${f(cx)} ${f(cy - ry)}A${f(rx)} ${f(ry)} 0 1 1 ${f(cx)} ${f(cy + ry)}A${f(rx)} ${f(ry)} 0 1 1 ${f(cx)} ${f(cy - ry)}Z`;

/* ------------------------------------------------------------------- painting */

type Paint = FillItem | StrokeItem;

const paintProps = (p: Paint): React.SVGProps<SVGElement> =>
  p.t === 'fill'
    ? { fill: p.color, fillOpacity: p.opacity / 100, stroke: 'none' }
    : {
        fill: 'none',
        stroke: p.color,
        strokeOpacity: p.opacity / 100,
        strokeWidth: p.width,
        strokeLinecap: p.cap,
        strokeLinejoin: p.join,
        strokeMiterlimit: 4,
      };

/** Trim Paths -> dash pattern on a path normalised with pathLength=1. */
const trimProps = (t: TrimItem): { hide: boolean; dash?: React.SVGProps<SVGElement> } => {
  const lo = Math.min(t.start, t.end) / 100;
  const len = Math.min(1, Math.abs(t.end - t.start) / 100);
  if (len <= 0) return { hide: true };
  if (len >= 1) return { hide: false };
  const a = (((lo + t.offset / 360) % 1) + 1) % 1;
  return { hide: false, dash: { strokeDasharray: `${len} ${1 - len}`, strokeDashoffset: -a } };
};

type PathLike = RectItem | EllipseItem | PathItem;
const isPathLike = (it: ShapeItem): it is PathLike => it.t === 'rect' || it.t === 'ellipse' || it.t === 'path';

interface Ctx {
  trims: TrimItem[];
}

const drawPath = (it: PathLike, paint: Paint, ctx: Ctx, key: string): React.ReactNode => {
  const props = paintProps(paint) as Record<string, unknown>;
  const trimmed = paint.t === 'stroke' && ctx.trims.length > 0;
  if (trimmed) {
    const tp = trimProps(ctx.trims[0]);
    if (tp.hide) return null;
    if (tp.dash) {
      let d = '';
      if (it.t === 'ellipse') d = ellipseD(it.position[0], it.position[1], it.size[0] / 2, it.size[1] / 2);
      else if (it.t === 'path') d = bezierToD(it);
      if (d) return <path key={key} d={d} pathLength={1} {...props} {...(tp.dash as Record<string, unknown>)} />;
    }
  }
  switch (it.t) {
    case 'rect': {
      const [w, h] = it.size;
      const r = Math.max(0, Math.min(it.roundness, w / 2, h / 2));
      return (
        <rect
          key={key}
          x={it.position[0] - w / 2}
          y={it.position[1] - h / 2}
          width={w}
          height={h}
          rx={r}
          ry={r}
          {...props}
        />
      );
    }
    case 'ellipse':
      return (
        <ellipse
          key={key}
          cx={it.position[0]}
          cy={it.position[1]}
          rx={it.size[0] / 2}
          ry={it.size[1] / 2}
          {...props}
        />
      );
    case 'path':
      return <path key={key} d={bezierToD(it)} {...props} />;
  }
};

/* ------------------------------------------------------------------- contents */

/**
 * Renders an AE "Contents" stack (top -> bottom).
 *
 * Semantics implemented (same as After Effects):
 *  - Fill / Stroke apply to every path ABOVE them in the same stack.
 *  - Repeater repeats everything above it (later copies sit BELOW earlier ones).
 *  - Trim Paths trims the strokes of everything above it.
 *  - Groups apply their own transform to their contents.
 */
export function renderItems(items: ShapeItem[], ctx: Ctx, kp: string): React.ReactNode[] {
  const list = items.filter((it) => it.enabled);

  // Modifiers: handle the lowest one first; it wraps everything above it.
  for (let i = list.length - 1; i >= 0; i--) {
    const it = list[i];
    if (it.t === 'repeater') {
      const below = renderItems(list.slice(i + 1), ctx, `${kp}b`);
      const above = list.slice(0, i);
      return [...below, ...renderRepeater(it, above, ctx, `${kp}r${i}`)];
    }
    if (it.t === 'trim') {
      const below = renderItems(list.slice(i + 1), ctx, `${kp}b`);
      const trimmed = renderItems(list.slice(0, i), { trims: [it, ...ctx.trims] }, `${kp}t${i}`);
      return [...below, ...trimmed];
    }
  }

  const out: React.ReactNode[] = [];
  for (let i = list.length - 1; i >= 0; i--) {
    const it = list[i];
    if (it.t === 'group') {
      const tr = toMatrixString(fromTransform(it.transform));
      out.push(
        <g key={`${kp}g${i}`} transform={tr} opacity={it.transform.opacity === 100 ? undefined : it.transform.opacity / 100}>
          {renderItems(it.contents, ctx, `${kp}g${i}.`)}
        </g>,
      );
    } else if (it.t === 'fill' || it.t === 'stroke') {
      if (it.t === 'stroke' && it.width <= 0) continue;
      list
        .slice(0, i)
        .filter(isPathLike)
        .forEach((p, j) => out.push(drawPath(p, it, ctx, `${kp}p${i}.${j}`)));
    }
  }
  return out;
}

const renderRepeater = (rep: RepeaterItem, above: ShapeItem[], ctx: Ctx, kp: string): React.ReactNode[] => {
  const step = mul(
    translate(rep.position[0], rep.position[1]),
    mul(
      mul(mul(translate(rep.anchor[0], rep.anchor[1]), rotate(rep.rotation)), scaleM(rep.scale[0] / 100, rep.scale[1] / 100)),
      translate(-rep.anchor[0], -rep.anchor[1]),
    ),
  );
  const mats = [IDENTITY];
  for (let c = 1; c < rep.copies; c++) mats.push(mul(mats[c - 1], step));

  const out: React.ReactNode[] = [];
  // AE default "Composite: Below" -> copy 0 is on top, so paint the last copy first.
  for (let c = rep.copies - 1; c >= 0; c--) {
    const k = rep.copies > 1 ? c / (rep.copies - 1) : 0;
    const op = rep.startOpacity + (rep.endOpacity - rep.startOpacity) * k;
    out.push(
      <g key={`${kp}c${c}`} transform={toMatrixString(mats[c])} opacity={op === 100 ? undefined : op / 100}>
        {renderItems(above, ctx, `${kp}c${c}.`)}
      </g>,
    );
  }
  return out;
};

/* ---------------------------------------------------------------------- masks */

const BIG = 100000;

const MaskDefs: React.FC<{ masks: MaskDef[]; id: string }> = ({ masks, id }) => {
  const firstSubtract = masks[0].mode === 'subtract';
  return (
    <>
      {masks.map((m, i) =>
        m.expansion ? (
          // Mask Expansion: build the grown / shrunk shape in its own mask.
          <mask key={`e${i}`} id={`${id}-e${i}`} maskUnits="userSpaceOnUse" x={-BIG} y={-BIG} width={2 * BIG} height={2 * BIG}>
            <rect x={-BIG} y={-BIG} width={2 * BIG} height={2 * BIG} fill="#000" />
            <path d={bezierToD(m)} fill="#fff" />
            <path
              d={bezierToD(m)}
              fill="none"
              stroke={m.expansion > 0 ? '#fff' : '#000'}
              strokeWidth={2 * Math.abs(m.expansion)}
              strokeLinejoin="miter"
              strokeMiterlimit={4}
            />
          </mask>
        ) : null,
      )}
      <mask id={id} maskUnits="userSpaceOnUse" x={-BIG} y={-BIG} width={2 * BIG} height={2 * BIG}>
        <rect x={-BIG} y={-BIG} width={2 * BIG} height={2 * BIG} fill={firstSubtract ? '#fff' : '#000'} />
        {masks.map((m, i) => {
          const color = m.mode === 'add' ? '#fff' : '#000';
          return m.expansion ? (
            <rect
              key={i}
              x={-BIG}
              y={-BIG}
              width={2 * BIG}
              height={2 * BIG}
              fill={color}
              mask={`url(#${id}-e${i})`}
            />
          ) : (
            <path key={i} d={bezierToD(m)} fill={color} />
          );
        })}
      </mask>
    </>
  );
};

/* ---------------------------------------------------------------------- layer */

/**
 * SVG for a shape layer. Its coordinate system is the layer's own space
 * (origin = layer origin / anchor reference), so the caller only has to place it
 * with the layer's world matrix.
 */
export const ShapeLayerSvg: React.FC<{ layer: ShapeLayerDef; uid: string }> = ({ layer, uid }) => {
  const maskId = layer.masks.length ? `${uid}-mask` : undefined;
  return (
    <svg width={1} height={1} style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible', display: 'block' }}>
      {maskId ? (
        <defs>
          <MaskDefs masks={layer.masks} id={maskId} />
        </defs>
      ) : null}
      <g mask={maskId ? `url(#${maskId})` : undefined}>{renderItems(layer.contents, { trims: [] }, 'c')}</g>
    </svg>
  );
};
