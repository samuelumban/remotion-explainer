import React from 'react';
import type { ShapeItem, Vec2, Xf } from './types';
import { ellipseToD, mul, pathToD, rectToD, rotate, roundCorners, scale, toCss, translate, xfMatrix } from './geometry';

type PathItem = Extract<ShapeItem, { t: 'rect' } | { t: 'ellipse' } | { t: 'path' }>;
type Trim = { start: number; end: number; offset: number };

const CAPS = { 1: 'butt', 2: 'round', 3: 'square' } as const;
const JOINS = { 1: 'miter', 2: 'round', 3: 'bevel' } as const;

/** Blend mode paint AE (Fill/Stroke "Blend Mode") -> CSS mix-blend-mode */
const PAINT_BLEND: Record<number, string> = {
  2: 'multiply', 3: 'screen', 4: 'overlay', 5: 'soft-light', 6: 'hard-light', 7: 'color-dodge', 8: 'color-burn',
  9: 'darken', 10: 'lighten', 11: 'difference', 12: 'exclusion', 13: 'hue', 14: 'saturation', 15: 'color', 16: 'luminosity',
};
const paintExtra = (it: { o?: number; blend?: number }, prop: 'fillOpacity' | 'strokeOpacity') => ({
  [prop]: it.o !== undefined && it.o !== 100 ? it.o / 100 : undefined,
  style: it.blend && PAINT_BLEND[it.blend] ? ({ mixBlendMode: PAINT_BLEND[it.blend] } as React.CSSProperties) : undefined,
});

const pathD = (p: PathItem, round?: number): string => {
  if (p.t === 'rect') return rectToD(p.size, p.pos, Math.max(p.round ?? 0, round ?? 0));
  if (p.t === 'ellipse') return ellipseToD(p.size, p.pos);
  return round ? roundCorners(p.path, round) : pathToD(p.path);
};

const xfAttrs = (xf?: Xf) => ({
  transform: xf && (xf.a || xf.p || xf.s || xf.r) ? toCss(xfMatrix(xf)) : undefined,
  opacity: xf?.o !== undefined && xf.o !== 100 ? xf.o / 100 : undefined,
});

type Op =
  | { k: 'paint'; item: Extract<ShapeItem, { t: 'fill' } | { t: 'stroke' }>; n: number }
  | { k: 'node'; node: React.ReactNode }
  | { k: 'repeater'; item: Extract<ShapeItem, { t: 'repeater' }> };

/**
 * Menerjemahkan daftar item satu "Contents" AE menjadi node SVG (urut ATAS → BAWAH).
 * Aturan AE yang ditiru:
 *  - Fill/Stroke berlaku untuk semua path (rect/ellipse/path) yang berada DI ATASNYA dalam group yang sama.
 *  - Trim Paths / Round Corners berlaku untuk semua path di atasnya.
 *  - Repeater menggandakan semua yang ada di atasnya (path, paint, dan sub-group).
 *  - Item pertama pada daftar digambar paling atas.
 */
export const renderItems = (items: ShapeItem[], key: string): React.ReactNode[] => {
  const paths: PathItem[] = [];
  const trims: { n: number; t: Trim }[] = [];
  const rounds: { n: number; r: number }[] = [];
  const ops: Op[] = [];

  items.forEach((it, idx) => {
    switch (it.t) {
      case 'rect':
      case 'ellipse':
      case 'path':
        paths.push(it);
        break;
      case 'trim':
        trims.push({ n: paths.length, t: { start: it.start ?? 0, end: it.end ?? 100, offset: it.offset ?? 0 } });
        break;
      case 'round':
        rounds.push({ n: paths.length, r: it.radius });
        break;
      case 'fill':
      case 'stroke':
        ops.push({ k: 'paint', item: it, n: paths.length });
        break;
      case 'repeater':
        ops.push({ k: 'repeater', item: it });
        break;
      case 'group': {
        const gk = `${key}g${idx}`;
        ops.push({
          k: 'node',
          node: (
            <g key={gk} {...xfAttrs(it.xf)}>
              {renderItems(it.items, gk + '.').slice().reverse()}
            </g>
          ),
        });
        break;
      }
    }
  });

  let drawables: React.ReactNode[] = [];

  ops.forEach((op, oi) => {
    if (op.k === 'node') {
      drawables.push(op.node);
      return;
    }
    if (op.k === 'paint') {
      const it = op.item;
      const mine = paths.slice(0, op.n).map((p, idx) => ({
        p,
        round: rounds.filter((m) => m.n > idx).reduce((a, m) => Math.max(a, m.r), 0),
        trim: trims.filter((m) => m.n > idx).map((m) => m.t).pop(),
      }));
      if (!mine.length) return;
      if (it.t === 'fill') {
        drawables.push(<path key={`${key}f${oi}`} d={mine.map((m) => pathD(m.p, m.round)).join('')} fill={it.color} {...paintExtra(it, 'fillOpacity')} />);
        return;
      }
      const common = {
        fill: 'none',
        stroke: it.color,
        strokeWidth: it.width,
        strokeLinecap: CAPS[it.cap ?? 1],
        strokeLinejoin: JOINS[it.join ?? 1],
        ...paintExtra(it, 'strokeOpacity'),
      } as const;
      const trimmed = mine.some((m) => m.trim && (m.trim.start !== 0 || m.trim.end !== 100 || m.trim.offset !== 0));
      if (!trimmed) {
        drawables.push(<path key={`${key}s${oi}`} d={mine.map((m) => pathD(m.p, m.round)).join('')} {...common} />);
        return;
      }
      // Trim Paths -> dash dengan pathLength dinormalisasi ke 100 (end/start dalam persen, offset dalam derajat)
      const group = mine.map((m, pi) => {
        const t = m.trim ?? { start: 0, end: 100, offset: 0 };
        const len = Math.max(0, Math.min(100, t.end - t.start));
        if (len <= 0) return null;
        const begin = (((t.start + (t.offset / 360) * 100) % 100) + 100) % 100;
        return (
          <path
            key={pi}
            d={pathD(m.p, m.round)}
            pathLength={100}
            strokeDasharray={len >= 100 ? undefined : `${len} ${100 - len}`}
            strokeDashoffset={len >= 100 ? undefined : -begin}
            {...common}
          />
        );
      });
      drawables.push(<g key={`${key}s${oi}`}>{group}</g>);
      return;
    }
    // repeater: menggandakan seluruh drawable di atasnya (mode "Below": salinan 0 paling atas)
    const it = op.item;
    const pos: Vec2 = it.pos ?? [100, 0];
    const sc: Vec2 = it.scale ?? [100, 100];
    const inner = drawables.slice().reverse();
    const copies: React.ReactNode[] = [];
    for (let c = it.copies - 1; c >= 0; c--) {
      const e = c + (it.offset ?? 0);
      let m = translate(pos[0] * e, pos[1] * e);
      if (it.rotation) m = mul(m, rotate(it.rotation * e));
      m = mul(m, scale(Math.pow(sc[0] / 100, e), Math.pow(sc[1] / 100, e)));
      copies.push(
        <g key={c} transform={toCss(m)}>
          {inner}
        </g>,
      );
    }
    drawables = [<g key={`${key}r${oi}`}>{copies}</g>];
  });

  return drawables;
};

/** Gambar isi sebuah shape layer (urutan painter: item terakhir lebih dulu). */
export const ShapeContents: React.FC<{ items: ShapeItem[]; idp: string }> = ({ items, idp }) => (
  <>{renderItems(items, idp + '.').slice().reverse()}</>
);
