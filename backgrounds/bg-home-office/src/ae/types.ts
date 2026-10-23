/**
 * Data model that mirrors the After Effects object model the original
 * `BGHOME_1.JSX` (compCode export) was built from.
 *
 * Conventions (same as After Effects):
 *  - Layers are listed TOP -> BOTTOM (index 0 = top layer). The renderer draws bottom first.
 *  - Coordinates are pixels, origin top-left, +y down. Rotation is degrees, clockwise.
 *  - Scale and opacity are percentages (100 = 100%).
 *  - Shape contents are also TOP -> BOTTOM, exactly like the AE "Contents" stack.
 */
export type Vec2 = [number, number];

/** Blend modes that appear in this project (extend `CSS_BLEND` in AEComp.tsx to add more). */
export type BlendMode = 'normal' | 'overlay' | 'add';

export interface Transform {
  anchor: Vec2;
  position: Vec2;
  scale: Vec2;
  rotation: number;
  opacity: number;
}

/* ------------------------------------------------------------------ shapes */

export interface BezierPath {
  vertices: Vec2[];
  /** Tangents are RELATIVE to their vertex (AE convention). Omit for straight segments. */
  inTangents?: Vec2[];
  outTangents?: Vec2[];
  closed: boolean;
}

interface ItemBase {
  name: string;
  enabled: boolean;
}

export interface RectItem extends ItemBase {
  t: 'rect';
  size: Vec2;
  position: Vec2;
  /** Corner radius in px (AE "Roundness"). */
  roundness: number;
}
export interface EllipseItem extends ItemBase {
  t: 'ellipse';
  size: Vec2;
  position: Vec2;
}
export interface PathItem extends ItemBase, BezierPath {
  t: 'path';
}
export interface FillItem extends ItemBase {
  t: 'fill';
  color: string;
  opacity: number;
}
export interface StrokeItem extends ItemBase {
  t: 'stroke';
  color: string;
  width: number;
  opacity: number;
  cap: 'butt' | 'round' | 'square';
  join: 'miter' | 'round' | 'bevel';
}
export interface GroupItem extends ItemBase {
  t: 'group';
  transform: Transform;
  contents: ShapeItem[];
}
/** Repeats everything ABOVE it in the same contents stack. `copies` includes the original. */
export interface RepeaterItem extends ItemBase {
  t: 'repeater';
  copies: number;
  position: Vec2;
  anchor: Vec2;
  scale: Vec2;
  rotation: number;
  startOpacity: number;
  endOpacity: number;
}
/** Trim Paths. start/end in %, offset in degrees (AE convention). Applies to strokes above it. */
export interface TrimItem extends ItemBase {
  t: 'trim';
  start: number;
  end: number;
  offset: number;
}

export type ShapeItem =
  | RectItem
  | EllipseItem
  | PathItem
  | FillItem
  | StrokeItem
  | GroupItem
  | RepeaterItem
  | TrimItem;

/* ------------------------------------------------------------------ layers */

export interface MaskDef extends BezierPath {
  mode: 'add' | 'subtract';
  /** AE "Mask Expansion" in px (negative = shrink). */
  expansion: number;
}

/** AE "Fill" effect: flat-colours the layer, preserving its alpha. */
export interface FillEffect {
  type: 'fill';
  color: string;
}

interface LayerBase extends Transform {
  /** Unique within its composition. Parenting and `overrides` refer to this. */
  id: string;
  name: string;
  /** false = the AE "eye" is off (kept in the data so it can be toggled back on). */
  enabled: boolean;
  /** id of the parent layer in the same composition. */
  parent?: string;
  blend: BlendMode;
  masks: MaskDef[];
  effects: FillEffect[];
}

export interface ShapeLayerDef extends LayerBase {
  type: 'shape';
  contents: ShapeItem[];
}
export interface CompLayerDef extends LayerBase {
  type: 'comp';
  source: CompDef;
  /** AE "Collapse Transformations" (the nested comp is not clipped to its own frame). */
  collapse: boolean;
}
export interface NullLayerDef extends LayerBase {
  type: 'null';
}
export type LayerDef = ShapeLayerDef | CompLayerDef | NullLayerDef;

export interface CompDef {
  name: string;
  width: number;
  height: number;
  /** seconds */
  duration: number;
  fps: number;
  /** TOP -> BOTTOM */
  layers: LayerDef[];
}

/** Per-layer runtime overrides, e.g. to animate a static layer from Remotion. */
export type LayerOverride = Partial<Transform> & { enabled?: boolean };
export type Overrides = Record<string, LayerOverride>;
