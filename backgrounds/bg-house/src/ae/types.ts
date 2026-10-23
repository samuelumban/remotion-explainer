/**
 * Tipe data untuk "AE → Remotion" runtime.
 * Semua koordinat dalam piksel, sama seperti di After Effects (sumbu Y ke bawah).
 */
export type Vec2 = [number, number];

/** Path bezier ala AE: v = vertices, i/o = in/out tangents (relatif terhadap vertex). */
export interface PathData {
  v: Vec2[];
  i?: Vec2[];
  o?: Vec2[];
  /** default true */
  c?: boolean;
}

/** Transform 2D (layer maupun group): a=anchor, p=position, s=scale(%), r=rotation(°), o=opacity(%) */
export interface Xf {
  a?: Vec2;
  p?: Vec2;
  s?: Vec2;
  r?: number;
  o?: number;
}

export type BlendMode = 'add' | 'overlay';

export type ShapeItem =
  | { t: 'rect'; size: Vec2; round?: number; pos?: Vec2 }
  | { t: 'ellipse'; size: Vec2; pos?: Vec2 }
  | { t: 'path'; path: PathData }
  | { t: 'fill'; color: string; o?: number; blend?: number }
  | { t: 'stroke'; color: string; width: number; cap?: 1 | 2 | 3; join?: 1 | 2 | 3; o?: number; blend?: number }
  | { t: 'trim'; start?: number; end?: number; offset?: number }
  | { t: 'round'; radius: number }
  | { t: 'repeater'; copies: number; offset?: number; pos?: Vec2; scale?: Vec2; rotation?: number }
  | { t: 'group'; name?: string; items: ShapeItem[]; xf?: Xf };

export interface MaskData {
  mode: 'add' | 'subtract' | 'intersect';
  path: PathData;
}

/** Satu layer AE. */
export interface LayerData {
  name: string;
  kind: 'shape' | 'null' | 'part';
  /** layer dimatikan (ikon mata off) */
  hidden?: boolean;
  blend?: BlendMode;
  /** track matte "Alpha Matte" memakai layer tepat di atasnya */
  matte?: 'alpha';
  xf?: Xf;
  contents?: ShapeItem[];
  masks?: MaskData[];
  /** efek "Transform" (hanya Skew + Skew Axis yang dipakai di sumber) */
  fx?: { skew: number; axis: number; anchor?: Vec2 };
  /** untuk kind 'part' (precomp) */
  part?: CompData;
  /** "Collapse Transformations": isi precomp tidak di-crop ke ukuran comp */
  collapse?: boolean;
  /** indeks layer parent di dalam daftar layer yang sama */
  parent?: number;
}

/** Satu composition / precomp. `layers` urut dari ATAS ke BAWAH (sama seperti timeline AE). */
export interface CompData {
  name: string;
  width: number;
  height: number;
  layers: LayerData[];
}

/**
 * Cara memperlakukan parenting AE:
 *  - 'ignore' : persis hasil menjalankan skrip compCode (setParentWithJump di akhir
 *               mempertahankan posisi visual, jadi nilai transform tiap layer = posisi dunia).
 *  - 'local'  : nilai transform dianggap relatif terhadap parent (efek parent ikut diterapkan).
 */
export type ParentingMode = 'ignore' | 'local';
