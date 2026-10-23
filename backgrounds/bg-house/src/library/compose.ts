import type { BlendMode, CompData, LayerData, Vec2 } from '../ae';
import type { SceneryData } from './types';

/** Satu baris pada tabel penempatan (config.ts). */
export interface Placement {
  /** id unik instance (bebas) */
  id: string;
  /** part library (precomp) atau scenery (shape layer) */
  source: CompData | SceneryData;
  anchor?: Vec2;
  position?: Vec2;
  /** persen; negatif = mirror */
  scale?: Vec2;
  rotation?: number;
  opacity?: number;
  blend?: BlendMode;
  hidden?: boolean;
  /** Collapse Transformations (isi precomp tidak di-crop) */
  collapse?: boolean;
  /** id placement lain yang menjadi parent (AE parenting) */
  parent?: string;
}

const isComp = (s: CompData | SceneryData): s is CompData => 'layers' in s;

/** Menyusun CompData utama dari tabel PLACEMENTS (urut atas → bawah). */
export const buildComp = (name: string, width: number, height: number, placements: Placement[]): CompData => ({
  name,
  width,
  height,
  layers: placements.map((p): LayerData => {
    const layer: LayerData = {
      name: p.id,
      kind: isComp(p.source) ? 'part' : 'shape',
      xf: { a: p.anchor, p: p.position, s: p.scale, r: p.rotation, o: p.opacity },
    };
    if (p.hidden) layer.hidden = true;
    if (p.blend) layer.blend = p.blend;
    if (p.collapse) layer.collapse = true;
    if (p.parent) {
      const pi = placements.findIndex((q) => q.id === p.parent);
      if (pi >= 0) layer.parent = pi;
    }
    if (isComp(p.source)) layer.part = p.source;
    else {
      layer.contents = p.source.contents;
      if (p.source.masks) layer.masks = p.source.masks;
      if (p.source.fx) layer.fx = p.source.fx;
    }
    return layer;
  }),
});
