/**
 * Shirt "paint" for the texture sheet (Texture MAN NORMIE, 4000x2200). Coordinates are sheet coordinates.
 * The rig shows windows of this sheet through the body / shoulder / sleeve shapes, so the shirt follows every pose.
 *
 *   Body capsule centre ..... (2108, 546)  window: 190 x 310 visible
 *   Shoulder yoke ........... (1290, 459)  240 x 120
 *   Sleeve .................. (1113, 1251) 76 wide, visible y 1148..1262
 */
import React from 'react';
import {Ellipse, Grp, Layer, Poly, Rect} from '../ae';
import {SHIRT_VARIANT} from './config';
import type {ShirtVariant} from './config';

export const SMA = {
  white: '#f8f8f5',
  shade: '#e9ebee',
  line: '#cdd3d9',
  button: '#dfe3e8',
  buttonRing: '#b4bcc6',
  ink: '#33415c',
  badgeNavy: '#1f3a8a',
  badgeRed: '#c8242b',
  flagRed: '#d4202c',
} as const;

const GREEN = '#30b44f';
const X0 = 2108; // body centre x (sheet)
const Y0 = 546; // body centre y (sheet)

const Green: React.FC = () => (
  <>
    <Layer name="Body" t={{p: [0, 0]}}>
      <Grp x={2107} y={548}><Rect w={244} h={509} r={293} fill={GREEN} /></Grp>
    </Layer>
    <Layer name="Shape Layer 94" t={{p: [0, 0]}}>
      <Grp x={1290} y={459}><Rect w={240} h={120} r={198} fill={GREEN} /></Grp>
    </Layer>
    <Layer name="Shape Layer 188" t={{p: [1987, 1102]}} masks={[{m: 'add', p: [[-788, 14], [-984, 14], [-984, 160], [-788, 160]]}]}>
      <Grp x={-874} y={149}><Rect w={76} h={206} r={68} fill={GREEN} /></Grp>
    </Layer>
  </>
);

const Sma: React.FC = () => (
  <>
    {/* ---- torso ---- */}
    <Layer name="SMA Body" t={{p: [0, 0]}}>
      <Grp x={2107} y={548}><Rect w={244} h={509} r={293} fill={SMA.white} /></Grp>
      {/* soft side shade (right side of the body) */}
      <Grp x={X0 + 84} y={Y0}><Rect w={26} h={250} fill={SMA.shade} /></Grp>
      {/* button placket */}
      <Grp x={X0} y={Y0 + 38}><Rect w={22} h={244} fill={SMA.shade} stroke={SMA.line} sw={1.5} /></Grp>
      {[-40, 8, 56, 104].map((dy) => (
        <Grp key={dy} x={X0} y={Y0 + dy}>
          <Ellipse w={10} h={10} fill={SMA.button} stroke={SMA.buttonRing} sw={1.5} />
        </Grp>
      ))}
      {/* Indonesian flag emblem (Merah Putih) above the pocket */}
      <Grp x={X0 + 50} y={Y0 - 44}>
        <Rect w={28} h={18} fill="#ffffff" stroke={SMA.line} sw={1.5} />
      </Grp>
      <Grp x={X0 + 50} y={Y0 - 48.5}>
        <Rect w={28} h={9} fill={SMA.flagRed} />
      </Grp>
      {/* breast pocket (wearer's left = viewer's right) */}
      <Grp x={X0 + 50} y={Y0 + 2}>
        <Rect w={46} h={52} r={6} fill={SMA.white} stroke={SMA.line} sw={2} />
      </Grp>
      <Grp x={X0 + 50} y={Y0 - 18}>
        <Rect w={46} h={3} fill={SMA.line} />
      </Grp>
      {/* name tag (wearer's right = viewer's left) */}
      <Grp x={X0 - 50} y={Y0 - 4}>
        <Rect w={42} h={14} r={2} fill="#ffffff" stroke={SMA.line} sw={1.5} />
      </Grp>
      <Grp x={X0 - 50} y={Y0 - 4}>
        <Rect w={26} h={3} r={1.5} fill={SMA.ink} />
      </Grp>
    </Layer>

    {/* ---- shoulder yoke (sits behind neck + collar) ---- */}
    <Layer name="SMA Yoke" t={{p: [0, 0]}}>
      <Grp x={1290} y={459}><Rect w={240} h={120} r={198} fill={SMA.white} /></Grp>
    </Layer>

    {/* ---- short sleeve: hem + school badge ---- */}
    <Layer name="SMA Sleeve" t={{p: [1987, 1102]}} masks={[{m: 'add', p: [[-788, 14], [-984, 14], [-984, 160], [-788, 160]]}]}>
      {/* rect is 25px taller than the original green sleeve so its round cap fully covers the arm's shoulder cap */}
      <Grp x={-874} y={136.5}><Rect w={76} h={231} r={68} fill={SMA.white} /></Grp>
      <Grp x={-874} y={155}><Rect w={76} h={3} fill={SMA.line} /></Grp>
      <Grp x={-874} y={88}>
        <Poly pts={[[-13, -17], [13, -17], [13, 6], [0, 18], [-13, 6]]} fill={SMA.badgeNavy} />
        <Ellipse w={12} h={12} fill="#ffffff" />
        <Ellipse w={5} h={5} fill={SMA.badgeRed} />
      </Grp>
    </Layer>
  </>
);

export const ShirtPaint: React.FC<{variant?: ShirtVariant}> = ({variant = SHIRT_VARIANT}) =>
  variant === 'sma' ? <Sma /> : <Green />;
