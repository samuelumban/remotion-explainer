/**
 * BG City — dikonversi dari compCode After Effects ("BG City", 2560×1440, 20 detik).
 * Setiap objek (mobil, pohon, gedung, awan, dst.) dipisah menjadi komponen React sendiri.
 * Semua geometri vektor (rect, ellipse, path, mask, repeater) dikonversi ke SVG.
 *
 * Pemakaian di Remotion (src/Root.tsx):
 *   <Composition id="BGCity" component={BGCity} durationInFrames={240}
 *                fps={24} width={2560} height={1440} />
 */
import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

type ArtProps = { fillOverride?: string };

export const BG_CITY_WIDTH = 2560;
export const BG_CITY_HEIGHT = 1440;

/** Membuat objek sedikit melayang (dipakai untuk awan). */
const Drift: React.FC<{ amp: number; phase: number; children: React.ReactNode }> = ({ amp, phase, children }) => {
  const frame = useCurrentFrame();
  const dx = Math.sin(frame / 60 + phase) * amp;
  return <g transform={`translate(${dx.toFixed(2)} 0)`}>{children}</g>;
};

// ======================================================================
// KENDARAAN (MOBIL)
// ======================================================================

export const Car1 = () => (
  <g>
    <defs>
    <mask id="Car1-m0-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Car1-m0-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car1-m0-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M279.25 378.5 L233.25 378.5 C223.033 378.5 214.75 386.783 214.75 397 C214.75 407.217 223.033 415.5 233.25 415.5 L279.25 415.5 C289.467 415.5 297.75 407.217 297.75 397 C297.75 386.783 289.467 378.5 279.25 378.5 Z" fill="white" />
    </mask>
    <mask id="Car1-m0-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car1-m0-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M374.25 378.5 L328.25 378.5 C318.033 378.5 309.75 386.783 309.75 397 C309.75 407.217 318.033 415.5 328.25 415.5 L374.25 415.5 C384.467 415.5 392.75 407.217 392.75 397 C392.75 386.783 384.467 378.5 374.25 378.5 Z" fill="white" />
    </mask>
    <mask id="Car1-m0-3" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car1-m0-2)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M466.5 378.5 L420.5 378.5 C410.283 378.5 402 386.783 402 397 C402 407.217 410.283 415.5 420.5 415.5 L466.5 415.5 C476.717 415.5 485 407.217 485 397 C485 386.783 476.717 378.5 466.5 378.5 Z" fill="white" />
    </mask>
    <mask id="Car1-m1-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
    </mask>
    <mask id="Car1-m1-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car1-m1-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M279.25 378.5 L233.25 378.5 C223.033 378.5 214.75 386.783 214.75 397 C214.75 407.217 223.033 415.5 233.25 415.5 L279.25 415.5 C289.467 415.5 297.75 407.217 297.75 397 C297.75 386.783 289.467 378.5 279.25 378.5 Z" fill="black" />
    </mask>
    <mask id="Car1-m1-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car1-m1-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M374.25 378.5 L328.25 378.5 C318.033 378.5 309.75 386.783 309.75 397 C309.75 407.217 318.033 415.5 328.25 415.5 L374.25 415.5 C384.467 415.5 392.75 407.217 392.75 397 C392.75 386.783 384.467 378.5 374.25 378.5 Z" fill="black" />
    </mask>
    <mask id="Car1-m1-3" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car1-m1-2)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M466.5 378.5 L420.5 378.5 C410.283 378.5 402 386.783 402 397 C402 407.217 410.283 415.5 420.5 415.5 L466.5 415.5 C476.717 415.5 485 407.217 485 397 C485 386.783 476.717 378.5 466.5 378.5 Z" fill="black" />
    </mask>
    <mask id="Car1-m2-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Car1-m2-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car1-m2-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M279.25 378.5 L233.25 378.5 C223.033 378.5 214.75 386.783 214.75 397 C214.75 407.217 223.033 415.5 233.25 415.5 L279.25 415.5 C289.467 415.5 297.75 407.217 297.75 397 C297.75 386.783 289.467 378.5 279.25 378.5 Z" fill="white" />
    </mask>
    <mask id="Car1-m2-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car1-m2-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M374.25 378.5 L328.25 378.5 C318.033 378.5 309.75 386.783 309.75 397 C309.75 407.217 318.033 415.5 328.25 415.5 L374.25 415.5 C384.467 415.5 392.75 407.217 392.75 397 C392.75 386.783 384.467 378.5 374.25 378.5 Z" fill="white" />
    </mask>
    <mask id="Car1-m2-3" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car1-m2-2)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M466.5 378.5 L420.5 378.5 C410.283 378.5 402 386.783 402 397 C402 407.217 410.283 415.5 420.5 415.5 L466.5 415.5 C476.717 415.5 485 407.217 485 397 C485 386.783 476.717 378.5 466.5 378.5 Z" fill="white" />
    </mask>
    <mask id="Car1-m4-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Car1-m4-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car1-m4-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M194 399.75 L188.5 399.75 C186.498 399.75 184.875 401.373 184.875 403.375 C184.875 405.377 186.498 407 188.5 407 L194 407 C196.002 407 197.625 405.377 197.625 403.375 C197.625 401.373 196.002 399.75 194 399.75 Z" fill="white" />
    </mask>
    <mask id="Car1-m4-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car1-m4-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M407.125 380.375 C405.123 380.375 403.5 381.998 403.5 384 L403.5 387.125 C403.5 389.127 405.123 390.75 407.125 390.75 C409.127 390.75 410.75 389.127 410.75 387.125 L410.75 384 C410.75 381.998 409.127 380.375 407.125 380.375 Z" fill="white" />
    </mask>
    <mask id="Car1-m4-3" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car1-m4-2)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M329.375 397.25 L252.125 397.25 C244.738 397.25 238.75 403.238 238.75 410.625 C238.75 418.012 244.738 424 252.125 424 L329.375 424 C336.762 424 342.75 418.012 342.75 410.625 C342.75 403.238 336.762 397.25 329.375 397.25 Z" fill="white" />
    </mask>
    </defs>
      <g transform="matrix(3.03 0 0 3.03 -296.97 -774.242)">
        <g mask="url(#Car1-m0-3)">
          <g transform="matrix(1 0 0 1 302 398.625)">
            <rect x={-105} y={-27.875} width={210} height={55.75} rx={20} fill="#fffcd9" />
          </g>
        </g>
      </g>
      <g transform="matrix(3.03 0 0 3.03 -296.97 -774.242)">
        <g mask="url(#Car1-m1-3)">
          <g transform="matrix(1 0 0 1 302 398.625)">
            <rect x={-105} y={-27.875} width={210} height={55.75} rx={20} fill="#a9b1d8" />
          </g>
        </g>
      </g>
      <g transform="matrix(3.03 0 0 3.03 -296.97 -774.242)">
        <g mask="url(#Car1-m2-3)">
          <g transform="matrix(1 0 0 1 302 398.625)">
            <rect x={-105} y={-27.875} width={210} height={55.75} rx={20} fill="#d3eef5" />
          </g>
        </g>
      </g>
      <g transform="matrix(3.03 0 0 3.03 -290.152 -677.273)">
          <g transform="matrix(1 0 0 1 299 392.75)">
            <rect x={-108.5} y={-21.5} width={217} height={43} rx={9} fill="#a9b1d8" />
          </g>
      </g>
      <g transform="matrix(3.03 0 0 3.03 -290.152 -677.273)">
        <g mask="url(#Car1-m4-3)">
          <g transform="matrix(1 0 0 1 299 392.75)">
            <rect x={-108.5} y={-21.5} width={217} height={43} rx={9} fill="#c5c9e6" />
          </g>
        </g>
      </g>
      <g transform="matrix(3.03 0 0 3.03 -290.152 -676.136)">
          <g transform="matrix(1 0 0 1 299.25 413.75)">
            <rect x={-110.5} y={-2.5} width={221} height={5} rx={9} fill="#8e95cb" />
          </g>
      </g>
      <g transform="matrix(3.03 0 0 3.03 -299.242 -679.545)">
          <g transform="matrix(1 0 0 1 222 412.25)">
            <g>
                        <rect x={-11} y={-11} width={22} height={22} rx={20} fill="#acbac2" stroke="#57636f" strokeWidth={6} strokeLinecap="butt" />
            </g>
            <g transform="matrix(1 0 0 1 144 0)">
                        <rect x={-11} y={-11} width={22} height={22} rx={20} fill="#acbac2" stroke="#57636f" strokeWidth={6} strokeLinecap="butt" />
            </g>
          </g>
      </g>
  </g>
);

export const Car2 = () => (
  <g>
    <defs>
    <mask id="Car2-m1-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Car2-m1-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car2-m1-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M215.375 383.5 C211.854 383.5 209 386.354 209 389.875 L209 401 C209 404.521 211.854 407.375 215.375 407.375 C218.896 407.375 221.75 404.521 221.75 401 L221.75 389.875 C221.75 386.354 218.896 383.5 215.375 383.5 Z" fill="white" />
    </mask>
    <mask id="Car2-m4-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Car2-m4-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car2-m4-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M407.812 399.375 C405.569 399.375 403.75 401.194 403.75 403.438 L403.75 405.812 C403.75 408.056 405.569 409.875 407.812 409.875 C410.056 409.875 411.875 408.056 411.875 405.812 L411.875 403.438 C411.875 401.194 410.056 399.375 407.812 399.375 Z" fill="white" />
    </mask>
    <mask id="Car2-m4-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car2-m4-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M322 403.625 L256.125 403.625 C252.949 403.625 250.375 406.199 250.375 409.375 C250.375 412.551 252.949 415.125 256.125 415.125 L322 415.125 C325.176 415.125 327.75 412.551 327.75 409.375 C327.75 406.199 325.176 403.625 322 403.625 Z" fill="white" />
    </mask>
    </defs>
      <g transform="matrix(3.27 0 0 3.27 -358.038 -835.422)">
          <g transform="matrix(1 0 0 1 220.75 410.125)">
            <rect x={-23} y={-35.375} width={46} height={70.75} rx={10} fill="#7a8d9c" />
          </g>
      </g>
      <g transform="matrix(3.27 0 0 3.27 -358.038 -835.422)">
        <g mask="url(#Car2-m1-1)">
          <g transform="matrix(1 0 0 1 220.75 410.125)">
            <rect x={-23} y={-35.375} width={46} height={70.75} rx={10} fill="#d3eef5" />
          </g>
        </g>
      </g>
      <g transform="matrix(3.27 0 0 3.27 28.61 -835.422)">
          <g transform="matrix(1 0 0 1 210.25 394.125)">
            <rect x={-75.5} y={-43.875} width={151} height={87.75} rx={10} fill="#ffffff" />
          </g>
      </g>
      <g transform="matrix(3.27 0 0 3.27 -350.681 -736.512)">
          <g transform="matrix(1 0 0 1 299 404.25)">
            <rect x={-108.5} y={-10.5} width={217} height={21} rx={9} fill="#7a8d9c" />
          </g>
      </g>
      <g transform="matrix(3.27 0 0 3.27 -350.681 -736.512)">
        <g mask="url(#Car2-m4-2)">
          <g transform="matrix(1 0 0 1 299 404.25)">
            <rect x={-108.5} y={-10.5} width={217} height={21} rx={9} fill="#acbac2" />
          </g>
        </g>
      </g>
      <g transform="matrix(3.27 0 0 3.27 -350.681 -729.564)">
          <g transform="matrix(1 0 0 1 299.25 413.75)">
            <rect x={-106.5} y={-2.5} width={213} height={5} rx={9} fill="#57636f" />
          </g>
      </g>
      <g transform="matrix(3.27 0 0 3.27 -360.49 -733.242)">
          <g transform="matrix(1 0 0 1 222 412.25)">
            <g>
                        <rect x={-11} y={-11} width={22} height={22} rx={20} fill="#7a8d9c" stroke="#57636f" strokeWidth={7} strokeLinecap="butt" />
            </g>
            <g transform="matrix(1 0 0 1 144 0)">
                        <rect x={-11} y={-11} width={22} height={22} rx={20} fill="#7a8d9c" stroke="#57636f" strokeWidth={7} strokeLinecap="butt" />
            </g>
          </g>
      </g>
  </g>
);

export const Car3 = () => (
  <g>
    <defs>
    <mask id="Car3-m1-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Car3-m1-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car3-m1-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M362.562 393.75 L304.688 393.75 C303.756 393.75 303 394.506 303 395.438 C303 396.369 303.756 397.125 304.688 397.125 L362.562 397.125 C363.494 397.125 364.25 396.369 364.25 395.438 C364.25 394.506 363.494 393.75 362.562 393.75 Z" fill="white" />
    </mask>
    <mask id="Car3-m1-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car3-m1-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M386.75 390.625 L371.75 390.625 C370.714 390.625 369.875 391.464 369.875 392.5 C369.875 393.536 370.714 394.375 371.75 394.375 L386.75 394.375 C387.786 394.375 388.625 393.536 388.625 392.5 C388.625 391.464 387.786 390.625 386.75 390.625 Z" fill="white" />
    </mask>
    <mask id="Car3-m1-3" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car3-m1-2)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M294.875 390.625 L279.875 390.625 C278.839 390.625 278 391.464 278 392.5 C278 393.536 278.839 394.375 279.875 394.375 L294.875 394.375 C295.911 394.375 296.75 393.536 296.75 392.5 C296.75 391.464 295.911 390.625 294.875 390.625 Z" fill="white" />
    </mask>
    <mask id="Car3-m1-4" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car3-m1-3)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M407.312 380.625 C405.828 380.625 404.625 381.828 404.625 383.312 L404.625 391.188 C404.625 392.672 405.828 393.875 407.312 393.875 C408.797 393.875 410 392.672 410 391.188 L410 383.312 C410 381.828 408.797 380.625 407.312 380.625 Z" fill="white" />
    </mask>
    <mask id="Car3-m1-5" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car3-m1-4)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M266.562 391.375 C264.319 391.375 262.5 393.194 262.5 395.438 L262.5 399.188 C262.5 401.431 264.319 403.25 266.562 403.25 C268.806 403.25 270.625 401.431 270.625 399.188 L270.625 395.438 C270.625 393.194 268.806 391.375 266.562 391.375 Z" fill="white" />
    </mask>
    <mask id="Car3-m2-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    </defs>
      <g transform="matrix(4.396 0 0 4.396 -901.099 -1232.967)">
          <g transform="matrix(1 0 0 1 321.5 384.25)">
            <rect x={-38.5} y={-27} width={77} height={54} rx={30} fill="#f89d28" />
          </g>
          <g transform="matrix(1 0 0 1 285.625 397.625)">
            <rect x={-18.5} y={-14.5} width={37} height={29} rx={9} fill="#f89d28" />
          </g>
          <g transform="matrix(1 0 0 1 359.5 384)">
            <rect x={-48} y={-27} width={96} height={54} rx={9} fill="#f89d28" />
          </g>
      </g>
      <g transform="matrix(4.396 0 0 4.396 -901.099 -1232.967)">
        <g mask="url(#Car3-m1-5)">
          <g transform="matrix(1 0 0 1 321.5 384.25)">
            <rect x={-38.5} y={-27} width={77} height={54} rx={30} fill="#fcb215" />
          </g>
          <g transform="matrix(1 0 0 1 285.625 397.625)">
            <rect x={-18.5} y={-14.5} width={37} height={29} rx={9} fill="#fcb215" />
          </g>
          <g transform="matrix(1 0 0 1 359.5 384)">
            <rect x={-48} y={-27} width={96} height={54} rx={9} fill="#fcb215" />
          </g>
        </g>
      </g>
      <g transform="matrix(4.396 0 0 4.396 -901.099 -1232.967)">
        <g mask="url(#Car3-m2-0)">
          <g transform="matrix(1 0 0 1 321.5 384.25)">
            <rect x={-38.5} y={-27} width={77} height={54} rx={30} fill="#d3eef5" />
          </g>
          <g transform="matrix(1 0 0 1 285.625 397.625)">
            <rect x={-18.5} y={-14.5} width={37} height={29} rx={9} fill="#d3eef5" />
          </g>
          <g transform="matrix(1 0 0 1 359.5 384)">
            <rect x={-48} y={-27} width={96} height={54} rx={9} fill="#d3eef5" />
          </g>
        </g>
      </g>
      <g transform="matrix(4.396 0 0 4.396 -593.407 -1242.308)">
          <g transform="matrix(1 0 0 1 267.25 413.75)">
            <rect x={-71} y={-2.5} width={142} height={5} rx={9} fill="#d9773c" />
          </g>
      </g>
      <g transform="matrix(4.396 0 0 4.396 -614.286 -1247.253)">
          <g transform="matrix(1 0 0 1 222 412.25)">
            <g>
                        <rect x={-8.5} y={-8.5} width={17} height={17} rx={20} fill="#acbac2" stroke="#57636f" strokeWidth={5} strokeLinecap="butt" />
            </g>
            <g transform="matrix(1 0 0 1 92 0)">
                        <rect x={-8.5} y={-8.5} width={17} height={17} rx={20} fill="#acbac2" stroke="#57636f" strokeWidth={5} strokeLinecap="butt" />
            </g>
          </g>
      </g>
  </g>
);

export const Car4 = () => (
  <g>
    <defs>
    <mask id="Car4-m0-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Car4-m0-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car4-m0-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M239.875 380.875 L215.125 380.75 C211.466 380.75 208.5 383.716 208.5 387.375 C208.5 391.034 211.466 394 215.125 394 L239.875 394.125 C243.534 394.125 246.5 391.159 246.5 387.5 C246.5 383.841 243.534 380.875 239.875 380.875 Z" fill="white" />
    </mask>
    <mask id="Car4-m1-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Car4-m1-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car4-m1-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M239.875 380.875 L215.125 380.75 C211.466 380.75 208.5 383.716 208.5 387.375 C208.5 391.034 211.466 394 215.125 394 L239.875 394.125 C243.534 394.125 246.5 391.159 246.5 387.5 C246.5 383.841 243.534 380.875 239.875 380.875 Z" fill="white" />
    </mask>
    <mask id="Car4-m2-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
    </mask>
    <mask id="Car4-m2-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car4-m2-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M239.875 380.875 L215.125 380.75 C211.466 380.75 208.5 383.716 208.5 387.375 C208.5 391.034 211.466 394 215.125 394 L239.875 394.125 C243.534 394.125 246.5 391.159 246.5 387.5 C246.5 383.841 243.534 380.875 239.875 380.875 Z" fill="black" />
    </mask>
    <mask id="Car4-m4-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    </defs>
      <g transform="matrix(8 0 0 8 -1474 -2554)">
        <g mask="url(#Car4-m0-1)">
          <g transform="matrix(1 0 0 1 268.25 393.875)">
            <rect x={-32.5} y={-16.875} width={65} height={33.75} rx={20} fill="#a1f9ff" />
          </g>
        </g>
      </g>
      <g transform="matrix(8 0 0 8 -1474 -2554)">
        <g mask="url(#Car4-m1-1)">
          <g transform="matrix(1 0 0 1 268.25 393.875)">
            <rect x={-32.5} y={-16.875} width={65} height={33.75} rx={20} fill="#d3eef5" />
          </g>
        </g>
      </g>
      <g transform="matrix(8 0 0 8 -1474 -2554)">
        <g mask="url(#Car4-m2-1)">
          <g transform="matrix(1 0 0 1 268.25 393.875)">
            <rect x={-32.5} y={-16.875} width={65} height={33.75} rx={20} fill="#acbac2" />
          </g>
        </g>
      </g>
      <g transform="matrix(8 0 0 8 -1372 -2540)">
          <g transform="matrix(1 0 0 1 248.5 404.75)">
            <rect x={-42.5} y={-12.5} width={85} height={25} rx={9} fill="#acbac2" />
          </g>
      </g>
      <g transform="matrix(8 0 0 8 -1372 -2540)" opacity={0.05}>
        <g mask="url(#Car4-m4-0)">
          <g transform="matrix(1 0 0 1 248.5 404.75)">
            <rect x={-42.5} y={-12.5} width={85} height={25} rx={9} fill="#000000" />
          </g>
        </g>
      </g>
      <g transform="matrix(8 0 0 8 -1390 -2539)">
          <g transform="matrix(1 0 0 1 251 413.75)">
            <rect x={-42.5} y={-3.5} width={85} height={7} rx={9} fill="#7a8d9c" />
          </g>
      </g>
      <g transform="matrix(8 0 0 8 -1396 -2542)">
          <g transform="matrix(1 0 0 1 223 412.25)">
            <g>
                        <rect x={-7} y={-7} width={14} height={14} rx={20} fill="#acbac2" stroke="#57636f" strokeWidth={5} strokeLinecap="butt" />
            </g>
            <g transform="matrix(1 0 0 1 55 0)">
                        <rect x={-7} y={-7} width={14} height={14} rx={20} fill="#acbac2" stroke="#57636f" strokeWidth={5} strokeLinecap="butt" />
            </g>
          </g>
      </g>
  </g>
);

export const Car5 = () => (
  <g>
    <defs>
    <mask id="Car5-m1-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Car5-m2-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Car5-m2-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car5-m2-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M242.312 382.25 L229.188 382.25 C226.184 382.25 223.75 384.684 223.75 387.688 C223.75 390.691 226.184 393.125 229.188 393.125 L242.312 393.125 C245.316 393.125 247.75 390.691 247.75 387.688 C247.75 384.684 245.316 382.25 242.312 382.25 Z" fill="white" />
    </mask>
    <mask id="Car5-m2-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car5-m2-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M312.688 382.25 L299.562 382.25 C296.559 382.25 294.125 384.684 294.125 387.688 C294.125 390.691 296.559 393.125 299.562 393.125 L312.688 393.125 C315.691 393.125 318.125 390.691 318.125 387.688 C318.125 384.684 315.691 382.25 312.688 382.25 Z" fill="white" />
    </mask>
    <mask id="Car5-m3-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Car5-m3-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car5-m3-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M285.188 382.375 L257.312 382.375 C254.309 382.375 251.875 384.809 251.875 387.812 C251.875 390.816 254.309 393.25 257.312 393.25 L285.188 393.25 C288.191 393.25 290.625 390.816 290.625 387.812 C290.625 384.809 288.191 382.375 285.188 382.375 Z" fill="black" />
    </mask>
    <mask id="Car5-m3-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car5-m3-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M242.312 382.25 L229.188 382.25 C226.184 382.25 223.75 384.684 223.75 387.688 C223.75 390.691 226.184 393.125 229.188 393.125 L242.312 393.125 C245.316 393.125 247.75 390.691 247.75 387.688 C247.75 384.684 245.316 382.25 242.312 382.25 Z" fill="black" />
    </mask>
    <mask id="Car5-m3-3" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car5-m3-2)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M312.688 382.25 L299.562 382.25 C296.559 382.25 294.125 384.684 294.125 387.688 C294.125 390.691 296.559 393.125 299.562 393.125 L312.688 393.125 C315.691 393.125 318.125 390.691 318.125 387.688 C318.125 384.684 315.691 382.25 312.688 382.25 Z" fill="black" />
    </mask>
    <mask id="Car5-m5-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Car5-m7-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Car5-m7-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car5-m7-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M242.312 382.25 L229.188 382.25 C226.184 382.25 223.75 384.684 223.75 387.688 C223.75 390.691 226.184 393.125 229.188 393.125 L242.312 393.125 C245.316 393.125 247.75 390.691 247.75 387.688 C247.75 384.684 245.316 382.25 242.312 382.25 Z" fill="white" />
    </mask>
    <mask id="Car5-m7-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Car5-m7-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M312.688 382.25 L299.562 382.25 C296.559 382.25 294.125 384.684 294.125 387.688 C294.125 390.691 296.559 393.125 299.562 393.125 L312.688 393.125 C315.691 393.125 318.125 390.691 318.125 387.688 C318.125 384.684 315.691 382.25 312.688 382.25 Z" fill="white" />
    </mask>
    </defs>
      <g transform="matrix(1 0 0 1 602 261.5)">
          <g transform="matrix(1 0 0 1 -431.75 29.75)">
            <rect x={-17.25} y={-19.75} width={34.5} height={39.5} rx={21} fill="#8bdafc" />
          </g>
      </g>
      <g transform="matrix(7.273 0 0 7.273 -1303.636 -2625.318)">
        <g mask="url(#Car5-m1-0)">
          <g transform="matrix(1 0 0 1 268.25 393.875)">
            <rect x={-32.5} y={-15.375} width={65} height={30.75} rx={20} fill="#4074cb" />
          </g>
        </g>
      </g>
      <g transform="matrix(7.273 0 0 7.273 -1303.636 -2625.318)">
        <g mask="url(#Car5-m2-2)">
          <g transform="matrix(1 0 0 1 268.25 393.875)">
            <rect x={-32.5} y={-15.375} width={65} height={30.75} rx={20} fill="#76d7ff" />
          </g>
        </g>
      </g>
      <g transform="matrix(7.273 0 0 7.273 -1303.636 -2625.318)">
        <g mask="url(#Car5-m3-3)">
          <g transform="matrix(1 0 0 1 268.25 393.875)">
            <rect x={-32.5} y={-15.375} width={65} height={30.75} rx={20} fill="#7a8d9c" />
          </g>
        </g>
      </g>
      <g transform="matrix(7.273 0 0 7.273 -1272.727 -2625.454)">
          <g transform="matrix(1 0 0 1 256 404.75)">
            <rect x={-58} y={-11.5} width={116} height={23} rx={9} fill="#7a8d9c" />
          </g>
      </g>
      <g transform="matrix(7.273 0 0 7.273 -1272.727 -2625.454)">
        <g mask="url(#Car5-m5-0)">
          <g transform="matrix(1 0 0 1 256 404.75)">
            <rect x={-58} y={-11.5} width={116} height={23} rx={9} fill="#7a8d9c" />
          </g>
        </g>
      </g>
      <g transform="matrix(7.273 0 0 7.273 -1272.727 -2622.727)">
          <g transform="matrix(1 0 0 1 256 413.75)">
            <rect x={-58} y={-2.5} width={116} height={5} rx={9} fill="#57636f" />
          </g>
      </g>
      <g transform="matrix(7.273 0 0 7.273 -1303.636 -2625.318)">
        <g mask="url(#Car5-m7-2)">
          <g transform="matrix(1 0 0 1 268.25 393.875)">
            <rect x={-32.5} y={-15.375} width={65} height={30.75} rx={20} fill="#d3eef6" />
          </g>
        </g>
      </g>
      <g transform="matrix(7.273 0 0 7.273 -1294.545 -2630.909)">
          <g transform="matrix(1 0 0 1 222 412.25)">
            <g>
                        <rect x={-8} y={-8} width={16} height={16} rx={20} fill="#acbac2" stroke="#57636f" strokeWidth={5} strokeLinecap="butt" />
            </g>
            <g transform="matrix(1 0 0 1 72 0)">
                        <rect x={-8} y={-8} width={16} height={16} rx={20} fill="#acbac2" stroke="#57636f" strokeWidth={5} strokeLinecap="butt" />
            </g>
          </g>
      </g>
      <g transform="matrix(1 0 0 1 600 261.5)">
          <g transform="matrix(1 0 0 1 -428.25 29.75)">
            <rect x={-7.75} y={-27.75} width={15.5} height={55.5} rx={21} fill="#57636f" />
          </g>
      </g>
  </g>
);

// ======================================================================
// TANAMAN & SEMAK
// ======================================================================

export const Bush1 = () => (
  <g>
    <defs>
    <mask id="Bush1-m0-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m1-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
    </mask>
    <mask id="Bush1-m1-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Bush1-m1-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M376 45 C307.517 45 252 100.517 252 169 C252 237.483 307.517 293 376 293 C444.483 293 500 237.483 500 169 C500 100.517 444.483 45 376 45 Z" fill="black" />
    </mask>
    <mask id="Bush1-m1-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Bush1-m1-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M227 192 C165.144 192 115 242.144 115 304 C115 365.856 165.144 416 227 416 C288.856 416 339 365.856 339 304 C339 242.144 288.856 192 227 192 Z" fill="black" />
    </mask>
    <mask id="Bush1-m1-3" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Bush1-m1-2)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M467 219 C414.533 219 372 261.533 372 314 C372 366.467 414.533 409 467 409 C519.467 409 562 366.467 562 314 C562 261.533 519.467 219 467 219 Z" fill="black" />
    </mask>
    <mask id="Bush1-m1-4" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Bush1-m1-3)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M347 270 C298.399 270 259 309.399 259 358 C259 406.601 298.399 446 347 446 C395.601 446 435 406.601 435 358 C435 309.399 395.601 270 347 270 Z" fill="black" />
    </mask>
    <mask id="Bush1-m1-5" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Bush1-m1-4)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M530 184 C484.16 184 447 221.16 447 267 C447 312.84 484.16 350 530 350 C575.84 350 613 312.84 613 267 C613 221.16 575.84 184 530 184 Z" fill="black" />
    </mask>
    <mask id="Bush1-m1-6" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Bush1-m1-5)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M616 317 C588.938 317 567 338.938 567 366 C567 393.062 588.938 415 616 415 C643.062 415 665 393.062 665 366 C665 338.938 643.062 317 616 317 Z" fill="black" />
    </mask>
    <mask id="Bush1-m1-7" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Bush1-m1-6)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M553 309 C517.654 309 489 337.654 489 373 C489 408.346 517.654 437 553 437 C588.346 437 617 408.346 617 373 C617 337.654 588.346 309 553 309 Z" fill="black" />
    </mask>
    <mask id="Bush1-m2-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m3-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m4-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m5-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m6-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m7-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m8-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m9-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m10-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m11-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m12-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m13-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m14-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m15-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bush1-m16-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    </defs>
      <g transform="matrix(1 0 0 1 -34 84)">
        <g mask="url(#Bush1-m0-0)">
          <g transform="matrix(1 0 0 1 484 360)">
            <ellipse cx={0} cy={0} rx={146} ry={146} fill="#a6ce39" />
          </g>
          <g transform="matrix(1 0 0 1 644 358)">
            <ellipse cx={0} cy={0} rx={0} ry={0} fill="#a6ce39" />
          </g>
          <g transform="matrix(1 0 0 1 576 240)">
            <ellipse cx={0} cy={0} rx={94} ry={94} fill="#a6ce39" />
          </g>
          <g transform="matrix(1 0 0 1 288 312)">
            <ellipse cx={0} cy={0} rx={116} ry={116} fill="#a6ce39" />
          </g>
          <g transform="matrix(1 0 0 1 428 176)">
            <ellipse cx={0} cy={0} rx={122} ry={122} fill="#a6ce39" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -34 84)">
        <g mask="url(#Bush1-m1-7)">
          <g transform="matrix(1 0 0 1 484 360)">
            <ellipse cx={0} cy={0} rx={146} ry={146} fill="#526e29" />
          </g>
          <g transform="matrix(1 0 0 1 644 358)">
            <ellipse cx={0} cy={0} rx={0} ry={0} fill="#526e29" />
          </g>
          <g transform="matrix(1 0 0 1 576 240)">
            <ellipse cx={0} cy={0} rx={94} ry={94} fill="#526e29" />
          </g>
          <g transform="matrix(1 0 0 1 288 312)">
            <ellipse cx={0} cy={0} rx={116} ry={116} fill="#526e29" />
          </g>
          <g transform="matrix(1 0 0 1 428 176)">
            <ellipse cx={0} cy={0} rx={122} ry={122} fill="#526e29" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 32.5 105)">
        <g mask="url(#Bush1-m2-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -25.5 63)">
        <g mask="url(#Bush1-m3-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 34 26)">
        <g mask="url(#Bush1-m4-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 91 65)">
        <g mask="url(#Bush1-m5-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 188 106)">
        <g mask="url(#Bush1-m6-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 186 189.5)">
        <g mask="url(#Bush1-m7-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 132 145.5)">
        <g mask="url(#Bush1-m8-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -132 232)">
        <g mask="url(#Bush1-m9-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -175 192)">
        <g mask="url(#Bush1-m10-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -176.5 274.5)">
        <g mask="url(#Bush1-m11-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -88.5 191)">
        <g mask="url(#Bush1-m12-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 6.5 190.5)">
        <g mask="url(#Bush1-m13-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -43.5 133)">
        <g mask="url(#Bush1-m14-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 234 145.5)">
        <g mask="url(#Bush1-m15-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 131.5 231)">
        <g mask="url(#Bush1-m16-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#d5e26e" />
          </g>
        </g>
      </g>
  </g>
);

export const Bush3 = () => (
  <g>
    <defs>
    <mask id="Bush3-m0-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    </defs>
      <g transform="matrix(1 0 0 1 400 300)">
        <g mask="url(#Bush3-m0-0)">
          <g>
            <path d="M6 -129 L-145 -26 L-200 147 L-191 207 L201 211 L204 182 L209 114 C209 114 152 -7 149 -12 C146 -17 81 -65 81 -65 L6 -129 Z" fill="#30b450" />
          </g>
          <g transform="matrix(1 0 0 1 120 -61)">
            <ellipse cx={0} cy={0} rx={68} ry={68} fill="#30b450" />
          </g>
          <g transform="matrix(1 0 0 1 -136 -28)">
            <ellipse cx={0} cy={0} rx={68} ry={68} fill="#30b450" />
          </g>
          <g transform="matrix(1 0 0 1 -5 -111)">
            <ellipse cx={0} cy={0} rx={109} ry={109} fill="#30b450" />
          </g>
          <g transform="matrix(1 0 0 1 172 5)">
            <ellipse cx={0} cy={0} rx={92} ry={92} fill="#30b450" />
          </g>
          <g transform="matrix(1 0 0 1 196 115)">
            <ellipse cx={0} cy={0} rx={92} ry={92} fill="#30b450" />
          </g>
          <g transform="matrix(1 0 0 1 -181 99)">
            <ellipse cx={0} cy={0} rx={92} ry={92} fill="#30b450" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 400 300)">
          <g transform="matrix(1 0 0 1 -92 96)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 345.5 225)">
          <g transform="matrix(1 0 0 1 -92 96)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 271 329.5)">
          <g transform="matrix(1 0 0 1 -92 96)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 411 184)">
          <g transform="matrix(1 0 0 1 -92 96)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 518.5 265)">
          <g transform="matrix(1 0 0 1 -92 96)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 518.5 265)">
          <g transform="matrix(1 0 0 1 24.5 68)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
          <g transform="matrix(1 0 0 1 -25 16.5)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
          <g transform="matrix(1 0 0 1 66 16.5)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
          <g transform="matrix(1 0 0 1 16.5 -29)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 579 303.5)">
          <g transform="matrix(1 0 0 1 -92 96)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 417.5 93.5)">
          <g transform="matrix(1 0 0 1 -92 96)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 479 61)">
          <g transform="matrix(1 0 0 1 -92 96)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(0.475 0 0 0.475 299.2 197.4)">
          <g transform="matrix(1 0 0 1 -92 96)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(0.625 0 0 0.625 431 261.5)">
          <g transform="matrix(1 0 0 1 -92 96)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(0.625 0 0 0.625 523.312 358.438)">
          <g transform="matrix(1 0 0 1 -148.5 146.5)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(0.55 0 0 0.55 430.1 183.7)">
          <g transform="matrix(1 0 0 1 -92 96)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(0.575 0 0 0.575 380.4 72.3)">
          <g transform="matrix(1 0 0 1 -92 96)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
      <g transform="matrix(0.525 0 0 0.525 487.3 143.6)">
          <g transform="matrix(1 0 0 1 -92 96)">
            <ellipse cx={0} cy={0} rx={10} ry={10} fill="#a6ce39" />
          </g>
      </g>
  </g>
);

export const Tree1 = () => (
  <g>
    <defs>
    <mask id="Tree1-m3-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Tree1-m4-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Tree1-m5-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Tree1-m6-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Tree1-m7-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Tree1-m8-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    </defs>
      <g transform="matrix(1 0 0 1 -208 540)">
          <g>
            <path d="M554 10 L554 388" fill="#92b859" stroke="#7a8d9c" strokeWidth={40} strokeLinecap="butt" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -208 540)">
          <g transform="matrix(1 0 0 1 554 -58)">
            <ellipse cx={0} cy={0} rx={182} ry={182} fill="#66c6c2" />
          </g>
          <g transform="matrix(1 0 0 1 554 -266)">
            <ellipse cx={0} cy={0} rx={136} ry={136} fill="#66c6c2" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 350 540)" opacity={0.05} style={{ mixBlendMode: "plus-lighter" }}>
          <g transform="matrix(1 0 0 1 -14.5 246.5)">
            <rect x={-4.5} y={-117.5} width={9} height={235} rx={20} fill="#ffffff" />
          </g>
      </g>
      <g transform="matrix(0.6 0 0 0.6 88.3 479.2)">
        <g mask="url(#Tree1-m3-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#a0dadb" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -44 228.5)">
        <g mask="url(#Tree1-m4-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#a0dadb" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -58.5 62.5)">
        <g mask="url(#Tree1-m5-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#a0dadb" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 32.5 136.5)">
        <g mask="url(#Tree1-m6-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#a0dadb" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 78 345)">
        <g mask="url(#Tree1-m7-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#a0dadb" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -109.5 322)">
        <g mask="url(#Tree1-m8-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#a0dadb" />
          </g>
        </g>
      </g>
  </g>
);

export const Tree2 = () => (
  <g>
    <defs>
    <mask id="Tree2-m3-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Tree2-m4-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Tree2-m5-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Tree2-m6-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Tree2-m7-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Tree2-m8-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Tree2-m9-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    </defs>
      <g transform="matrix(1 0 0 1 -208 540)">
          <g>
            <path d="M554 -40 L554 388" fill="#92b859" stroke="#7a8d9c" strokeWidth={40} strokeLinecap="butt" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -208 540)">
          <g transform="matrix(1 0 0 1 554 -213)">
            <ellipse cx={0} cy={0} rx={182} ry={182} fill="#1daeab" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 350 540)" opacity={0.05} style={{ mixBlendMode: "plus-lighter" }}>
          <g transform="matrix(1 0 0 1 -14.5 177.5)">
            <rect x={-4.5} y={-194.5} width={9} height={389} rx={20} fill="#ffffff" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -148 231)">
        <g mask="url(#Tree2-m3-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#179f9d" />
          </g>
        </g>
      </g>
      <g transform="matrix(0.6 0 0 0.6 84.3 347.2)">
        <g mask="url(#Tree2-m4-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#179f9d" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -11 197.5)">
        <g mask="url(#Tree2-m5-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#179f9d" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -90.5 124.5)">
        <g mask="url(#Tree2-m6-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#179f9d" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 32.5 59.5)">
        <g mask="url(#Tree2-m7-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#179f9d" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 69 235)">
        <g mask="url(#Tree2-m8-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#179f9d" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 124.5 231)">
        <g mask="url(#Tree2-m9-0)">
          <g transform="matrix(1 0 0 1 359.5 145.5)">
            <ellipse cx={0} cy={0} rx={15} ry={15} fill="#179f9d" />
          </g>
        </g>
      </g>
  </g>
);

// ======================================================================
// PERABOT KOTA
// ======================================================================

export const Bench = ({ fillOverride }: ArtProps) => (
  <g>
    <defs>
    <mask id="Bench-m7-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bench-m8-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bench-m9-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Bench-m12-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    </defs>
      <g transform="matrix(1 0 0 1 14 215)">
          <g transform="matrix(1 0 0 1 518 177)">
            <rect x={-25} y={-157} width={50} height={314} rx={95} fill={fillOverride ?? "#344d5b"} />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 847 215)">
          <g transform="matrix(1 0 0 1 518 177)">
            <rect x={-25} y={-157} width={50} height={314} rx={95} fill={fillOverride ?? "#344d5b"} />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 960 540)">
          <g transform="matrix(1 0 0 1 -418 55)">
            <ellipse cx={0} cy={0} rx={32.5} ry={32.5} fill={fillOverride ?? "#344d5b"} />
          </g>
          <g transform="matrix(1 0 0 1 -502 136)">
            <ellipse cx={0} cy={0} rx={32.5} ry={32.5} fill={fillOverride ?? "#344d5b"} />
          </g>
          <g transform="matrix(1 0 0 1 488 136)">
            <ellipse cx={0} cy={0} rx={32.5} ry={32.5} fill={fillOverride ?? "#344d5b"} />
          </g>
          <g transform="matrix(1 0 0 1 401 54)">
            <ellipse cx={0} cy={0} rx={32.5} ry={32.5} fill={fillOverride ?? "#344d5b"} />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -74 540)">
          <g transform="matrix(1 0 0 1 578 101)">
            <rect x={-15} y={-83} width={30} height={166} rx={95} fill={fillOverride ?? "#344d5b"} />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -74 540)">
          <g transform="matrix(1 0 0 1 1478 101)">
            <rect x={-15} y={-83} width={30} height={166} rx={95} fill={fillOverride ?? "#344d5b"} />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -74 540)">
          <g transform="matrix(1 0 0 1 518 177)">
            <rect x={-25} y={-157} width={50} height={314} rx={95} fill={fillOverride ?? "#344d5b"} />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 940 540)">
          <g transform="matrix(1 0 0 1 518 177)">
            <rect x={-25} y={-157} width={50} height={314} rx={95} fill={fillOverride ?? "#344d5b"} />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 960 565)">
        <g mask="url(#Bench-m7-0)">
          <g transform="matrix(1 0 0 1 -12 -193)">
            <rect x={-484} y={-118} width={968} height={236} rx={40} fill={fillOverride ?? "#fdd153"} />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 960 565)">
        <g mask="url(#Bench-m8-0)">
          <g transform="matrix(1 0 0 1 -12 -193)">
            <rect x={-484} y={-110} width={968} height={220} fill={fillOverride ?? "#febf3e"} />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 960 565)">
        <g mask="url(#Bench-m9-0)">
          <g transform="matrix(1 0 0 1 -12 -193)">
            <rect x={-484} y={-110} width={968} height={220} rx={40} fill={fillOverride ?? "#fbe56e"} />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 1794 545)">
          <g transform="matrix(1 0 0 1 -1263 -92)">
            <ellipse cx={0} cy={0} rx={8} ry={8} fill={fillOverride ?? "#7a8d9c"} />
          </g>
          <g transform="matrix(1 0 0 1 -429 -92)">
            <ellipse cx={0} cy={0} rx={8} ry={8} fill={fillOverride ?? "#7a8d9c"} />
          </g>
          <g transform="matrix(1 0 0 1 -1263 -248)">
            <ellipse cx={0} cy={0} rx={8} ry={8} fill={fillOverride ?? "#7a8d9c"} />
          </g>
          <g transform="matrix(1 0 0 1 -429 -248)">
            <ellipse cx={0} cy={0} rx={8} ry={8} fill={fillOverride ?? "#7a8d9c"} />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 960 540)">
          <g transform="matrix(1 0 0 1 -13 18)">
            <rect x={-601} y={-44} width={1202} height={88} rx={78} fill={fillOverride ?? "#fdd153"} />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 960 540)">
        <g mask="url(#Bench-m12-0)">
          <g transform="matrix(1 0 0 1 -13 18)">
            <rect x={-601} y={-44} width={1202} height={88} rx={78} fill={fillOverride ?? "#f89d29"} />
          </g>
        </g>
      </g>
  </g>
);

export const StreetLight = () => (
  <g>
    <defs>
    <mask id="StreetLight-m0-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
    </mask>
    <mask id="StreetLight-m0-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#StreetLight-m0-0)">
        <path d="M-310 -510 L-732 -510 C-743.046 -510 -752 -501.046 -752 -490 L-752 370 C-752 381.046 -743.046 390 -732 390 L-310 390 C-298.954 390 -290 381.046 -290 370 L-290 -490 C-290 -501.046 -298.954 -510 -310 -510 Z" fill="white" />
      </g>
    </mask>
    <mask id="StreetLight-m0-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#StreetLight-m0-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M-495.562 269.5 L-521.062 269.5 C-522.995 269.5 -524.562 271.067 -524.562 273 C-524.562 274.933 -522.995 276.5 -521.062 276.5 L-495.562 276.5 C-493.63 276.5 -492.062 274.933 -492.062 273 C-492.062 271.067 -493.63 269.5 -495.562 269.5 Z" fill="black" />
    </mask>
    <mask id="StreetLight-m0-3" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#StreetLight-m0-2)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M-571.062 270.25 L-618.562 270.25 C-620.357 270.25 -621.812 271.705 -621.812 273.5 C-621.812 275.295 -620.357 276.75 -618.562 276.75 L-571.062 276.75 C-569.268 276.75 -567.812 275.295 -567.812 273.5 C-567.812 271.705 -569.268 270.25 -571.062 270.25 Z" fill="black" />
    </mask>
    <mask id="StreetLight-m1-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="StreetLight-m1-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#StreetLight-m1-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M-507.5 -241 L-583 -241 C-588.247 -241 -592.5 -236.747 -592.5 -231.5 C-592.5 -226.253 -588.247 -222 -583 -222 L-507.5 -222 C-502.253 -222 -498 -226.253 -498 -231.5 C-498 -236.747 -502.253 -241 -507.5 -241 Z" fill="white" />
    </mask>
    <mask id="StreetLight-m1-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#StreetLight-m1-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M-517.75 368.5 L-574.75 368.5 C-577.926 368.5 -580.5 371.074 -580.5 374.25 C-580.5 377.426 -577.926 380 -574.75 380 L-517.75 380 C-514.574 380 -512 377.426 -512 374.25 C-512 371.074 -514.574 368.5 -517.75 368.5 Z" fill="white" />
    </mask>
    <mask id="StreetLight-m5-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="StreetLight-m6-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="StreetLight-m6-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#StreetLight-m6-0)">
        <path d="M-471 -346 L-650 -346 C-658.284 -346 -665 -339.284 -665 -331 C-665 -322.716 -658.284 -316 -650 -316 L-471 -316 C-462.716 -316 -456 -322.716 -456 -331 C-456 -339.284 -462.716 -346 -471 -346 Z" fill="white" />
      </g>
    </mask>
    </defs>
      <g transform="matrix(1 0 0 1 773 540)">
        <g mask="url(#StreetLight-m0-3)">
          <g transform="matrix(1 0 0 1 -546 140)">
            <rect x={-12.5} y={-523} width={25} height={1046} rx={46} fill="#7653a3" />
          </g>
          <g transform="matrix(1 0 0 1 -546 390)">
            <rect x={-25} y={-142} width={50} height={284} rx={46} fill="#7653a3" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 773 540)">
        <g mask="url(#StreetLight-m1-2)">
          <g transform="matrix(1 0 0 1 -546 140)">
            <rect x={-12.5} y={-523} width={25} height={1046} rx={46} fill="#652d8e" />
          </g>
          <g transform="matrix(1 0 0 1 -546 390)">
            <rect x={-25} y={-142} width={50} height={284} rx={46} fill="#652d8e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 771 540)">
          <g transform="matrix(1 0 0 1 -544.25 -295.5)">
            <rect x={-31.75} y={-47.5} width={63.5} height={95} rx={20} fill="#a0dadb" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 773 540)">
          <g>
            <path d="M-546 -274.5 L-546 -249.75" fill="#fff0c6" stroke="#cec5e2" strokeWidth={10} strokeLinecap="butt" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 773.5 543)">
          <g transform="matrix(1 0 0 1 -546 -246)">
            <rect x={-37} y={-9} width={74} height={18} rx={20} fill="#7653a3" />
          </g>
          <g transform="matrix(1 0 0 1 -546 -334)">
            <rect x={-47} y={-8} width={94} height={16} rx={20} fill="#7653a3" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 773 540)">
        <g mask="url(#StreetLight-m5-0)">
          <g transform="matrix(1 0 0 1 -546 -336)">
            <ellipse cx={0} cy={0} rx={34} ry={34} fill="#7653a3" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 773 540)">
        <g mask="url(#StreetLight-m6-1)">
          <g transform="matrix(1 0 0 1 -546 -336)">
            <ellipse cx={0} cy={0} rx={34} ry={34} fill="#652d8e" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 771.5 540)">
          <g transform="matrix(1 0 0 1 -544.5 -283.5)">
            <ellipse cx={0} cy={0} rx={14.25} ry={14.25} fill="#fbe56e" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 773 540)">
          <g transform="matrix(1 0 0 1 -546 -192)">
            <ellipse cx={0} cy={0} rx={24} ry={24} fill="#7653a3" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 773 522)">
          <g transform="matrix(1 0 0 1 -547 -284)">
            <ellipse cx={0} cy={0} rx={145.5} ry={145.5} fill="#ffffff" fillOpacity={0.2} />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 773 540)">
          <g transform="matrix(1 0 0 1 -560.625 322.25)">
            <rect x={-3.5} y={-31} width={7} height={62} rx={20} fill="#b68fc1" />
          </g>
          <g transform="matrix(1 0 0 1 -560.875 266)">
            <ellipse cx={0} cy={0} rx={4.25} ry={4.25} fill="#b68fc1" />
          </g>
          <g transform="matrix(1 0 0 1 -558.5 -202.5)">
            <ellipse cx={0} cy={0} rx={5.25} ry={5.25} fill="#b68fc1" />
          </g>
          <g transform="matrix(1 0 0 1 -575.25 -246.25)">
            <ellipse cx={0} cy={0} rx={3.5} ry={3.5} fill="#b68fc1" />
          </g>
          <g transform="matrix(1 0 0 1 -562.25 -356)">
            <ellipse cx={0} cy={0} rx={4.75} ry={4.75} fill="#b68fc1" />
          </g>
      </g>
  </g>
);

export const Fountain = () => (
  <g>
    <defs>
    <mask id="Fountain-m1-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Fountain-m5-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Fountain-m7-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Fountain-m11-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Fountain-m12-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Fountain-m12-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Fountain-m12-0)">
        <path d="M273.846 -13.308 L-261.538 -13.308 L-261.538 114.385 L273.846 114.385 L273.846 -13.308 Z" fill="white" />
      </g>
    </mask>
    <mask id="Fountain-m14-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Fountain-m17-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Fountain-m18-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Fountain-m19-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Fountain-m19-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Fountain-m19-0)">
        <path d="M184 83 L-197 83 L-197 111 L184 111 L184 83 Z" fill="white" />
      </g>
    </mask>
    <mask id="Fountain-m21-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Fountain-m24-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    </defs>
      <g transform="matrix(1 0 0 1 400 402.5)">
          <g>
            <path d="M-0.5 -345 L-0.5 -303.5" fill="#cde7ff" stroke="#cde7ff" strokeWidth={11} strokeLinecap="butt" />
          </g>
          <g transform="matrix(1 0 0 1 -0.5 -341.5)">
            <ellipse cx={0} cy={0} rx={13} ry={13} fill="#cde7ff" />
          </g>
          <g transform="matrix(1 0 0 1 -0.5 -291.5)">
            <ellipse cx={0} cy={0} rx={21} ry={21} fill="#cde7ff" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 400 421)">
        <g mask="url(#Fountain-m1-0)">
          <g transform="matrix(1 0 0 1 -0.75 -342.25)">
            <rect x={-19.5} y={-12} width={39} height={24} rx={20} fill="#cde7ff" />
          </g>
        </g>
      </g>
      <g transform="matrix(1.42 0 0 1.24 400 589)">
          <g transform="matrix(1 0 0 1 0 -107)">
            <rect x={-41} y={-77} width={82} height={154} fill="#9dbfdf" stroke="#dedccd" strokeWidth={1} strokeLinecap="butt" />
          </g>
      </g>
      <g>
        <g mask="url(#Fountain-m5-0)">
          <g transform="matrix(1 0 0 1 0 -107)">
            <rect x={-41} y={-77} width={82} height={154} fill="#89accd" stroke="#dedccd" strokeWidth={1} strokeLinecap="butt" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 400 400)">
          <g transform="matrix(1 0 0 1 0 -107)">
            <rect x={-41} y={-77} width={82} height={154} fill="#9dbfdf" stroke="#dedccd" strokeWidth={1} strokeLinecap="butt" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 400 400)">
        <g mask="url(#Fountain-m7-0)">
          <g transform="matrix(1 0 0 1 0 -107)">
            <rect x={-41} y={-77} width={82} height={154} fill="#89accd" stroke="#dedccd" strokeWidth={1} strokeLinecap="butt" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 400 400)">
          <g>
            <path d="M-176 -82 L177 -82" fill="#a4bfd8" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 400 573)">
          <g>
            <path d="M-234 -82 L232.5 -82" fill="#a4bfd8" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 400 260)">
          <g>
            <path d="M-111.5 -82 L114 -82" fill="#a4bfd8" />
          </g>
      </g>
      <g transform="matrix(0.65 0 0 0.65 400 128.65)">
        <g mask="url(#Fountain-m11-0)">
          <g transform="matrix(1 0 0 1 0 105.154)">
            <rect x={-158.5} y={-87} width={317} height={174} rx={132} fill="#bdd2e6" stroke="#dedccd" strokeWidth={1} strokeLinecap="butt" />
          </g>
        </g>
      </g>
      <g transform="matrix(0.65 0 0 0.65 400 128.65)">
        <g mask="url(#Fountain-m12-1)">
          <g transform="matrix(1 0 0 1 0 105.154)">
            <rect x={-158.5} y={-60.5} width={317} height={121} rx={87} fill="#a4bfd8" stroke="#dedccd" strokeWidth={1} strokeLinecap="butt" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 0 -42.077)">
          <g transform="matrix(1 0 0 1 0 129)">
            <rect x={-200.5} y={-13} width={401} height={26} rx={182} fill="#cde7ff" stroke="#dedccd" strokeWidth={1} strokeLinecap="butt" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 345 400)">
        <g mask="url(#Fountain-m14-0)">
          <g>
                    <g transform="matrix(1 0 0 1 -1 -145)">
                      <rect x={-18} y={-46} width={36} height={92} rx={20} fill="#a4bfd8" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 54 0)">
                    <g transform="matrix(1 0 0 1 -1 -145)">
                      <rect x={-18} y={-46} width={36} height={92} rx={20} fill="#a4bfd8" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 108 0)">
                    <g transform="matrix(1 0 0 1 -1 -145)">
                      <rect x={-18} y={-46} width={36} height={92} rx={20} fill="#a4bfd8" />
                    </g>
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 400 400)">
          <g transform="matrix(1 0 0 1 0 195)">
            <rect x={-243} y={-25} width={486} height={50} fill="#bdd2e6" stroke="#dedccd" strokeWidth={1} strokeLinecap="butt" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 400 400)">
        <g mask="url(#Fountain-m17-0)">
          <g transform="matrix(1 0 0 1 0 195)">
            <rect x={-243} y={-25} width={486} height={50} fill="#a4bfd8" stroke="#dedccd" strokeWidth={1} strokeLinecap="butt" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 400 244)">
        <g mask="url(#Fountain-m18-0)">
          <g transform="matrix(1 0 0 1 0 101)">
            <rect x={-178.5} y={-97} width={357} height={194} rx={243} fill="#bdd2e6" stroke="#dedccd" strokeWidth={1} strokeLinecap="butt" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 400 244)">
        <g mask="url(#Fountain-m19-1)">
          <g transform="matrix(1 0 0 1 0 101)">
            <rect x={-158.5} y={-66} width={317} height={132} rx={326} fill="#a4bfd8" stroke="#dedccd" strokeWidth={1} strokeLinecap="butt" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 400 201)">
          <g transform="matrix(1 0 0 1 0 129)">
            <rect x={-200.5} y={-12.5} width={401} height={25} rx={157} fill="#cde7ff" stroke="#dedccd" strokeWidth={1} strokeLinecap="butt" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 309 586)">
        <g mask="url(#Fountain-m21-0)">
          <g>
                    <g transform="matrix(1 0 0 1 -1 -145)">
                      <rect x={-21} y={-46} width={42} height={92} rx={57} fill="#a4bfd8" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 89 0)">
                    <g transform="matrix(1 0 0 1 -1 -145)">
                      <rect x={-21} y={-46} width={42} height={92} rx={57} fill="#a4bfd8" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 178 0)">
                    <g transform="matrix(1 0 0 1 -1 -145)">
                      <rect x={-21} y={-46} width={42} height={92} rx={57} fill="#a4bfd8" />
                    </g>
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 400 400)">
          <g transform="matrix(1 0 0 1 0 133)">
            <rect x={-280} y={-43} width={560} height={86} rx={197} fill="#cde7ff" stroke="#dedccd" strokeWidth={1} strokeLinecap="butt" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 206 725)">
        <g mask="url(#Fountain-m24-0)">
          <g>
                    <g transform="matrix(1 0 0 1 -1 -145)">
                      <rect x={-21} y={-46} width={42} height={92} rx={57} fill="#a4bfd8" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 99 0)">
                    <g transform="matrix(1 0 0 1 -1 -145)">
                      <rect x={-21} y={-46} width={42} height={92} rx={57} fill="#a4bfd8" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 198 0)">
                    <g transform="matrix(1 0 0 1 -1 -145)">
                      <rect x={-21} y={-46} width={42} height={92} rx={57} fill="#a4bfd8" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 297 0)">
                    <g transform="matrix(1 0 0 1 -1 -145)">
                      <rect x={-21} y={-46} width={42} height={92} rx={57} fill="#a4bfd8" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 396 0)">
                    <g transform="matrix(1 0 0 1 -1 -145)">
                      <rect x={-21} y={-46} width={42} height={92} rx={57} fill="#a4bfd8" />
                    </g>
          </g>
        </g>
      </g>
  </g>
);

// ======================================================================
// GEDUNG
// ======================================================================

export const Building1Flat = () => (
  <g>
      <g transform="matrix(1 0 0 1 -202 263.5)">
          <g transform="matrix(1 0 0 1 395 27)">
            <rect x={-65} y={-154} width={130} height={308} rx={5} fill="#a9b1d8" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -202 248.5)">
          <g transform="matrix(1 0 0 1 395 107.5)">
            <rect x={-86.5} y={-203.5} width={173} height={407} rx={7} fill="#8f96cc" />
          </g>
      </g>
      <g transform="matrix(0.06 0 0 1 87.99 248.5)" opacity={0.05}>
          <g transform="matrix(1 0 0 1 395 107.5)">
            <rect x={-86.5} y={-203.5} width={173} height={407} rx={5} fill="#000000" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -202 226.5)" opacity={0.05}>
          <g transform="matrix(1 0 0 1 398.375 -64.75)">
            <rect x={-38.125} y={-4.25} width={76.25} height={8.5} rx={9} fill="#000000" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -202 226.5)">
          <g transform="matrix(1 0 0 1 395 191.5)">
            <rect x={-114} y={-241.5} width={228} height={483} fill="#a9b1d8" />
          </g>
      </g>
      <g transform="matrix(1 0 0 0.03 -202 178)" opacity={0.05}>
          <g transform="matrix(1 0 0 1 395 191.5)">
            <rect x={-114} y={-241.5} width={228} height={483} fill="#000000" />
          </g>
      </g>
      <g transform="matrix(0.06 0 0 1 62.14 226.5)">
          <g transform="matrix(1 0 0 1 395 191.5)">
            <rect x={-114} y={-241.5} width={228} height={483} fill="#8e95cb" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 485 344.5)">
          <g>
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 37 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 74 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 111 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 148 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 63)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 37 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 74 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 111 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 148 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 126)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 37 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 74 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 111 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 148 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 189)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 37 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 74 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 111 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 148 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 252)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 37 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 74 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 111 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 148 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 315)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 37 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 74 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 111 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 148 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 378)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 37 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 74 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 111 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 148 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-7} y={-14} width={14} height={28} rx={1} fill="#8f96cc" />
                              </g>
                    </g>
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -203 226.25)">
          <g transform="matrix(1 0 0 1 396.25 -49.25)">
            <rect x={-118.75} y={-6.75} width={237.5} height={13.5} rx={20} fill="#d9dcef" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -202 226.5)" opacity={0.05} style={{ mixBlendMode: "plus-lighter" }}>
          <g transform="matrix(1 0 0 1 381.75 -81.25)">
            <rect x={-5.5} y={-2} width={11} height={4} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 324.125 -81.25)">
            <rect x={-3.5} y={-2} width={7} height={4} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 494 -53.375)">
            <rect x={-3.5} y={-2} width={7} height={4} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 319.25 -53.375)">
            <rect x={-7.5} y={-2} width={15} height={4} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 405.25 -53.375)">
            <rect x={-62.5} y={-2} width={125} height={4} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 477 -81.25)">
            <rect x={-3.5} y={-2} width={7} height={4} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 411.5 -81.25)">
            <rect x={-16} y={-2} width={32} height={4} rx={20} fill="#ffffff" />
          </g>
      </g>
  </g>
);

export const Building1Flat2 = () => (
  <g>
    <defs>
    <mask id="Building1Flat2-m3-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    </defs>
      <g transform="matrix(1 0 0 1 -202 178.5)">
          <g transform="matrix(1 0 0 1 395 107.5)">
            <rect x={-65.5} y={-203.5} width={131} height={407} rx={5} fill="#5fc5c4" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -202 156.5)" opacity={0.05}>
          <g transform="matrix(1 0 0 1 398.375 -64.75)">
            <rect x={-38.125} y={-4.25} width={76.25} height={8.5} rx={9} fill="#000000" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -202 156.5)">
          <g transform="matrix(1 0 0 1 395 241.5)">
            <rect x={-103} y={-289.5} width={206} height={579} fill="#a0dadb" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -202 156.5)">
        <g mask="url(#Building1Flat2-m3-0)">
          <g transform="matrix(1 0 0 1 395 241.5)">
            <rect x={-103} y={-289.5} width={206} height={579} fill="#5fc5c4" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 0.03 -202 108)" opacity={0.05}>
          <g transform="matrix(1 0 0 1 395 191.5)">
            <rect x={-114} y={-241.5} width={228} height={483} fill="#000000" />
          </g>
      </g>
      <g transform="matrix(0.06 0 0 1 62.14 156.5)">
          <g transform="matrix(1 0 0 1 395 239.5)">
            <rect x={-100} y={-291.5} width={200} height={583} fill="#5fc5c4" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 477 274.5)">
          <g>
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 30 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 60 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 90 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 120 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 150 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 52)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 30 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 60 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 90 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 120 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 150 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 104)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 30 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 60 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 90 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 120 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 150 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 156)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 30 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 60 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 90 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 120 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 150 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 208)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 30 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 60 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 90 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 120 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 150 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 260)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 30 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 60 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 90 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 120 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 150 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 312)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 30 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 60 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 90 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 120 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 150 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 364)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 30 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 60 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 90 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 120 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 150 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 416)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 30 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 60 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 90 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 120 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 150 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 468)">
                    <g>
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 30 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 60 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 90 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 120 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 150 0)">
                              <g transform="matrix(1 0 0 1 -356.5 -124.25)">
                                <rect x={-5} y={-12} width={10} height={24} rx={1} fill="#5fc5c4" />
                              </g>
                    </g>
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -203 156.25)">
          <g transform="matrix(1 0 0 1 396.25 -49.25)">
            <rect x={-118.75} y={-5} width={237.5} height={10} rx={20} fill="#d9dcef" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -202 156.5)" opacity={0.05} style={{ mixBlendMode: "plus-lighter" }}>
          <g transform="matrix(1 0 0 1 381.75 -81.25)">
            <rect x={-5.5} y={-2} width={11} height={4} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 324.125 -81.25)">
            <rect x={-3.5} y={-2} width={7} height={4} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 494 -53.375)">
            <rect x={-3.5} y={-2} width={7} height={4} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 319.25 -53.375)">
            <rect x={-7.5} y={-2} width={15} height={4} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 405.25 -53.375)">
            <rect x={-62.5} y={-2} width={125} height={4} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 477 -81.25)">
            <rect x={-3.5} y={-2} width={7} height={4} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 411.5 -81.25)">
            <rect x={-16} y={-2} width={32} height={4} rx={20} fill="#ffffff" />
          </g>
      </g>
  </g>
);

export const Building2Government = () => (
  <g>
    <defs>
    <mask id="Building2Government-m4-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building2Government-m4-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building2Government-m4-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M-610.5 233.5 L-753.5 233.5 L-753.5 267 L-610.5 267 L-610.5 233.5 Z" fill="white" />
    </mask>
    <mask id="Building2Government-m4-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building2Government-m4-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M-278.5 233.5 L-421.5 233.5 L-421.5 267 L-278.5 267 L-278.5 233.5 Z" fill="white" />
    </mask>
    <mask id="Building2Government-m11-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building2Government-m12-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
    </mask>
    <mask id="Building2Government-m12-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building2Government-m12-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M-463.5 218.5 L-605.5 218.5 L-605.5 245.5 L-463.5 245.5 L-463.5 218.5 Z" fill="black" />
    </mask>
    <mask id="Building2Government-m13-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building2Government-m14-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building2Government-m14-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building2Government-m14-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M-419.5 208.5 L-608 208.5 L-608 306.5 L-419.5 306.5 L-419.5 208.5 Z" fill="black" />
    </mask>
    </defs>
      <g transform="matrix(1 0 0 1 860.5 64.5)">
          <g transform="matrix(1 0 0 1 -514 32)">
            <rect x={-9.5} y={-16} width={19} height={32} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -514 112)">
            <rect x={-46} y={-82} width={92} height={164} rx={51} fill="#ffffff" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 860.5 42.5)" opacity={0.07}>
          <g transform="matrix(1 0 0 1 -537.625 77.875)">
            <rect x={-3.875} y={-18.625} width={7.75} height={37.25} rx={20} fill="#000000" />
          </g>
          <g transform="matrix(1 0 0 1 -488.125 77.875)">
            <rect x={-3.875} y={-18.625} width={7.75} height={37.25} rx={20} fill="#000000" />
          </g>
          <g transform="matrix(1 0 0 1 -513.5 71.375)">
            <rect x={-7.5} y={-25.875} width={15} height={51.75} rx={20} fill="#000000" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 850.5 52.5)">
          <g transform="matrix(1 0 0 1 -514 187.5)">
            <rect x={-94.5} y={-82} width={189} height={164} fill="#a9b1d8" />
          </g>
          <g transform="matrix(1 0 0 1 -514 327.5)">
            <rect x={-215} y={-84.5} width={430} height={169} fill="#a9b1d8" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 880.5 52.5)">
          <g transform="matrix(1 0 0 1 -514 187.5)">
            <rect x={-94.5} y={-82} width={189} height={164} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -514 327.5)">
            <rect x={-215} y={-84.5} width={430} height={169} fill="#ffffff" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 880.5 52.5)" opacity={0.05}>
        <g mask="url(#Building2Government-m4-2)">
          <g transform="matrix(1 0 0 1 -514 187.5)">
            <rect x={-94.5} y={-82} width={189} height={164} fill="#e8d476" />
          </g>
          <g transform="matrix(1 0 0 1 -514 327.5)">
            <rect x={-215} y={-84.5} width={430} height={169} fill="#e8d476" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 978 171.5)">
          <g>
                    <g transform="matrix(1 0 0 1 -419.75 207.25)">
                      <rect x={-5} y={-81} width={10} height={162} rx={20} fill="#c5c9e6" />
                    </g>
                    <g transform="matrix(1 0 0 1 -419.75 289.75)">
                      <rect x={-17} y={-15.5} width={34} height={31} rx={20} fill="#c5c9e6" />
                    </g>
                    <g transform="matrix(1 0 0 1 -419.75 123.75)">
                      <rect x={-11.5} y={-11.5} width={23} height={23} rx={20} fill="#c5c9e6" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 -383 0)">
                    <g transform="matrix(1 0 0 1 -419.75 207.25)">
                      <rect x={-5} y={-81} width={10} height={162} rx={20} fill="#c5c9e6" />
                    </g>
                    <g transform="matrix(1 0 0 1 -419.75 289.75)">
                      <rect x={-17} y={-15.5} width={34} height={31} rx={20} fill="#c5c9e6" />
                    </g>
                    <g transform="matrix(1 0 0 1 -419.75 123.75)">
                      <rect x={-11.5} y={-11.5} width={23} height={23} rx={20} fill="#c5c9e6" />
                    </g>
          </g>
      </g>
      <g transform="matrix(1 0 0 1 880.5 36.5)">
          <g transform="matrix(1 0 0 1 -702.125 253.25)">
            <rect x={-63.5} y={-7} width={127} height={14} fill="#1daeab" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 880.5 36.5)">
          <g transform="matrix(1 0 0 1 -672.125 253.25)">
            <rect x={-63.5} y={-7} width={127} height={14} fill="#66c6c2" />
          </g>
          <g transform="matrix(1 0 0 1 -356.625 253.25)">
            <rect x={-63.5} y={-7} width={127} height={14} fill="#66c6c2" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 880.5 36.5)">
          <g>
                    <g transform="matrix(1 0 0 1 -419.75 265.75)">
                      <rect x={-5} y={-149.5} width={10} height={299} rx={20} fill="#c5c9e6" />
                    </g>
                    <g transform="matrix(1 0 0 1 -419.75 424.75)">
                      <rect x={-17} y={-15.5} width={34} height={31} rx={20} fill="#c5c9e6" />
                    </g>
                    <g transform="matrix(1 0 0 1 -419.75 123.75)">
                      <rect x={-11.5} y={-11.5} width={23} height={23} rx={20} fill="#c5c9e6" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 -188 0)">
                    <g transform="matrix(1 0 0 1 -419.75 265.75)">
                      <rect x={-5} y={-149.5} width={10} height={299} rx={20} fill="#c5c9e6" />
                    </g>
                    <g transform="matrix(1 0 0 1 -419.75 424.75)">
                      <rect x={-17} y={-15.5} width={34} height={31} rx={20} fill="#c5c9e6" />
                    </g>
                    <g transform="matrix(1 0 0 1 -419.75 123.75)">
                      <rect x={-11.5} y={-11.5} width={23} height={23} rx={20} fill="#c5c9e6" />
                    </g>
          </g>
      </g>
      <g transform="matrix(1 0 0 1 871.5 36.5)">
          <g transform="matrix(1 0 0 1 -513.875 112.75)">
            <rect x={-125.125} y={-11.75} width={250.25} height={23.5} rx={68} fill="#1daeab" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 877.5 25.5)">
          <g transform="matrix(1 0 0 1 -518.875 114.75)">
            <rect x={-130.625} y={-9.25} width={261.25} height={18.5} fill="#66c6c2" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 877.5 25.5)">
        <g mask="url(#Building2Government-m11-0)">
          <g transform="matrix(1 0 0 1 -518.875 114.75)">
            <rect x={-130.625} y={-9.25} width={261.25} height={18.5} fill="#1daeab" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 892.5 29.5)">
        <g mask="url(#Building2Government-m12-1)">
          <g transform="matrix(1 0 0 1 -575.5 279)">
            <g>
                        <rect x={-7.5} y={-116} width={15} height={232} fill="#5fc5c4" />
            </g>
            <g transform="matrix(1 0 0 1 48 0)">
                        <rect x={-7.5} y={-116} width={15} height={232} fill="#5fc5c4" />
            </g>
            <g transform="matrix(1 0 0 1 96 0)">
                        <rect x={-7.5} y={-116} width={15} height={232} fill="#5fc5c4" />
            </g>
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 885.5 35.25)">
        <g mask="url(#Building2Government-m13-0)">
          <g transform="matrix(1 0 0 1 -519.25 436.25)">
            <rect x={-59.25} y={-22.75} width={118.5} height={45.5} rx={12} fill="#5fc5c4" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 880.5 36.5)">
        <g mask="url(#Building2Government-m14-1)">
          <g transform="matrix(1 0 0 1 -608.5 254)">
            <g>
                        <rect x={-27} y={-27} width={54} height={54} rx={20} fill="#a0dadb" />
            </g>
            <g transform="matrix(1 0 0 1 188 0)">
                        <rect x={-27} y={-27} width={54} height={54} rx={20} fill="#a0dadb" />
            </g>
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 860.5 26.5)">
          <g>
                    <g>
                              <g transform="matrix(1 0 0 1 -370 317)">
                                <rect x={-8.5} y={-17.5} width={17} height={35} fill="#5fc5c4" />
                              </g>
                              <g transform="matrix(1 0 0 1 -667.5 317)">
                                <rect x={-8.5} y={-17.5} width={17} height={35} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 46 0)">
                              <g transform="matrix(1 0 0 1 -370 317)">
                                <rect x={-8.5} y={-17.5} width={17} height={35} fill="#5fc5c4" />
                              </g>
                              <g transform="matrix(1 0 0 1 -667.5 317)">
                                <rect x={-8.5} y={-17.5} width={17} height={35} fill="#5fc5c4" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 62)">
                    <g>
                              <g transform="matrix(1 0 0 1 -370 317)">
                                <rect x={-8.5} y={-17.5} width={17} height={35} fill="#5fc5c4" />
                              </g>
                              <g transform="matrix(1 0 0 1 -667.5 317)">
                                <rect x={-8.5} y={-17.5} width={17} height={35} fill="#5fc5c4" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 46 0)">
                              <g transform="matrix(1 0 0 1 -370 317)">
                                <rect x={-8.5} y={-17.5} width={17} height={35} fill="#5fc5c4" />
                              </g>
                              <g transform="matrix(1 0 0 1 -667.5 317)">
                                <rect x={-8.5} y={-17.5} width={17} height={35} fill="#5fc5c4" />
                              </g>
                    </g>
          </g>
      </g>
      <g transform="matrix(1 0 0 1 880.5 36.5)" opacity={0.05} style={{ mixBlendMode: "plus-lighter" }}>
          <g transform="matrix(1 0 0 1 -515.625 415.375)">
            <rect x={-43.125} y={-2.125} width={86.25} height={4.25} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -317.5 414.75)">
            <rect x={-4} y={-4} width={8} height={8} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -414.75 414.5)">
            <rect x={-4.25} y={-4.25} width={8.5} height={8.5} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -604 414.75)">
            <rect x={-3.75} y={-3.75} width={7.5} height={7.5} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -703.5 414.5)">
            <rect x={-4.5} y={-4.5} width={9} height={9} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -703.5 330)">
            <rect x={-1} y={-7.25} width={2} height={14.5} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -703.375 356.375)">
            <rect x={-1.125} y={-14.625} width={2.25} height={29.25} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -606.5 397.375)">
            <rect x={-1} y={-11.375} width={2} height={22.75} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -320.125 330.125)">
            <rect x={-0.875} y={-21.875} width={1.75} height={43.75} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -418.375 375.375)">
            <rect x={-0.875} y={-32.875} width={1.75} height={65.75} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -318.125 262.25)">
            <rect x={-4.875} y={-1} width={9.75} height={2} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -703 263.25)">
            <rect x={-3.75} y={-1} width={7.5} height={2} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -650.25 250.75)">
            <rect x={-27.25} y={-1.75} width={54.5} height={3.5} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -381.625 251)">
            <rect x={-10.375} y={-1.75} width={20.75} height={3.5} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -332.375 251.125)">
            <rect x={-32.375} y={-1.875} width={64.75} height={3.75} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -409 265.5)">
            <rect x={-3.25} y={-3.25} width={6.5} height={6.5} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -616.75 265.75)">
            <rect x={-3.5} y={-3.5} width={7} height={7} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -606.5 204.875)">
            <rect x={-1.25} y={-30.125} width={2.5} height={60.25} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -418.125 210.25)">
            <rect x={-1.375} y={-10} width={2.75} height={20} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -418.125 166.25)">
            <rect x={-1.375} y={-29.5} width={2.75} height={59} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -604.875 125.875)">
            <rect x={-4.125} y={-1.625} width={8.25} height={3.25} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -415.75 126.5)">
            <rect x={-4} y={-1.5} width={8} height={3} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -500.875 98.75)">
            <rect x={-91.875} y={-2.75} width={183.75} height={5.5} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -514.75 39.5)">
            <rect x={-3.75} y={-3.75} width={7.5} height={7.5} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -530.5 20)">
            <rect x={-3.5} y={-3.5} width={7} height={7} rx={20} fill="#ffffff" />
          </g>
      </g>
  </g>
);

export const Building3Renaissance = () => (
  <g>
    <defs>
    <mask id="Building3Renaissance-m7-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building3Renaissance-m8-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building3Renaissance-m9-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building3Renaissance-m10-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building3Renaissance-m10-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building3Renaissance-m10-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M664.5 194 L424.5 194 L424.5 240.5 L664.5 240.5 L664.5 194 Z" fill="white" />
    </mask>
    <mask id="Building3Renaissance-m10-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building3Renaissance-m10-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M664.5 259.25 L424.5 259.25 L424.5 305.75 L664.5 305.75 L664.5 259.25 Z" fill="white" />
    </mask>
    <mask id="Building3Renaissance-m10-3" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building3Renaissance-m10-2)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M664.5 326 L424.5 326 L424.5 372.5 L664.5 372.5 L664.5 326 Z" fill="white" />
    </mask>
    <mask id="Building3Renaissance-m11-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building3Renaissance-m11-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building3Renaissance-m11-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M664.5 194 L424.5 194 L424.5 240.5 L664.5 240.5 L664.5 194 Z" fill="white" />
    </mask>
    <mask id="Building3Renaissance-m11-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building3Renaissance-m11-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M664.5 259.25 L424.5 259.25 L424.5 305.75 L664.5 305.75 L664.5 259.25 Z" fill="white" />
    </mask>
    <mask id="Building3Renaissance-m11-3" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building3Renaissance-m11-2)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M664.5 326 L424.5 326 L424.5 372.5 L664.5 372.5 L664.5 326 Z" fill="white" />
    </mask>
    <mask id="Building3Renaissance-m12-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building3Renaissance-m12-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building3Renaissance-m12-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M664.5 194 L424.5 194 L424.5 240.5 L664.5 240.5 L664.5 194 Z" fill="white" />
    </mask>
    <mask id="Building3Renaissance-m12-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building3Renaissance-m12-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M664.5 259.25 L424.5 259.25 L424.5 305.75 L664.5 305.75 L664.5 259.25 Z" fill="white" />
    </mask>
    <mask id="Building3Renaissance-m12-3" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building3Renaissance-m12-2)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M664.5 326 L424.5 326 L424.5 372.5 L664.5 372.5 L664.5 326 Z" fill="white" />
    </mask>
    <mask id="Building3Renaissance-m13-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building3Renaissance-m13-1" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building3Renaissance-m13-0)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M664.5 194 L424.5 194 L424.5 240.5 L664.5 240.5 L664.5 194 Z" fill="white" />
    </mask>
    <mask id="Building3Renaissance-m13-2" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building3Renaissance-m13-1)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M664.5 259.25 L424.5 259.25 L424.5 305.75 L664.5 305.75 L664.5 259.25 Z" fill="white" />
    </mask>
    <mask id="Building3Renaissance-m13-3" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <g mask="url(#Building3Renaissance-m13-2)">
        <rect x={-10000} y={-10000} width={20000} height={20000} fill="white" />
      </g>
      <path d="M664.5 326 L424.5 326 L424.5 372.5 L664.5 372.5 L664.5 326 Z" fill="white" />
    </mask>
    </defs>
      <g transform="matrix(1 0 0 1 -356.5 34)">
          <g transform="matrix(1 0 0 1 592 279)">
            <rect x={-171} y={-160} width={342} height={320} fill="#ffffff" />
          </g>
      </g>
      <g transform="matrix(0.26 0 0 1 203.96 34)">
          <g transform="matrix(1 0 0 1 592 279)">
            <rect x={-187} y={-160} width={374} height={320} fill="#cddee6" />
          </g>
      </g>
      <g transform="matrix(1 0 0 0.14 -356.5 411.54)" opacity={0.1}>
          <g transform="matrix(1 0 0 1 592 279)">
            <rect x={-171} y={-160} width={342} height={320} fill="#ffffff" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -356.5 34)">
          <g transform="matrix(1 0 0 1 591 118.25)">
            <rect x={-181} y={-9.25} width={362} height={18.5} rx={20} fill="#b491d1" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -356.5 34)">
          <g transform="matrix(1 0 0 1 666 275.5)">
            <rect x={-8} y={-148} width={16} height={296} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 322.25)">
            <rect x={-12.5} y={-8} width={25} height={16} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 192.75)">
            <rect x={-12.5} y={-8} width={25} height={16} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 257)">
            <rect x={-12.5} y={-8} width={25} height={16} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 419.5)">
            <rect x={-19.5} y={-15} width={39} height={30} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 123)">
            <rect x={-19.5} y={-15} width={39} height={30} rx={26} fill="#cddee6" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -262 34)">
          <g transform="matrix(1 0 0 1 666 275.5)">
            <rect x={-8} y={-148} width={16} height={296} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 322.25)">
            <rect x={-12.5} y={-8} width={25} height={16} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 192.75)">
            <rect x={-12.5} y={-8} width={25} height={16} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 257)">
            <rect x={-12.5} y={-8} width={25} height={16} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 419.5)">
            <rect x={-19.5} y={-15} width={39} height={30} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 123)">
            <rect x={-19.5} y={-15} width={39} height={30} rx={26} fill="#cddee6" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -598.25 34)">
          <g transform="matrix(1 0 0 1 666 275.5)">
            <rect x={-8} y={-148} width={16} height={296} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 322.25)">
            <rect x={-12.5} y={-8} width={25} height={16} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 192.75)">
            <rect x={-12.5} y={-8} width={25} height={16} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 257)">
            <rect x={-12.5} y={-8} width={25} height={16} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 419.5)">
            <rect x={-19.5} y={-15} width={39} height={30} rx={26} fill="#cddee6" />
          </g>
          <g transform="matrix(1 0 0 1 666 123)">
            <rect x={-19.5} y={-15} width={39} height={30} rx={26} fill="#cddee6" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -600.5 34)">
        <g mask="url(#Building3Renaissance-m7-0)">
          <g transform="matrix(1 0 0 1 717 120)">
            <ellipse cx={0} cy={0} rx={60} ry={60} fill="#9b74b3" stroke="#9b74b3" strokeWidth={15} strokeLinecap="butt" />
          </g>
          <g transform="matrix(1 0 0 1 242.5 0)">
            <path d="M474.75 52.875 L459.75 125 L711.75 125 L711.75 53 L474.75 52.875 Z" fill="#9b74b3" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -362.5 34)">
        <g mask="url(#Building3Renaissance-m8-0)">
          <g transform="matrix(1 0 0 1 717 120)">
            <ellipse cx={0} cy={0} rx={60} ry={60} fill="#7753a3" stroke="#7753a3" strokeWidth={15} strokeLinecap="butt" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -362.5 34)">
        <g mask="url(#Building3Renaissance-m9-0)">
          <g transform="matrix(1 0 0 1 719.75 120)">
            <ellipse cx={0} cy={0} rx={28} ry={28} fill="#7653a3" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -350.5 34)">
        <g mask="url(#Building3Renaissance-m10-3)">
          <g transform="matrix(1 0 0 1 452 165)">
            <g>
                        <g>
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 42 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 84 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 126 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 168 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
            </g>
            <g transform="matrix(1 0 0 1 0 65)">
                        <g>
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 42 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 84 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 126 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 168 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
            </g>
            <g transform="matrix(1 0 0 1 0 130)">
                        <g>
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 42 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 84 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 126 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 168 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
            </g>
            <g transform="matrix(1 0 0 1 0 195)">
                        <g>
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 42 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 84 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 126 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
                        <g transform="matrix(1 0 0 1 168 0)">
                                    <rect x={-12.5} y={-23} width={25} height={46} rx={20} fill="#abdff5" />
                        </g>
            </g>
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -108.5 34)">
        <g mask="url(#Building3Renaissance-m11-3)">
          <g transform="matrix(1 0 0 1 452 165)">
            <g>
                        <g>
                                    <rect x={-7} y={-23} width={14} height={46} rx={20} fill="#7fc4ed" />
                        </g>
                        <g transform="matrix(1 0 0 1 33 0)">
                                    <rect x={-7} y={-23} width={14} height={46} rx={20} fill="#7fc4ed" />
                        </g>
            </g>
            <g transform="matrix(1 0 0 1 0 65)">
                        <g>
                                    <rect x={-7} y={-23} width={14} height={46} rx={20} fill="#7fc4ed" />
                        </g>
                        <g transform="matrix(1 0 0 1 33 0)">
                                    <rect x={-7} y={-23} width={14} height={46} rx={20} fill="#7fc4ed" />
                        </g>
            </g>
            <g transform="matrix(1 0 0 1 0 130)">
                        <g>
                                    <rect x={-7} y={-23} width={14} height={46} rx={20} fill="#7fc4ed" />
                        </g>
                        <g transform="matrix(1 0 0 1 33 0)">
                                    <rect x={-7} y={-23} width={14} height={46} rx={20} fill="#7fc4ed" />
                        </g>
            </g>
            <g transform="matrix(1 0 0 1 0 195)">
                        <g>
                                    <rect x={-7} y={-23} width={14} height={46} rx={20} fill="#7fc4ed" />
                        </g>
                        <g transform="matrix(1 0 0 1 33 0)">
                                    <rect x={-7} y={-23} width={14} height={46} rx={20} fill="#7fc4ed" />
                        </g>
            </g>
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -362.5 -28.5)">
        <g mask="url(#Building3Renaissance-m12-3)">
          <g>
                    <g>
                      <path d="M451.375 139.625 L473.75 139.5 L464.375 160.25" fill="#7753a3" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 42 0)">
                    <g>
                      <path d="M451.375 139.625 L473.75 139.5 L464.375 160.25" fill="#7753a3" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 84 0)">
                    <g>
                      <path d="M451.375 139.625 L473.75 139.5 L464.375 160.25" fill="#7753a3" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 126 0)">
                    <g>
                      <path d="M451.375 139.625 L473.75 139.5 L464.375 160.25" fill="#7753a3" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 168 0)">
                    <g>
                      <path d="M451.375 139.625 L473.75 139.5 L464.375 160.25" fill="#7753a3" />
                    </g>
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -362.5 -28.5)">
        <g mask="url(#Building3Renaissance-m13-3)">
          <g>
                    <g transform="matrix(1 0 0 1 452 165)">
                      <rect x={-10} y={-23} width={20} height={46} rx={20} fill="#7753a3" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 42 0)">
                    <g transform="matrix(1 0 0 1 452 165)">
                      <rect x={-10} y={-23} width={20} height={46} rx={20} fill="#7753a3" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 84 0)">
                    <g transform="matrix(1 0 0 1 452 165)">
                      <rect x={-10} y={-23} width={20} height={46} rx={20} fill="#7753a3" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 126 0)">
                    <g transform="matrix(1 0 0 1 452 165)">
                      <rect x={-10} y={-23} width={20} height={46} rx={20} fill="#7753a3" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 168 0)">
                    <g transform="matrix(1 0 0 1 452 165)">
                      <rect x={-10} y={-23} width={20} height={46} rx={20} fill="#7753a3" />
                    </g>
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -356.5 34)" opacity={0.05} style={{ mixBlendMode: "plus-lighter" }}>
          <g transform="matrix(1 0 0 1 716.5 253)">
            <rect x={-25.5} y={-4.5} width={51} height={9} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 543 253)">
            <rect x={-98.5} y={-4.5} width={197} height={9} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 424.625 407.812)">
            <rect x={-4.875} y={-2} width={9.75} height={4} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 424.625 317.812)">
            <rect x={-4.875} y={-1.312} width={9.75} height={2.625} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 424.625 252.812)">
            <rect x={-4.875} y={-1.312} width={9.75} height={2.625} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 424.625 252.812)">
            <rect x={-4.875} y={-1.312} width={9.75} height={2.625} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 424.625 252.812)">
            <rect x={-4.875} y={-1.312} width={9.75} height={2.625} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 424.625 188.938)">
            <rect x={-4.875} y={-1.312} width={9.75} height={2.625} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 425.062 123.938)">
            <rect x={-8.562} y={-2.312} width={17.125} height={4.625} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 666.125 407.812)">
            <rect x={-4.875} y={-2} width={9.75} height={4} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 666.125 317.812)">
            <rect x={-4.875} y={-1.312} width={9.75} height={2.625} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 666.125 252.812)">
            <rect x={-4.875} y={-1.312} width={9.75} height={2.625} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 666.125 252.812)">
            <rect x={-4.875} y={-1.312} width={9.75} height={2.625} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 666.125 252.812)">
            <rect x={-4.875} y={-1.312} width={9.75} height={2.625} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 666.125 188.938)">
            <rect x={-4.875} y={-1.312} width={9.75} height={2.625} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 666.562 123.938)">
            <rect x={-8.562} y={-2.312} width={17.125} height={4.625} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 634.75 58)">
            <rect x={-16.75} y={-3.75} width={33.5} height={7.5} rx={20} fill="#afca5e" />
          </g>
          <g transform="matrix(1 0 0 1 528.5 58)">
            <rect x={-64.25} y={-3.75} width={128.5} height={7.5} rx={20} fill="#afca5e" />
          </g>
      </g>
  </g>
);

export const Building4SmallFlat = () => (
  <g>
    <defs>
    <mask id="Building4SmallFlat-m5-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building4SmallFlat-m6-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building4SmallFlat-m7-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building4SmallFlat-m13-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    </defs>
      <g transform="matrix(1 0 0 1 -117.5 -125.5)">
          <g>
                    <g transform="matrix(1 0 0 1 381.25 182)">
                      <rect x={-10.75} y={-18} width={21.5} height={36} fill="#cddee6" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 -58 0)">
                    <g transform="matrix(1 0 0 1 381.25 182)">
                      <rect x={-10.75} y={-18} width={21.5} height={36} fill="#cddee6" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 -116 0)">
                    <g transform="matrix(1 0 0 1 381.25 182)">
                      <rect x={-10.75} y={-18} width={21.5} height={36} fill="#cddee6" />
                    </g>
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -124.25 -125.5)">
          <g>
                    <g transform="matrix(1 0 0 1 381.25 182)">
                      <rect x={-10.75} y={-18} width={21.5} height={36} fill="#ffffff" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 -58 0)">
                    <g transform="matrix(1 0 0 1 381.25 182)">
                      <rect x={-10.75} y={-18} width={21.5} height={36} fill="#ffffff" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 -116 0)">
                    <g transform="matrix(1 0 0 1 381.25 182)">
                      <rect x={-10.75} y={-18} width={21.5} height={36} fill="#ffffff" />
                    </g>
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -127.5 -128)">
          <g transform="matrix(1 0 0 1 334 339.5)">
            <rect x={-147.5} y={-89.5} width={295} height={179} fill="#ffffff" />
          </g>
      </g>
      <g transform="matrix(0.26 0 0 1.037 231.03 -143.873)">
          <g transform="matrix(1 0 0 1 324.5 339.5)">
            <rect x={-147.5} y={-89.5} width={295} height={179} fill="#cddee6" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -127.5 -218)">
          <g transform="matrix(1 0 0 1 334 339.5)">
            <rect x={-152} y={-5} width={304} height={10} fill="#cec5e2" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -114.5 -125.5)">
        <g mask="url(#Building4SmallFlat-m5-0)">
          <g>
                    <g>
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#fff280" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 61 0)">
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#fff280" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 122 0)">
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#fff280" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 -57)">
                    <g>
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#fff280" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 61 0)">
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#fff280" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 122 0)">
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#fff280" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 -114)">
                    <g>
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#fff280" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 61 0)">
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#fff280" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 122 0)">
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#fff280" />
                              </g>
                    </g>
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 -109.5 -125.5)">
        <g mask="url(#Building4SmallFlat-m6-0)">
          <g>
                    <g>
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#a0dadb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 61 0)">
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#a0dadb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 122 0)">
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#a0dadb" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 -57)">
                    <g>
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#a0dadb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 61 0)">
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#a0dadb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 122 0)">
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#a0dadb" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 -114)">
                    <g>
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#a0dadb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 61 0)">
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#a0dadb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 122 0)">
                              <g transform="matrix(1 0 0 1 217 388.25)">
                                <rect x={-11} y={-14.667} width={22} height={29.333} rx={2} fill="#a0dadb" />
                              </g>
                    </g>
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 100 -125.5)">
        <g mask="url(#Building4SmallFlat-m7-0)">
          <g>
                    <g transform="matrix(1 0 0 1 217 388.25)">
                      <rect x={-6} y={-14.5} width={12} height={29} rx={2} fill="#1daeab" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 -56)">
                    <g transform="matrix(1 0 0 1 217 388.25)">
                      <rect x={-6} y={-14.5} width={12} height={29} rx={2} fill="#1daeab" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 -112)">
                    <g transform="matrix(1 0 0 1 217 388.25)">
                      <rect x={-6} y={-14.5} width={12} height={29} rx={2} fill="#1daeab" />
                    </g>
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 0.07 -127.5 109.5)" opacity={0.05}>
          <g transform="matrix(1 0 0 1 334 339.5)">
            <rect x={-147.5} y={-89.5} width={295} height={179} fill="#000000" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -351.5 -102.5)">
          <g>
            <path d="M445.188 150.688 L398.75 220.75 L625.75 220.5 L670.659 151.813 L656.248 151.741 L651.496 157.456 L462.243 157.426 L456.751 150.745 L445.188 150.688 Z" fill="#9b74b3" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -126.5 -102.5)">
          <g>
            <path d="M232.375 150.688 L227.625 157.812 L237.375 157.812 L232.375 150.688 Z" fill="#7753a3" />
          </g>
          <g>
            <path d="M445.188 150.688 L398.75 220.75 L491.75 220.75 L445.188 150.688 Z" fill="#7753a3" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -127.5 -136.75)">
          <g transform="matrix(1 0 0 1 447.25 216.875)">
            <rect x={-6.75} y={-6.125} width={13.5} height={12.25} rx={3} fill="#946fab" />
          </g>
          <g transform="matrix(1 0 0 1 447.25 227.625)">
            <rect x={-14.25} y={-6.125} width={28.5} height={12.25} rx={3} fill="#946fab" />
          </g>
          <g transform="matrix(1 0 0 1 447.25 238.375)">
            <rect x={-21.75} y={-6.125} width={43.5} height={12.25} rx={3} fill="#946fab" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -126 -133)">
          <g transform="matrix(1 0 0 1 332.375 247)">
            <rect x={-159.875} y={-4} width={319.75} height={8} fill="#b68fc1" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -126 -133)" opacity={0.05}>
        <g mask="url(#Building4SmallFlat-m13-0)">
          <g transform="matrix(1 0 0 1 332.375 247)">
            <rect x={-159.875} y={-4} width={319.75} height={8} fill="#000000" />
          </g>
        </g>
      </g>
  </g>
);

export const Building5Tall = () => (
  <g>
      <g transform="matrix(1 0 0 1 468.5 306)">
          <g>
            <path d="M-276.5 -233.5 L-396.5 -169 L-161.5 -169 L-276.5 -233.5 Z" fill="#8f96cc" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 496.5 322)">
          <g transform="matrix(1 0 0 1 -308 122)">
            <rect x={-116} y={-304.5} width={232} height={609} fill="#a9b1d8" />
          </g>
      </g>
      <g transform="matrix(0.07 0 0 1 317.94 322)">
          <g transform="matrix(1 0 0 1 -308 122)">
            <rect x={-116} y={-304.5} width={232} height={609} fill="#8e95cb" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 472.5 306)">
          <g>
                    <g>
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 34 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 68 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 102 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 136 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 170 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 73)">
                    <g>
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 34 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 68 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 102 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 136 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 170 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 146)">
                    <g>
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 34 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 68 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 102 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 136 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 170 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 219)">
                    <g>
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 34 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 68 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 102 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 136 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 170 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 292)">
                    <g>
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 34 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 68 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 102 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 136 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 170 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 365)">
                    <g>
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 34 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 68 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 102 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 136 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 170 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 438)">
                    <g>
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 34 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 68 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 102 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 136 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 170 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 0 511)">
                    <g>
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 34 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 68 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 102 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 136 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
                    <g transform="matrix(1 0 0 1 170 0)">
                              <g transform="matrix(1 0 0 1 -375.5 -110.25)">
                                <rect x={-5} y={-2} width={10} height={4} rx={20} fill="#8e95cb" />
                              </g>
                              <g transform="matrix(1 0 0 1 -375.5 -131.25)">
                                <rect x={-5} y={-14.75} width={10} height={29.5} rx={4} fill="#8e95cb" />
                              </g>
                    </g>
          </g>
      </g>
      <g transform="matrix(1 0 0 1 468.5 306)">
          <g transform="matrix(1 0 0 1 -279.25 -165.5)">
            <rect x={-121.25} y={-5} width={242.5} height={10} rx={20} fill="#d9dcef" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 468.5 306)">
          <g transform="matrix(1 0 0 1 -279 -182.25)">
            <rect x={-11.75} y={-5} width={23.5} height={10} rx={20} fill="#d9dcef" />
          </g>
          <g transform="matrix(1 0 0 1 -279 -172.5)">
            <rect x={-28.75} y={-8.5} width={57.5} height={17} rx={20} fill="#d9dcef" />
          </g>
          <g transform="matrix(1 0 0 1 -393.25 -160.5)">
            <ellipse cx={0} cy={0} rx={9.75} ry={9.75} fill="#d9dcef" />
          </g>
          <g transform="matrix(1 0 0 1 -165 -160.5)">
            <ellipse cx={0} cy={0} rx={9.75} ry={9.75} fill="#d9dcef" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 466.375 306)" opacity={0.05} style={{ mixBlendMode: "plus-lighter" }}>
          <g transform="matrix(1 0 0 1 -276.75 -203.75)">
            <rect x={-14.25} y={-8.25} width={28.5} height={16.5} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -391.875 6.25)">
            <rect x={-2} y={-10.8} width={4} height={21.6} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -392 -106.25)">
            <rect x={-2} y={-37.25} width={4} height={74.5} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -212 -165.75)">
            <rect x={-11.75} y={-1.5} width={23.5} height={3} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -336.25 -165.75)">
            <rect x={-6.75} y={-1.5} width={13.5} height={3} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -363 -166.25)">
            <rect x={-15.5} y={-1.5} width={31} height={3} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -394.5 -164)">
            <rect x={-3.5} y={-3.5} width={7} height={7} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -164.625 -164)">
            <rect x={-3.625} y={-3.625} width={7.25} height={7.25} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -278.5 -177.062)">
            <rect x={-18.5} y={-1.812} width={37} height={3.625} rx={20} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 -278.875 -184)">
            <rect x={-6} y={-1.625} width={12} height={3.25} rx={20} fill="#ffffff" />
          </g>
      </g>
  </g>
);

export const Building6Tall = () => (
  <g>
    <defs>
    <mask id="Building6Tall-m3-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    <mask id="Building6Tall-m5-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    </defs>
      <g transform="matrix(1 0 0 1 -1 63.5)">
          <g transform="matrix(1 0 0 1 -65.5 -464.625)">
            <ellipse cx={0} cy={0} rx={4.875} ry={4.875} fill="#a9b1d8" />
          </g>
          <g transform="matrix(1 0 0 1 -65.5 -418.75)">
            <rect x={-2.5} y={-60} width={5} height={120} rx={20} fill="#a9b1d8" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 0.5 -54.5)">
          <g transform="matrix(1 0 0 1 -67.25 -284.25)">
            <rect x={-14.75} y={-13.25} width={29.5} height={26.5} rx={11} fill="#a9b1d8" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 0.5 -51.5)">
          <g transform="matrix(1 0 0 1 -67.25 -267.25)">
            <rect x={-100} y={-26.25} width={200} height={52.5} rx={16} fill="#acbac2" />
          </g>
      </g>
      <g transform="matrix(1.1 0 0 1.1 272.7 508.5)">
        <g mask="url(#Building6Tall-m3-0)">
          <g transform="matrix(1 0 0 1 -67 56)">
            <rect x={-105} y={-374} width={210} height={748} fill="#ffffff" />
          </g>
        </g>
      </g>
      <g transform="matrix(1 0 0 1 0 -44)" opacity={0.33}>
          <g transform="matrix(1 0 0 1 -15.5 75.5)">
            <rect x={-53.5} y={-350} width={107} height={700} fill="#abdff5" />
          </g>
          <g transform="matrix(1 0 0 1 -68.938 -295)">
            <rect x={-16.312} y={-1.5} width={32.625} height={3} rx={20} fill="#abdff5" />
          </g>
          <g transform="matrix(1 0 0 1 -22.875 -295.25)">
            <rect x={-6.5} y={-1.625} width={13} height={3.25} rx={20} fill="#abdff5" />
          </g>
          <g transform="matrix(1 0 0 1 -123.125 -295.375)">
            <rect x={-14.375} y={-1.75} width={28.75} height={3.5} rx={20} fill="#abdff5" />
          </g>
          <g transform="matrix(1 0 0 1 -66.75 -303.688)">
            <rect x={-5.875} y={-1.812} width={11.75} height={3.625} rx={20} fill="#abdff5" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 21 -34)">
        <g mask="url(#Building6Tall-m5-0)">
          <g transform="matrix(1 0 0 1 -172.5 109)">
            <g>
                        <rect x={-6} y={-366} width={12} height={732} fill="#cddee6" />
            </g>
            <g transform="matrix(1 0 0 1 30 0)">
                        <rect x={-6} y={-366} width={12} height={732} fill="#cddee6" />
            </g>
            <g transform="matrix(1 0 0 1 60 0)">
                        <rect x={-6} y={-366} width={12} height={732} fill="#cddee6" />
            </g>
          </g>
          <g transform="matrix(1 0 0 1 -65.5 109)">
            <g>
                        <rect x={-6} y={-366} width={12} height={732} fill="#cddee6" />
            </g>
            <g transform="matrix(1 0 0 1 30 0)">
                        <rect x={-6} y={-366} width={12} height={732} fill="#cddee6" />
            </g>
            <g transform="matrix(1 0 0 1 60 0)">
                        <rect x={-6} y={-366} width={12} height={732} fill="#cddee6" />
            </g>
          </g>
        </g>
      </g>
  </g>
);

export const Building7Tall = () => (
  <g>
      <g transform="matrix(1 0 0 1 -3.5 358.5)">
          <g transform="matrix(1 0 0 1 253 -321)">
            <rect x={-17} y={-13} width={34} height={26} rx={20} fill="#6fddd9" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 14.5 334.5)">
          <g transform="matrix(1 0 0 1 205 -272)">
            <rect x={-96.5} y={-16.5} width={193} height={33} fill="#a0dadb" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 12 358.5)">
          <g>
                    <g transform="matrix(1 0 0 1 128.875 -290.125)">
                      <rect x={-6.875} y={-9.625} width={13.75} height={19.25} rx={20} fill="#1daeab" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 26 0)">
                    <g transform="matrix(1 0 0 1 128.875 -290.125)">
                      <rect x={-6.875} y={-9.625} width={13.75} height={19.25} rx={20} fill="#1daeab" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 52 0)">
                    <g transform="matrix(1 0 0 1 128.875 -290.125)">
                      <rect x={-6.875} y={-9.625} width={13.75} height={19.25} rx={20} fill="#1daeab" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 78 0)">
                    <g transform="matrix(1 0 0 1 128.875 -290.125)">
                      <rect x={-6.875} y={-9.625} width={13.75} height={19.25} rx={20} fill="#1daeab" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 104 0)">
                    <g transform="matrix(1 0 0 1 128.875 -290.125)">
                      <rect x={-6.875} y={-9.625} width={13.75} height={19.25} rx={20} fill="#1daeab" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 130 0)">
                    <g transform="matrix(1 0 0 1 128.875 -290.125)">
                      <rect x={-6.875} y={-9.625} width={13.75} height={19.25} rx={20} fill="#1daeab" />
                    </g>
          </g>
          <g transform="matrix(1 0 0 1 156 0)">
                    <g transform="matrix(1 0 0 1 128.875 -290.125)">
                      <rect x={-6.875} y={-9.625} width={13.75} height={19.25} rx={20} fill="#1daeab" />
                    </g>
          </g>
      </g>
      <g transform="matrix(1 0 0 1 14.5 358.5)">
          <g transform="matrix(1 0 0 1 205 -272)">
            <rect x={-116} y={-16.5} width={232} height={33} fill="#6fddd9" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 14.5 324.25)">
          <g transform="matrix(1 0 0 1 204 -232.5)">
            <rect x={-90} y={-7.5} width={180} height={15} fill="#59bbb8" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 14.5 358.5)">
          <g transform="matrix(1 0 0 1 205 92)">
            <rect x={-131} y={-356} width={262} height={712} fill="#a0dadb" />
          </g>
      </g>
      <g transform="matrix(0.31 0 0 1 246.34 358.5)">
          <g transform="matrix(1 0 0 1 205 92)">
            <rect x={-131} y={-356} width={262} height={712} fill="#66c6c2" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 14.5 358.5)">
          <g transform="matrix(1 0 0 1 205 92)">
            <rect x={-131} y={-356} width={262} height={712} fill="#7a7a7a" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 106.5 352.5)">
          <g transform="matrix(1 0 0 1 71 -232.5)">
            <g>
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 36)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 72)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 108)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 144)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 180)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 216)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 252)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 288)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 324)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 360)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 396)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 432)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 468)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 504)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 540)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 576)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 612)">
                        <rect x={-64.5} y={-7.5} width={129} height={15} rx={3} fill="#656565" />
            </g>
          </g>
          <g transform="matrix(1 0 0 1 203.5 -232.5)">
            <g>
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 36)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 72)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 108)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 144)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 180)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 216)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 252)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 288)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 324)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 360)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 396)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 432)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 468)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 504)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 540)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 576)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
            <g transform="matrix(1 0 0 1 0 612)">
                        <rect x={-27} y={-7.5} width={54} height={15} rx={3} fill="#656565" />
            </g>
          </g>
      </g>
      <g transform="matrix(1 0 0 1 111.5 352.5)" opacity={0.5}>
          <g transform="matrix(1 0 0 1 71 -232.5)">
            <g>
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 36)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 72)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 108)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 144)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 180)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 216)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 252)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 288)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 324)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 360)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 396)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 432)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 468)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 504)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 540)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 576)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 612)">
                        <rect x={-59.5} y={-7.5} width={119} height={15} rx={3} fill="#1daeab" />
            </g>
          </g>
          <g transform="matrix(1 0 0 1 193 -232.5)">
            <g>
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 36)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 72)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 108)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 144)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 180)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 216)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 252)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 288)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 324)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 360)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 396)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 432)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 468)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 504)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 540)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 576)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
            <g transform="matrix(1 0 0 1 0 612)">
                        <rect x={-22} y={-7.5} width={44} height={15} rx={3} fill="#1daeab" />
            </g>
          </g>
      </g>
      <g transform="matrix(1 0 0 1 14.5 359.5)">
          <g transform="matrix(1 0 0 1 204.875 -264.25)">
            <rect x={-134.875} y={-3} width={269.75} height={6} rx={20} fill="#a0dadb" />
          </g>
          <g transform="matrix(1 0 0 1 205.25 -287.875)">
            <rect x={-119.75} y={-2.5} width={239.5} height={5} rx={20} fill="#a0dadb" />
          </g>
          <g transform="matrix(1 0 0 1 205.562 -316.062)">
            <rect x={-99.312} y={-3.5} width={198.625} height={7} rx={20} fill="#a0dadb" />
          </g>
          <g transform="matrix(1 0 0 1 300.75 -312.75)">
            <rect x={-6.75} y={-6.75} width={13.5} height={13.5} rx={20} fill="#a0dadb" />
          </g>
          <g transform="matrix(1 0 0 1 109 -312.75)">
            <rect x={-6.75} y={-6.75} width={13.5} height={13.5} rx={20} fill="#a0dadb" />
          </g>
      </g>
  </g>
);

// ======================================================================
// AWAN
// ======================================================================

export const Cloud1 = () => (
  <g>
    <defs>
    <mask id="Cloud1-m1-0" maskUnits="userSpaceOnUse" x={-10000} y={-10000} width={20000} height={20000}>
      <rect x={-10000} y={-10000} width={20000} height={20000} fill="black" />
    </mask>
    </defs>
      <g transform="matrix(0.9 0 0 0.9 -281.2 901.6)">
          <g transform="matrix(1 0 0 1 788 -534)">
            <rect x={-236} y={-50} width={472} height={100} rx={109} fill="#ffffff" />
          </g>
      </g>
      <g transform="matrix(1 0 0 1 -12 0)">
        <g mask="url(#Cloud1-m1-0)">
          <g transform="matrix(1 0 0 1 764 -616)">
            <rect x={-150} y={-150} width={300} height={300} rx={556} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 892 -616)">
            <rect x={-92.5} y={-92.5} width={185} height={185} rx={556} fill="#ffffff" />
          </g>
        </g>
      </g>
  </g>
);

export const Cloud2 = () => (
  <g>
      <g transform="matrix(0.9 0 0 0.9 -345.65 823.6)">
          <g transform="matrix(1 0 0 1 788 -534)">
            <rect x={-109} y={-50} width={218} height={100} rx={109} fill="#ffffff" />
          </g>
          <g transform="matrix(1 0 0 1 990.222 -534)">
            <rect x={0} y={0} width={0} height={0} rx={109} fill="#ffffff" />
          </g>
      </g>
  </g>
);

export const Cloud3 = () => (
  <g>
      <g transform="matrix(0.9 0 0 0.9 -345.65 823.6)">
          <g transform="matrix(1 0 0 1 788 -534)">
            <rect x={-145.5} y={-65} width={291} height={130} rx={203} fill="#ffffff" />
          </g>
      </g>
  </g>
);

// ======================================================================
// LATAR (BG City)
// ======================================================================

export const Ground = () => (
  <g>
      <g transform="matrix(1 0 0 1 1280 1876)">
          <g>
            <rect x={-1280} y={-720} width={2560} height={1440} fill="#acbac2" />
          </g>
      </g>
  </g>
);

export const CityShadow = () => (
  <g>
      <g transform="matrix(1 0 0 1 1280 730)">
          <g transform="matrix(1 0 0 1 -723 63)">
            <rect x={-89} y={-85} width={178} height={170} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 -1030 110)">
            <rect x={-112} y={-112} width={224} height={224} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 -956 308)">
            <rect x={-352} y={-158} width={704} height={316} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 1188 82)">
            <rect x={-44} y={-46} width={88} height={92} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 952 70)">
            <rect x={-68} y={-92} width={136} height={184} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 1015 270)">
            <rect x={-279} y={-176} width={558} height={352} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 679 338)">
            <rect x={-137} y={-134} width={274} height={268} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 103 222)">
            <rect x={-505} y={-254} width={1010} height={508} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 35 -142)">
            <rect x={-155} y={-116} width={310} height={232} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 -231 -81)">
            <rect x={-147} y={-73} width={294} height={146} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 698 -70)">
            <rect x={-40} y={-58} width={80} height={116} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 827 304)">
            <rect x={-73} y={-148} width={146} height={296} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 674 102)">
            <rect x={-118} y={-150} width={236} height={300} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 395 -27)">
            <rect x={-217} y={-129} width={434} height={258} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 419 -140)">
            <rect x={-81} y={-120} width={162} height={240} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 175 -142)">
            <rect x={-89} y={-318} width={178} height={636} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 -328 -177)">
            <rect x={-70} y={-115} width={140} height={230} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 -531 -188)">
            <rect x={-71} y={-148} width={142} height={296} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 -530 191)">
            <rect x={-162} y={-283} width={324} height={566} rx={20} fill="#abdff4" />
          </g>
          <g transform="matrix(1 0 0 1 -753 302)">
            <rect x={-105} y={-160} width={210} height={320} rx={20} fill="#abdff4" />
          </g>
      </g>
  </g>
);

export const Sky = () => (
  <g>
      <g transform="matrix(1 0 0 1 1280 720)">
          <g>
            <rect x={-1280} y={-720} width={2560} height={1440} fill="#d3eef5" />
          </g>
      </g>
  </g>
);

/** Komposisi utama: gabungan semua komponen sesuai posisi di BG City. */
export const BGCity: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#8f8f8f" }}>
      <svg
        width={BG_CITY_WIDTH}
        height={BG_CITY_HEIGHT}
        viewBox={`0 0 ${BG_CITY_WIDTH} ${BG_CITY_HEIGHT}`}
        xmlns="http://www.w3.org/2000/svg"
      >
      <Sky />
      <CityShadow />
      <Drift amp={30} phase={1.8}>
        <g transform="matrix(0.4 0 0 0.4 394.8 234.8)"><Cloud1 /></g>
      </Drift>
      <Drift amp={18} phase={2.7}>
        <g transform="matrix(-0.4 0 0 0.4 2420.342 232.8)"><Cloud1 /></g>
      </Drift>
      <Drift amp={24} phase={3.6}>
        <g transform="matrix(0.6 0 0 0.6 1453.2 122.2)"><Cloud2 /></g>
      </Drift>
      <Drift amp={30} phase={4.5}>
        <g transform="matrix(-0.6 0 0 0.6 349.35 120.2)"><Cloud3 /></g>
      </Drift>
      <g transform="matrix(1 0 0 1 1410.5 371.5)"><Building7Tall /></g>
      <g transform="matrix(0.12 0 0 0.12 1246 1098.75)"><Bush3 /></g>
      <g transform="matrix(0.18 0 0 0.18 1349.875 1070.75)"><Bush1 /></g>
      <g transform="matrix(-1 0 0 1 551.5 706)"><Building3Renaissance /></g>
      <g transform="matrix(1 0 0 1 998 226.5)"><Building6Tall /></g>
      <g transform="matrix(1 0 0 1 1207.5 424)"><Building5Tall /></g>
      <g transform="matrix(-1.12 0 0 1.12 1191.16 425.2)"><Building1Flat2 /></g>
      <g transform="matrix(-1.12 0 0 1.12 929.16 425.2)"><Building1Flat /></g>
      <g transform="matrix(0.35 0 0 0.35 1353.846 847.846)"><Tree2 /></g>
      <g transform="matrix(1.12 0 0 1.12 1634.84 425.2)"><Building1Flat /></g>
      <g transform="matrix(1 0 0 1 1838.5 706)"><Building3Renaissance /></g>
      <g transform="matrix(0.32 0 0 0.32 1762.231 873.969)"><Tree1 /></g>
      <g transform="matrix(0.35 0 0 0.35 2064.342 852.368)"><Tree2 /></g>
      <g transform="matrix(1 0 0 1 2163.5 855.5)"><Building4SmallFlat /></g>
      <g transform="matrix(1 0 0 1 -184.5 855.5)"><Building4SmallFlat /></g>
      <g transform="matrix(0.35 0 0 0.35 963.154 847.846)"><Tree1 /></g>
      <g transform="matrix(0.35 0 0 0.35 360.192 848.192)"><Tree1 /></g>
      <g transform="matrix(1 0 0 1 203.5 693.5)"><Building2Government /></g>
      <g transform="matrix(0.06 0 0 0.06 694.4 1103.6)"><Bench /></g>
      <g transform="matrix(0.3 0 0 0.3 689.5 968)"><Fountain /></g>
      <g transform="matrix(0.35 0 0 0.35 103.154 848.192)"><Tree2 /></g>
      <g transform="matrix(0.24 0 0 0.24 2155 931.241)"><StreetLight /></g>
      <g transform="matrix(0.24 0 0 0.24 1445.091 931.332)"><StreetLight /></g>
      <g transform="matrix(0.24 0 0 0.24 664.909 931.332)"><StreetLight /></g>
      <g transform="matrix(0.06 0 0 0.06 118.4 1103.6)"><Bench fillOverride="#a9b1d8" /></g>
      <g transform="matrix(0.06 0 0 0.06 894.4 1103.6)"><Bench fillOverride="#a9b1d8" /></g>
      <g transform="matrix(0.2 0 0 0.2 2438 1061.25)"><Bush1 /></g>
      <g transform="matrix(0.18 0 0 0.18 250 1070.625)"><Bush1 /></g>
      <g transform="matrix(0.21 0 0 0.21 1024.109 1064)"><Car5 /></g>
      <g transform="matrix(0.18 0 0 0.18 2098.68 1006.56)"><Car4 /></g>
      <g transform="matrix(0.35 0 0 0.35 178.077 941.343)"><Car3 /></g>
      <g transform="matrix(0.43 0 0 0.43 1308.564 871.943)"><Car2 /></g>
      <g transform="matrix(0.46 0 0 0.46 1437.818 875.261)"><Car1 /></g>
      <Ground />
      </svg>
    </AbsoluteFill>
  );
};
