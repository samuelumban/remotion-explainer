/**
 * Tiny builder helpers so the composition data in `src/parts/*` stays readable.
 * Every helper returns a fully-resolved object (no optional fields reach the renderer).
 */
import type {
  BezierPath,
  BlendMode,
  CompDef,
  CompLayerDef,
  EllipseItem,
  FillEffect,
  FillItem,
  GroupItem,
  LayerDef,
  MaskDef,
  NullLayerDef,
  PathItem,
  RectItem,
  RepeaterItem,
  ShapeItem,
  ShapeLayerDef,
  StrokeItem,
  Transform,
  TrimItem,
  Vec2,
} from './types';

/* ---------------------------------------------------------------- compositions */

export const compDef = (
  name: string,
  width: number,
  height: number,
  layers: LayerDef[],
  opts: { duration?: number; fps?: number } = {},
): CompDef => ({ name, width, height, duration: opts.duration ?? 20, fps: opts.fps ?? 24, layers });

/* --------------------------------------------------------------------- layers */

export interface LayerInit extends Partial<Transform> {
  enabled?: boolean;
  parent?: string;
  blend?: BlendMode;
  masks?: MaskDef[];
  effects?: FillEffect[];
}

const layerBase = (id: string, name: string, i: LayerInit) => ({
  id,
  name,
  anchor: i.anchor ?? ([0, 0] as Vec2),
  position: i.position ?? ([0, 0] as Vec2),
  scale: i.scale ?? ([100, 100] as Vec2),
  rotation: i.rotation ?? 0,
  opacity: i.opacity ?? 100,
  enabled: i.enabled ?? true,
  parent: i.parent,
  blend: i.blend ?? ('normal' as BlendMode),
  masks: i.masks ?? [],
  effects: i.effects ?? [],
});

export const shapeLayer = (id: string, name: string, init: LayerInit, contents: ShapeItem[]): ShapeLayerDef => ({
  type: 'shape',
  ...layerBase(id, name, init),
  contents,
});

export const compLayer = (
  id: string,
  name: string,
  source: CompDef,
  init: LayerInit & { collapse?: boolean } = {},
): CompLayerDef => ({
  type: 'comp',
  ...layerBase(id, name, init),
  source,
  collapse: init.collapse ?? false,
});

export const nullLayer = (id: string, name: string, init: LayerInit = {}): NullLayerDef => ({
  type: 'null',
  ...layerBase(id, name, init),
});

export const fillEffect = (color: string): FillEffect => ({ type: 'fill', color });

/* ----------------------------------------------------------------------- masks */

export interface PathOpts {
  inTangents?: Vec2[];
  outTangents?: Vec2[];
  closed?: boolean;
}

export const mask = (
  vertices: Vec2[],
  o: PathOpts & { mode?: 'add' | 'subtract'; expansion?: number } = {},
): MaskDef => ({
  vertices,
  inTangents: o.inTangents,
  outTangents: o.outTangents,
  closed: o.closed ?? true,
  mode: o.mode ?? 'add',
  expansion: o.expansion ?? 0,
});

/* ------------------------------------------------------------- shape contents */

export const rect = (
  size: Vec2,
  o: { roundness?: number; position?: Vec2; name?: string; enabled?: boolean } = {},
): RectItem => ({
  t: 'rect',
  name: o.name ?? 'Rectangle Path 1',
  enabled: o.enabled ?? true,
  size,
  position: o.position ?? [0, 0],
  roundness: o.roundness ?? 0,
});

export const ellipse = (
  size: Vec2,
  o: { position?: Vec2; name?: string; enabled?: boolean } = {},
): EllipseItem => ({
  t: 'ellipse',
  name: o.name ?? 'Ellipse Path 1',
  enabled: o.enabled ?? true,
  size,
  position: o.position ?? [0, 0],
});

export const path = (vertices: Vec2[], o: PathOpts & { name?: string; enabled?: boolean } = {}): PathItem => ({
  t: 'path',
  name: o.name ?? 'Path 1',
  enabled: o.enabled ?? true,
  vertices,
  inTangents: o.inTangents,
  outTangents: o.outTangents,
  closed: o.closed ?? true,
});

export const fill = (color: string, o: { opacity?: number; enabled?: boolean } = {}): FillItem => ({
  t: 'fill',
  name: 'Fill 1',
  enabled: o.enabled ?? true,
  color,
  opacity: o.opacity ?? 100,
});

export const stroke = (
  color: string,
  width: number,
  o: {
    opacity?: number;
    cap?: 'butt' | 'round' | 'square';
    join?: 'miter' | 'round' | 'bevel';
    enabled?: boolean;
  } = {},
): StrokeItem => ({
  t: 'stroke',
  name: 'Stroke 1',
  enabled: o.enabled ?? true,
  color,
  width,
  opacity: o.opacity ?? 100,
  cap: o.cap ?? 'butt',
  join: o.join ?? 'miter',
});

export const group = (
  name: string,
  contents: ShapeItem[],
  t: Partial<Transform> & { enabled?: boolean } = {},
): GroupItem => ({
  t: 'group',
  name,
  enabled: t.enabled ?? true,
  transform: {
    anchor: t.anchor ?? [0, 0],
    position: t.position ?? [0, 0],
    scale: t.scale ?? [100, 100],
    rotation: t.rotation ?? 0,
    opacity: t.opacity ?? 100,
  },
  contents,
});

export const repeater = (
  copies: number,
  o: {
    position?: Vec2;
    anchor?: Vec2;
    scale?: Vec2;
    rotation?: number;
    startOpacity?: number;
    endOpacity?: number;
    name?: string;
  } = {},
): RepeaterItem => ({
  t: 'repeater',
  name: o.name ?? 'Repeater 1',
  enabled: true,
  copies,
  position: o.position ?? [100, 0],
  anchor: o.anchor ?? [0, 0],
  scale: o.scale ?? [100, 100],
  rotation: o.rotation ?? 0,
  startOpacity: o.startOpacity ?? 100,
  endOpacity: o.endOpacity ?? 100,
});

export const trim = (o: { start?: number; end?: number; offset?: number } = {}): TrimItem => ({
  t: 'trim',
  name: 'Trim Paths 1',
  enabled: true,
  start: o.start ?? 0,
  end: o.end ?? 100,
  offset: o.offset ?? 0,
});

export type { BezierPath };
