import React from 'react';
import type { BlendMode, CompData, LayerData, MaskData, ParentingMode } from './types';
import { IDENTITY, Mat, mul, pathToD, rotate, toCss, translate, xfMatrix } from './geometry';
import { ShapeContents } from './shapes';

type Region = { x: number; y: number; width: number; height: number };

/** Area kerja mask: cukup luas untuk isi layer tetapi tidak raksasa (mask raksasa gagal dirasterisasi di kanvas 8K). */
const compRegion = (comp: CompData): Region => ({ x: -comp.width, y: -comp.height, width: comp.width * 3, height: comp.height * 3 });

/** Jika mask pertama Add/Intersect, hasil hanya ada di dalam path mask -> region = bbox path (+margin). */
const maskRegion = (masks: MaskData[], comp: CompData): Region => {
  if (masks[0].mode === 'subtract') return compRegion(comp);
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  masks.forEach((m) => {
    const pts = [...m.path.v, ...m.path.v.map((v, i) => [v[0] + (m.path.o?.[i]?.[0] ?? 0), v[1] + (m.path.o?.[i]?.[1] ?? 0)]), ...m.path.v.map((v, i) => [v[0] + (m.path.i?.[i]?.[0] ?? 0), v[1] + (m.path.i?.[i]?.[1] ?? 0)])];
    pts.forEach(([x, y]) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); });
  });
  const pad = 8;
  return { x: x0 - pad, y: y0 - pad, width: x1 - x0 + pad * 2, height: y1 - y0 + pad * 2 };
};

const blendStyle = (b?: BlendMode): React.CSSProperties | undefined =>
  b === 'add'
    ? ({ mixBlendMode: 'plus-lighter' } as React.CSSProperties) // AE "Add"
    : b === 'overlay'
      ? { mixBlendMode: 'overlay' } // AE "Overlay"
      : undefined;

/** Efek "Transform" AE (Skew + Skew Axis) di sekitar anchor (default = tengah comp). */
export const SKEW_SIGN = -1;
const fxMatrix = (fx: NonNullable<LayerData['fx']>, comp: CompData): Mat => {
  const [ax, ay] = fx.anchor ?? [comp.width / 2, comp.height / 2];
  const shear: Mat = [1, 0, SKEW_SIGN * Math.tan((fx.skew * Math.PI) / 180), 1, 0, 0];
  let m = translate(ax, ay);
  m = mul(m, rotate(fx.axis));
  m = mul(m, shear);
  m = mul(m, rotate(-fx.axis));
  return mul(m, translate(-ax, -ay));
};

/** Mask AE (Add / Subtract / Intersect) -> <mask> SVG, diproses berurutan seperti AE. */
const MaskDefs: React.FC<{ id: string; masks: MaskData[]; comp: CompData }> = ({ id, masks, comp }) => {
  const REGION = maskRegion(masks, comp);
  const FULL = compRegion(comp);
  const defs: React.ReactNode[] = [];
  const full = (fill: string, k: string) => <rect key={k} {...FULL} fill={fill} />;
  let acc: React.ReactNode[] = masks[0].mode === 'add' ? [] : [full('#fff', 'full')];
  masks.forEach((m, k) => {
    const d = pathToD(m.path);
    if (m.mode === 'add') acc = [...acc, <path key={`a${k}`} d={d} fill="#fff" />];
    else if (m.mode === 'subtract') acc = [...acc, <path key={`s${k}`} d={d} fill="#000" />];
    else {
      const sub = `${id}-i${k}`;
      defs.push(
        <mask key={sub} id={sub} maskUnits="userSpaceOnUse" {...REGION} colorInterpolation="sRGB">
          {full('#000', 'bg')}
          <path d={d} fill="#fff" />
        </mask>,
      );
      acc = [
        <g key={`i${k}`} mask={`url(#${sub})`}>
          {acc}
        </g>,
      ];
    }
  });
  return (
    <defs>
      {defs}
      <mask id={id} maskUnits="userSpaceOnUse" {...REGION} colorInterpolation="sRGB">
        {full('#000', 'bg')}
        {acc}
      </mask>
    </defs>
  );
};

const PartContent: React.FC<{ part: CompData; collapse?: boolean; idp: string; parenting: ParentingMode }> = ({
  part,
  collapse,
  idp,
  parenting,
}) => {
  const body = <AeComp comp={part} idp={idp} parenting={parenting} />;
  if (collapse) return body; // Collapse Transformations: tidak di-crop
  const clip = `${idp}-clip`;
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect width={part.width} height={part.height} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>{body}</g>
    </>
  );
};

interface LayerCtx {
  comp: CompData;
  idp: string;
  parenting: ParentingMode;
  world: (i: number) => Mat;
}

const LayerNode = (L: LayerData, i: number, c: LayerCtx): React.ReactNode => {
  const id = `${c.idp}-L${i}`;
  let inner: React.ReactNode = null;
  if (L.kind === 'shape') inner = <ShapeContents items={L.contents ?? []} idp={id} />;
  else if (L.kind === 'part' && L.part)
    inner = <PartContent part={L.part} collapse={L.collapse} idp={id} parenting={c.parenting} />;

  if (L.masks?.length) {
    inner = (
      <>
        <MaskDefs id={`${id}-mask`} masks={L.masks} comp={c.comp} />
        <g mask={`url(#${id}-mask)`}>{inner}</g>
      </>
    );
  }
  if (L.fx) inner = <g transform={toCss(fxMatrix(L.fx, c.comp))}>{inner}</g>;

  const op = L.xf?.o;
  return (
    <g
      key={id}
      data-layer={L.name}
      transform={toCss(c.world(i))}
      opacity={op !== undefined && op !== 100 ? op / 100 : undefined}
      style={blendStyle(L.blend)}
    >
      {inner}
    </g>
  );
};

/**
 * Menggambar semua layer sebuah composition (bawah → atas).
 * Dipakai untuk precomp maupun comp utama. Hasilnya <g> yang ter-isolasi, sehingga
 * blend mode (Add / Overlay) hanya berinteraksi dengan layer di comp yang sama.
 */
export const AeComp: React.FC<{ comp: CompData; idp?: string; parenting?: ParentingMode }> = ({
  comp,
  idp = 'c',
  parenting = 'local',
}) => {
  const L = comp.layers;
  const cache = new Map<number, Mat>();
  const world = (i: number): Mat => {
    if (cache.has(i)) return cache.get(i)!;
    let m = xfMatrix(L[i].xf);
    const p = L[i].parent;
    if (parenting === 'local' && p !== undefined && p !== null) m = mul(world(p), m);
    cache.set(i, m);
    return m;
  };
  const ctx: LayerCtx = { comp, idp, parenting, world };

  // layer yang dipakai sebagai track matte (ada di atas layer ber-matte) tidak digambar sendiri
  const matteSources = new Set<number>();
  L.forEach((l, i) => {
    if (l.matte === 'alpha' && i > 0) matteSources.add(i - 1);
  });

  const nodes: React.ReactNode[] = [];
  for (let i = L.length - 1; i >= 0; i--) {
    const l = L[i];
    if (l.hidden || matteSources.has(i)) continue;
    if (l.matte === 'alpha' && i > 0) {
      const mid = `${idp}-L${i}-matte`;
      nodes.push(
        <g key={`${idp}-L${i}-m`}>
          <defs>
            <mask id={mid} maskUnits="userSpaceOnUse" {...compRegion(comp)} style={{ maskType: 'alpha' }}>
              {LayerNode(L[i - 1], i - 1, ctx)}
            </mask>
          </defs>
          <g mask={`url(#${mid})`}>{LayerNode(l, i, ctx)}</g>
        </g>,
      );
    } else {
      nodes.push(LayerNode(l, i, ctx));
    }
  }
  return <g style={{ isolation: 'isolate' }}>{nodes}</g>;
};

/** Gambar satu comp/part sebagai <svg> mandiri (dipakai untuk preview komponen di library). */
export const AeSvg: React.FC<{
  comp: CompData;
  parenting?: ParentingMode;
  /** warna latar (comp AE transparan; abu-abu = warna viewer AE) */
  background?: string;
  style?: React.CSSProperties;
}> = ({ comp, parenting, background, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={comp.width}
    height={comp.height}
    viewBox={`0 0 ${comp.width} ${comp.height}`}
    style={{ display: 'block', background, ...style }}
  >
    <AeComp comp={comp} idp={comp.name.replace(/\W+/g, '')} parenting={parenting} />
  </svg>
);

export { IDENTITY };
