import React from 'react';
import { AeComp, AeSvg, CompData, ParentingMode } from '../ae';

export interface PartProps {
  /** true (default) = render sebagai <svg> mandiri; false = <g> untuk disisipkan ke <svg> lain */
  standalone?: boolean;
  parenting?: ParentingMode;
  /** latar belakang saat standalone (comp AE transparan) */
  background?: string;
  style?: React.CSSProperties;
}

/** Membuat komponen React dari data sebuah comp. */
export const makePart = (comp: CompData) => {
  const Part: React.FC<PartProps> = ({ standalone = true, parenting, background, style }) =>
    standalone ? (
      <AeSvg comp={comp} parenting={parenting} background={background} style={style} />
    ) : (
      <AeComp comp={comp} parenting={parenting} />
    );
  Part.displayName = comp.name.replace(/\W+/g, '');
  return Part;
};
