/**
 * avatarTextures.ts
 * Texture karakter "Avatar Pria Minimalis Berbaju Biru", dipisah per bagian tubuh.
 *
 * - Setiap bagian = 1 SVG mandiri (string) yang sudah di-crop ke ukurannya sendiri.
 * - Posisi (x, y) = pojok kiri-atas texture di kanvas asli 940 x 1672.
 *   Jika semua bagian digambar di (x, y) masing-masing sesuai zIndex,
 *   hasilnya sama persis dengan karakter utuh.
 * - Penamaan left/right mengikuti sisi KARAKTER (bukan sisi layar):
 *   leftArm = lengan kiri karakter = tampil di sisi KANAN layar.
 * - pivot = titik sendi (bahu, pinggul, leher, dll), relatif ke pojok kiri-atas texture.
 *   Pakai sebagai anchor/origin saat memutar bagian tersebut.
 *
 * Opsi karakter (AvatarOptions):
 *   hair: "side" (default) | "curly" | "slick" | "snapback"
 *   glasses / watch / mustache: boolean (default false)
 *   top: "shirt" (default) | "tshirt" | "bomber" | "hoodie" | "suit"
 *   bottom: "pants" (default) | "shorts"
 *   expression: "neutral" (default) | "happy" | "angry" | "hate" |
 *               "nauseous" | "thinking" | "shock"
 *   mouth: "auto" (default, mengikuti expression) | "smile" | "a" | "i" | "u" |
 *          "e" | "o" | "th" | "ch" | "l" | "silent" | "grit" | "smirk" | "wavy" | "flat"
 *   showMouth: boolean (default true) untuk mematikan mulut
 *   headDirection: "front" (default) | "lookLeft" | "lookRight" | "lookUp" |
 *                  "lookDown" | "faceLeft" | "faceRight"
 *   pose: "stand" (default) | "sit" | "crossLegged" | "jump" | "pointUp" |
 *         "pointMiddle" | "pointDown" | "armsCrossed" | "chinRest" |
 *         "scratchHead" | "handsOnHips" | "pickUp" | "putDown" | "eating" |
 *         "phoneCall" | "scrolling"
 *   frame: nomor frame (Remotion) -> aktifkan kedipan mata acak 3-7 detik
 *   fps: fps komposisi (default 30); blinkSeed: acak per karakter (default 0)
 * Lengan pose memakai rig 2 tulang (bahu->siku->pergelangan) dengan part
 * berpanjang tetap: tiap part (upperArm/forearm/hand) punya siluet asli
 * karakter dan texture baju hanya di-clip ke siluet (pola alpha-matte
 * referensi "AE to Remotion"). Gerakan lengan = rotasi murni di sendi
 * (solver IK), tanpa peregan skala — bentuk tangan & proporsi selalu sama
 * dengan karakter awal, tanpa baju maupun berbaju, dan bahu tidak pernah
 * kosong saat lengan bergerak.
 * Detail pembagian: AVATAR_RIG (kerangka & panjang tulang) +
 * AVATAR_TEXTURE_MAP (slot texture per part & variannya).
 * Pakai resolveAvatarParts(options) untuk daftar bagian yang digambar,
 * lalu loadAvatarImages() sekali dan drawAvatar(..., options) / buildAssembledSvg(options).
 * buildAssembledSvg mendukung pose & arah pandang penuh; drawAvatar hanya untuk pose default.
 *
 * Karakter siap pakai untuk Remotion: AVATAR_CHARACTERS + resolveAvatarCharacterParts("001").
 * Ekspor metadata lip-sync: AVATAR_MOUTH_SHAPES + MOUTH_STYLE_PART.
 * Ekspor metadata ekspresi: AVATAR_EXPRESSIONS + EXPRESSION_STYLE_PARTS.
 * Ekspor metadata state: AVATAR_HEAD_DIRECTIONS + AVATAR_POSES + AVATAR_STATE_CATEGORIES.
 * Kedipan: isAvatarBlink(frame, fps, seed) atau otomatis lewat options.frame.
 */

export const AVATAR_CANVAS = { width: 940, height: 1672 } as const;

export type PartGroup = "head" | "upperBody" | "lowerBody";
export type PartSide = "left" | "right" | "center";

export type HairStyle = "side" | "curly" | "slick" | "snapback";
export type TopStyle = "shirt" | "tshirt" | "bomber" | "hoodie" | "suit";
export type BottomStyle = "pants" | "shorts";

/** Bentuk mulut untuk lip-sync dan ekspresi. */
export type MouthShape =
  | "smile"
  | "a"
  | "i"
  | "u"
  | "e"
  | "o"
  | "th"
  | "ch"
  | "l"
  | "silent"
  | "grit"
  | "smirk"
  | "wavy"
  | "flat";

export type Expression = "neutral" | "happy" | "angry" | "hate" | "nauseous" | "thinking" | "shock";

/** Arah pandang. Kiri/kanan mengikuti sudut pandang penonton (bukan sisi rig karakter). */
export type HeadDirection =
  | "front"
  | "lookLeft"
  | "lookRight"
  | "lookUp"
  | "lookDown"
  | "faceLeft"
  | "faceRight";

export type PoseCategory = "dasar" | "postur" | "gestur" | "interaksi";
export type AvatarStateCategory = PoseCategory | "arah-pandang";

/** Pose tubuh. Bisa dikombinasikan dengan headDirection dan opsi pakaian/ekspresi. */
export type PoseId =
  | "stand"
  | "sit"
  | "crossLegged"
  | "jump"
  | "pointUp"
  | "pointMiddle"
  | "pointDown"
  | "pointLeft"
  | "armsCrossed"
  | "chinRest"
  | "scratchHead"
  | "handsOnHips"
  | "pickUp"
  | "putDown"
  | "eating"
  | "phoneCall"
  | "scrolling";

export interface AvatarOptions {
  /** gaya rambut, default "side" */
  hair?: HairStyle;
  /** kacamata bening */
  glasses?: boolean;
  /** jam tangan bentuk tank di pergelangan kiri karakter */
  watch?: boolean;
  /** kumis */
  mustache?: boolean;
  /** atasan, default "shirt" */
  top?: TopStyle;
  /** bawahan, default "pants" */
  bottom?: BottomStyle;
  /** ekspresi wajah, default "neutral" */
  expression?: Expression;
  /** bentuk mulut, default "auto" (mengikuti ekspresi) */
  mouth?: MouthShape | "auto";
  /** tampilkan mulut, default true */
  showMouth?: boolean;
  /** arah pandang kepala, default "front" */
  headDirection?: HeadDirection;
  /** pose tubuh, default "stand" */
  pose?: PoseId;
  /** frame animasi (Remotion) untuk kedipan acak; null/undefined = gambar statis */
  frame?: number | null;
  /** fps komposisi, default 30 */
  fps?: number;
  /** seed kedipan agar tiap karakter bisa beda ritme, default 0 */
  blinkSeed?: number;
  /** gerak idle (napas + tumpuan kaki + sedikit goyang); aktif bila `frame` diisi, default true */
  idle?: boolean;
  /** geser waktu kedipan (detik) — berguna agar preview pendek memperlihatkan kedipan */
  blinkTimeOffset?: number;
  /** lebar tambahan kanvas tiap sisi (px). Default: otomatis untuk pose statis; untuk animasi (frame) dikunci dari pose akhir agar ukuran frame TIDAK berubah. */
  canvasPad?: number;
}

export type PartId =
  // lower body
  | "lowerBody"
  | "leftLeg"
  | "rightLeg"
  | "leftFoot"
  | "rightFoot"
  // upper body
  | "upperBody"
  | "neck"
  | "collar"
  | "leftArm"
  | "rightArm"
  // head
  | "head"
  | "hair"
  | "leftEar"
  | "rightEar"
  | "leftEyebrow"
  | "rightEyebrow"
  | "leftEye"
  | "rightEye"
  | "nose"
  | "mouth"
  // varian mulut & ekspresi
  | "mouthA"
  | "mouthI"
  | "mouthU"
  | "mouthE"
  | "mouthO"
  | "mouthTh"
  | "mouthCh"
  | "mouthL"
  | "mouthSilent"
  | "mouthGrit"
  | "mouthSmirk"
  | "mouthWavy"
  | "mouthFlat"
  | "browsHappy"
  | "eyesHappy"
  | "blushHappy"
  | "browsAngry"
  | "eyesAngry"
  | "browsHate"
  | "eyesHate"
  | "browsNauseous"
  | "eyesNauseous"
  | "sickNauseous"
  | "browsThinking"
  | "eyesThinking"
  | "thoughtThinking"
  | "browsShock"
  | "eyesShock"
  // opsi karakter
  | "hairCurly"
  | "hairSlick"
  | "hairSnapback"
  | "glasses"
  | "mustache"
  | "watch"
  // opsi pakaian
  | "upperBodyTshirt"
  | "leftArmTshirt"
  | "rightArmTshirt"
  | "upperBodyBomber"
  | "leftArmBomber"
  | "rightArmBomber"
  | "upperBodyHoodie"
  | "hoodieHood"
  | "leftArmHoodie"
  | "rightArmHoodie"
  | "upperBodySuit"
  | "leftArmSuit"
  | "rightArmSuit"
  | "lowerBodyShorts"
  | "leftLegShorts"
  | "rightLegShorts";

export interface Point {
  x: number;
  y: number;
}

export interface AvatarPart {
  id: PartId;
  label: string;
  group: PartGroup;
  side: PartSide;
  /** bagian induk di hirarki rig (untuk transform berantai), null = root */
  parent: PartId | null;
  /** urutan gambar: kecil = di belakang, besar = di depan */
  zIndex: number;
  /** posisi pojok kiri-atas texture di kanvas asli */
  x: number;
  y: number;
  width: number;
  height: number;
  /** titik pivot relatif ke pojok kiri-atas texture */
  pivot: Point;
  /** SVG string mandiri */
  svg: string;
}

/* ------------------------------------------------------------------ */
/* Palet warna                                                         */
/* ------------------------------------------------------------------ */
export const AVATAR_COLORS = {
  skin: "#f8c392",
  skinShade: "#eaa874",
  neck: "#f5bd8a",
  nose: "#eba873",
  hair: "#1f2230",
  brow: "#5a4a40",
  eye: "#2a1f26",
  teeth: "#ffffff",
  mouth: "#3a1f2e",
  mouthDeep: "#2a1521",
  tongue: "#e0405f",
  shirt: "#d0e1f7",
  shirtShade: "#b9cfe8",
  shirtCuff: "#c5d6ee",
  shirtCollar: "#dbe8f8",
  collarShade: "#b5cde9",
  placket: "#b3c9e6",
  pocket: "#b0c6e4",
  pocketFlap: "#c3d5ed",
  button: "#f8f6f0",
  pants: "#2d2d3a",
  shoe: "#f6f4ef",
  shoeSole: "#e0dedb",
  shoeStripe: "#d9d7d3",
  hairSheen: "#343b50",
  glassesFrame: "#39404e",
  glassesLens: "#e6f5ff",
  glassesShine: "#ffffff",
  watchStrap: "#4b3a2c",
  watchStrapShade: "#382b20",
  watchCase: "#c9a35e",
  watchCaseShade: "#a37f42",
  watchJewel: "#3d6390",
  watchDial: "#f6efdf",
  watchMark: "#2b2722",
  blush: "#ef8f8c",
  nausea: "#9dbf85",
  sweat: "#7fc7e2",
  thought: "#5c677d",
  cap: "#2b3242",
  capShade: "#212736",
  capBrim: "#93b3d6",
  capBrimShade: "#7697ba",
  capButton: "#eef5fd",
  // kaos
  tshirt: "#f1efe7",
  tshirtShade: "#dcd9cf",
  tshirtRib: "#e5e2d8",
  tshirtSeam: "#c9c5ba",
  // jaket bomber
  bomber: "#5b6b4e",
  bomberShade: "#4a5840",
  bomberLight: "#6a7b5c",
  bomberRib: "#3b4634",
  bomberZip: "#d8d3c4",
  bomberPocket: "#4e5d43",
  // hoodie
  hoodie: "#8992a2",
  hoodieShade: "#767f8f",
  hoodieDark: "#656d7c",
  hoodieLight: "#98a1b1",
  hoodieCord: "#eeece3",
  hoodieMetal: "#c2beb0",
  // jas
  suit: "#2e3a4f",
  suitShade: "#242f42",
  suitLight: "#3b4a63",
  suitButton: "#1c2534",
  dressShirt: "#f7f5ee",
  dressShirtShade: "#e4e0d5",
  tie: "#7c3742",
  tieLight: "#934a56",
  tieKnot: "#652b35",
  // celana pendek
  shortsHem: "#3c3c4d",
  shortsSeam: "#232330",
} as const;

const C = AVATAR_COLORS;

/* ------------------------------------------------------------------ */
/* Potongan yang dipakai ulang                                         */
/* ------------------------------------------------------------------ */

// Garis luar badan, dipakai semua atasan.
const TORSO_OUTLINE =
  "M394,424 L340,545 L340,925 C390,933 430,937 468,937 C510,937 560,933 600,925 L600,545 L545,424";
const TORSO_VNECK = `${TORSO_OUTLINE} L469,472 Z`;
// Crew neck: lubang leher lebar; ditutup pita rib di bagian atas.
const TORSO_CREW =
  `${TORSO_OUTLINE} L518,410 C506,436 490,444 469,444 C448,444 432,436 420,410 L394,424 Z`;

// Pita rib crew neck (bentuknya menutup celah antara leher dan lubang baju).
const CREW_BAND =
  "M432,414 C444,430 456,434 469,434 C482,434 494,430 506,414 L518,410 " +
  "C508,442 490,452 469,452 C448,452 430,442 420,410 Z";

// Hem rib bomber dan hoodie.
const BOMBER_HEM =
  "M341,900 C382,909 428,913 469,913 C510,913 556,909 597,900 L600,925 " +
  "C560,933 510,937 469,937 C428,937 378,933 340,925 Z";
const HOODIE_HEM =
  "M341,898 C382,907 428,911 469,911 C510,911 556,907 597,898 L600,925 " +
  "C560,933 510,937 469,937 C428,937 378,933 340,925 Z";

const ARM_LEFT =
  "M545,424 L610,445 C650,460 672,480 678,520 L693,705 L692,758 L596,758 L596,545 Z";
const ARM_RIGHT =
  "M394,424 L335,446 C290,463 266,488 262,530 L247,705 L248,758 L344,758 L344,545 Z";

// Siluet celana pendek: kaki sedikit melebar di hem, crotch menyempit.
const SHORTS_OUTLINE =
  "M344,915 L594,915 L598,1218 L478,1218 L476,1004 Q469,1016 462,1004 L460,1218 L340,1218 Z";

// Tangan + jempol (bagian yang sama untuk semua varian lengan).
const HAND_LEFT =
  `<path d="M613,740 L683,740 L683,975 Q683,1008 648,1008 Q613,1008 613,975 Z" fill="${C.skin}"/>` +
  `<ellipse cx="611" cy="920" rx="10" ry="28" fill="${C.skin}"/>` +
  `<path d="M618,894 C609,906 609,934 618,946" fill="none" stroke="${C.skinShade}" stroke-width="3" stroke-linecap="round"/>`;
const HAND_RIGHT =
  `<path d="M257,740 L327,740 L327,975 Q327,1008 292,1008 Q257,1008 257,975 Z" fill="${C.skin}"/>` +
  `<ellipse cx="329" cy="920" rx="10" ry="28" fill="${C.skin}"/>` +
  `<path d="M322,894 C331,906 331,934 322,946" fill="none" stroke="${C.skinShade}" stroke-width="3" stroke-linecap="round"/>`;

/* ------------------------------------------------------------------ */
/* Builder                                                             */
/* ------------------------------------------------------------------ */
interface Bounds {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface PartDef {
  id: PartId;
  label: string;
  group: PartGroup;
  side: PartSide;
  parent: PartId | null;
  zIndex: number;
  bounds: Bounds;
  /** titik sendi dalam koordinat kanvas asli */
  joint: Point;
  /** isi SVG dalam koordinat kanvas asli */
  body: string;
}

const makePart = (d: PartDef): AvatarPart => {
  const { x, y, w, h } = d.bounds;
  return {
    id: d.id,
    label: d.label,
    group: d.group,
    side: d.side,
    parent: d.parent,
    zIndex: d.zIndex,
    x,
    y,
    width: w,
    height: h,
    pivot: { x: d.joint.x - x, y: d.joint.y - y },
    svg:
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x} ${y} ${w} ${h}" ` +
      `width="${w}" height="${h}">${d.body}</svg>`,
  };
};

/* ------------------------------------------------------------------ */
/* Bagian-bagian tubuh                                                 */
/* ------------------------------------------------------------------ */

/* ---------- LOWER BODY ---------- */
const lowerBody = makePart({
  id: "lowerBody",
  label: "Lower Body (pinggul / celana)",
  group: "lowerBody",
  side: "center",
  parent: null,
  zIndex: 11,
  bounds: { x: 342, y: 913, w: 254, h: 74 },
  joint: { x: 469, y: 950 },
  body: `<path d="M344,915 L594,915 L594,985 L482,985 Q481,972 470,972 Q459,972 458,985 L344,985 Z" fill="${C.pants}"/>`,
});

// Sisi kiri karakter = sisi kanan layar
const leftLeg = makePart({
  id: "leftLeg",
  label: "Left Leg",
  group: "lowerBody",
  side: "left",
  parent: "lowerBody",
  zIndex: 10,
  bounds: { x: 478, y: 958, w: 118, h: 538 },
  joint: { x: 537, y: 968 },
  body: `<path d="M480,960 L594,960 L594,1488 Q594,1494 588,1494 L500,1494 Q494,1494 494,1488 L482,985 Z" fill="${C.pants}"/>`,
});

const rightLeg = makePart({
  id: "rightLeg",
  label: "Right Leg",
  group: "lowerBody",
  side: "right",
  parent: "lowerBody",
  zIndex: 10,
  bounds: { x: 342, y: 958, w: 120, h: 538 },
  joint: { x: 401, y: 968 },
  body: `<path d="M344,960 L460,960 L458,985 L444,1488 Q443,1494 437,1494 L350,1494 Q344,1494 344,1488 Z" fill="${C.pants}"/>`,
});

const leftFoot = makePart({
  id: "leftFoot",
  label: "Left Foot (sepatu)",
  group: "lowerBody",
  side: "left",
  parent: "leftLeg",
  zIndex: 12,
  bounds: { x: 492, y: 1476, w: 117, h: 98 },
  joint: { x: 550, y: 1486 },
  body:
    `<path d="M594,1478 L508,1478 Q494,1488 494,1520 L494,1560 Q494,1572 506,1572 L595,1572 Q607,1572 607,1560 L607,1520 Q607,1485 594,1478 Z" fill="${C.shoe}"/>` +
    `<path d="M494,1546 L607,1546 L607,1560 Q607,1572 595,1572 L506,1572 Q494,1572 494,1560 Z" fill="${C.shoeSole}"/>` +
    `<rect x="528" y="1488" width="46" height="9" rx="4.5" fill="${C.shoeStripe}"/>` +
    `<rect x="528" y="1507" width="46" height="9" rx="4.5" fill="${C.shoeStripe}"/>`,
});

const rightFoot = makePart({
  id: "rightFoot",
  label: "Right Foot (sepatu)",
  group: "lowerBody",
  side: "right",
  parent: "rightLeg",
  zIndex: 12,
  bounds: { x: 329, y: 1476, w: 116, h: 98 },
  joint: { x: 390, y: 1486 },
  body:
    `<path d="M345,1478 L437,1478 Q445,1490 443,1548 L443,1560 Q443,1572 431,1572 L343,1572 Q331,1572 331,1560 L331,1520 Q331,1485 345,1478 Z" fill="${C.shoe}"/>` +
    `<path d="M331,1546 L443,1546 L443,1560 Q443,1572 431,1572 L343,1572 Q331,1572 331,1560 Z" fill="${C.shoeSole}"/>` +
    `<rect x="362" y="1488" width="46" height="9" rx="4.5" fill="${C.shoeStripe}"/>` +
    `<rect x="362" y="1507" width="46" height="9" rx="4.5" fill="${C.shoeStripe}"/>`,
});

/* ---------- UPPER BODY ---------- */
const upperBody = makePart({
  id: "upperBody",
  label: "Upper Body (badan kemeja)",
  group: "upperBody",
  side: "center",
  parent: "lowerBody",
  zIndex: 21,
  bounds: { x: 338, y: 422, w: 264, h: 517 },
  joint: { x: 469, y: 925 },
  body:
    `<path d="${TORSO_VNECK}" fill="${C.shirt}"/>` +
    `<rect x="455" y="472" width="3" height="452" fill="${C.placket}"/>` +
    `<g fill="${C.button}">` +
    `<circle cx="472" cy="497" r="7"/><circle cx="472" cy="572" r="7"/>` +
    `<circle cx="472" cy="652" r="7"/><circle cx="472" cy="733" r="7"/>` +
    `<circle cx="472" cy="816" r="7"/><circle cx="472" cy="901" r="7"/></g>` +
    `<path d="M351,553 L433,553 L433,625 Q433,645 413,645 L371,645 Q351,645 351,625 Z" fill="${C.pocket}"/>` +
    `<path d="M351,553 L433,553 L433,577 Q433,585 425,585 L359,585 Q351,585 351,577 Z" fill="${C.pocketFlap}"/>` +
    `<circle cx="392" cy="571" r="7" fill="${C.button}"/>` +
    `<path d="M460,925 L477,925 L468,937 Z" fill="${C.pants}"/>`,
});

const neck = makePart({
  id: "neck",
  label: "Neck",
  group: "upperBody",
  side: "center",
  parent: "upperBody",
  zIndex: 20,
  bounds: { x: 418, y: 378, w: 104, h: 88 },
  joint: { x: 469, y: 440 },
  body: `<path d="M420,380 L519,380 L519,410 L469,462 L420,410 Z" fill="${C.neck}"/>`,
});

const collar = makePart({
  id: "collar",
  label: "Collar (kerah)",
  group: "upperBody",
  side: "center",
  parent: "upperBody",
  zIndex: 23,
  bounds: { x: 390, y: 392, w: 158, h: 86 },
  joint: { x: 469, y: 440 },
  body:
    `<path d="M394,424 L412,396 L424,396 L469,458 L469,474 L412,474 Z" fill="${C.shirtCollar}"/>` +
    `<path d="M545,424 L527,396 L515,396 L469,458 L469,474 L526,474 Z" fill="${C.shirtCollar}"/>` +
    `<path d="M412,472 L441,449 L468,472 Z" fill="${C.collarShade}"/>` +
    `<path d="M526,472 L497,449 L470,472 Z" fill="${C.collarShade}"/>`,
});

// Lengan kiri karakter = sisi kanan layar. Berisi kulit lengan + lengan baju + manset.
const leftArm = makePart({
  id: "leftArm",
  label: "Left Arm (lengan + lengan baju)",
  group: "upperBody",
  side: "left",
  parent: "upperBody",
  zIndex: 22,
  bounds: { x: 539, y: 422, w: 165, h: 588 },
  joint: { x: 604, y: 470 },
  body:
    HAND_LEFT +
    `<path d="${ARM_LEFT}" fill="${C.shirt}"/>` +
    `<path d="M613,545 L601,600 L601,705 L613,705 Z" fill="${C.shirtShade}"/>` +
    `<rect x="600" y="705" width="102" height="54" rx="13" fill="${C.shirtCuff}"/>`,
});

const rightArm = makePart({
  id: "rightArm",
  label: "Right Arm (lengan + lengan baju)",
  group: "upperBody",
  side: "right",
  parent: "upperBody",
  zIndex: 22,
  bounds: { x: 235, y: 422, w: 161, h: 588 },
  joint: { x: 335, y: 470 },
  body:
    HAND_RIGHT +
    `<path d="${ARM_RIGHT}" fill="${C.shirt}"/>` +
    `<path d="M327,545 L339,600 L339,705 L327,705 Z" fill="${C.shirtShade}"/>` +
    `<rect x="237" y="705" width="103" height="54" rx="13" fill="${C.shirtCuff}"/>`,
});

/* ---------- HEAD ---------- */
const head = makePart({
  id: "head",
  label: "Head (wajah)",
  group: "head",
  side: "center",
  parent: "neck",
  zIndex: 31,
  bounds: { x: 386, y: 173, w: 166, h: 224 },
  joint: { x: 469, y: 385 },
  body: `<path d="M390,200 L410,200 L410,175 L548,175 L548,320 C548,365 515,392 469,392 C423,392 390,365 390,320 Z" fill="${C.skin}"/>`,
});

const hair = makePart({
  id: "hair",
  label: "Hair (rambut)",
  group: "head",
  side: "center",
  parent: "head",
  zIndex: 34,
  bounds: { x: 355, y: 125, w: 214, h: 148 },
  joint: { x: 469, y: 215 },
  body: `<path d="M373,270 L372,232 C366,225 358,215 357,208 C372,206 382,196 392,185 C410,150 450,128 490,127 C514,127 532,136 542,152 C552,168 561,184 567,202 L567,265 L548,268 L547,225 C535,200 505,185 470,190 C440,194 410,200 392,218 L391,268 Z" fill="${C.hair}"/>`,
});

const leftEar = makePart({
  id: "leftEar",
  label: "Left Ear",
  group: "head",
  side: "left",
  parent: "head",
  zIndex: 30,
  bounds: { x: 543, y: 257, w: 38, h: 68 },
  joint: { x: 548, y: 293 },
  body:
    `<ellipse cx="562" cy="291" rx="17" ry="32" fill="${C.skin}"/>` +
    `<ellipse cx="557" cy="291" rx="5" ry="11" fill="${C.skinShade}"/>`,
});

const rightEar = makePart({
  id: "rightEar",
  label: "Right Ear",
  group: "head",
  side: "right",
  parent: "head",
  zIndex: 30,
  bounds: { x: 357, y: 257, w: 38, h: 68 },
  joint: { x: 390, y: 295 },
  body:
    `<ellipse cx="376" cy="293" rx="17" ry="32" fill="${C.skin}"/>` +
    `<ellipse cx="381" cy="293" rx="5" ry="11" fill="${C.skinShade}"/>`,
});

const leftEyebrow = makePart({
  id: "leftEyebrow",
  label: "Left Eyebrow",
  group: "head",
  side: "left",
  parent: "head",
  zIndex: 32,
  bounds: { x: 486, y: 236, w: 43, h: 15 },
  joint: { x: 507, y: 243 },
  body: `<rect x="488" y="238" width="39" height="11" rx="5.5" fill="${C.brow}"/>`,
});

const rightEyebrow = makePart({
  id: "rightEyebrow",
  label: "Right Eyebrow",
  group: "head",
  side: "right",
  parent: "head",
  zIndex: 32,
  bounds: { x: 408, y: 236, w: 42, h: 15 },
  joint: { x: 429, y: 243 },
  body: `<rect x="410" y="238" width="38" height="11" rx="5.5" fill="${C.brow}"/>`,
});

const leftEye = makePart({
  id: "leftEye",
  label: "Left Eye",
  group: "head",
  side: "left",
  parent: "head",
  zIndex: 32,
  bounds: { x: 495, y: 259, w: 24, h: 24 },
  joint: { x: 507, y: 271 },
  body: `<circle cx="507" cy="271" r="10" fill="${C.eye}"/>`,
});

const rightEye = makePart({
  id: "rightEye",
  label: "Right Eye",
  group: "head",
  side: "right",
  parent: "head",
  zIndex: 32,
  bounds: { x: 419, y: 259, w: 24, h: 24 },
  joint: { x: 431, y: 271 },
  body: `<circle cx="431" cy="271" r="10" fill="${C.eye}"/>`,
});

const nose = makePart({
  id: "nose",
  label: "Nose",
  group: "head",
  side: "center",
  parent: "head",
  zIndex: 32,
  bounds: { x: 457, y: 263, w: 24, h: 46 },
  joint: { x: 469, y: 286 },
  body: `<rect x="459" y="265" width="20" height="42" rx="10" fill="${C.nose}"/>`,
});

/* ---------- MULUT (LIP-SYNC) ---------- */
// Semua mulut memakai bounds yang sama supaya bisa ditukar per frame tanpa geser.
const MOUTH_BOUNDS = { x: 437, y: 319, w: 64, h: 47 };

const makeMouth = (id: PartId, label: string, body: string): AvatarPart =>
  makePart({
    id,
    label,
    group: "head",
    side: "center",
    parent: "head",
    zIndex: 32,
    bounds: MOUTH_BOUNDS,
    joint: { x: 469, y: 326 },
    body,
  });

const mouth = makeMouth(
  "mouth",
  "Mulut senyum (default)",
  `<path d="M441,326 L497,326 C497,350 485,356 469,356 C453,356 441,350 441,326 Z" fill="${C.mouth}"/>` +
    `<path d="M443,326 L495,326 L495,335 L443,335 Z" fill="${C.teeth}"/>` +
    `<path d="M455,355 C458,342 480,342 483,355 C477,359 461,359 455,355 Z" fill="${C.tongue}"/>`
);

const mouthA = makeMouth(
  "mouthA",
  "Mulut A (ah)",
  `<path d="M443,325 Q469,321 495,325 C497,342 492,353 482,359 Q469,364 456,359 C446,353 441,342 443,325 Z" fill="${C.mouth}"/>` +
    `<path d="M446,326 Q469,323 492,326 L491,334 Q469,331 447,334 Z" fill="${C.teeth}"/>` +
    `<path d="M456,357 Q469,349 482,357 Q476,362 469,362 Q462,362 456,357 Z" fill="${C.tongue}"/>`
);

const mouthI = makeMouth(
  "mouthI",
  "Mulut I (ii)",
  `<path d="M443,327 Q469,323 495,327 C495,335 484,341 469,341 C454,341 443,335 443,327 Z" fill="${C.mouth}"/>` +
    `<path d="M446,328 Q469,325 492,328 C490,333 481,336 469,336 C457,336 448,333 446,328 Z" fill="${C.teeth}"/>` +
    `<path d="M447,334 Q469,338 491,334" fill="none" stroke="${C.mouth}" stroke-width="2" opacity="0.55"/>`
);

const mouthU = makeMouth(
  "mouthU",
  "Mulut U (uu)",
  `<path d="M461,332 Q469,328 477,332 Q482,343 477,352 Q469,358 461,352 Q456,343 461,332 Z" fill="${C.mouth}"/>` +
    `<ellipse cx="469" cy="342" rx="5.5" ry="7.5" fill="${C.mouthDeep}"/>` +
    `<path d="M462,333 Q469,330 476,333" fill="none" stroke="${C.skinShade}" stroke-width="1.6" opacity="0.55" stroke-linecap="round"/>`
);

const mouthE = makeMouth(
  "mouthE",
  "Mulut E (eh)",
  `<path d="M444,326 Q469,322 494,326 C494,340 484,349 469,349 C454,349 444,340 444,326 Z" fill="${C.mouth}"/>` +
    `<path d="M447,327 Q469,324 491,327 L490,334 L448,334 Z" fill="${C.teeth}"/>` +
    `<path d="M458,347 Q469,341 480,347 Q475,350 469,350 Q463,350 458,347 Z" fill="${C.tongue}"/>`
);

const mouthO = makeMouth(
  "mouthO",
  "Mulut O (oh)",
  `<ellipse cx="469" cy="341" rx="13" ry="16" fill="${C.mouth}"/>` +
    `<ellipse cx="469" cy="342" rx="8.5" ry="11.5" fill="${C.mouthDeep}"/>` +
    `<path d="M459,328 Q469,325 479,328" fill="none" stroke="${C.skinShade}" stroke-width="1.8" opacity="0.55" stroke-linecap="round"/>`
);

const mouthTh = makeMouth(
  "mouthTh",
  "Mulut TH (lidah di gigi)",
  `<path d="M446,327 Q469,324 492,327 C492,339 483,345 469,345 C455,345 446,339 446,327 Z" fill="${C.mouth}"/>` +
    `<path d="M449,328 Q469,325 489,328 L489,333 Q469,331 449,333 Z" fill="${C.teeth}"/>` +
    `<path d="M463,331 Q469,334 475,331 L475,344 Q469,347 463,344 Z" fill="${C.tongue}"/>`
);

const mouthCh = makeMouth(
  "mouthCh",
  "Mulut CH",
  `<path d="M446,330 Q469,326 492,330 C491,338 482,342 469,342 C456,342 447,338 446,330 Z" fill="${C.mouth}"/>` +
    `<path d="M449,330 Q469,327 489,330 L488,337 Q469,334 450,337 Z" fill="${C.teeth}"/>` +
    `<g stroke="${C.mouth}" stroke-width="1.2" opacity="0.65">` +
    `<path d="M458,330 L458,336"/><path d="M469,329 L469,335"/><path d="M480,330 L480,336"/></g>`
);

const mouthL = makeMouth(
  "mouthL",
  "Mulut L (lidah naik)",
  `<path d="M444,326 Q469,322 494,326 C494,340 484,351 469,351 C454,351 444,340 444,326 Z" fill="${C.mouth}"/>` +
    `<path d="M447,327 Q469,324 491,327 L490,333 L448,333 Z" fill="${C.teeth}"/>` +
    `<path d="M462,347 Q461,337 469,334 Q477,337 476,347 Q472,350 469,350 Q465,350 462,347 Z" fill="${C.tongue}"/>`
);

const mouthSilent = makeMouth(
  "mouthSilent",
  "Mulut diam",
  `<path d="M453,338 Q469,334 485,338" fill="none" stroke="${C.mouth}" stroke-width="3.4" stroke-linecap="round"/>` +
    `<path d="M460,343 Q469,345 478,343" fill="none" stroke="${C.skinShade}" stroke-width="1.6" opacity="0.6" stroke-linecap="round"/>`
);

const mouthGrit = makeMouth(
  "mouthGrit",
  "Mulut gigi mengatup (marah)",
  `<path d="M446,331 Q469,328 492,331 C491,341 482,345 469,345 C456,345 447,341 446,331 Z" fill="${C.mouth}"/>` +
    `<path d="M449,330 Q469,328 489,330 L488,337 Q469,335 450,337 Z" fill="${C.teeth}"/>` +
    `<g stroke="${C.mouth}" stroke-width="1.3" opacity="0.7">` +
    `<path d="M458,330 L458,337"/><path d="M469,329 L469,336"/><path d="M480,330 L480,337"/></g>` +
    `<path d="M443,326 Q448,329 451,333" fill="none" stroke="${C.mouth}" stroke-width="2.4" opacity="0.5" stroke-linecap="round"/>` +
    `<path d="M495,326 Q490,329 487,333" fill="none" stroke="${C.mouth}" stroke-width="2.4" opacity="0.5" stroke-linecap="round"/>`
);

const mouthSmirk = makeMouth(
  "mouthSmirk",
  "Mulut senyum miring (benci)",
  `<path d="M449,340 Q462,334 476,337 Q484,339 490,331" fill="none" stroke="${C.mouth}" stroke-width="3.4" stroke-linecap="round"/>` +
    `<path d="M486,331 L491,327" fill="none" stroke="${C.mouth}" stroke-width="2.6" stroke-linecap="round"/>`
);

const mouthWavy = makeMouth(
  "mouthWavy",
  "Mulut bergelombang (mual)",
  `<path d="M448,339 Q455,333 461,339 Q467,345 473,339 Q479,333 486,339" fill="none" stroke="${C.mouth}" stroke-width="3.2" stroke-linecap="round"/>`
);

const mouthFlat = makeMouth(
  "mouthFlat",
  "Mulut datar (thinking)",
  `<path d="M455,338 L483,338" stroke="${C.mouth}" stroke-width="3.2" stroke-linecap="round"/>` +
    `<path d="M461,343 Q469,344 477,343" fill="none" stroke="${C.skinShade}" stroke-width="1.5" opacity="0.5" stroke-linecap="round"/>`
);

/* ---------- EKSPRESI WAJAH ---------- */
const BROW_BOUNDS = { x: 402, y: 216, w: 134, h: 46 };
const EYE_BOUNDS = { x: 410, y: 252, w: 118, h: 38 };

const makeBrows = (id: PartId, label: string, body: string): AvatarPart =>
  makePart({
    id,
    label,
    group: "head",
    side: "center",
    parent: "head",
    zIndex: 32,
    bounds: BROW_BOUNDS,
    joint: { x: 469, y: 243 },
    body,
  });

const makeEyes = (id: PartId, label: string, body: string): AvatarPart =>
  makePart({
    id,
    label,
    group: "head",
    side: "center",
    parent: "head",
    zIndex: 32,
    bounds: EYE_BOUNDS,
    joint: { x: 469, y: 271 },
    body,
  });

const makeFaceEffect = (id: PartId, label: string, bounds: Bounds, body: string): AvatarPart =>
  makePart({
    id,
    label,
    group: "head",
    side: "center",
    parent: "head",
    zIndex: 33,
    bounds,
    joint: { x: 469, y: 271 },
    body,
  });

const browsHappy = makeBrows(
  "browsHappy",
  "Alis senang",
  `<path d="M410,241 Q429,232 448,239" fill="none" stroke="${C.brow}" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="M490,239 Q509,232 528,241" fill="none" stroke="${C.brow}" stroke-width="5" stroke-linecap="round"/>`
);
const eyesHappy = makeEyes(
  "eyesHappy",
  "Mata senang (tertutup)",
  `<path d="M421,274 Q431,263 441,274" fill="none" stroke="${C.eye}" stroke-width="3.6" stroke-linecap="round"/>` +
    `<path d="M497,274 Q507,263 517,274" fill="none" stroke="${C.eye}" stroke-width="3.6" stroke-linecap="round"/>`
);
const blushHappy = makeFaceEffect(
  "blushHappy",
  "Pipi merona",
  { x: 399, y: 289, w: 140, h: 23 },
  `<ellipse cx="414" cy="300" rx="11" ry="5.5" fill="${C.blush}" opacity="0.45"/>` +
    `<ellipse cx="524" cy="300" rx="11" ry="5.5" fill="${C.blush}" opacity="0.45"/>`
);

const browsAngry = makeBrows(
  "browsAngry",
  "Alis marah",
  `<path d="M410,235 L448,250" stroke="${C.brow}" stroke-width="5.5" stroke-linecap="round"/>` +
    `<path d="M528,235 L490,250" stroke="${C.brow}" stroke-width="5.5" stroke-linecap="round"/>`
);
const eyesAngry = makeEyes(
  "eyesAngry",
  "Mata marah",
  `<path d="M421,271 Q431,278 441,271 Q431,264 421,271 Z" fill="${C.eye}"/>` +
    `<path d="M497,271 Q507,278 517,271 Q507,264 497,271 Z" fill="${C.eye}"/>`
);

const browsHate = makeBrows(
  "browsHate",
  "Alis benci",
  `<path d="M410,247 L448,246" stroke="${C.brow}" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="M490,241 Q509,231 528,242" fill="none" stroke="${C.brow}" stroke-width="5" stroke-linecap="round"/>`
);
const eyesHate = makeEyes(
  "eyesHate",
  "Mata benci",
  `<path d="M421,273 Q431,278 441,273 Q431,268 421,273 Z" fill="${C.eye}"/>` +
    `<path d="M497,270 Q507,264 517,270 Q517,277 507,279 Q497,277 497,270 Z" fill="${C.eye}"/>` +
    `<circle cx="511" cy="271" r="1.8" fill="${C.teeth}" opacity="0.7"/>`
);

const browsNauseous = makeBrows(
  "browsNauseous",
  "Alis mual",
  `<path d="M410,246 Q429,235 448,238" fill="none" stroke="${C.brow}" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="M490,238 Q509,235 528,246" fill="none" stroke="${C.brow}" stroke-width="5" stroke-linecap="round"/>`
);
const eyesNauseous = makeEyes(
  "eyesNauseous",
  "Mata mual",
  `<ellipse cx="431" cy="273" rx="8" ry="5" fill="${C.eye}"/>` +
    `<ellipse cx="507" cy="273" rx="8" ry="5" fill="${C.eye}"/>` +
    `<path d="M423,280 Q431,283 439,280" fill="none" stroke="${C.skinShade}" stroke-width="2" opacity="0.6" stroke-linecap="round"/>` +
    `<path d="M499,280 Q507,283 515,280" fill="none" stroke="${C.skinShade}" stroke-width="2" opacity="0.6" stroke-linecap="round"/>`
);
const sickNauseous = makeFaceEffect(
  "sickNauseous",
  "Pipi pucat + keringat",
  { x: 399, y: 278, w: 150, h: 32 },
  `<ellipse cx="413" cy="300" rx="12" ry="6" fill="${C.nausea}" opacity="0.35"/>` +
    `<ellipse cx="525" cy="300" rx="12" ry="6" fill="${C.nausea}" opacity="0.35"/>` +
    `<path d="M537,282 C533,289 530,294 532,299 C534,304 542,304 544,299 C545,294 541,288 537,282 Z" fill="${C.sweat}"/>` +
    `<path d="M539,288 C538,292 537,294 538,296" fill="none" stroke="${C.teeth}" stroke-width="1.4" opacity="0.7" stroke-linecap="round"/>`
);

const browsThinking = makeBrows(
  "browsThinking",
  "Alis thinking",
  `<path d="M410,241 Q429,236 448,241" fill="none" stroke="${C.brow}" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="M490,236 Q509,226 528,234" fill="none" stroke="${C.brow}" stroke-width="5" stroke-linecap="round"/>`
);
const eyesThinking = makeEyes(
  "eyesThinking",
  "Mata melirik ke atas",
  `<circle cx="432" cy="267" r="9.5" fill="${C.eye}"/>` +
    `<circle cx="508" cy="267" r="9.5" fill="${C.eye}"/>` +
    `<circle cx="435" cy="264" r="2" fill="${C.teeth}" opacity="0.75"/>` +
    `<circle cx="511" cy="264" r="2" fill="${C.teeth}" opacity="0.75"/>`
);
const thoughtThinking = makeFaceEffect(
  "thoughtThinking",
  "Balon pikiran",
  { x: 576, y: 195, w: 54, h: 53 },
  `<g fill="${C.thought}">` +
    `<circle cx="584" cy="242" r="4"/>` +
    `<circle cx="600" cy="226" r="6"/>` +
    `<circle cx="620" cy="206" r="8.5"/>` +
    `</g>`
);

const browsShock = makeBrows(
  "browsShock",
  "Alis kaget",
  `<path d="M409,229 Q429,218 449,227" fill="none" stroke="${C.brow}" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="M489,227 Q509,218 529,229" fill="none" stroke="${C.brow}" stroke-width="5" stroke-linecap="round"/>`
);
const eyesShock = makeEyes(
  "eyesShock",
  "Mata kaget",
  `<circle cx="431" cy="271" r="12.5" fill="${C.teeth}" stroke="${C.eye}" stroke-width="2"/>` +
    `<circle cx="507" cy="271" r="12.5" fill="${C.teeth}" stroke="${C.eye}" stroke-width="2"/>` +
    `<circle cx="431" cy="272" r="4.5" fill="${C.eye}"/>` +
    `<circle cx="507" cy="272" r="4.5" fill="${C.eye}"/>` +
    `<circle cx="429.5" cy="270.5" r="1.4" fill="${C.teeth}"/>` +
    `<circle cx="505.5" cy="270.5" r="1.4" fill="${C.teeth}"/>`
);

/* ------------------------------------------------------------------ */
/* OPSI KARAKTER                                                       */
/* ------------------------------------------------------------------ */

const glasses = makePart({
  id: "glasses",
  label: "Glasses (kacamata bening)",
  group: "head",
  side: "center",
  parent: "head",
  zIndex: 33,
  bounds: { x: 384, y: 252, w: 174, h: 42 },
  joint: { x: 469, y: 271 },
  body:
    `<g fill="${C.glassesLens}" fill-opacity="0.1" stroke="${C.glassesFrame}" stroke-width="3.4">` +
    `<rect x="490" y="256" width="38" height="30" rx="9"/>` +
    `<rect x="410" y="256" width="38" height="30" rx="9"/>` +
    `</g>` +
    `<path d="M448,266 Q469,258 490,266" fill="none" stroke="${C.glassesFrame}" stroke-width="3.4" stroke-linecap="round"/>` +
    `<path d="M410,265 L386,261" fill="none" stroke="${C.glassesFrame}" stroke-width="3.4" stroke-linecap="round"/>` +
    `<path d="M528,265 L552,261" fill="none" stroke="${C.glassesFrame}" stroke-width="3.4" stroke-linecap="round"/>` +
    `<g fill="none" stroke="${C.glassesShine}" stroke-width="3" stroke-linecap="round" opacity="0.7">` +
    `<path d="M497,262 L506,273"/><path d="M513,262 L517,267"/>` +
    `<path d="M417,262 L426,273"/><path d="M433,262 L437,267"/>` +
    `</g>`,
});

const watch = makePart({
  id: "watch",
  label: "Watch (jam tangan bentuk tank)",
  group: "upperBody",
  side: "left",
  parent: "leftArm",
  zIndex: 24,
  // Diperkecil 60% dan digeser ke bawah mendekati pergelangan tangan.
  bounds: { x: 625, y: 793, w: 46, h: 52 },
  joint: { x: 648, y: 820 },
  body:
    `<g transform="translate(648 820) scale(0.6) translate(-648 -801)">` +
    `<path d="M614,768 Q648,761 682,768 L682,830 Q648,837 614,830 Z" fill="${C.watchStrap}"/>` +
    `<path d="M614,822 Q648,829 682,822 L682,830 Q648,837 614,830 Z" fill="${C.watchStrapShade}"/>` +
    `<path d="M620,773 Q648,767 676,773" fill="none" stroke="${C.watchStrapShade}" stroke-width="1.2" stroke-dasharray="2 3" opacity="0.8"/>` +
    `<path d="M620,826 Q648,832 676,826" fill="none" stroke="${C.watchStrapShade}" stroke-width="1.2" stroke-dasharray="2 3" opacity="0.8"/>` +
    `<rect x="622" y="769" width="7" height="60" rx="1.5" fill="${C.watchCase}"/>` +
    `<rect x="665" y="769" width="7" height="60" rx="1.5" fill="${C.watchCase}"/>` +
    `<rect x="626" y="772" width="44" height="52" rx="2" fill="${C.watchCase}"/>` +
    `<rect x="630" y="776" width="36" height="44" rx="1.5" fill="${C.watchDial}"/>` +
    `<rect x="631.5" y="777.5" width="33" height="41" rx="1" fill="none" stroke="${C.watchCaseShade}" stroke-width="1" opacity="0.55"/>` +
    `<g stroke="${C.watchMark}" stroke-width="2" stroke-linecap="round">` +
    `<path d="M648,781 L648,785"/><path d="M648,810 L648,814"/>` +
    `<path d="M636,798 L640,798"/><path d="M656,798 L660,798"/>` +
    `</g>` +
    `<path d="M648,798 L642,790" stroke="${C.watchMark}" stroke-width="2.6" stroke-linecap="round"/>` +
    `<path d="M648,798 L656,786" stroke="${C.watchMark}" stroke-width="2.2" stroke-linecap="round"/>` +
    `<circle cx="648" cy="798" r="2" fill="${C.watchMark}"/>` +
    `<rect x="672" y="790" width="6" height="13" rx="2" fill="${C.watchCase}"/>` +
    `<circle cx="675" cy="793" r="2" fill="${C.watchJewel}"/>` +
    `<path d="M632,779 L664,779" stroke="#e6cb91" stroke-width="1.2" opacity="0.7"/>` +
    `</g>`,
});

const mustache = makePart({
  id: "mustache",
  label: "Mustache (kumis)",
  group: "head",
  side: "center",
  parent: "head",
  zIndex: 33,
  bounds: { x: 431, y: 309, w: 76, h: 21 },
  joint: { x: 469, y: 321 },
  body: `<path d="M436,320 C442,313 456,311 469,318 C482,311 496,313 502,320 C505,324 502,328 497,327 C488,325 479,323 473,325 L469,327 L465,325 C459,323 450,325 441,327 C436,328 433,324 436,320 Z" fill="${C.brow}"/>`,
});

const hairCurly = makePart({
  id: "hairCurly",
  label: "Hair Curly (rambut ikal)",
  group: "head",
  side: "center",
  parent: "head",
  zIndex: 34,
  bounds: { x: 344, y: 86, w: 254, h: 188 },
  joint: { x: 469, y: 215 },
  body:
    `<g fill="${C.hair}" stroke="${C.hair}" stroke-width="2" stroke-linejoin="round">` +
    `<circle cx="452" cy="128" r="29"/><circle cx="484" cy="122" r="30"/>` +
    `<circle cx="516" cy="128" r="29"/><circle cx="424" cy="144" r="27"/>` +
    `<circle cx="544" cy="146" r="26"/><circle cx="398" cy="164" r="25"/>` +
    `<circle cx="564" cy="168" r="24"/><circle cx="378" cy="194" r="24"/>` +
    `<circle cx="572" cy="198" r="21"/><circle cx="370" cy="222" r="21"/>` +
    `<circle cx="574" cy="224" r="18"/><circle cx="380" cy="248" r="14"/>` +
    `<circle cx="564" cy="250" r="14"/>` +
    `<path d="M374,266 L373,238 C368,222 373,202 386,187 C404,162 436,148 469,148 C502,148 534,162 552,187 C565,202 570,222 565,238 L564,266 L544,268 L543,226 C532,202 504,190 470,190 C436,192 406,202 394,222 L392,268 Z"/>` +
    `</g>` +
    `<g fill="none" stroke="${C.hairSheen}" stroke-width="4" stroke-linecap="round" opacity="0.5">` +
    `<path d="M414,170 C402,168 398,154 410,148"/>` +
    `<path d="M450,138 C438,136 434,122 446,116"/>` +
    `<path d="M492,132 C480,130 476,116 488,110"/>` +
    `<path d="M534,152 C522,150 518,136 530,130"/>` +
    `<path d="M560,190 C548,188 544,174 556,168"/>` +
    `<path d="M390,204 C380,202 376,190 386,184"/>` +
    `</g>`,
});

const hairSlick = makePart({
  id: "hairSlick",
  label: "Hair Slick (rambut klimis)",
  group: "head",
  side: "center",
  parent: "head",
  zIndex: 34,
  bounds: { x: 376, y: 130, w: 184, h: 126 },
  joint: { x: 469, y: 215 },
  body:
    `<path d="M390,252 C382,238 380,220 386,204 C388,180 400,160 420,150 C438,138 462,134 478,142 C496,134 516,140 528,154 C546,162 556,180 554,198 C556,216 552,234 545,246 C538,238 532,230 529,220 C513,198 494,188 470,190 C445,193 417,201 396,216 C398,228 395,241 390,252 Z" fill="${C.hair}"/>` +
    `<path d="M508,144 C502,164 495,181 486,194" fill="none" stroke="${C.hairSheen}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>` +
    `<g fill="none" stroke="${C.hairSheen}" stroke-width="3" stroke-linecap="round" opacity="0.5">` +
    `<path d="M440,190 C458,176 478,164 502,156"/>` +
    `<path d="M462,186 C482,176 502,168 522,161"/>` +
    `<path d="M484,184 C502,178 518,173 534,168"/>` +
    `</g>` +
    `<path d="M436,166 C458,152 482,146 508,152" fill="none" stroke="${C.hairSheen}" stroke-width="5" stroke-linecap="round" opacity="0.45"/>`,
});

const hairSnapback = makePart({
  id: "hairSnapback",
  label: "Hair + Snapback cap",
  group: "head",
  side: "center",
  parent: "head",
  zIndex: 36,
  bounds: { x: 346, y: 112, w: 242, h: 132 },
  joint: { x: 469, y: 215 },
  body:
    `<path d="M388,206 C398,188 428,176 469,176 C510,176 540,188 550,206 L548,232 C545,244 541,252 535,258 L524,258 L527,224 L411,224 L414,258 L403,258 C397,252 393,244 390,232 Z" fill="${C.hair}"/>` +
    `<path d="M366,204 C368,174 384,146 408,133 C436,118 502,118 530,133 C554,146 570,174 572,204 Z" fill="${C.cap}"/>` +
    `<g fill="none" stroke="${C.capShade}" stroke-width="2.5" opacity="0.9">` +
    `<path d="M428,122 C424,152 428,180 436,202"/>` +
    `<path d="M510,122 C514,152 510,180 502,202"/>` +
    `</g>` +
    `<circle cx="469" cy="123" r="5" fill="${C.capButton}"/>` +
    `<circle cx="397" cy="164" r="3" fill="${C.capShade}"/>` +
    `<circle cx="541" cy="164" r="3" fill="${C.capShade}"/>` +
    `<path d="M469,152 L473,161 L483,162 L475,169 L478,179 L469,174 L460,179 L463,169 L455,162 L465,161 Z" fill="${C.capBrim}"/>` +
    `<path d="M388,200 L550,200 C568,202 584,210 584,216 C562,224 376,224 354,216 C354,210 370,202 388,200 Z" fill="${C.capBrim}"/>` +
    `<path d="M356,216 C376,223 562,223 582,216" fill="none" stroke="${C.capBrimShade}" stroke-width="3" opacity="0.9"/>` +
    `<path d="M372,206 C410,201 528,201 566,206" fill="none" stroke="#c8dcf2" stroke-width="2" opacity="0.85"/>` +
    `<path d="M394,223 C430,230 508,230 544,223 L545,230 C508,236 430,236 394,230 Z" fill="${C.capShade}" opacity="0.14"/>`,
});

/* ------------------------------------------------------------------ */
/* OPSI PAKAIAN                                                        */
/* ------------------------------------------------------------------ */

/* ---------- KAOS ---------- */
const upperBodyTshirt = makePart({
  id: "upperBodyTshirt",
  label: "Kaos (badan)",
  group: "upperBody",
  side: "center",
  parent: "lowerBody",
  zIndex: 23,
  bounds: { x: 338, y: 408, w: 264, h: 531 },
  joint: { x: 469, y: 925 },
  body:
    `<path d="${TORSO_CREW}" fill="${C.tshirt}"/>` +
    `<path d="M340,545 L340,925 C360,929 380,932 400,934 L392,780 L366,560 Z" fill="${C.tshirtShade}" opacity="0.4"/>` +
    `<path d="M600,545 L600,925 C580,929 560,932 540,934 L548,780 L574,560 Z" fill="${C.tshirtShade}" opacity="0.28"/>` +
    `<path d="M406,878 C430,888 508,888 532,878" fill="none" stroke="${C.tshirtShade}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>` +
    `<path d="M342,919 C383,927 428,931 469,931 C511,931 557,927 598,919" fill="none" stroke="${C.tshirtSeam}" stroke-width="2.5" opacity="0.9"/>` +
    `<path d="M360,582 L402,582 L402,638 Q402,648 392,648 L370,648 Q360,648 360,638 Z" fill="${C.tshirtShade}" opacity="0.85"/>` +
    `<path d="M360,582 L402,582 L402,590 L360,590 Z" fill="${C.tshirtRib}"/>` +
    `<path d="M360,582 L402,582 L402,638 Q402,648 392,648 L370,648 Q360,648 360,638 Z" fill="none" stroke="${C.tshirtSeam}" stroke-width="1.6" opacity="0.7"/>` +
    `<path d="${CREW_BAND}" fill="${C.tshirtRib}"/>` +
    `<path d="M434,419 C446,434 457,438 469,438 C481,438 492,434 504,419" fill="none" stroke="${C.tshirtShade}" stroke-width="1.5" opacity="0.8"/>`,
});

const leftArmTshirt = makePart({
  id: "leftArmTshirt",
  label: "Kaos (lengan kiri, pendek)",
  group: "upperBody",
  side: "left",
  parent: "upperBodyTshirt",
  zIndex: 22,
  bounds: { x: 539, y: 422, w: 165, h: 588 },
  joint: { x: 604, y: 470 },
  body:
    HAND_LEFT +
    `<path d="M598,598 L682,598 C690,640 692,695 690,740 L688,750 L613,750 L613,740 C610,695 606,640 598,598 Z" fill="${C.skin}"/>` +
    `<path d="M598,598 C606,640 610,695 613,740 L613,750 L634,750 C628,700 624,646 620,598 Z" fill="${C.skinShade}" opacity="0.3"/>` +
    `<path d="M605,662 Q630,654 656,660" fill="none" stroke="${C.skinShade}" stroke-width="3" opacity="0.55" stroke-linecap="round"/>` +
    `<path d="M545,424 L610,445 C650,460 672,480 678,520 L683,600 L596,600 L596,545 Z" fill="${C.tshirt}"/>` +
    `<path d="M613,545 L600,600 L596,600 L596,545 Z" fill="${C.tshirtShade}" opacity="0.75"/>` +
    `<path d="M610,445 C650,460 672,480 678,520 L681,560" fill="none" stroke="${C.tshirtShade}" stroke-width="2" opacity="0.55"/>` +
    `<rect x="596" y="588" width="87" height="12" fill="${C.tshirtShade}" opacity="0.55"/>` +
    `<path d="M596,590 L683,590" fill="none" stroke="${C.tshirtSeam}" stroke-width="1.8" opacity="0.85"/>` +
    `<path d="M600,602 L682,602 L680,613 Q640,621 602,613 Z" fill="${C.skinShade}" opacity="0.3"/>`,
});

const rightArmTshirt = makePart({
  id: "rightArmTshirt",
  label: "Kaos (lengan kanan, pendek)",
  group: "upperBody",
  side: "right",
  parent: "upperBodyTshirt",
  zIndex: 22,
  bounds: { x: 235, y: 422, w: 161, h: 588 },
  joint: { x: 335, y: 470 },
  body:
    HAND_RIGHT +
    `<path d="M342,598 L258,598 C250,640 248,695 250,740 L252,750 L327,750 L327,740 C330,695 334,640 342,598 Z" fill="${C.skin}"/>` +
    `<path d="M342,598 C334,640 330,695 327,740 L327,750 L306,750 C312,700 316,646 320,598 Z" fill="${C.skinShade}" opacity="0.3"/>` +
    `<path d="M330,662 Q306,654 280,660" fill="none" stroke="${C.skinShade}" stroke-width="3" opacity="0.55" stroke-linecap="round"/>` +
    `<path d="M394,424 L335,446 C290,463 266,488 262,530 L248,600 L341,600 L344,545 Z" fill="${C.tshirt}"/>` +
    `<path d="M327,545 L340,600 L344,600 L344,545 Z" fill="${C.tshirtShade}" opacity="0.75"/>` +
    `<path d="M335,446 C290,463 266,488 262,530 L257,560" fill="none" stroke="${C.tshirtShade}" stroke-width="2" opacity="0.55"/>` +
    `<rect x="248" y="588" width="93" height="12" fill="${C.tshirtShade}" opacity="0.55"/>` +
    `<path d="M248,590 L341,590" fill="none" stroke="${C.tshirtSeam}" stroke-width="1.8" opacity="0.85"/>` +
    `<path d="M257,602 L340,602 L338,613 Q296,621 259,613 Z" fill="${C.skinShade}" opacity="0.3"/>`,
});

/* ---------- JAKET BOMBER ---------- */
const upperBodyBomber = makePart({
  id: "upperBodyBomber",
  label: "Jaket bomber (badan)",
  group: "upperBody",
  side: "center",
  parent: "lowerBody",
  zIndex: 23,
  bounds: { x: 338, y: 408, w: 264, h: 531 },
  joint: { x: 469, y: 925 },
  body:
    `<path d="${TORSO_CREW}" fill="${C.bomber}"/>` +
    `<path d="M340,545 L340,925 C362,929 384,932 406,934 L398,760 L366,556 Z" fill="${C.bomberShade}" opacity="0.5"/>` +
    `<path d="M600,545 L600,925 C578,929 556,932 534,934 L542,760 L574,556 Z" fill="${C.bomberLight}" opacity="0.22"/>` +
    `<path d="M412,600 C436,588 502,588 526,600 L526,740 C500,752 438,752 412,740 Z" fill="${C.bomberLight}" opacity="0.12"/>` +
    `<path d="${BOMBER_HEM}" fill="${C.bomberRib}"/>` +
    `<clipPath id="bomberHemClip"><path d="${BOMBER_HEM}"/></clipPath>` +
    `<g clip-path="url(#bomberHemClip)" stroke="${C.bomberShade}" stroke-width="2" opacity="0.8">` +
    Array.from({ length: 17 }, (_, i) => `<path d="M${352 + i * 14},896 L${352 + i * 14},940"/>`).join("") +
    `</g>` +
    `<path d="M341,900 C382,909 428,913 469,913 C510,913 556,909 597,900" fill="none" stroke="${C.bomberShade}" stroke-width="2.5" opacity="0.9"/>` +
    `<path d="M352,792 Q384,786 410,802 L400,822 Q376,810 350,816 Z" fill="${C.bomberPocket}"/>` +
    `<path d="M354,796 Q382,792 405,806" fill="none" stroke="${C.bomberZip}" stroke-width="2.5" stroke-dasharray="3 3" opacity="0.9"/>` +
    `<path d="M586,792 Q554,786 528,802 L538,822 Q562,810 588,816 Z" fill="${C.bomberPocket}"/>` +
    `<path d="M584,796 Q556,792 533,806" fill="none" stroke="${C.bomberZip}" stroke-width="2.5" stroke-dasharray="3 3" opacity="0.9"/>` +
    `<path d="${CREW_BAND}" fill="${C.bomberRib}"/>` +
    `<path d="M434,419 C446,434 457,438 469,438 C481,438 492,434 504,419" fill="none" stroke="${C.bomberShade}" stroke-width="2" opacity="0.9"/>` +
    `<path d="M469,436 L469,925" stroke="${C.bomberShade}" stroke-width="5"/>` +
    `<path d="M469,442 L469,925" stroke="${C.bomberZip}" stroke-width="2" stroke-dasharray="3 3.5" opacity="0.9"/>` +
    `<rect x="474" y="440" width="9" height="22" rx="3.5" fill="${C.bomberZip}"/>` +
    `<rect x="477" y="445" width="3" height="8" rx="1.5" fill="${C.bomberShade}"/>` +
    `<path d="M406,690 C402,740 404,800 408,850" fill="none" stroke="${C.bomberShade}" stroke-width="2" opacity="0.35"/>`,
});

const leftArmBomber = makePart({
  id: "leftArmBomber",
  label: "Jaket bomber (lengan kiri)",
  group: "upperBody",
  side: "left",
  parent: "upperBodyBomber",
  zIndex: 22,
  bounds: { x: 539, y: 422, w: 165, h: 588 },
  joint: { x: 604, y: 470 },
  body:
    HAND_LEFT +
    `<path d="${ARM_LEFT}" fill="${C.bomber}"/>` +
    `<path d="M613,545 L601,600 L601,705 L613,705 Z" fill="${C.bomberShade}"/>` +
    `<path d="M610,445 C650,460 672,480 678,520 L682,560" fill="none" stroke="${C.bomberShade}" stroke-width="2" opacity="0.5"/>` +
    `<path d="M636,638 Q656,630 674,638" fill="none" stroke="${C.bomberShade}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>` +
    `<path d="M652,566 L678,562 L681,618 L655,622 Z" fill="${C.bomberPocket}"/>` +
    `<path d="M654,570 L676,567 L678,614" fill="none" stroke="${C.bomberZip}" stroke-width="2" stroke-dasharray="2.5 3" opacity="0.9"/>` +
    `<rect x="674" y="610" width="6" height="12" rx="2" fill="${C.bomberZip}"/>` +
    `<rect x="600" y="705" width="102" height="54" rx="13" fill="${C.bomberRib}"/>` +
    `<g stroke="${C.bomberShade}" stroke-width="2" opacity="0.8">` +
    Array.from({ length: 7 }, (_, i) => `<path d="M${618 + i * 12},711 L${618 + i * 12},753"/>`).join("") +
    `</g>` +
    `<path d="M603,712 C636,707 672,707 699,712" fill="none" stroke="${C.bomberShade}" stroke-width="2" opacity="0.7"/>`,
});

const rightArmBomber = makePart({
  id: "rightArmBomber",
  label: "Jaket bomber (lengan kanan)",
  group: "upperBody",
  side: "right",
  parent: "upperBodyBomber",
  zIndex: 22,
  bounds: { x: 235, y: 422, w: 161, h: 588 },
  joint: { x: 335, y: 470 },
  body:
    HAND_RIGHT +
    `<path d="${ARM_RIGHT}" fill="${C.bomber}"/>` +
    `<path d="M327,545 L339,600 L339,705 L327,705 Z" fill="${C.bomberShade}"/>` +
    `<path d="M335,446 C290,463 266,488 262,530 L256,560" fill="none" stroke="${C.bomberShade}" stroke-width="2" opacity="0.5"/>` +
    `<path d="M302,638 Q282,630 264,638" fill="none" stroke="${C.bomberShade}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>` +
    `<rect x="237" y="705" width="103" height="54" rx="13" fill="${C.bomberRib}"/>` +
    `<g stroke="${C.bomberShade}" stroke-width="2" opacity="0.8">` +
    Array.from({ length: 7 }, (_, i) => `<path d="M${256 + i * 12},711 L${256 + i * 12},753"/>`).join("") +
    `</g>` +
    `<path d="M240,712 C267,707 303,707 336,712" fill="none" stroke="${C.bomberShade}" stroke-width="2" opacity="0.7"/>`,
});

/* ---------- HOODIE ---------- */
const hoodieHood = makePart({
  id: "hoodieHood",
  label: "Hoodie (hood di belakang leher)",
  group: "upperBody",
  side: "center",
  parent: "upperBodyHoodie",
  zIndex: 19,
  bounds: { x: 374, y: 360, w: 190, h: 148 },
  joint: { x: 469, y: 430 },
  body:
    `<path d="M398,505 C384,468 376,432 394,404 C410,378 438,364 469,364 C500,364 528,378 544,404 C562,432 554,468 540,505 Z" fill="${C.hoodieShade}"/>` +
    `<path d="M410,500 C398,466 394,436 408,414 C422,392 446,382 469,382 C492,382 516,392 530,414 C544,436 540,466 528,500 Z" fill="${C.hoodieDark}" opacity="0.5"/>` +
    `<path d="M404,455 C396,426 404,398 424,380" fill="none" stroke="${C.hoodieDark}" stroke-width="3" opacity="0.55" stroke-linecap="round"/>` +
    `<path d="M534,455 C542,426 534,398 514,380" fill="none" stroke="${C.hoodieDark}" stroke-width="3" opacity="0.55" stroke-linecap="round"/>` +
    `<path d="M424,498 C446,508 492,508 514,498" fill="none" stroke="${C.hoodieDark}" stroke-width="3" opacity="0.4"/>`,
});

const upperBodyHoodie = makePart({
  id: "upperBodyHoodie",
  label: "Hoodie (badan)",
  group: "upperBody",
  side: "center",
  parent: "lowerBody",
  zIndex: 23,
  bounds: { x: 338, y: 408, w: 264, h: 531 },
  joint: { x: 469, y: 925 },
  body:
    `<path d="${TORSO_CREW}" fill="${C.hoodie}"/>` +
    `<path d="M340,545 L340,925 C362,929 384,932 406,934 L398,760 L366,556 Z" fill="${C.hoodieShade}" opacity="0.5"/>` +
    `<path d="M600,545 L600,925 C578,929 556,932 534,934 L542,760 L574,556 Z" fill="${C.hoodieLight}" opacity="0.2"/>` +
    `<path d="M390,762 L548,762 L536,884 Q469,898 402,884 Z" fill="${C.hoodieShade}" opacity="0.65"/>` +
    `<path d="M390,762 L548,762" fill="none" stroke="${C.hoodieDark}" stroke-width="3" opacity="0.6"/>` +
    `<path d="M392,766 L424,820" fill="none" stroke="${C.hoodieDark}" stroke-width="6" stroke-linecap="round" opacity="0.85"/>` +
    `<path d="M546,766 L514,820" fill="none" stroke="${C.hoodieDark}" stroke-width="6" stroke-linecap="round" opacity="0.85"/>` +
    `<path d="M398,878 Q469,890 540,878" fill="none" stroke="${C.hoodieDark}" stroke-width="2" stroke-dasharray="5 5" opacity="0.45"/>` +
    `<path d="${HOODIE_HEM}" fill="${C.hoodieShade}"/>` +
    `<clipPath id="hoodieHemClip"><path d="${HOODIE_HEM}"/></clipPath>` +
    `<g clip-path="url(#hoodieHemClip)" stroke="${C.hoodieDark}" stroke-width="2" opacity="0.7">` +
    Array.from({ length: 17 }, (_, i) => `<path d="M${352 + i * 14},894 L${352 + i * 14},940"/>`).join("") +
    `</g>` +
    `<path d="M341,898 C382,907 428,911 469,911 C510,911 556,907 597,898" fill="none" stroke="${C.hoodieDark}" stroke-width="2.5" opacity="0.85"/>` +
    `<path d="M420,410 C432,436 448,444 469,444 C490,444 506,436 518,410 L524,420 C508,454 490,462 469,462 C448,462 432,454 416,420 Z" fill="${C.hoodieDark}"/>` +
    `<path d="M424,416 C436,440 451,448 469,448 C487,448 502,440 514,416" fill="none" stroke="${C.hoodieShade}" stroke-width="2" opacity="0.75"/>` +
    `<path d="M450,442 C446,494 458,542 452,598" fill="none" stroke="${C.hoodieCord}" stroke-width="5" stroke-linecap="round"/>` +
    `<rect x="448" y="598" width="8" height="15" rx="3" fill="${C.hoodieMetal}"/>` +
    `<path d="M488,442 C492,494 480,542 486,598" fill="none" stroke="${C.hoodieCord}" stroke-width="5" stroke-linecap="round"/>` +
    `<rect x="482" y="598" width="8" height="15" rx="3" fill="${C.hoodieMetal}"/>` +
    `<path d="M406,690 C402,740 404,800 408,850" fill="none" stroke="${C.hoodieShade}" stroke-width="2.5" opacity="0.5"/>` +
    `<path d="M532,690 C536,740 534,800 530,850" fill="none" stroke="${C.hoodieShade}" stroke-width="2.5" opacity="0.5"/>`,
});

const leftArmHoodie = makePart({
  id: "leftArmHoodie",
  label: "Hoodie (lengan kiri)",
  group: "upperBody",
  side: "left",
  parent: "upperBodyHoodie",
  zIndex: 22,
  bounds: { x: 539, y: 422, w: 165, h: 588 },
  joint: { x: 604, y: 470 },
  body:
    HAND_LEFT +
    `<path d="${ARM_LEFT}" fill="${C.hoodie}"/>` +
    `<path d="M613,545 L601,600 L601,705 L613,705 Z" fill="${C.hoodieShade}"/>` +
    `<path d="M610,445 C650,460 672,480 678,520 L682,560" fill="none" stroke="${C.hoodieShade}" stroke-width="2" opacity="0.55"/>` +
    `<path d="M636,638 Q656,630 674,638" fill="none" stroke="${C.hoodieShade}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>` +
    `<rect x="600" y="705" width="102" height="54" rx="13" fill="${C.hoodieShade}"/>` +
    `<g stroke="${C.hoodieDark}" stroke-width="2" opacity="0.75">` +
    Array.from({ length: 7 }, (_, i) => `<path d="M${618 + i * 12},711 L${618 + i * 12},753"/>`).join("") +
    `</g>` +
    `<path d="M603,712 C636,707 672,707 699,712" fill="none" stroke="${C.hoodieDark}" stroke-width="2" opacity="0.65"/>`,
});

const rightArmHoodie = makePart({
  id: "rightArmHoodie",
  label: "Hoodie (lengan kanan)",
  group: "upperBody",
  side: "right",
  parent: "upperBodyHoodie",
  zIndex: 22,
  bounds: { x: 235, y: 422, w: 161, h: 588 },
  joint: { x: 335, y: 470 },
  body:
    HAND_RIGHT +
    `<path d="${ARM_RIGHT}" fill="${C.hoodie}"/>` +
    `<path d="M327,545 L339,600 L339,705 L327,705 Z" fill="${C.hoodieShade}"/>` +
    `<path d="M335,446 C290,463 266,488 262,530 L256,560" fill="none" stroke="${C.hoodieShade}" stroke-width="2" opacity="0.55"/>` +
    `<path d="M302,638 Q282,630 264,638" fill="none" stroke="${C.hoodieShade}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>` +
    `<rect x="237" y="705" width="103" height="54" rx="13" fill="${C.hoodieShade}"/>` +
    `<g stroke="${C.hoodieDark}" stroke-width="2" opacity="0.75">` +
    Array.from({ length: 7 }, (_, i) => `<path d="M${256 + i * 12},711 L${256 + i * 12},753"/>`).join("") +
    `</g>` +
    `<path d="M240,712 C267,707 303,707 336,712" fill="none" stroke="${C.hoodieDark}" stroke-width="2" opacity="0.65"/>`,
});

/* ---------- JAS RAPIH ---------- */
const upperBodySuit = makePart({
  id: "upperBodySuit",
  label: "Jas rapih (badan)",
  group: "upperBody",
  side: "center",
  parent: "lowerBody",
  zIndex: 23,
  bounds: { x: 338, y: 396, w: 264, h: 543 },
  joint: { x: 469, y: 925 },
  body:
    `<path d="${TORSO_VNECK}" fill="${C.suit}"/>` +
    `<path d="M340,545 L340,925 C362,929 384,932 406,934 L398,740 L366,556 Z" fill="${C.suitShade}" opacity="0.6"/>` +
    `<path d="M600,545 L600,925 C578,929 556,932 534,934 L542,740 L574,556 Z" fill="${C.suitLight}" opacity="0.22"/>` +
    `<path d="M422,410 C434,444 450,454 469,454 C488,454 504,444 516,410 L508,530 L469,704 L430,530 Z" fill="${C.dressShirt}"/>` +
    `<path d="M430,530 L469,704 L469,640 L446,530 Z" fill="${C.dressShirtShade}" opacity="0.45"/>` +
    `<clipPath id="suitTieClip"><path d="M459,478 L479,478 L488,640 L469,690 L450,640 Z"/></clipPath>` +
    `<path d="M459,478 L479,478 L488,640 L469,690 L450,640 Z" fill="${C.tie}"/>` +
    `<g clip-path="url(#suitTieClip)" stroke="${C.tieLight}" stroke-width="5" opacity="0.85">` +
    `<path d="M440,520 L498,508"/><path d="M444,556 L502,544"/><path d="M448,592 L506,580"/>` +
    `<path d="M452,628 L510,616"/><path d="M456,664 L514,652"/>` +
    `</g>` +
    `<path d="M459,478 L470,478 L470,688 L469,690 L450,640 Z" fill="${C.tieKnot}" opacity="0.35"/>` +
    `<path d="M410,404 L436,398 L460,444 L458,462 L434,446 L404,422 Z" fill="${C.dressShirt}"/>` +
    `<path d="M528,404 L502,398 L478,444 L480,462 L504,446 L534,422 Z" fill="${C.dressShirt}"/>` +
    `<path d="M434,446 L458,462 L458,452 L440,438 Z" fill="${C.dressShirtShade}" opacity="0.8"/>` +
    `<path d="M504,446 L480,462 L480,452 L498,438 Z" fill="${C.dressShirtShade}" opacity="0.8"/>` +
    `<path d="M456,452 L482,452 L477,482 L461,482 Z" fill="${C.tieKnot}"/>` +
    `<path d="M464,455 L464,479" fill="none" stroke="${C.tieLight}" stroke-width="2" opacity="0.5"/>` +
    `<path d="M394,428 L424,442 L448,566 L467,704 L442,708 L420,566 L380,520 Z" fill="${C.suitLight}"/>` +
    `<path d="M394,428 L380,520 L420,566 L442,708" fill="none" stroke="${C.suitShade}" stroke-width="2.5" opacity="0.8"/>` +
    `<path d="M424,442 L448,566 L467,704" fill="none" stroke="${C.suitShade}" stroke-width="2" opacity="0.6"/>` +
    `<path d="M544,428 L514,442 L490,566 L471,704 L496,708 L518,566 L558,520 Z" fill="${C.suitLight}"/>` +
    `<path d="M544,428 L558,520 L518,566 L496,708" fill="none" stroke="${C.suitShade}" stroke-width="2.5" opacity="0.8"/>` +
    `<path d="M514,442 L490,566 L471,704" fill="none" stroke="${C.suitShade}" stroke-width="2" opacity="0.6"/>` +
    `<path d="M477,706 L477,925" stroke="${C.suitShade}" stroke-width="2.2" opacity="0.55"/>` +
    `<circle cx="478" cy="748" r="6" fill="${C.suitButton}"/>` +
    `<circle cx="478" cy="748" r="3" fill="${C.suitShade}"/>` +
    `<circle cx="478" cy="800" r="6" fill="${C.suitButton}"/>` +
    `<circle cx="478" cy="800" r="3" fill="${C.suitShade}"/>` +
    `<path d="M556,622 L562,602 L570,618 L578,604 L586,622 Z" fill="${C.dressShirt}"/>` +
    `<path d="M552,620 L592,614 L593,626 L553,632 Z" fill="${C.suitShade}"/>` +
    `<path d="M554,620 L591,615" fill="none" stroke="${C.suitLight}" stroke-width="1.5" opacity="0.7"/>` +
    `<path d="M354,782 L408,776 L412,794 L358,800 Z" fill="${C.suitShade}"/>` +
    `<path d="M356,783 L407,778" fill="none" stroke="${C.suitLight}" stroke-width="1.5" opacity="0.7"/>` +
    `<path d="M530,776 L584,782 L580,800 L526,794 Z" fill="${C.suitShade}"/>` +
    `<path d="M531,778 L583,783" fill="none" stroke="${C.suitLight}" stroke-width="1.5" opacity="0.7"/>`,
});

const leftArmSuit = makePart({
  id: "leftArmSuit",
  label: "Jas rapih (lengan kiri + manset putih)",
  group: "upperBody",
  side: "left",
  parent: "upperBodySuit",
  zIndex: 22,
  bounds: { x: 539, y: 422, w: 165, h: 588 },
  joint: { x: 604, y: 470 },
  body:
    HAND_LEFT +
    `<path d="${ARM_LEFT}" fill="${C.suit}"/>` +
    `<path d="M613,545 L601,600 L601,705 L613,705 Z" fill="${C.suitShade}"/>` +
    `<path d="M610,445 C650,460 672,480 678,520 L682,560" fill="none" stroke="${C.suitShade}" stroke-width="2" opacity="0.5"/>` +
    `<path d="M636,638 Q656,630 674,638" fill="none" stroke="${C.suitShade}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>` +
    `<path d="M604,700 L690,700" fill="none" stroke="${C.suitShade}" stroke-width="3" opacity="0.7"/>` +
    `<rect x="600" y="705" width="102" height="54" rx="13" fill="${C.dressShirt}"/>` +
    `<path d="M601,714 C632,708 674,708 701,714" fill="none" stroke="${C.dressShirtShade}" stroke-width="2" opacity="0.8"/>` +
    `<path d="M606,746 L696,746" fill="none" stroke="${C.dressShirtShade}" stroke-width="1.5" opacity="0.55"/>` +
    `<circle cx="684" cy="731" r="6.5" fill="${C.watchCase}"/>` +
    `<circle cx="684" cy="731" r="2.8" fill="${C.watchJewel}"/>`,
});

const rightArmSuit = makePart({
  id: "rightArmSuit",
  label: "Jas rapih (lengan kanan + manset putih)",
  group: "upperBody",
  side: "right",
  parent: "upperBodySuit",
  zIndex: 22,
  bounds: { x: 235, y: 422, w: 161, h: 588 },
  joint: { x: 335, y: 470 },
  body:
    HAND_RIGHT +
    `<path d="${ARM_RIGHT}" fill="${C.suit}"/>` +
    `<path d="M327,545 L339,600 L339,705 L327,705 Z" fill="${C.suitShade}"/>` +
    `<path d="M335,446 C290,463 266,488 262,530 L256,560" fill="none" stroke="${C.suitShade}" stroke-width="2" opacity="0.5"/>` +
    `<path d="M302,638 Q282,630 264,638" fill="none" stroke="${C.suitShade}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>` +
    `<path d="M249,700 L340,700" fill="none" stroke="${C.suitShade}" stroke-width="3" opacity="0.7"/>` +
    `<rect x="237" y="705" width="103" height="54" rx="13" fill="${C.dressShirt}"/>` +
    `<path d="M238,714 C266,708 308,708 339,714" fill="none" stroke="${C.dressShirtShade}" stroke-width="2" opacity="0.8"/>` +
    `<path d="M243,746 L333,746" fill="none" stroke="${C.dressShirtShade}" stroke-width="1.5" opacity="0.55"/>` +
    `<circle cx="254" cy="731" r="6.5" fill="${C.watchCase}"/>` +
    `<circle cx="254" cy="731" r="2.8" fill="${C.watchJewel}"/>`,
});

/* ---------- CELANA PENDEK ---------- */
const lowerBodyShorts = makePart({
  id: "lowerBodyShorts",
  label: "Celana pendek (pinggul + paha)",
  group: "lowerBody",
  side: "center",
  parent: null,
  zIndex: 11,
  bounds: { x: 338, y: 913, w: 262, h: 328 },
  joint: { x: 469, y: 950 },
  body:
    `<clipPath id="shortsHemClip"><path d="${SHORTS_OUTLINE}"/></clipPath>` +
    `<path d="${SHORTS_OUTLINE}" fill="${C.pants}"/>` +
    `<path d="M462,1006 Q469,1016 476,1006" fill="none" stroke="${C.shortsSeam}" stroke-width="3" opacity="0.6"/>` +
    `<path d="M350,918 L346,1214" stroke="${C.shortsSeam}" stroke-width="2" opacity="0.5"/>` +
    `<path d="M588,918 L592,1214" stroke="${C.shortsSeam}" stroke-width="2" opacity="0.5"/>` +
    `<path d="M469,916 L469,1008" stroke="${C.shortsSeam}" stroke-width="3" opacity="0.65"/>` +
    `<path d="M469,920 C480,926 486,944 486,968" fill="none" stroke="${C.shortsSeam}" stroke-width="2.5" opacity="0.55"/>` +
    `<path d="M404,950 Q386,972 388,1012" fill="none" stroke="${C.shortsSeam}" stroke-width="2.5" opacity="0.45"/>` +
    `<path d="M534,950 Q552,972 550,1012" fill="none" stroke="${C.shortsSeam}" stroke-width="2.5" opacity="0.45"/>` +
    `<path d="M461,1024 L462,1192" stroke="${C.shortsSeam}" stroke-width="2.5" opacity="0.45"/>` +
    `<path d="M477,1024 L477,1192" stroke="${C.shortsSeam}" stroke-width="2.5" opacity="0.45"/>` +
    `<g clip-path="url(#shortsHemClip)">` +
    `<rect x="334" y="1192" width="270" height="30" fill="${C.shortsHem}"/>` +
    `<path d="M334,1190 L604,1190" stroke="${C.shortsSeam}" stroke-width="2" opacity="0.9"/>` +
    `</g>` +
    `<path d="M341,1218 L459,1218 L457,1232 Q400,1240 343,1232 Z" fill="${C.shortsSeam}" opacity="0.16"/>` +
    `<path d="M479,1218 L597,1218 L595,1232 Q538,1240 481,1232 Z" fill="${C.shortsSeam}" opacity="0.16"/>`,
});

const leftLegShorts = makePart({
  id: "leftLegShorts",
  label: "Left Leg (celana pendek, kulit)",
  group: "lowerBody",
  side: "left",
  parent: "lowerBodyShorts",
  zIndex: 10,
  bounds: { x: 478, y: 958, w: 118, h: 538 },
  joint: { x: 537, y: 968 },
  body:
    `<path d="M480,960 L594,960 L594,1488 Q594,1494 588,1494 L500,1494 Q494,1494 494,1488 L482,985 Z" fill="${C.skin}"/>` +
    `<path d="M482,985 L494,1488 Q494,1494 500,1494 L514,1494 L504,985 Z" fill="${C.skinShade}" opacity="0.32"/>` +
    `<path d="M504,1282 Q530,1272 556,1280" fill="none" stroke="${C.skinShade}" stroke-width="3.5" opacity="0.55" stroke-linecap="round"/>` +
    `<path d="M508,1300 Q528,1294 548,1300" fill="none" stroke="${C.skinShade}" stroke-width="2.5" opacity="0.35" stroke-linecap="round"/>` +
    `<path d="M586,1360 Q592,1410 586,1448" fill="none" stroke="${C.skinShade}" stroke-width="3" opacity="0.25"/>`,
});

const rightLegShorts = makePart({
  id: "rightLegShorts",
  label: "Right Leg (celana pendek, kulit)",
  group: "lowerBody",
  side: "right",
  parent: "lowerBodyShorts",
  zIndex: 10,
  bounds: { x: 342, y: 958, w: 120, h: 538 },
  joint: { x: 401, y: 968 },
  body:
    `<path d="M344,960 L460,960 L458,985 L444,1488 Q443,1494 437,1494 L350,1494 Q344,1494 344,1488 Z" fill="${C.skin}"/>` +
    `<path d="M458,985 L444,1488 Q443,1494 437,1494 L424,1494 L436,985 Z" fill="${C.skinShade}" opacity="0.32"/>` +
    `<path d="M436,1280 Q410,1272 384,1282" fill="none" stroke="${C.skinShade}" stroke-width="3.5" opacity="0.55" stroke-linecap="round"/>` +
    `<path d="M432,1300 Q412,1294 392,1300" fill="none" stroke="${C.skinShade}" stroke-width="2.5" opacity="0.35" stroke-linecap="round"/>` +
    `<path d="M354,1360 Q348,1410 354,1448" fill="none" stroke="${C.skinShade}" stroke-width="3" opacity="0.25"/>`,
});

/* ------------------------------------------------------------------ */
/* Ekspor                                                              */
/* ------------------------------------------------------------------ */

/** Bagian dasar karakter (look default, sudah diurutkan dari belakang ke depan). */
export const AVATAR_PARTS: AvatarPart[] = [
  lowerBody, leftLeg, rightLeg, leftFoot, rightFoot,
  upperBody, neck, collar, leftArm, rightArm,
  head, hair, leftEar, rightEar,
  leftEyebrow, rightEyebrow, leftEye, rightEye,
  nose, mouth,
].sort((a, b) => a.zIndex - b.zIndex);

/** Bagian opsional: varian rambut, aksesori, pakaian, mulut, dan ekspresi. */
export const AVATAR_OPTION_PARTS: AvatarPart[] = [
  hairCurly, hairSlick, hairSnapback, glasses, mustache, watch,
  upperBodyTshirt, leftArmTshirt, rightArmTshirt,
  upperBodyBomber, leftArmBomber, rightArmBomber,
  upperBodyHoodie, hoodieHood, leftArmHoodie, rightArmHoodie,
  upperBodySuit, leftArmSuit, rightArmSuit,
  lowerBodyShorts, leftLegShorts, rightLegShorts,
  mouthA, mouthI, mouthU, mouthE, mouthO, mouthTh, mouthCh, mouthL,
  mouthSilent, mouthGrit, mouthSmirk, mouthWavy, mouthFlat,
  browsHappy, eyesHappy, blushHappy,
  browsAngry, eyesAngry,
  browsHate, eyesHate,
  browsNauseous, eyesNauseous, sickNauseous,
  browsThinking, eyesThinking, thoughtThinking,
  browsShock, eyesShock,
].sort((a, b) => a.zIndex - b.zIndex);

/** Gabungan semua bagian (dasar + opsi). */
export const AVATAR_ALL_PARTS: AvatarPart[] = [...AVATAR_PARTS, ...AVATAR_OPTION_PARTS].sort(
  (a, b) => a.zIndex - b.zIndex
);

export const AVATAR_PARTS_BY_ID = Object.fromEntries(
  AVATAR_ALL_PARTS.map((p) => [p.id, p])
) as Record<PartId, AvatarPart>;

/** Daftar PartId per grup (seluruh rig termasuk varian & aksesori; untuk render pakai resolveAvatarParts). */
export const AVATAR_GROUPS: Record<PartGroup, PartId[]> = {
  head: AVATAR_ALL_PARTS.filter((p) => p.group === "head").map((p) => p.id),
  upperBody: AVATAR_ALL_PARTS.filter((p) => p.group === "upperBody").map((p) => p.id),
  lowerBody: AVATAR_ALL_PARTS.filter((p) => p.group === "lowerBody").map((p) => p.id),
};

/* ------------------------------------------------------------------ */
/* Opsi karakter & pakaian                                             */
/* ------------------------------------------------------------------ */

/** Varian rambut pengganti bagian "hair". */
export const HAIR_STYLE_PART: Record<HairStyle, PartId> = {
  side: "hair",
  curly: "hairCurly",
  slick: "hairSlick",
  snapback: "hairSnapback",
};

/** Set bagian pengganti untuk tiap model atasan. */
export const TOP_STYLE_PARTS: Record<TopStyle, readonly PartId[]> = {
  shirt: ["upperBody", "collar", "leftArm", "rightArm"],
  tshirt: ["upperBodyTshirt", "leftArmTshirt", "rightArmTshirt"],
  bomber: ["upperBodyBomber", "leftArmBomber", "rightArmBomber"],
  hoodie: ["upperBodyHoodie", "hoodieHood", "leftArmHoodie", "rightArmHoodie"],
  suit: ["upperBodySuit", "leftArmSuit", "rightArmSuit"],
};

/** Set bagian pengganti untuk tiap model bawahan. */
export const BOTTOM_STYLE_PARTS: Record<BottomStyle, readonly PartId[]> = {
  pants: ["lowerBody", "leftLeg", "rightLeg"],
  shorts: ["lowerBodyShorts", "leftLegShorts", "rightLegShorts"],
};

/** Bagian pengganti untuk tiap bentuk mulut. */
export const MOUTH_STYLE_PART: Record<MouthShape, PartId> = {
  smile: "mouth",
  a: "mouthA",
  i: "mouthI",
  u: "mouthU",
  e: "mouthE",
  o: "mouthO",
  th: "mouthTh",
  ch: "mouthCh",
  l: "mouthL",
  silent: "mouthSilent",
  grit: "mouthGrit",
  smirk: "mouthSmirk",
  wavy: "mouthWavy",
  flat: "mouthFlat",
};

/** Bagian pengganti untuk tiap ekspresi ("neutral" memakai bagian dasar). */
export const EXPRESSION_STYLE_PARTS: Record<Expression, readonly PartId[]> = {
  neutral: [],
  happy: ["browsHappy", "eyesHappy", "blushHappy"],
  angry: ["browsAngry", "eyesAngry"],
  hate: ["browsHate", "eyesHate"],
  nauseous: ["browsNauseous", "eyesNauseous", "sickNauseous"],
  thinking: ["browsThinking", "eyesThinking", "thoughtThinking"],
  shock: ["browsShock", "eyesShock"],
};

/** Mulut default saat mouth = "auto". */
export const EXPRESSION_DEFAULT_MOUTH: Record<Expression, MouthShape> = {
  neutral: "smile",
  happy: "smile",
  angry: "grit",
  hate: "smirk",
  nauseous: "wavy",
  thinking: "flat",
  shock: "o",
};

export const DEFAULT_AVATAR_OPTIONS: Required<AvatarOptions> = {
  hair: "side",
  glasses: false,
  watch: false,
  mustache: false,
  top: "shirt",
  bottom: "pants",
  expression: "neutral",
  mouth: "auto",
  showMouth: true,
  headDirection: "front",
  pose: "stand",
  frame: null,
  fps: 30,
  blinkSeed: 0,
  idle: true,
  blinkTimeOffset: 0,
  canvasPad: -1,
};

/** Metadata atasan untuk UI picker. */
export const AVATAR_TOPS: ReadonlyArray<{
  id: TopStyle;
  label: string;
  parts: readonly PartId[];
}> = [
  { id: "shirt", label: "Kemeja (default)", parts: TOP_STYLE_PARTS.shirt },
  { id: "tshirt", label: "Kaos", parts: TOP_STYLE_PARTS.tshirt },
  { id: "bomber", label: "Jaket bomber", parts: TOP_STYLE_PARTS.bomber },
  { id: "hoodie", label: "Hoodie", parts: TOP_STYLE_PARTS.hoodie },
  { id: "suit", label: "Jas rapih", parts: TOP_STYLE_PARTS.suit },
];

/** Metadata bawahan untuk UI picker. */
export const AVATAR_BOTTOMS: ReadonlyArray<{
  id: BottomStyle;
  label: string;
  parts: readonly PartId[];
}> = [
  { id: "pants", label: "Celana panjang (default)", parts: BOTTOM_STYLE_PARTS.pants },
  { id: "shorts", label: "Celana pendek", parts: BOTTOM_STYLE_PARTS.shorts },
];

/** Metadata gaya rambut untuk UI picker. */
export const AVATAR_HAIR_STYLES: ReadonlyArray<{ id: HairStyle; label: string; partId: PartId }> = [
  { id: "side", label: "Side part (default)", partId: "hair" },
  { id: "curly", label: "Ikal", partId: "hairCurly" },
  { id: "slick", label: "Klimis", partId: "hairSlick" },
  { id: "snapback", label: "Snapback cap", partId: "hairSnapback" },
];

/** Metadata aksesori untuk UI toggle. */
export const AVATAR_ACCESSORIES: ReadonlyArray<{
  id: "glasses" | "watch" | "mustache";
  label: string;
  partId: PartId;
}> = [
  { id: "glasses", label: "Kacamata bening", partId: "glasses" },
  { id: "watch", label: "Jam tangan tank", partId: "watch" },
  { id: "mustache", label: "Kumis", partId: "mustache" },
];

/** Metadata bentuk mulut untuk UI picker / pipeline lip-sync. */
export const AVATAR_MOUTH_SHAPES: ReadonlyArray<{
  id: MouthShape;
  label: string;
  phoneme?: string;
  partId: PartId;
}> = [
  { id: "smile", label: "Senyum (default)", partId: "mouth" },
  { id: "a", label: "A — mulut terbuka lebar", phoneme: "A", partId: "mouthA" },
  { id: "i", label: "I — mulut melebar", phoneme: "I", partId: "mouthI" },
  { id: "u", label: "U — bibir monyong", phoneme: "U", partId: "mouthU" },
  { id: "e", label: "E — terbuka sedang", phoneme: "E", partId: "mouthE" },
  { id: "o", label: "O — mulut bulat", phoneme: "O", partId: "mouthO" },
  { id: "th", label: "TH — lidah di gigi", phoneme: "TH", partId: "mouthTh" },
  { id: "ch", label: "CH — gigi rapat", phoneme: "CH", partId: "mouthCh" },
  { id: "l", label: "L — lidah naik", phoneme: "L", partId: "mouthL" },
  { id: "silent", label: "Diam", phoneme: "-", partId: "mouthSilent" },
  { id: "grit", label: "Gigi mengatup", partId: "mouthGrit" },
  { id: "smirk", label: "Senyum miring", partId: "mouthSmirk" },
  { id: "wavy", label: "Bergelombang", partId: "mouthWavy" },
  { id: "flat", label: "Datar", partId: "mouthFlat" },
];

/** Metadata ekspresi untuk UI picker animasi. */
export const AVATAR_EXPRESSIONS: ReadonlyArray<{
  id: Expression;
  label: string;
  defaultMouth: MouthShape;
  parts: readonly PartId[];
}> = [
  { id: "neutral", label: "Standar", defaultMouth: "smile", parts: [] },
  { id: "happy", label: "Senang", defaultMouth: "smile", parts: EXPRESSION_STYLE_PARTS.happy },
  { id: "angry", label: "Marah", defaultMouth: "grit", parts: EXPRESSION_STYLE_PARTS.angry },
  { id: "hate", label: "Benci", defaultMouth: "smirk", parts: EXPRESSION_STYLE_PARTS.hate },
  { id: "nauseous", label: "Mual", defaultMouth: "wavy", parts: EXPRESSION_STYLE_PARTS.nauseous },
  { id: "thinking", label: "Thinking", defaultMouth: "flat", parts: EXPRESSION_STYLE_PARTS.thinking },
  { id: "shock", label: "Shock", defaultMouth: "o", parts: EXPRESSION_STYLE_PARTS.shock },
];

/* ------------------------------------------------------------------ */
/* State: arah pandang, pose, dan kategori                            */
/* ------------------------------------------------------------------ */

export interface AvatarHeadDirectionMeta {
  id: HeadDirection;
  label: string;
  category: "dasar" | "arah-pandang";
  description: string;
  /** Bagian tubuh yang bergerak agar state ini terbaca. */
  bodyParts: readonly string[];
}

export interface AvatarPoseMeta {
  id: PoseId;
  label: string;
  category: PoseCategory;
  description: string;
  /** Bagian tubuh yang bergerak agar state ini terbaca. */
  bodyParts: readonly string[];
}

export const AVATAR_STATE_CATEGORIES: ReadonlyArray<{
  id: AvatarStateCategory;
  label: string;
  description: string;
}> = [
  { id: "dasar", label: "Dasar", description: "State netral yang menjadi acuan." },
  { id: "arah-pandang", label: "Arah pandang", description: "Rotasi kepala, tatapan mata, dan alis." },
  { id: "postur", label: "Postur", description: "Perubahan posisi tubuh dan kaki." },
  { id: "gestur", label: "Gestur", description: "Gerakan lengan dan tangan tanpa properti." },
  { id: "interaksi", label: "Interaksi", description: "Gerakan dengan objek: kotak, makanan, telepon." },
];

/** Metadata arah pandang, lengkap dengan kategori & bagian tubuh yang berubah. */
export const AVATAR_HEAD_DIRECTIONS: readonly AvatarHeadDirectionMeta[] = [
  {
    id: "front",
    label: "Depan",
    category: "dasar",
    description: "Tatapan lurus ke kamera. Default, sama dengan rig asli.",
    bodyParts: ["kepala", "mata"],
  },
  {
    id: "lookLeft",
    label: "Melihat ke kiri",
    category: "arah-pandang",
    description: "Bola mata dan alis bergeser tegas ke kiri layar; kepala hanya miring tipis.",
    bodyParts: ["mata", "alis", "kepala"],
  },
  {
    id: "lookRight",
    label: "Melihat ke kanan",
    category: "arah-pandang",
    description: "Bola mata dan alis bergeser tegas ke kanan layar; kepala hanya miring tipis.",
    bodyParts: ["mata", "alis", "kepala"],
  },
  {
    id: "lookUp",
    label: "Melihat ke atas",
    category: "arah-pandang",
    description: "Mata terangkat, alis naik, dagu sedikit terdongak.",
    bodyParts: ["mata", "alis", "dagu"],
  },
  {
    id: "lookDown",
    label: "Melihat ke bawah",
    category: "arah-pandang",
    description: "Mata turun, alis rileks, kepala menunduk tipis.",
    bodyParts: ["mata", "alis", "dagu"],
  },
  {
    id: "faceLeft",
    label: "Hadap kiri sedikit",
    category: "arah-pandang",
    description: "Kepala menghadap kiri layar sedikit; sisi jauh dipersempit dan telinga jauh disembunyikan.",
    bodyParts: ["kepala", "rambut", "telinga", "mata"],
  },
  {
    id: "faceRight",
    label: "Hadap kanan sedikit",
    category: "arah-pandang",
    description: "Kepala menghadap kanan layar sedikit; sisi jauh dipersempit dan telinga jauh disembunyikan.",
    bodyParts: ["kepala", "rambut", "telinga", "mata"],
  },
];

/** Metadata pose tubuh. Kategori & bodyParts dipakai untuk picker/dokumentasi. */
export const AVATAR_POSES: readonly AvatarPoseMeta[] = [
  {
    id: "stand",
    label: "Berdiri",
    category: "dasar",
    description: "Pose asli dengan kedua lengan di sisi tubuh.",
    bodyParts: ["seluruh tubuh"],
  },
  {
    id: "sit",
    label: "Duduk",
    category: "postur",
    description: "Duduk di kursi kayu: pinggul tepat di dudukan, paha memendek (tampak depan), betis & sepatu menapak lantai, kedua tangan di paha.",
    bodyParts: ["pinggul", "paha", "betis", "kaki", "kursi", "kedua tangan"],
  },
  {
    id: "crossLegged",
    label: "Bersila",
    category: "postur",
    description: "Duduk bersila di atas bantal, kedua tangan di lutut.",
    bodyParts: ["pinggul", "paha", "betis", "sepatu", "bantal", "kedua tangan"],
  },
  {
    id: "jump",
    label: "Loncat",
    category: "postur",
    description: "Tubuh terangkat, lutut menekuk rapi (paha melebar, betis terlipat), kedua lengan terangkat membentuk V, bayangan di lantai.",
    bodyParts: ["seluruh tubuh", "kaki", "lengan", "bayangan"],
  },
  {
    id: "pointUp",
    label: "Menunjuk atas",
    category: "gestur",
    description: "Lengan layar kanan mengangkat telunjuk ke atas.",
    bodyParts: ["lengan kanan layar", "telunjuk", "tangan", "bahu"],
  },
  {
    id: "pointMiddle",
    label: "Menunjuk tengah",
    category: "gestur",
    description: "Pose explainer: lengan kanan layar terulur menunjuk ke samping (area konten) dengan telunjuk lurus; kanvas melebar otomatis.",
    bodyParts: ["lengan kanan layar", "telunjuk", "tangan", "bahu"],
  },
  {
    id: "pointLeft",
    label: "Menunjuk kiri",
    category: "gestur",
    description: "Pose explainer cermin: lengan kiri layar terulur menunjuk ke samping kiri dengan telunjuk lurus.",
    bodyParts: ["lengan kiri layar", "telunjuk", "tangan", "bahu"],
  },
  {
    id: "pointDown",
    label: "Menunjuk bawah",
    category: "gestur",
    description: "Lengan layar kanan mengarah ke lantai dengan telunjuk terbuka.",
    bodyParts: ["lengan kanan layar", "telunjuk", "tangan", "bahu"],
  },
  {
    id: "armsCrossed",
    label: "Berpangku tangan",
    category: "gestur",
    description: "Kedua lengan terlipat di depan dada; tangan menggenggam lengan seberang.",
    bodyParts: ["kedua lengan", "tangan", "dada", "bahu"],
  },
  {
    id: "chinRest",
    label: "Menopang dagu",
    category: "gestur",
    description: "Siku lengan kanan layar bertumpu pada tangan kiri layar; tangan kanan menopang dagu.",
    bodyParts: ["lengan kanan layar", "lengan kiri layar", "siku", "tangan", "dagu"],
  },
  {
    id: "scratchHead",
    label: "Menggaruk kepala",
    category: "gestur",
    description: "Satu tangan naik ke pelipis dengan garis goresan kecil.",
    bodyParts: ["lengan kanan layar", "tangan", "pelipis", "rambut", "kepala"],
  },
  {
    id: "handsOnHips",
    label: "Tangan di pinggang",
    category: "gestur",
    description: "Kedua tangan bertumpu di pinggang, siku keluar.",
    bodyParts: ["kedua lengan", "tangan", "pinggang", "siku"],
  },
  {
    id: "pickUp",
    label: "Mengambil",
    category: "interaksi",
    description: "Badan merunduk ke kiri; lengan kiri layar mengangkat kotak dari meja rendah.",
    bodyParts: ["badan", "lengan kiri layar", "tangan", "kotak", "meja"],
  },
  {
    id: "putDown",
    label: "Meletakkan",
    category: "interaksi",
    description: "Badan merunduk ke kiri; tangan menurunkan kotak ke meja rendah.",
    bodyParts: ["badan", "lengan kiri layar", "tangan", "kotak", "meja"],
  },
  {
    id: "eating",
    label: "Makan",
    category: "interaksi",
    description: "Tangan membawa sandwich ke depan mulut.",
    bodyParts: ["lengan kanan layar", "tangan", "mulut", "sandwich"],
  },
  {
    id: "phoneCall",
    label: "Bertelepon",
    category: "interaksi",
    description: "Telepon diangkat ke telinga kanan layar; ibu jari memegang layar, gelombang suara di sisi luar.",
    bodyParts: ["lengan kanan layar", "tangan", "ibu jari", "telinga", "telepon"],
  },
  {
    id: "scrolling",
    label: "Scrolling",
    category: "interaksi",
    description: "Dua tangan memegang telepon di depan dada; ibu jari bergerak.",
    bodyParts: ["kedua lengan", "tangan", "ibu jari", "telepon", "layar"],
  },
];

/** Semua state dalam satu daftar untuk picker Remotion. */
export const AVATAR_STATES: ReadonlyArray<
  | ({ kind: "headDirection" } & AvatarHeadDirectionMeta)
  | ({ kind: "pose" } & AvatarPoseMeta)
> = [
  ...AVATAR_HEAD_DIRECTIONS.map((state) => ({ kind: "headDirection" as const, ...state })),
  ...AVATAR_POSES.map((state) => ({ kind: "pose" as const, ...state })),
];

export const getAvatarHeadDirection = (id: HeadDirection): AvatarHeadDirectionMeta =>
  AVATAR_HEAD_DIRECTIONS.find((state) => state.id === id) ?? AVATAR_HEAD_DIRECTIONS[0];

export const getAvatarPose = (id: PoseId): AvatarPoseMeta =>
  AVATAR_POSES.find((state) => state.id === id) ?? AVATAR_POSES[0];

/** Opsi final setelah default digabung. */
export const resolveAvatarOptions = (options: AvatarOptions = {}): Required<AvatarOptions> => ({
  ...DEFAULT_AVATAR_OPTIONS,
  ...options,
});

/** Bagian yang digambar untuk kombinasi opsi tertentu (urut belakang -> depan). */
export const resolveAvatarParts = (options: AvatarOptions = {}): AvatarPart[] => {
  const opt = resolveAvatarOptions(options);
  const mouthShape = opt.mouth === "auto" ? EXPRESSION_DEFAULT_MOUTH[opt.expression] : opt.mouth;
  const replaced = new Set<PartId>([
    "hair",
    "mouth",
    ...TOP_STYLE_PARTS.shirt,
    ...BOTTOM_STYLE_PARTS.pants,
  ]);
  if (opt.expression !== "neutral") {
    for (const id of ["leftEyebrow", "rightEyebrow", "leftEye", "rightEye"] as const) {
      replaced.add(id);
    }
  }
  const parts = AVATAR_PARTS.filter((p) => !replaced.has(p.id));
  parts.push(AVATAR_PARTS_BY_ID[HAIR_STYLE_PART[opt.hair]]);
  for (const id of TOP_STYLE_PARTS[opt.top]) parts.push(AVATAR_PARTS_BY_ID[id]);
  for (const id of BOTTOM_STYLE_PARTS[opt.bottom]) parts.push(AVATAR_PARTS_BY_ID[id]);
  for (const id of EXPRESSION_STYLE_PARTS[opt.expression]) parts.push(AVATAR_PARTS_BY_ID[id]);
  if (opt.showMouth) parts.push(AVATAR_PARTS_BY_ID[MOUTH_STYLE_PART[mouthShape]]);
  if (opt.glasses) parts.push(AVATAR_PARTS_BY_ID.glasses);
  if (opt.mustache) parts.push(AVATAR_PARTS_BY_ID.mustache);
  if (opt.watch) parts.push(AVATAR_PARTS_BY_ID.watch);
  return parts.sort((a, b) => a.zIndex - b.zIndex);
};

/* ------------------------------------------------------------------ */
/* Direktori karakter (untuk Remotion)                                 */
/* ------------------------------------------------------------------ */

export interface AvatarCharacter {
  /** ID stabil, dipakai sebagai nama folder / komposisi Remotion */
  id: string;
  name: string;
  description: string;
  options: AvatarOptions;
}

/** Contoh direktori karakter. Tambahkan entri baru dengan pola yang sama. */
export const AVATAR_CHARACTERS: readonly AvatarCharacter[] = [
  {
    id: "001",
    name: "Karakter 001",
    description: "Kemeja biru · celana panjang · rambut ikal",
    options: { hair: "curly", top: "shirt", bottom: "pants" },
  },
  {
    id: "002",
    name: "Karakter 002",
    description: "Hoodie · celana pendek · kacamata · rambut klimis",
    options: { hair: "slick", top: "hoodie", bottom: "shorts", glasses: true },
  },
  {
    id: "003",
    name: "Karakter 003",
    description: "Kaos · celana panjang · snapback · kumis · jam",
    options: { hair: "snapback", top: "tshirt", bottom: "pants", mustache: true, watch: true },
  },
  {
    id: "004",
    name: "Karakter 004",
    description: "Bomber · celana pendek · jam",
    options: { top: "bomber", bottom: "shorts", watch: true },
  },
  {
    id: "005",
    name: "Karakter 005",
    description: "Jas rapih · celana panjang · rambut klimis · jam",
    options: { hair: "slick", top: "suit", bottom: "pants", watch: true },
  },
  {
    id: "006",
    name: "Karakter 006",
    description: "Hoodie · celana panjang · kacamata · rambut ikal",
    options: { hair: "curly", top: "hoodie", bottom: "pants", glasses: true },
  },
];

/** Cari definisi karakter berdasarkan ID (mis. "001"). */
export const getAvatarCharacter = (id: string): AvatarCharacter | undefined =>
  AVATAR_CHARACTERS.find((c) => c.id === id);

/** Bagian siap gambar untuk karakter tertentu. */
export const resolveAvatarCharacterParts = (id: string): AvatarPart[] => {
  const character = getAvatarCharacter(id);
  if (!character) throw new Error(`Karakter "${id}" tidak ditemukan di AVATAR_CHARACTERS.`);
  return resolveAvatarParts(character.options);
};

/* ------------------------------------------------------------------ */
/* Helper                                                              */
/* ------------------------------------------------------------------ */

/** SVG string -> data URI (bisa dipakai sebagai src Image, texture Pixi/Phaser, dll). */
export const svgToDataUri = (svg: string): string =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

/** Muat 1 bagian menjadi HTMLImageElement. */
export const loadPartImage = (part: AvatarPart): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image(part.width, part.height);
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = svgToDataUri(part.svg);
  });

/** Muat semua bagian sekaligus (dasar + opsi) supaya opsi bisa di-toggle tanpa reload. */
export const loadAvatarImages = async (): Promise<Record<PartId, HTMLImageElement>> => {
  const entries = await Promise.all(
    AVATAR_ALL_PARTS.map(async (p) => [p.id, await loadPartImage(p)] as const)
  );
  return Object.fromEntries(entries) as Record<PartId, HTMLImageElement>;
};

/** Gambar karakter utuh ke canvas 2D (posisi default = pose asli). */
export const drawAvatar = (
  ctx: CanvasRenderingContext2D,
  images: Record<PartId, HTMLImageElement>,
  offset: Point = { x: 0, y: 0 },
  options: AvatarOptions = {}
): void => {
  for (const p of resolveAvatarParts(options)) {
    ctx.drawImage(images[p.id], p.x + offset.x, p.y + offset.y, p.width, p.height);
  }
};

/* ------------------------------------------------------------------ */
/* Posed SVG renderer                                                  */
/* ------------------------------------------------------------------ */

type ScreenSide = "left" | "right";
type CustomLegMode = "sit" | "crossLegged" | "jump" | "squat";

/**
 * Rencana satu lengan untuk pose — persis pola rig referensi (ae2remotion):
 * pose ditulis sebagai SUDUT ROTASI absolut tiap tulang (derajat, sumbu kanvas,
 * 0° = ke kanan, 90° = ke bawah). Panjang tulang & tangan tetap, jadi lengan
 * tidak pernah membentuk shape baru; penargetan titik tinggal menyetel sudut.
 */
export interface ArmPlan {
  /** sisi LAYAR tempat lengan digambar (right = lengan kiri karakter) */
  side: ScreenSide;
  /** sudut absolut lengan atas (bahu -> siku) */
  upper: number;
  /** sudut absolut lengan bawah + tangan (siku -> ujung jari) */
  lower: number;
  /** gaya tangan: "mitten" (asli, default) | "point" (telunjuk) | "claw" (menggaruk) */
  hand?: HandStyle;
}

const POSE_BODY = {
  sit: 163,
  crossLegged: 355,
  jump: -80,
  squat: 225,
} as const;

const round1 = (n: number): number => Math.round(n * 10) / 10;

const partElement = (part: AvatarPart): string =>
  `<svg x="${part.x}" y="${part.y}" width="${part.width}" height="${part.height}" ` +
  `viewBox="${part.x} ${part.y} ${part.width} ${part.height}">` +
  part.svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "") +
  `</svg>`;

const moveWrap = (markup: string, dx: number, dy: number): string =>
  dx === 0 && dy === 0 ? markup : `<g transform="translate(${round1(dx)} ${round1(dy)})">${markup}</g>`;

const angleOf = (from: Point, to: Point): number =>
  (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;

const strokeLine = (points: readonly Point[], color: string, width: number, extra = ""): string =>
  `<path d="${points.map((p, i) => `${i === 0 ? "M" : "L"}${round1(p.x)},${round1(p.y)}`).join(" ")}" ` +
  `fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" ` +
  `stroke-linejoin="round"${extra ? ` ${extra}` : ""}/>`;

const bandAt = (
  center: Point,
  directionDeg: number,
  length: number,
  thickness: number,
  fill: string,
  inner = ""
): string =>
  `<g transform="translate(${round1(center.x)} ${round1(center.y)}) rotate(${round1(directionDeg + 90)})">` +
  `<rect x="${round1(-length / 2)}" y="${round1(-thickness / 2)}" width="${round1(length)}" ` +
  `height="${round1(thickness)}" rx="${round1(thickness / 2)}" fill="${fill}"/>${inner}</g>`;

/* ---------- ekspresi wajah saat kepala diputar ---------- */

interface HeadMotion {
  tx: number;
  ty: number;
  rotate: number;
  scaleX: number;
  eyeX: number;
  eyeY: number;
  browX: number;
  browY: number;
  noseX: number;
  mouthX: number;
  hideEar?: "leftEar" | "rightEar";
}

const HEAD_MOTION: Record<HeadDirection, HeadMotion> = {
  front: { tx: 0, ty: 0, rotate: 0, scaleX: 1, eyeX: 0, eyeY: 0, browX: 0, browY: 0, noseX: 0, mouthX: 0 },
  lookLeft: { tx: 0, ty: 0, rotate: -2.5, scaleX: 1, eyeX: -15, eyeY: 0, browX: -7, browY: -2, noseX: -4, mouthX: -3 },
  lookRight: { tx: 0, ty: 0, rotate: 2.5, scaleX: 1, eyeX: 15, eyeY: 0, browX: 7, browY: -2, noseX: 4, mouthX: 3 },
  lookUp: { tx: 0, ty: -5, rotate: -3, scaleX: 1, eyeX: 0, eyeY: -12, browX: 0, browY: -9, noseX: 0, mouthX: 0 },
  lookDown: { tx: 0, ty: 5, rotate: 3, scaleX: 1, eyeX: 0, eyeY: 12, browX: 0, browY: 4, noseX: 0, mouthX: 0 },
  faceLeft: {
    tx: -20, ty: 0, rotate: -5.5, scaleX: 0.85,
    eyeX: -16, eyeY: 0, browX: -8, browY: -1, noseX: -10, mouthX: -7, hideEar: "rightEar",
  },
  faceRight: {
    tx: 20, ty: 0, rotate: 5.5, scaleX: 0.85,
    eyeX: 16, eyeY: 0, browX: 8, browY: -1, noseX: 10, mouthX: 7, hideEar: "leftEar",
  },
};

const headMotionTransform = (motion: HeadMotion): string => {
  const pieces: string[] = [];
  if (motion.tx !== 0 || motion.ty !== 0) pieces.push(`translate(${round1(motion.tx)} ${round1(motion.ty)})`);
  if (motion.rotate !== 0) pieces.push(`rotate(${round1(motion.rotate)} 469 382)`);
  if (motion.scaleX !== 1) pieces.push(`translate(469 0) scale(${motion.scaleX} 1) translate(-469 0)`);
  return pieces.join(" ");
};

const isEyePart = (id: PartId): boolean =>
  id === "leftEye" || id === "rightEye" || id.startsWith("eyes");
const isBrowPart = (id: PartId): boolean =>
  id === "leftEyebrow" || id === "rightEyebrow" || id.startsWith("brows");
const isMouthPart = (id: PartId): boolean => id.startsWith("mouth") || id === "mustache";

/* ---------- kedipan mata (frame-driven untuk Remotion) ---------- */

/** lama mata tertutup saat kedip (detik) */
const BLINK_SECONDS = 0.14;

const blinkRand = (n: number): number => {
  const s = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
  return s - Math.floor(s);
};

/**
 * true pada frame yang jatuh di jendela kedip. Jarak antar kedip acak 3-7 detik
 * (deterministik per seed & frame, aman untuk render ulang Remotion).
 */
export const isAvatarBlink = (frame: number, fps = 30, seed = 0): boolean => {
  const t = Math.max(0, frame) / fps;
  let acc = 0;
  for (let i = 0; i < 100000; i += 1) {
    const interval = 3 + blinkRand(i * 1.618 + seed * 7.13) * 4;
    if (t < acc + interval) return false;
    if (t < acc + interval + BLINK_SECONDS) return true;
    acc += interval + BLINK_SECONDS;
  }
  return false;
};

const blinkLidMarkup = (part: AvatarPart): string => {
  const d = part.id === "leftEye"
    ? "M496,270 Q507,280 518,270"
    : "M420,270 Q431,280 442,270";
  return (
    `<svg x="${part.x}" y="${part.y}" width="${part.width}" height="${part.height}" ` +
    `viewBox="${part.x} ${part.y} ${part.width} ${part.height}">` +
    `<path d="${d}" fill="none" stroke="${C.eye}" stroke-width="3.6" stroke-linecap="round"/></svg>`
  );
};

const buildHeadGroup = (parts: readonly AvatarPart[], direction: HeadDirection, blink = false): string => {
  const motion = HEAD_MOTION[direction];
  const markup = parts
    .filter((part) => part.id !== motion.hideEar)
    .map((part) => {
      if (blink && isEyePart(part.id)) {
        return moveWrap(blinkLidMarkup(part), motion.eyeX, motion.eyeY);
      }
      let dx = 0;
      let dy = 0;
      if (isEyePart(part.id)) {
        dx = motion.eyeX;
        dy = motion.eyeY;
      } else if (isBrowPart(part.id)) {
        dx = motion.browX;
        dy = motion.browY;
      } else if (part.id === "nose") {
        dx = motion.noseX;
      } else if (isMouthPart(part.id)) {
        dx = motion.mouthX;
      }
      return moveWrap(partElement(part), dx, dy);
    })
    .join("");
  const transform = headMotionTransform(motion);
  return transform ? `<g transform="${transform}">${markup}</g>` : markup;
};

/* ---------- lengan pose: rig 2 tulang + part/texture terpisah ----------
 * RIG v2 — gaya After Effects (DUIK Angela / Puppet Pin):
 *  - SENDI: pivot bahu berada di pusat sendi bahu (bukan di tepi badan), sehingga
 *    lengan yang diangkat tetap menempel di bahu dan tidak "terlepas" ke atas.
 *  - IK: solveArmIK() = IK 2 tulang berpanjang tetap + soft-limit di rentang penuh
 *    (tanpa snapping, tanpa peregangan) + pilihan arah tekukan siku (out/in/up/down),
 *    persis konsep controller IK DUIK.
 *  - SKIN: bahu & lengan atas memakai deformasi bobot ala Puppet Pin (linear blend
 *    skinning). Titik dekat leher tetap menempel di badan, titik di ujung bahu
 *    ikut berputar bersama lengan, titik di antaranya bercampur — jadi bahu melengkung
 *    halus, TIDAK ADA lingkaran/tempelan di antara badan dan lengan atas.
 *  - Siku: sendi kapsul sama-radius (lengan atas & bawah memakai pusat+radius yang sama),
 *    sehingga tikungan siku mulus tanpa takik maupun tonjolan.
 *  - Texture baju hanya di-clip ke siluet; tangan berpanjang tetap 250px
 *    (mitten asli / telunjuk "point" untuk explainer / "claw" untuk menggaruk). */

/* ---------- RIG: kerangka lengan (anchor & panjang tulang tetap) ---------- */

export interface AvatarRigSide {
  shoulder: Point;
  elbow: Point;
  wrist: Point;
  fingertip: Point;
}

/** Kerangka lengan dalam koordinat kanvas. Kunci = sisi LAYAR. */
export const AVATAR_RIG: {
  bones: { upperArm: number; forearm: number; hand: number };
  sides: Record<ScreenSide, AvatarRigSide>;
} = {
  bones: { upperArm: 136.2, forearm: 144.2, hand: 250 },
  sides: {
    right: {
      shoulder: { x: 634, y: 478 },
      elbow: { x: 641, y: 614 },
      wrist: { x: 648, y: 758 },
      fingertip: { x: 648, y: 1008 },
    },
    left: {
      shoulder: { x: 305, y: 478 },
      elbow: { x: 299, y: 614 },
      wrist: { x: 292, y: 758 },
      fingertip: { x: 292, y: 1008 },
    },
  },
};

const BONE_UPPER = AVATAR_RIG.bones.upperArm;
const BONE_LOWER = AVATAR_RIG.bones.forearm;
const BONE_HAND = AVATAR_RIG.bones.hand;

const toRad = (deg: number): number => (deg * Math.PI) / 180;
const unit = (deg: number): Point => ({ x: Math.cos(toRad(deg)), y: Math.sin(toRad(deg)) });
const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));
const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
const smooth01 = (t: number): number => {
  const c = clamp(t, 0, 1);
  return c * c * (3 - 2 * c);
};

/** Sudut istirahat (lengan menggantung) tiap sisi. */
export const AVATAR_ARM_REST: Record<ScreenSide, ArmPlan> = {
  right: {
    side: "right",
    upper: round1(angleOf(AVATAR_RIG.sides.right.shoulder, AVATAR_RIG.sides.right.elbow)),
    lower: round1(angleOf(AVATAR_RIG.sides.right.elbow, AVATAR_RIG.sides.right.fingertip)),
  },
  left: {
    side: "left",
    upper: round1(angleOf(AVATAR_RIG.sides.left.shoulder, AVATAR_RIG.sides.left.elbow)),
    lower: round1(angleOf(AVATAR_RIG.sides.left.elbow, AVATAR_RIG.sides.left.fingertip)),
  },
};

/** Forward kinematics: posisi semua sendi dari sudut tulang. */
export const solveArmFK = (plan: ArmPlan): AvatarRigSide => {
  const rig = AVATAR_RIG.sides[plan.side];
  const u = unit(plan.upper);
  const l = unit(plan.lower);
  const elbow = { x: rig.shoulder.x + BONE_UPPER * u.x, y: rig.shoulder.y + BONE_UPPER * u.y };
  const wrist = { x: elbow.x + BONE_LOWER * l.x, y: elbow.y + BONE_LOWER * l.y };
  const fingertip = { x: elbow.x + (BONE_LOWER + BONE_HAND) * l.x, y: elbow.y + (BONE_LOWER + BONE_HAND) * l.y };
  return { shoulder: rig.shoulder, elbow, wrist, fingertip };
};

export interface ArmIKOptions {
  /** titik yang dikejar: "wrist" (default) atau "fingertip" (ujung telunjuk/jari) */
  reach?: "wrist" | "fingertip";
  /** arah tekukan siku: "out" (menjauh dari badan, default), "in", "up", "down" */
  bend?: "out" | "in" | "up" | "down";
  /** gaya tangan */
  hand?: HandStyle;
  /** soft-limit dekat rentang penuh (0 = keras, default 0.06) agar tidak snapping */
  soft?: number;
  /** jika diberikan, pilih solusi siku yang paling dekat dengan titik ini */
  hintElbow?: Point;
}

/**
 * IK 2 tulang (controller gaya DUIK). target = koordinat kanvas (ruang badan,
 * sebelum translate pose). Panjang tulang tidak pernah berubah; bila target di luar
 * jangkauan, lengan meregang lurus ke arah target secara halus (soft limit).
 */
export const solveArmIK = (side: ScreenSide, target: Point, options: ArmIKOptions = {}): ArmPlan => {
  const rig = AVATAR_RIG.sides[side];
  const s = rig.shoulder;
  const l1 = BONE_UPPER;
  const l2 = options.reach === "fingertip" ? BONE_LOWER + BONE_HAND : BONE_LOWER;
  const dx = target.x - s.x;
  const dy = target.y - s.y;
  const dist = Math.max(1e-6, Math.hypot(dx, dy));
  const maxR = l1 + l2;
  const minR = Math.abs(l1 - l2) + 1;
  const softZone = maxR * clamp(options.soft ?? 0.06, 0.001, 0.5);
  const start = maxR - softZone;
  const d = dist > start ? start + softZone * (1 - Math.exp(-(dist - start) / softZone)) : dist;
  const reach = clamp(d, minR, maxR - 0.01);
  const base = (Math.atan2(dy, dx) * 180) / Math.PI;
  const cosA = clamp((l1 * l1 + reach * reach - l2 * l2) / (2 * l1 * reach), -1, 1);
  const A = (Math.acos(cosA) * 180) / Math.PI;
  const candidates = [base + A, base - A].map((upper) => {
    const u = unit(upper);
    return { upper, elbow: { x: s.x + l1 * u.x, y: s.y + l1 * u.y } };
  });
  const bend = options.bend ?? "out";
  const score = (c: { elbow: Point }): number => {
    if (options.hintElbow) return -Math.hypot(c.elbow.x - options.hintElbow.x, c.elbow.y - options.hintElbow.y);
    if (bend === "up") return -c.elbow.y;
    if (bend === "down") return c.elbow.y;
    const outward = side === "right" ? c.elbow.x : -c.elbow.x;
    return bend === "out" ? outward : -outward;
  };
  const best = score(candidates[0]) >= score(candidates[1]) ? candidates[0] : candidates[1];
  const lower = angleOf(best.elbow, target);
  const plan: ArmPlan = { side, upper: round1(best.upper), lower: round1(lower) };
  if (options.hand) plan.hand = options.hand;
  return plan;
};

/* Rig lama (pivot bahu di tepi badan) — hanya untuk mengonversi sudut pose lama
 * ke rig baru: ujung jari tetap di titik yang sama, sehingga properti pose
 * (telepon, sandwich, kotak) tetap tepat di tangan. */
const LEGACY_SHOULDER: Record<ScreenSide, Point> = { right: { x: 604, y: 470 }, left: { x: 335, y: 470 } };
const legacyPlan = (side: ScreenSide, upper: number, lower: number, hand?: HandStyle): ArmPlan => {
  const s = LEGACY_SHOULDER[side];
  const u = unit(upper);
  const l = unit(lower);
  const elbow = { x: s.x + 148.4 * u.x, y: s.y + 148.4 * u.y };
  const tip = { x: elbow.x + 394.2 * l.x, y: elbow.y + 394.2 * l.y };
  return solveArmIK(side, tip, { reach: "fingertip", hintElbow: elbow, hand });
};


/* ---------- GERAK LENGAN ALAMI (ruang sendi, bukan ruang target) ----------
 * Manusia mengangkat tangan ke kepala dengan SIKU TETAP RENDAH: lengan atas hanya
 * mengayun sedikit ke samping, sementara lengan bawah MENEKUK di siku. Siku tidak
 * naik melewati bahu dan lengan bawah tidak berputar balik. Karena itu transisi pose
 * TIDAK boleh dibuat dengan menggeser target ujung jari lalu meminta IK mencari siku
 * di tiap frame (solusi IK bisa melompat/membalik). Pakai blendArmPlans():
 *  1. interpolasi sudut sendi dari pose awal ke pose akhir (hasil solveArmIK),
 *  2. lengan bawah menyapu lewat jalur "outward" (sisi luar) tanpa memutar >360°,
 *  3. lengan bawah sedikit tertunda dibanding lengan atas (menekuk setelah mengayun),
 *  4. siku dijepit agar tidak pernah lebih tinggi dari bahu (maxElbowRise). */

export interface ArmBlendOptions {
  /** jalur sapuan lengan bawah: "outward" (default, lewat sisi luar), "inward", "shortest" */
  sweep?: "outward" | "inward" | "shortest";
  /** tunda lengan bawah (0..0.6) sebagai fraksi durasi; default 0.12 */
  forearmDelay?: number;
  /** seberapa tinggi siku boleh melewati garis bahu (px); default 0 */
  maxElbowRise?: number;
}

const wrap180 = (a: number): number => ((((a + 180) % 360) + 360) % 360) - 180;

export const blendArmPlans = (from: ArmPlan, to: ArmPlan, t: number, options: ArmBlendOptions = {}): ArmPlan => {
  const side = from.side;
  const k = clamp(t, 0, 1);
  const delay = clamp(options.forearmDelay ?? 0.12, 0, 0.6);
  const eUpper = smooth01(k);
  const eLower = smooth01((k - delay) / (1 - delay));

  const dUpper = wrap180(to.upper - from.upper);
  let dLower = wrap180(to.lower - from.lower);
  const sweep = options.sweep ?? "outward";
  if (sweep !== "shortest") {
    // "outward": kanan-layar menyapu ke sudut mengecil (lewat 0° = sisi luar), kiri-layar sebaliknya
    const wantNegative = (sweep === "outward") === (side === "right");
    if (wantNegative && dLower > 0) dLower -= 360;
    if (!wantNegative && dLower < 0) dLower += 360;
  }

  let upper = from.upper + dUpper * eUpper;
  const lower = from.lower + dLower * eLower;

  // siku tidak boleh naik melewati bahu: sin(upper) >= -maxRise / panjangTulang
  const rise = options.maxElbowRise ?? 0;
  const minSin = -rise / BONE_UPPER;
  const s = Math.sin(toRad(upper));
  if (s < minSin) {
    const base = (Math.asin(clamp(minSin, -1, 1)) * 180) / Math.PI;
    upper = Math.cos(toRad(upper)) >= 0 ? base : 180 - base;
  }

  const plan: ArmPlan = { side, upper: round1(upper), lower: round1(lower) };
  const hand = k >= 0.6 ? to.hand ?? from.hand : from.hand;
  if (hand) plan.hand = hand;
  return plan;
};

/* ---------- SKIN: bahu & lengan atas (bobot ala Puppet Pin) ---------- */

interface SkinPoint {
  x: number;
  y: number;
  /** 0 = menempel di badan, 1 = ikut berputar bersama lengan atas */
  w: number;
}

const bezierAt = (p0: Point, p1: Point, p2: Point, p3: Point, t: number): Point => {
  const m = 1 - t;
  return {
    x: m * m * m * p0.x + 3 * m * m * t * p1.x + 3 * m * t * t * p2.x + t * t * t * p3.x,
    y: m * m * m * p0.y + 3 * m * m * t * p1.y + 3 * m * t * t * p2.y + t * t * t * p3.y,
  };
};

type SleeveKind = "long" | "short";

/** Garis luar bahu + lengan atas posisi istirahat (persis siluet asli karakter). */
const buildSkin = (side: ScreenSide, kind: SleeveKind): SkinPoint[] => {
  const mirror = side === "left";
  const P = (x: number, y: number, w: number): SkinPoint => ({ x, y, w });
  // titik dasar ditulis untuk sisi kanan layar; sisi kiri memakai koordinat aslinya sendiri
  const slope = mirror
    ? { c0: { x: 394, y: 424 }, c1: { x: 364.5, y: 435 }, c2: { x: 335, y: 446 }, b: [{ x: 290, y: 463 }, { x: 266, y: 488 }, { x: 262, y: 530 }] }
    : { c0: { x: 545, y: 424 }, c1: { x: 577.5, y: 434.5 }, c2: { x: 610, y: 445 }, b: [{ x: 650, y: 460 }, { x: 672, y: 480 }, { x: 678, y: 520 }] };
  const pts: SkinPoint[] = [P(slope.c0.x, slope.c0.y, 0), P(slope.c1.x, slope.c1.y, 0.08), P(slope.c2.x, slope.c2.y, 0.3)];
  const ws = [0.5, 0.72, 0.9, 1];
  [0.25, 0.5, 0.75, 1].forEach((t, i) => {
    const p = bezierAt(slope.c2, slope.b[0], slope.b[1], slope.b[2], t);
    pts.push(P(p.x, p.y, ws[i]));
  });
  const E = AVATAR_RIG.sides[side].elbow;
  if (kind === "long") {
    const r = 44.8;
    if (!mirror) {
      pts.push(P(682, 567, 1));
      for (let a = 0; a <= 180; a += 18) pts.push(P(E.x + r * Math.cos(toRad(a)), E.y + r * Math.sin(toRad(a)), 1));
      pts.push(P(596, 548, 0));
    } else {
      pts.push(P(258, 570, 1));
      for (let a = 180; a >= 0; a -= 18) pts.push(P(E.x + r * Math.cos(toRad(a)), E.y + r * Math.sin(toRad(a)), 1));
      pts.push(P(344, 548, 0));
    }
  } else if (!mirror) {
    pts.push(P(683, 600, 1), P(596, 600, 1), P(596, 548, 0));
  } else {
    pts.push(P(248, 600, 1), P(341, 600, 1), P(344, 548, 0));
  }
  return pts;
};

const SKIN_CACHE = new Map<string, SkinPoint[]>();
const skinOf = (side: ScreenSide, kind: SleeveKind): SkinPoint[] => {
  const key = `${side}-${kind}`;
  let hit = SKIN_CACHE.get(key);
  if (!hit) {
    hit = buildSkin(side, kind);
    SKIN_CACHE.set(key, hit);
  }
  return hit;
};

/** Deformasi bahu: tiap titik = campuran posisi badan (w=0) dan posisi ikut lengan (w=1). */
const deformSkin = (side: ScreenSide, kind: SleeveKind, pivot: Point, deltaDeg: number): string => {
  const c = Math.cos(toRad(deltaDeg));
  const s = Math.sin(toRad(deltaDeg));
  const pts = skinOf(side, kind).map((p) => {
    const rx = pivot.x + (p.x - pivot.x) * c - (p.y - pivot.y) * s;
    const ry = pivot.y + (p.x - pivot.x) * s + (p.y - pivot.y) * c;
    return { x: lerp(p.x, rx, p.w), y: lerp(p.y, ry, p.w) };
  });
  return `M${pts.map((p) => `${round1(p.x)},${round1(p.y)}`).join(" L")} Z`;
};


/* ---------- PART: siluet asli karakter (dipisah dari texture) ---------- */

/* Lengan atas + bahu tidak lagi bentuk kaku: siluetnya dibangun oleh buildSkin()
 * (deformasi berbobot). Sisanya tetap siluet asli; ujung atas lengan bawah kini
 * setengah lingkaran di pusat siku (radius sama dengan ujung bawah lengan atas),
 * sehingga tikungan siku selalu mulus di sudut berapa pun. */
const SHAPE_SKIN_UPPER = {
  right: "M598,598 L682,598 L686,614 A40 40 0 0 1 606,614 Z",
  left: "M342,598 L258,598 L254,614 A38.5 38.5 0 0 0 331,614 Z",
} as const;

const SHAPE_FOREARM = {
  right: "M596.2,614 A44.8 44.8 0 0 1 685.8,614 L693,705 L692,758 L596,758 Z",
  left: "M254.8,614 A44.6 44.6 0 0 1 344,614 L344,758 L248,758 L247,705 Z",
} as const;

const SHAPE_SKIN_FOREARM = {
  right: "M606,614 A40 40 0 0 1 686,614 C690,640 692,695 690,740 L688,750 L613,750 L613,740 C610,695 606,640 606,614 Z",
  left: "M254,614 A38.5 38.5 0 0 1 331,614 C334,640 330,695 327,740 L327,750 L252,750 L250,740 C248,695 250,640 254,614 Z",
} as const;

/** tangan mitten asli: telapak + jempol (keduanya satu siluet clip) */
const HAND_SHAPE = {
  right:
    '<path d="M613,740 L683,740 L683,975 Q683,1008 648,1008 Q613,1008 613,975 Z"/>' +
    '<ellipse cx="611" cy="920" rx="10" ry="28"/>',
  left:
    '<path d="M257,740 L327,740 L327,975 Q327,1008 292,1008 Q257,1008 257,975 Z"/>' +
    '<ellipse cx="329" cy="920" rx="10" ry="28"/>',
} as const;

const HAND_TEX = {
  right: `<path d="M618,894 C609,906 609,934 618,946" fill="none" stroke="${C.skinShade}" stroke-width="3" stroke-linecap="round"/>`,
  left: `<path d="M322,894 C331,906 331,934 322,946" fill="none" stroke="${C.skinShade}" stroke-width="3" stroke-linecap="round"/>`,
} as const;

/** Gaya tangan. mitten = asli; point = telunjuk lurus (explainer); claw = jari menggaruk. */
export type HandStyle = "mitten" | "point" | "claw";

/* Tangan "point": telapak + kepalan 3 jari + telunjuk lurus + jempol. Ditulis untuk sisi
 * kanan layar lalu dicerminkan untuk sisi kiri. Panjang total tetap 250px. */
const HAND_POINT_SHAPE =
  '<path d="M613,740 L683,740 L683,890 Q683,908 665,908 L631,908 Q613,908 613,890 Z"/>' +
  '<rect x="643" y="868" width="34" height="140" rx="17"/>' +
  '<ellipse cx="611" cy="872" rx="11" ry="32"/>';
const HAND_POINT_TEX =
  `<g fill="none" stroke="${C.skinShade}" stroke-width="3" stroke-linecap="round">` +
  `<path d="M619,874 Q630,882 641,875"/><path d="M619,892 Q630,900 641,893"/>` +
  `<path d="M618,846 C610,858 610,884 618,896"/></g>`;
const HAND_CLAW_TEX =
  `<g fill="none" stroke="${C.skinShade}" stroke-width="3" stroke-linecap="round">` +
  `<path d="M630.5,950 L630.5,1002"/><path d="M648,944 L648,1004"/><path d="M665.5,950 L665.5,1002"/></g>`;

const mirrorMarkup = (markup: string): string =>
  markup.replace(/<(path|rect|ellipse|circle|g)(\s|\/)/g, '<$1 transform="translate(939 0) scale(-1 1)"$2');

/* ---------- TEXTURE: slot texture per part (varian pakaian) ---------- */

interface ArmLayer {
  /** siluet clip (tanpa fill) */
  clip: string;
  /** cat dasar siluet */
  paint: string;
  /** detail texture di atas cat dasar (ikut ter-clip) */
  tex: string;
  /** siluet dinamis bahu/lengan atas (deformasi berbobot); paint = warna isi */
  shoulder?: { side: ScreenSide; kind: SleeveKind };
  /** lapisan tangan: gayanya dipilih saat render (ArmPlan.hand) */
  isHand?: ScreenSide;
}

interface ArmSegmentDef {
  /** titik sendi asli di kanvas (pusat rotasi segmen) */
  joint: Point;
  /** titik ujung asli di kanvas (siku utk segmen atas, ujung jari utk bawah) */
  tip: Point;
  layers: ArmLayer[];
}

interface ArmSegmentSet {
  upper: ArmSegmentDef;
  lower: ArmSegmentDef;
}

const shapeLayer = (d: string, fill: string, tex = ""): ArmLayer => ({
  clip: `<path d="${d}"/>`,
  paint: `<path d="${d}" fill="${fill}"/>`,
  tex,
});

const shoulderLayer = (side: ScreenSide, kind: SleeveKind, fill: string, tex = ""): ArmLayer => ({
  clip: "",
  paint: fill,
  tex,
  shoulder: { side, kind },
});

const handLayer = (side: ScreenSide): ArmLayer => ({ clip: "", paint: "", tex: "", isHand: side });

const resolveHandLayer = (side: ScreenSide, style: HandStyle): ArmLayer => {
  let shape: string = HAND_SHAPE[side];
  let tex: string = HAND_TEX[side];
  if (style === "point") {
    shape = side === "right" ? HAND_POINT_SHAPE : mirrorMarkup(HAND_POINT_SHAPE);
    tex = side === "right" ? HAND_POINT_TEX : mirrorMarkup(HAND_POINT_TEX);
  } else if (style === "claw") {
    tex = tex + (side === "right" ? HAND_CLAW_TEX : mirrorMarkup(HAND_CLAW_TEX));
  }
  return {
    clip: shape,
    paint: shape.replace(/\/>/g, ` fill="${C.skin}"/>`),
    tex,
  };
};

// Potongan lengan. Sisi kanan layar = lengan kiri karakter: bahu 634,478; siku 641,614.

const ARM_PARTS: Record<ScreenSide, Record<TopStyle, ArmSegmentSet>> = {
  right: {
    shirt: {
      upper: {
        joint: { x: 634, y: 478 },
        tip: { x: 641, y: 614 },
        layers: [
          shoulderLayer("right", "long",
            C.shirt,
            `<path d="M613,545 L601,600 L601,614 L613,614 Z" fill="${C.shirtShade}"/>`
          ),
        ],
      },
      lower: {
        joint: { x: 641, y: 614 },
        tip: { x: 648, y: 1008 },
        layers: [
          shapeLayer(
            SHAPE_FOREARM.right,
            C.shirt,
            `<path d="M601,614 L613,614 L613,705 L601,705 Z" fill="${C.shirtShade}"/>` +
              `<rect x="600" y="705" width="102" height="54" rx="13" fill="${C.shirtCuff}"/>`
          ),
          handLayer("right"),
        ],
      },
    },
    tshirt: {
      upper: {
        joint: { x: 634, y: 478 },
        tip: { x: 641, y: 614 },
        layers: [
          shapeLayer(
            SHAPE_SKIN_UPPER.right,
            C.skin,
            `<path d="M598,598 L620,598 L618,614 L604,614 Z" fill="${C.skinShade}" opacity="0.3"/>` +
              `<path d="M600,602 L682,602 L680,613 Q640,621 602,613 Z" fill="${C.skinShade}" opacity="0.3"/>`
          ),
          shoulderLayer("right", "short",
            C.tshirt,
            `<path d="M613,545 L600,600 L596,600 L596,545 Z" fill="${C.tshirtShade}" opacity="0.75"/>` +
              `<path d="M610,445 C650,460 672,480 678,520 L681,560" fill="none" stroke="${C.tshirtShade}" stroke-width="2" opacity="0.55"/>` +
              `<rect x="596" y="588" width="87" height="12" fill="${C.tshirtShade}" opacity="0.55"/>` +
              `<path d="M596,590 L683,590" fill="none" stroke="${C.tshirtSeam}" stroke-width="1.8" opacity="0.85"/>`
          ),
        ],
      },
      lower: {
        joint: { x: 641, y: 614 },
        tip: { x: 648, y: 1008 },
        layers: [
          shapeLayer(
            SHAPE_SKIN_FOREARM.right,
            C.skin,
            `<path d="M604,614 L618,614 L634,750 L613,750 L613,740 C610,695 607,640 604,614 Z" fill="${C.skinShade}" opacity="0.3"/>` +
              `<path d="M605,662 Q630,654 656,660" fill="none" stroke="${C.skinShade}" stroke-width="3" opacity="0.55" stroke-linecap="round"/>`
          ),
          handLayer("right"),
        ],
      },
    },
    bomber: {
      upper: {
        joint: { x: 634, y: 478 },
        tip: { x: 641, y: 614 },
        layers: [
          shoulderLayer("right", "long",
            C.bomber,
            `<path d="M613,545 L601,600 L601,614 L613,614 Z" fill="${C.bomberShade}"/>` +
              `<path d="M610,445 C650,460 672,480 678,520 L682,560" fill="none" stroke="${C.bomberShade}" stroke-width="2" opacity="0.5"/>` +
              `<path d="M652,566 L678,562 L681,618 L655,622 Z" fill="${C.bomberPocket}"/>` +
              `<path d="M654,570 L676,567 L678,614" fill="none" stroke="${C.bomberZip}" stroke-width="2" stroke-dasharray="2.5 3" opacity="0.9"/>` +
              `<rect x="674" y="610" width="6" height="12" rx="2" fill="${C.bomberZip}"/>`
          ),
        ],
      },
      lower: {
        joint: { x: 641, y: 614 },
        tip: { x: 648, y: 1008 },
        layers: [
          shapeLayer(
            SHAPE_FOREARM.right,
            C.bomber,
            `<path d="M601,614 L613,614 L613,705 L601,705 Z" fill="${C.bomberShade}"/>` +
              `<path d="M636,638 Q656,630 674,638" fill="none" stroke="${C.bomberShade}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>` +
              `<rect x="600" y="705" width="102" height="54" rx="13" fill="${C.bomberRib}"/>` +
              `<g stroke="${C.bomberShade}" stroke-width="2" opacity="0.8">` +
              Array.from({ length: 7 }, (_, i) => `<path d="M${618 + i * 12},711 L${618 + i * 12},753"/>`).join("") +
              `</g>` +
              `<path d="M603,712 C636,707 672,707 699,712" fill="none" stroke="${C.bomberShade}" stroke-width="2" opacity="0.7"/>`
          ),
          handLayer("right"),
        ],
      },
    },
    hoodie: {
      upper: {
        joint: { x: 634, y: 478 },
        tip: { x: 641, y: 614 },
        layers: [
          shoulderLayer("right", "long",
            C.hoodie,
            `<path d="M613,545 L601,600 L601,614 L613,614 Z" fill="${C.hoodieShade}"/>` +
              `<path d="M610,445 C650,460 672,480 678,520 L682,560" fill="none" stroke="${C.hoodieShade}" stroke-width="2" opacity="0.55"/>`
          ),
        ],
      },
      lower: {
        joint: { x: 641, y: 614 },
        tip: { x: 648, y: 1008 },
        layers: [
          shapeLayer(
            SHAPE_FOREARM.right,
            C.hoodie,
            `<path d="M601,614 L613,614 L613,705 L601,705 Z" fill="${C.hoodieShade}"/>` +
              `<path d="M636,638 Q656,630 674,638" fill="none" stroke="${C.hoodieShade}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>` +
              `<rect x="600" y="705" width="102" height="54" rx="13" fill="${C.hoodieShade}"/>` +
              `<g stroke="${C.hoodieDark}" stroke-width="2" opacity="0.75">` +
              Array.from({ length: 7 }, (_, i) => `<path d="M${618 + i * 12},711 L${618 + i * 12},753"/>`).join("") +
              `</g>` +
              `<path d="M603,712 C636,707 672,707 699,712" fill="none" stroke="${C.hoodieDark}" stroke-width="2" opacity="0.65"/>`
          ),
          handLayer("right"),
        ],
      },
    },
    suit: {
      upper: {
        joint: { x: 634, y: 478 },
        tip: { x: 641, y: 614 },
        layers: [
          shoulderLayer("right", "long",
            C.suit,
            `<path d="M613,545 L601,600 L601,614 L613,614 Z" fill="${C.suitShade}"/>` +
              `<path d="M610,445 C650,460 672,480 678,520 L682,560" fill="none" stroke="${C.suitShade}" stroke-width="2" opacity="0.5"/>`
          ),
        ],
      },
      lower: {
        joint: { x: 641, y: 614 },
        tip: { x: 648, y: 1008 },
        layers: [
          shapeLayer(
            SHAPE_FOREARM.right,
            C.suit,
            `<path d="M601,614 L613,614 L613,705 L601,705 Z" fill="${C.suitShade}"/>` +
              `<path d="M636,638 Q656,630 674,638" fill="none" stroke="${C.suitShade}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>` +
              `<path d="M604,700 L690,700" fill="none" stroke="${C.suitShade}" stroke-width="3" opacity="0.7"/>` +
              `<rect x="600" y="705" width="102" height="54" rx="13" fill="${C.dressShirt}"/>` +
              `<path d="M601,714 C632,708 674,708 701,714" fill="none" stroke="${C.dressShirtShade}" stroke-width="2" opacity="0.8"/>` +
              `<path d="M606,746 L696,746" fill="none" stroke="${C.dressShirtShade}" stroke-width="1.5" opacity="0.55"/>` +
              `<circle cx="684" cy="731" r="6.5" fill="${C.watchCase}"/>` +
              `<circle cx="684" cy="731" r="2.8" fill="${C.watchJewel}"/>`
          ),
          handLayer("right"),
        ],
      },
    },
  },

  // Potongan lengan sisi kiri layar (lengan kanan karakter): bahu 335,470; siku 299,614.
  left: {
    shirt: {
      upper: {
        joint: { x: 305, y: 478 },
        tip: { x: 299, y: 614 },
        layers: [
          shoulderLayer("left", "long",
            C.shirt,
            `<path d="M327,545 L339,600 L339,614 L327,614 Z" fill="${C.shirtShade}"/>`
          ),
        ],
      },
      lower: {
        joint: { x: 299, y: 614 },
        tip: { x: 292, y: 1008 },
        layers: [
          shapeLayer(
            SHAPE_FOREARM.left,
            C.shirt,
            `<path d="M327,614 L339,614 L339,705 L327,705 Z" fill="${C.shirtShade}"/>` +
              `<rect x="237" y="705" width="103" height="54" rx="13" fill="${C.shirtCuff}"/>`
          ),
          handLayer("left"),
        ],
      },
    },
    tshirt: {
      upper: {
        joint: { x: 305, y: 478 },
        tip: { x: 299, y: 614 },
        layers: [
          shapeLayer(
            SHAPE_SKIN_UPPER.left,
            C.skin,
            `<path d="M320,598 L342,598 L340,614 L318,614 Z" fill="${C.skinShade}" opacity="0.3"/>` +
              `<path d="M257,602 L340,602 L338,613 Q296,621 259,613 Z" fill="${C.skinShade}" opacity="0.3"/>`
          ),
          shoulderLayer("left", "short",
            C.tshirt,
            `<path d="M327,545 L340,600 L344,600 L344,545 Z" fill="${C.tshirtShade}" opacity="0.75"/>` +
              `<path d="M335,446 C290,463 266,488 262,530 L257,560" fill="none" stroke="${C.tshirtShade}" stroke-width="2" opacity="0.55"/>` +
              `<rect x="248" y="588" width="93" height="12" fill="${C.tshirtShade}" opacity="0.55"/>` +
              `<path d="M248,590 L341,590" fill="none" stroke="${C.tshirtSeam}" stroke-width="1.8" opacity="0.85"/>`
          ),
        ],
      },
      lower: {
        joint: { x: 299, y: 614 },
        tip: { x: 292, y: 1008 },
        layers: [
          shapeLayer(
            SHAPE_SKIN_FOREARM.left,
            C.skin,
            `<path d="M318,614 L340,614 C334,640 330,695 327,740 L327,750 L306,750 C312,700 315,646 318,614 Z" fill="${C.skinShade}" opacity="0.3"/>` +
              `<path d="M330,662 Q306,654 280,660" fill="none" stroke="${C.skinShade}" stroke-width="3" opacity="0.55" stroke-linecap="round"/>`
          ),
          handLayer("left"),
        ],
      },
    },
    bomber: {
      upper: {
        joint: { x: 305, y: 478 },
        tip: { x: 299, y: 614 },
        layers: [
          shoulderLayer("left", "long",
            C.bomber,
            `<path d="M327,545 L339,600 L339,614 L327,614 Z" fill="${C.bomberShade}"/>` +
              `<path d="M335,446 C290,463 266,488 262,530 L256,560" fill="none" stroke="${C.bomberShade}" stroke-width="2" opacity="0.5"/>`
          ),
        ],
      },
      lower: {
        joint: { x: 299, y: 614 },
        tip: { x: 292, y: 1008 },
        layers: [
          shapeLayer(
            SHAPE_FOREARM.left,
            C.bomber,
            `<path d="M327,614 L339,614 L339,705 L327,705 Z" fill="${C.bomberShade}"/>` +
              `<path d="M302,638 Q282,630 264,638" fill="none" stroke="${C.bomberShade}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>` +
              `<rect x="237" y="705" width="103" height="54" rx="13" fill="${C.bomberRib}"/>` +
              `<g stroke="${C.bomberShade}" stroke-width="2" opacity="0.8">` +
              Array.from({ length: 7 }, (_, i) => `<path d="M${256 + i * 12},711 L${256 + i * 12},753"/>`).join("") +
              `</g>` +
              `<path d="M240,712 C267,707 303,707 336,712" fill="none" stroke="${C.bomberShade}" stroke-width="2" opacity="0.7"/>`
          ),
          handLayer("left"),
        ],
      },
    },
    hoodie: {
      upper: {
        joint: { x: 305, y: 478 },
        tip: { x: 299, y: 614 },
        layers: [
          shoulderLayer("left", "long",
            C.hoodie,
            `<path d="M327,545 L339,600 L339,614 L327,614 Z" fill="${C.hoodieShade}"/>` +
              `<path d="M335,446 C290,463 266,488 262,530 L256,560" fill="none" stroke="${C.hoodieShade}" stroke-width="2" opacity="0.55"/>`
          ),
        ],
      },
      lower: {
        joint: { x: 299, y: 614 },
        tip: { x: 292, y: 1008 },
        layers: [
          shapeLayer(
            SHAPE_FOREARM.left,
            C.hoodie,
            `<path d="M327,614 L339,614 L339,705 L327,705 Z" fill="${C.hoodieShade}"/>` +
              `<path d="M302,638 Q282,630 264,638" fill="none" stroke="${C.hoodieShade}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>` +
              `<rect x="237" y="705" width="103" height="54" rx="13" fill="${C.hoodieShade}"/>` +
              `<g stroke="${C.hoodieDark}" stroke-width="2" opacity="0.75">` +
              Array.from({ length: 7 }, (_, i) => `<path d="M${256 + i * 12},711 L${256 + i * 12},753"/>`).join("") +
              `</g>` +
              `<path d="M240,712 C267,707 303,707 336,712" fill="none" stroke="${C.hoodieDark}" stroke-width="2" opacity="0.65"/>`
          ),
          handLayer("left"),
        ],
      },
    },
    suit: {
      upper: {
        joint: { x: 305, y: 478 },
        tip: { x: 299, y: 614 },
        layers: [
          shoulderLayer("left", "long",
            C.suit,
            `<path d="M327,545 L339,600 L339,614 L327,614 Z" fill="${C.suitShade}"/>` +
              `<path d="M335,446 C290,463 266,488 262,530 L256,560" fill="none" stroke="${C.suitShade}" stroke-width="2" opacity="0.5"/>`
          ),
        ],
      },
      lower: {
        joint: { x: 299, y: 614 },
        tip: { x: 292, y: 1008 },
        layers: [
          shapeLayer(
            SHAPE_FOREARM.left,
            C.suit,
            `<path d="M327,614 L339,614 L339,705 L327,705 Z" fill="${C.suitShade}"/>` +
              `<path d="M302,638 Q282,630 264,638" fill="none" stroke="${C.suitShade}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>` +
              `<path d="M249,700 L340,700" fill="none" stroke="${C.suitShade}" stroke-width="3" opacity="0.7"/>` +
              `<rect x="237" y="705" width="103" height="54" rx="13" fill="${C.dressShirt}"/>` +
              `<path d="M238,714 C266,708 308,708 339,714" fill="none" stroke="${C.dressShirtShade}" stroke-width="2" opacity="0.8"/>` +
              `<path d="M243,746 L333,746" fill="none" stroke="${C.dressShirtShade}" stroke-width="1.5" opacity="0.55"/>` +
              `<circle cx="254" cy="731" r="6.5" fill="${C.watchCase}"/>` +
              `<circle cx="254" cy="731" r="2.8" fill="${C.watchJewel}"/>`
          ),
          handLayer("left"),
        ],
      },
    },
  },
};


/** Detail pembagian texture karakter (pola referensi ae2remotion): tiap part
 * punya siluet tetap, texture hanya di-clip ke dalam siluet, dan tiap slot
 * texture punya varian per gaya pakaian. Dipakai sebagai dokumentasi rig &
 * panduan menambah varian pakaian baru. */
export const AVATAR_TEXTURE_MAP: ReadonlyArray<{
  part: "upperArm" | "forearm" | "hand";
  label: string;
  variants: ReadonlyArray<{ top: TopStyle | "bare"; textures: readonly string[] }>;
}> = [
  {
    part: "upperArm",
    label: "Lengan atas (bahu -> siku)",
    variants: [
      { top: "shirt", textures: ["kain kemeja", "shading samping"] },
      { top: "tshirt", textures: ["kulit lengan atas", "kaos lengan pendek + hem rib + jahitan"] },
      { top: "bomber", textures: ["kain bomber", "shading", "kantong + resleting"] },
      { top: "hoodie", textures: ["kain hoodie", "shading"] },
      { top: "suit", textures: ["kain jas", "shading"] },
    ],
  },
  {
    part: "forearm",
    label: "Lengan bawah (siku -> pergelangan)",
    variants: [
      { top: "shirt", textures: ["kain kemeja", "shading", "manset"] },
      { top: "tshirt", textures: ["kulit lengan bawah", "shading + kerut siku"] },
      { top: "bomber", textures: ["kain bomber", "shading", "manset rib"] },
      { top: "hoodie", textures: ["kain hoodie", "shading", "manset rib"] },
      { top: "suit", textures: ["kain jas", "shading", "manset kemeja + kancing manset"] },
    ],
  },
  {
    part: "hand",
    label: "Tangan (pergelangan -> ujung jari, 250px): mitten asli | point (telunjuk, explainer) | claw (menggaruk)",
    variants: [{ top: "bare", textures: ["kulit", "garis telapak", "garis jari (point/claw)"] }],
  },
];

const watchLocalMarkup = (): string =>
  `<rect x="-23" y="-8" width="46" height="16" rx="5" fill="${C.watchStrap}"/>` +
  `<rect x="-23" y="1" width="46" height="7" rx="3.5" fill="${C.watchStrapShade}"/>` +
  `<rect x="-11" y="-15" width="22" height="27" rx="4" fill="${C.watchCase}"/>` +
  `<rect x="-8" y="-12" width="16" height="21" rx="2" fill="${C.watchDial}"/>` +
  `<path d="M0,-6 L0,-3 M0,2 L0,5 M-4,0 L-2,0 M2,0 L4,0" stroke="${C.watchMark}" stroke-width="1.4" stroke-linecap="round"/>` +
  `<path d="M0,0 L-2,-4 M0,0 L3,-3" stroke="${C.watchMark}" stroke-width="1.5" stroke-linecap="round"/>` +
  `<rect x="11" y="-3" width="4" height="7" rx="1.5" fill="${C.watchCase}"/>`;

/** Tempelkan segmen: bagian kaku berputar di sendi (tanpa skala — proporsi tetap);
 * siluet bahu/lengan atas memakai deformasi berbobot (halus, tanpa tempelan). */
const segmentMarkup = (
  seg: ArmSegmentDef,
  joint: Point,
  angle: number,
  segKey: string,
  defs: string[],
  hand: HandStyle
): string => {
  const rotate = round1(angle - angleOf(seg.joint, seg.tip));
  const rigid =
    `translate(${round1(joint.x)} ${round1(joint.y)}) rotate(${rotate}) ` +
    `translate(${round1(-seg.joint.x)} ${round1(-seg.joint.y)})`;
  return seg.layers
    .map((layer0, i) => {
      const layer = layer0.isHand ? resolveHandLayer(layer0.isHand, hand) : layer0;
      const id = `${segKey}-${i}`;
      if (layer.shoulder) {
        const d = deformSkin(layer.shoulder.side, layer.shoulder.kind, seg.joint, rotate);
        defs.push(`<clipPath id="${id}"><path d="${d}"/></clipPath>`);
        const tex = layer.tex ? `<g transform="${rigid}">${layer.tex}</g>` : "";
        return `<g clip-path="url(#${id})"><path d="${d}" fill="${layer.paint}"/>${tex}</g>`;
      }
      defs.push(`<clipPath id="${id}">${layer.clip}</clipPath>`);
      return `<g transform="${rigid}"><g clip-path="url(#${id})">${layer.paint}${layer.tex}</g></g>`;
    })
    .join("");
};

/** Forward kinematics: sudut absolut tiap tulang menentukan posisi siku & pergelangan;
 * panjang tulang + tangan selalu tetap. */
const renderArm = (plan: ArmPlan, top: TopStyle, wristWatch: boolean): string => {
  const rig = AVATAR_RIG.sides[plan.side];
  const segs = ARM_PARTS[plan.side][top];
  const fk = solveArmFK(plan);
  const hand = plan.hand ?? "mitten";

  const defs: string[] = [];
  let markup = segmentMarkup(segs.upper, rig.shoulder, plan.upper, `armU-${plan.side}`, defs, hand);
  markup += segmentMarkup(segs.lower, fk.elbow, plan.lower, `armL-${plan.side}`, defs, hand);

  if (wristWatch) {
    markup +=
      `<g transform="translate(${round1(fk.wrist.x)} ${round1(fk.wrist.y)}) rotate(${round1(plan.lower - 90)})">` +
      watchLocalMarkup() +
      `</g>`;
  }
  return `<defs>${defs.join("")}</defs>` + markup;
};


/* ---------- kaki untuk pose duduk / bersila / loncat ----------
 * Kaki pose dibuat sebagai rantai kapsul runcing (paha -> betis) tanpa outline,
 * dengan radius & panjang yang diturunkan dari kaki berdiri asli (lebar 114px,
 * paha ~265px, betis ~270px). Sendi lutut = lingkaran dengan radius yang sama
 * dengan ujung paha & pangkal betis, jadi tikungan lutut mulus (tidak ada tonjolan
 * hitam/berantakan seperti sebelumnya). Pada tampak depan, paha yang mengarah ke
 * penonton diperpendek (foreshortening); betis tetap panjang penuh. */

interface LegSpec {
  hip: Point;
  knee: Point;
  ankle: Point;
  /** pusat sepatu */
  foot: Point;
  footAngle: number;
}

const renderPlacedFoot = (part: AvatarPart, target: Point, angle: number, scale: number): string => {
  const cx = part.x + part.width / 2;
  const cy = part.y + part.height / 2;
  return (
    `<g transform="translate(${round1(target.x)} ${round1(target.y)}) rotate(${round1(angle)}) ` +
    `scale(${scale}) translate(${round1(-cx)} ${round1(-cy)})">${partElement(part)}</g>`
  );
};

/** kapsul runcing = trapesium + dua lingkaran (radius ujung = radius sendi) */
const capsule = (a: Point, ra: number, b: Point, rb: number, fill: string): string => {
  const ang = Math.atan2(b.y - a.y, b.x - a.x);
  const nx = -Math.sin(ang);
  const ny = Math.cos(ang);
  const q = (p: Point, r: number, s: number): string => `${round1(p.x + nx * r * s)},${round1(p.y + ny * r * s)}`;
  return (
    `<path d="M${q(a, ra, 1)} L${q(b, rb, 1)} L${q(b, rb, -1)} L${q(a, ra, -1)} Z" fill="${fill}"/>` +
    `<circle cx="${round1(a.x)}" cy="${round1(a.y)}" r="${ra}" fill="${fill}"/>` +
    `<circle cx="${round1(b.x)}" cy="${round1(b.y)}" r="${rb}" fill="${fill}"/>`
  );
};

const pointAlong = (a: Point, b: Point, t: number): Point => ({ x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) });

interface LegLayout {
  mode: CustomLegMode;
  hipY: number;
  pelvisDepth: number;
  pelvisSide: number;
  seamEnd: number;
  crotchEnd: number;
  footScale: number;
  right: LegSpec;
  left: LegSpec;
}

const mirrorX = (p: Point): Point => ({ x: 938 - p.x, y: p.y });
const mirrorLeg = (leg: LegSpec): LegSpec => ({
  hip: mirrorX(leg.hip),
  knee: mirrorX(leg.knee),
  ankle: mirrorX(leg.ankle),
  foot: mirrorX(leg.foot),
  footAngle: -leg.footAngle,
});

const footBelow = (ankle: Point, dx: number): Point => ({ x: ankle.x + dx, y: ankle.y + 31 });

const legLayout = (mode: CustomLegMode, dy: number): LegLayout => {
  if (mode === "sit") {
    const hipY = 950 + dy;
    const right: LegSpec = {
      hip: { x: 518, y: hipY },
      knee: { x: 556, y: hipY + 100 },
      ankle: { x: 544, y: 1494 },
      foot: footBelow({ x: 544, y: 1494 }, 3),
      footAngle: 5,
    };
    return { mode, hipY, pelvisDepth: 56, pelvisSide: 34, seamEnd: 34, crotchEnd: 32, footScale: 1, right, left: mirrorLeg(right) };
  }
  if (mode === "crossLegged") {
    const hipY = 1305;
    const right: LegSpec = {
      hip: { x: 520, y: hipY },
      knee: { x: 636, y: hipY + 108 },
      ankle: { x: 450, y: hipY + 178 },
      foot: { x: 408, y: hipY + 197 },
      footAngle: 38,
    };
    return { mode, hipY, pelvisDepth: 84, pelvisSide: 48, seamEnd: 55, crotchEnd: 48, footScale: 0.78, right, left: mirrorLeg({ ...right, ankle: { x: 450, y: hipY + 170 }, foot: { x: 408, y: hipY + 189 } }) };
  }
  if (mode === "squat") {
    const hipY = 950 + dy;
    const right: LegSpec = {
      hip: { x: 520, y: hipY + 2 },
      knee: { x: 612, y: hipY + 150 },
      ankle: { x: 556, y: hipY + 268 },
      foot: { x: 596, y: hipY + 296 },
      footAngle: 14,
    };
    return { mode, hipY, pelvisDepth: 54, pelvisSide: 30, seamEnd: 34, crotchEnd: 32, footScale: 0.9, right, left: mirrorLeg(right) };
  }
  // jump: lutut ditekuk ke depan, betis terlipat ke belakang — tampak depan = paha melebar, betis menyempit
  const hipY = 950 + dy;
  const right: LegSpec = {
    hip: { x: 518, y: hipY + 6 },
    knee: { x: 590, y: hipY + 118 },
    ankle: { x: 552, y: hipY + 262 },
    foot: footBelow({ x: 552, y: hipY + 262 }, 6),
    footAngle: 12,
  };
  return { mode, hipY, pelvisDepth: 54, pelvisSide: 30, seamEnd: 34, crotchEnd: 32, footScale: 0.92, right, left: mirrorLeg(right) };
};

const renderCustomLegs = (mode: CustomLegMode, bottom: BottomStyle, dy: number): string => {
  const shorts = bottom === "shorts";
  const footParts = { left: AVATAR_PARTS_BY_ID.leftFoot, right: AVATAR_PARTS_BY_ID.rightFoot };
  const layout = legLayout(mode, dy);
  const { hipY } = layout;

  const drawLeg = (leg: LegSpec, footPart: AvatarPart): string => {
    let out = "";
    if (shorts) {
      out += capsule(leg.knee, 47, leg.ankle, 40, C.skin);
      out += capsule(leg.hip, 50, leg.knee, 47, C.skin);
      out += capsule(leg.knee, 47, pointAlong(leg.knee, leg.ankle, 0.42), 43, C.skinShade).replace(/fill="[^"]+"/g, `fill="${C.skinShade}" opacity="0.28"`);
      out += renderPlacedFoot(footPart, leg.foot, leg.footAngle, layout.footScale);
      const hemAt = pointAlong(leg.hip, leg.knee, 0.8);
      out += capsule(leg.hip, 57, hemAt, 56, C.pants);
      out += bandAt(hemAt, angleOf(leg.hip, leg.knee), 112, 17, C.shortsHem, `<path d="M-48,0 L48,0" stroke="${C.shortsSeam}" stroke-width="2" opacity="0.9"/>`);
      return out;
    }
    out += capsule(leg.knee, 51, leg.ankle, 44, C.pants);
    out += renderPlacedFoot(footPart, leg.foot, leg.footAngle, layout.footScale);
    if (layout.mode === "sit") {
      // bayangan paha di atas betis: memberi kesan paha menjorok ke depan
      out += `<ellipse cx="${round1(leg.knee.x)}" cy="${round1(leg.knee.y + 60)}" rx="40" ry="11" fill="#1d1d27" opacity="0.5"/>`;
    }
    out += capsule(leg.hip, 56, leg.knee, 52, C.pants);
    if (layout.mode === "sit") {
      out += `<ellipse cx="${round1(leg.knee.x)}" cy="${round1(leg.knee.y - 16)}" rx="38" ry="22" fill="#3b3b4c" opacity="0.85"/>`;
    }
    // lipatan lembut di lutut (garis tipis, bukan outline)
    const kd = angleOf(leg.hip, leg.knee);
    out +=
      `<g transform="translate(${round1(leg.knee.x)} ${round1(leg.knee.y)}) rotate(${round1(kd)})">` +
      `<path d="M26,-30 Q34,0 26,30" fill="none" stroke="${C.shortsSeam}" stroke-width="2.5" stroke-linecap="round" opacity="0.28"/>` +
      `<path d="M38,-20 Q44,0 38,20" fill="none" stroke="${C.shortsSeam}" stroke-width="2" stroke-linecap="round" opacity="0.16"/>` +
      `</g>`;
    return out;
  };

  const { pelvisDepth: hipDepth, pelvisSide: hipSide, seamEnd, crotchEnd } = layout;
  const hipCenter = hipY + 4;
  const hipMarkup =
    `<path d="M350,${round1(hipY - 80)} C390,${round1(hipY - 100)} 548,${round1(hipY - 100)} 588,${round1(hipY - 80)} ` +
    `L598,${round1(hipY + hipSide)} C558,${round1(hipY + hipDepth - 8)} 514,${round1(hipY + hipDepth)} 469,${round1(hipY + hipDepth)} ` +
    `C424,${round1(hipY + hipDepth)} 380,${round1(hipY + hipDepth - 8)} 340,${round1(hipY + hipSide)} Z" fill="${C.pants}"/>` +
    `<path d="M469,${round1(hipY - 60)} L469,${round1(hipY + seamEnd)}" stroke="${C.shortsSeam}" stroke-width="3" opacity="0.55"/>` +
    `<path d="M469,${round1(hipCenter - 12)} C480,${round1(hipCenter + 4)} 486,${round1(hipCenter + 25)} 487,${round1(hipCenter + crotchEnd)}" ` +
    `fill="none" stroke="${C.shortsSeam}" stroke-width="2.5" opacity="0.45"/>`;

  const lap =
    layout.mode === "crossLegged"
      ? `<path d="M${round1(layout.left.hip.x)},${round1(hipY - 20)} L${round1(layout.right.hip.x)},${round1(hipY - 20)} ` +
        `L${round1(layout.right.knee.x)},${round1(layout.right.knee.y)} L${round1(layout.right.ankle.x)},${round1(layout.right.ankle.y)} ` +
        `L${round1(layout.left.ankle.x)},${round1(layout.left.ankle.y)} L${round1(layout.left.knee.x)},${round1(layout.left.knee.y)} Z" fill="${C.pants}"/>`
      : "";
  // paha belakang dulu agar tumpang-tindih dengan pinggul tidak terlihat sebagai tempelan
  return lap + drawLeg(layout.right, footParts.left) + drawLeg(layout.left, footParts.right) + hipMarkup;
};


/* ---------- properti pose ---------- */

const POSE_SHADOW = `<ellipse cx="469" cy="1562" rx="184" ry="23" fill="#6f7883" opacity="0.24"/>`;

const renderChair = (): string => {
  const wood = "#ab8c67";
  const woodLight = "#c0a17a";
  const woodDark = "#866c4e";
  const seat = "#5f6b7d";
  return (
    `<ellipse cx="469" cy="1566" rx="230" ry="26" fill="#6f7883" opacity="0.24"/>` +
    `<g transform="translate(0 26)">` +
    `<rect x="258" y="742" width="24" height="436" rx="11" fill="${wood}"/>` +
    `<rect x="652" y="742" width="24" height="436" rx="11" fill="${wood}"/>` +
    `<rect x="258" y="742" width="7" height="436" rx="3.5" fill="${woodLight}" opacity="0.75"/>` +
    `<rect x="652" y="742" width="7" height="436" rx="3.5" fill="${woodLight}" opacity="0.75"/>` +
    `<rect x="244" y="726" width="452" height="30" rx="14" fill="${wood}"/>` +
    `<rect x="244" y="726" width="452" height="10" rx="5" fill="${woodLight}" opacity="0.8"/>` +
    `<rect x="270" y="920" width="400" height="18" rx="8" fill="${woodDark}" opacity="0.85"/>` +
    `<rect x="270" y="920" width="400" height="6" rx="3" fill="${woodLight}" opacity="0.4"/>` +
    `<path d="M360,1168 L378,1528 Q379,1540 392,1540 L408,1540 Q421,1540 421,1528 L430,1168 Z" fill="${woodDark}" opacity="0.7"/>` +
    `<path d="M560,1168 L542,1528 Q541,1540 528,1540 L512,1540 Q499,1540 499,1528 L490,1168 Z" fill="${woodDark}" opacity="0.55"/>` +
    `<rect x="270" y="1154" width="400" height="30" rx="13" fill="${wood}"/>` +
    `<rect x="270" y="1154" width="400" height="10" rx="5" fill="${woodLight}" opacity="0.75"/>` +
    `<rect x="282" y="1142" width="376" height="26" rx="11" fill="${seat}"/>` +
    `<rect x="282" y="1142" width="376" height="9" rx="4.5" fill="#7a8798" opacity="0.75"/>` +
    `<path d="M300,1178 L284,1526 Q283,1540 297,1540 L317,1540 Q331,1540 333,1526 L336,1178 Z" fill="${wood}"/>` +
    `<path d="M640,1178 L656,1526 Q657,1540 643,1540 L623,1540 Q609,1540 607,1526 L604,1178 Z" fill="${wood}"/>` +
    `<path d="M304,1186 L294,1490" stroke="${woodLight}" stroke-width="5" opacity="0.6"/>` +
    `<path d="M636,1186 L646,1490" stroke="${woodLight}" stroke-width="5" opacity="0.55"/>` +
    `<rect x="322" y="1418" width="296" height="14" rx="6" fill="${woodDark}" opacity="0.85"/>` +
    `</g>`
  );
};

const renderCushion = (): string => {
  const dy = POSE_BODY.crossLegged;
  const cy = 950 + dy + 165;
  return (
    `<ellipse cx="469" cy="1545" rx="256" ry="28" fill="#6f7883" opacity="0.2"/>` +
    `<ellipse cx="469" cy="${round1(cy + 36)}" rx="238" ry="54" fill="#6f7b8c"/>` +
    `<ellipse cx="469" cy="${round1(cy + 19)}" rx="238" ry="54" fill="#8795a7"/>` +
    `<ellipse cx="469" cy="${round1(cy + 3)}" rx="232" ry="51" fill="#a4b1c1"/>` +
    `<ellipse cx="469" cy="${round1(cy + 10)}" rx="174" ry="35" fill="#b5c1cf" opacity="0.65"/>` +
    `<path d="M250,${round1(cy + 16)} Q469,${round1(cy + 74)} 688,${round1(cy + 16)}" ` +
    `fill="none" stroke="#6b7889" stroke-width="3" opacity="0.55"/>`
  );
};

const renderJumpShadow = (): string =>
  `<ellipse cx="469" cy="1548" rx="172" ry="29" fill="#5f6874" opacity="0.34"/>` +
  `<ellipse cx="469" cy="1548" rx="108" ry="15" fill="#5f6874" opacity="0.28"/>`;

const renderPhone = (
  cx: number,
  cy: number,
  rotate: number,
  scale: number,
  mode: "call" | "scroll"
): string => {
  const screenLines =
    mode === "call"
      ? `<circle cx="0" cy="-18" r="15" fill="#7e9f86"/>` +
        `<circle cx="0" cy="-18" r="7" fill="#d7e5d8"/>` +
        `<rect x="-20" y="5" width="40" height="5" rx="2.5" fill="#6f8499" opacity="0.55"/>` +
        `<rect x="-13" y="16" width="26" height="5" rx="2.5" fill="#6f8499" opacity="0.35"/>`
      : `<rect x="-30" y="-54" width="60" height="9" rx="4.5" fill="#557089" opacity="0.75"/>` +
        `<rect x="-30" y="-39" width="42" height="8" rx="4" fill="#557089" opacity="0.35"/>` +
        `<rect x="-30" y="-18" width="60" height="50" rx="7" fill="#f3f7fa" opacity="0.85"/>` +
        `<circle cx="-19" cy="-3" r="8" fill="#9fb4c7"/>` +
        `<rect x="-7" y="-9" width="34" height="6" rx="3" fill="#829bb0" opacity="0.65"/>` +
        `<rect x="-7" y="2" width="25" height="5" rx="2.5" fill="#829bb0" opacity="0.35"/>` +
        `<rect x="-30" y="44" width="60" height="48" rx="7" fill="#f3f7fa" opacity="0.75"/>` +
        `<circle cx="-19" cy="57" r="8" fill="#c3d0dc"/>` +
        `<rect x="-7" y="51" width="32" height="6" rx="3" fill="#829bb0" opacity="0.55"/>` +
        `<rect x="-7" y="62" width="23" height="5" rx="2.5" fill="#829bb0" opacity="0.3"/>`;
  return (
    `<g transform="translate(${round1(cx)} ${round1(cy)}) rotate(${rotate}) scale(${scale})">` +
    `<rect x="-38" y="-70" width="76" height="140" rx="13" fill="#222a37"/>` +
    `<rect x="-34" y="-66" width="68" height="132" rx="9" fill="#3d4959"/>` +
    `<rect x="-31" y="-58" width="62" height="112" rx="6" fill="#c7dbe8"/>` +
    screenLines +
    `<rect x="-12" y="-64" width="24" height="5" rx="2.5" fill="#1b2230" opacity="0.8"/>` +
    `<rect x="-15" y="58" width="30" height="4" rx="2" fill="#5c6a7a" opacity="0.85"/>` +
    `</g>`
  );
};

const renderPhoneWaves = (cx: number, cy: number): string =>
  `<g fill="none" stroke="#eef3f7" stroke-width="5" stroke-linecap="round" opacity="0.8">` +
  `<path d="M${round1(cx)},${round1(cy - 36)} Q${round1(cx + 20)},${round1(cy)} ${round1(cx)},${round1(cy + 36)}"/>` +
  `<path d="M${round1(cx + 17)},${round1(cy - 47)} Q${round1(cx + 44)},${round1(cy)} ${round1(cx + 17)},${round1(cy + 47)}"/>` +
  `</g>`;

const renderPhoneThumb = (cu: Point, rotation: number, side: ScreenSide): string =>
  `<g transform="translate(${round1(cu.x)} ${round1(cu.y)}) rotate(${rotation}) scale(${side === "right" ? -1 : 1} 1)">` +
  `<path d="M0,0 Q22,-6 31,5 Q36,14 25,18 Q8,20 0,8 Z" fill="${C.skin}"/>` +
  `<path d="M8,4 Q19,2 26,7" fill="none" stroke="${C.skinShade}" stroke-width="2" opacity="0.4" stroke-linecap="round"/>` +
  `</g>`;

const renderPhoneFingers = (cx: number, cy: number, rotate: number, scale: number): string =>
  `<g transform="translate(${round1(cx)} ${round1(cy)}) rotate(${rotate}) scale(${scale})">` +
  `<path d="M8,36 Q24,24 44,30 Q62,38 58,56 Q52,76 28,78 Q8,78 2,62 Q-2,48 8,36 Z" fill="${C.skin}"/>` +
  `<rect x="24" y="-34" width="27" height="19" rx="9.5" fill="${C.skin}"/>` +
  `<rect x="27" y="-10" width="28" height="19" rx="9.5" fill="${C.skin}"/>` +
  `<rect x="29" y="14" width="26" height="19" rx="9.5" fill="${C.skin}"/>` +
  `<path d="M30,-28 L48,-29 M33,-4 L51,-5 M35,20 L52,19" fill="none" stroke="${C.skinShade}" stroke-width="2" opacity="0.45" stroke-linecap="round"/>` +
  `<path d="M-24,24 Q-10,16 2,22 Q12,29 7,40 Q-3,50 -17,45 Q-29,39 -24,24 Z" fill="${C.skin}"/>` +
  `<path d="M-15,27 Q-6,24 0,29" fill="none" stroke="${C.skinShade}" stroke-width="2" opacity="0.4" stroke-linecap="round"/>` +
  `</g>`;

const renderSandwich = (cx: number, cy: number, rotate: number, scale = 1): string =>
  `<g transform="translate(${round1(cx)} ${round1(cy)}) rotate(${rotate}) scale(${scale})">` +
  `<path d="M-50,10 Q-54,30 -38,32 L38,32 Q53,30 49,10 Z" fill="#d8a15f"/>` +
  `<path d="M-52,10 Q-50,-5 -35,-2 L-20,4 L-3,-3 L16,4 L34,-2 Q50,-5 50,10 Z" fill="#e7bb77"/>` +
  `<path d="M-48,15 Q-32,8 -16,15 L0,9 L16,15 L32,8 L48,15 L46,21 Q26,15 0,20 Q-26,15 -46,21 Z" fill="#85ad69"/>` +
  `<rect x="-44" y="19" width="88" height="9" rx="4.5" fill="#a85248"/>` +
  `<path d="M-42,4 L40,4 L34,15 L-34,15 Z" fill="#edc84d"/>` +
  `<path d="M-37,-9 Q0,-28 37,-9 L33,2 Q0,-10 -33,2 Z" fill="#f1c982"/>` +
  `<g fill="#e2b36f"><circle cx="-25" cy="-4" r="2"/><circle cx="9" cy="-12" r="2"/><circle cx="22" cy="-5" r="2"/></g>` +
  `</g>`;

const renderFoodThumb = (cx: number, cy: number, rotation: number): string =>
  `<g transform="translate(${round1(cx)} ${round1(cy)}) rotate(${rotation})">` +
  `<path d="M-4,-2 Q12,-12 30,-6 Q42,2 36,18 Q28,32 8,30 Q-8,26 -10,12 Z" fill="${C.skin}"/>` +
  `<rect x="-46" y="-13" width="22" height="14" rx="7" fill="${C.skin}"/>` +
  `<rect x="-22" y="-11" width="22" height="14" rx="7" fill="${C.skin}"/>` +
  `<rect x="2" y="-13" width="21" height="14" rx="7" fill="${C.skin}"/>` +
  `<path d="M16,-24 Q26,-34 37,-27 Q44,-19 36,-11 Q28,-5 20,-13 Q14,-19 16,-24 Z" fill="${C.skin}"/>` +
  `<path d="M-42,-7 L-28,-7 M-18,-5 L-4,-5 M6,-7 L18,-7" fill="none" stroke="${C.skinShade}" stroke-width="2" opacity="0.45" stroke-linecap="round"/>` +
  `<path d="M24,-19 Q30,-15 30,-9" fill="none" stroke="${C.skinShade}" stroke-width="2" opacity="0.4" stroke-linecap="round"/>` +
  `</g>`;

const renderSandwichCrumbs = (cx: number, cy: number): string =>
  `<g fill="#e7bb77" opacity="0.9">` +
  `<circle cx="${round1(cx + 52)}" cy="${round1(cy + 28)}" r="3"/>` +
  `<circle cx="${round1(cx + 61)}" cy="${round1(cy + 38)}" r="2"/>` +
  `<circle cx="${round1(cx + 44)}" cy="${round1(cy + 44)}" r="2.2"/>` +
  `</g>`;

const renderScratchMarks = (x: number, y: number): string =>
  `<g fill="none" stroke="#f0dcc0" stroke-width="4.5" stroke-linecap="round" opacity="0.9">` +
  `<path d="M${round1(x)},${round1(y)} q10,-13 4,-25"/>` +
  `<path d="M${round1(x + 16)},${round1(y + 7)} q8,-15 0,-29"/>` +
  `<path d="M${round1(x + 33)},${round1(y + 15)} q5,-12 -2,-23"/>` +
  `</g>`;

const renderBoxTable = (lifted: boolean): string => {
  const tableTop = 1352;
  const floor = 1548;
  const tableLeft = 88;
  const tableRight = 436;
  const boxW = 144;
  const boxH = 104;
  const boxLeft = 214;
  const boxTop = tableTop - boxH - (lifted ? 42 : 0);
  const boxCenter = boxLeft + boxW / 2;

  const leg = (x: number, top: number, bottom: number, width: number, fill: string, opacity = 1): string =>
    `<path d="M${round1(x)},${round1(top)} L${round1(x + width)},${round1(top)} ` +
    `L${round1(x + width + 9)},${round1(bottom - 6)} Q${round1(x + width + 10)},${round1(bottom)} ${round1(x + width - 1)},${round1(bottom)} ` +
    `L${round1(x - 1)},${round1(bottom)} Q${round1(x - 10)},${round1(bottom)} ${round1(x - 8)},${round1(bottom - 6)} Z" ` +
    `fill="${fill}" opacity="${opacity}"/>`;

  return (
    `<ellipse cx="${round1((tableLeft + tableRight) / 2)}" cy="1554" rx="178" ry="20" fill="#6f7883" opacity="0.2"/>` +
    `<g>` +
    leg(170, tableTop + 16, floor - 12, 22, "#6d5238", 0.85) +
    leg(342, tableTop + 16, floor - 12, 22, "#6d5238", 0.85) +
    `<rect x="${tableLeft + 30}" y="1458" width="${tableRight - tableLeft - 60}" height="14" rx="6" fill="#7d5f41"/>` +
    leg(tableLeft + 26, tableTop + 18, floor, 32, "#967957") +
    leg(tableRight - 58, tableTop + 18, floor, 32, "#967957") +
    `<path d="M${tableLeft + 36},${tableTop + 44} L${tableLeft + 44},1520" stroke="#b99a72" stroke-width="4" opacity="0.55"/>` +
    `<path d="M${tableRight - 54},${tableTop + 44} L${tableRight - 62},1520" stroke="#b99a72" stroke-width="4" opacity="0.45"/>` +
    `<rect x="${tableLeft}" y="${tableTop}" width="${tableRight - tableLeft}" height="26" rx="9" fill="#8f6f4f"/>` +
    `<rect x="${tableLeft}" y="${tableTop}" width="${tableRight - tableLeft}" height="12" rx="6" fill="#c7a982"/>` +
    `<path d="M${tableLeft + 10},${tableTop + 17} L${tableRight - 10},${tableTop + 17}" stroke="#6d5238" stroke-width="2.5" opacity="0.55"/>` +
    `</g>` +
    `<ellipse cx="${round1(boxCenter + 4)}" cy="${round1(tableTop + 4)}" rx="77" ry="9" fill="#57606a" opacity="${lifted ? 0.24 : 0.16}"/>` +
    `<g>` +
    `<path d="M${boxLeft},${boxTop + 22} L${boxLeft + boxW},${boxTop + 22} L${boxLeft + boxW - 5},${boxTop} L${boxLeft + 7},${boxTop} Z" fill="#dcb283"/>` +
    `<rect x="${boxLeft}" y="${boxTop + 21}" width="${boxW}" height="${boxH - 21}" rx="4" fill="#c69a6a"/>` +
    `<path d="M${boxLeft + 11},${boxTop + 21} L${boxLeft + 11},${boxTop + boxH} M${boxLeft + boxW - 11},${boxTop + 21} L${boxLeft + boxW - 11},${boxTop + boxH}" stroke="#a97f54" stroke-width="2.5" opacity="0.65"/>` +
    `<path d="M${boxCenter - 15},${boxTop + 1} L${boxCenter - 15},${boxTop + boxH} M${boxCenter + 15},${boxTop + 1} L${boxCenter + 15},${boxTop + boxH}" stroke="#e8c89c" stroke-width="12" opacity="0.9"/>` +
    `<path d="M${boxCenter - 10},${boxTop + 38} l10,-9 l10,9 l-10,9 Z" fill="none" stroke="#8f6a45" stroke-width="2.5" opacity="0.65"/>` +
    `<path d="M${boxCenter},${boxTop + 42} L${boxCenter},${boxTop + 54}" stroke="#8f6a45" stroke-width="2.5" opacity="0.55"/>` +
    `<rect x="${boxLeft}" y="${boxTop + 21}" width="${boxW}" height="${boxH - 21}" rx="4" fill="none" stroke="#8f6a45" stroke-width="3" opacity="0.8"/>` +
    `<path d="M${boxCenter - 34},${boxTop + 4} Q${boxCenter},${boxTop - 22} ${boxCenter + 34},${boxTop + 4}" ` +
    `fill="none" stroke="#7a5c3e" stroke-width="9" stroke-linecap="round"/>` +
    `<path d="M${boxCenter - 30},${boxTop + 2} Q${boxCenter},${boxTop - 18} ${boxCenter + 30},${boxTop + 2}" ` +
    `fill="none" stroke="#a9855c" stroke-width="4" stroke-linecap="round" opacity="0.8"/>` +
    `</g>` +
    (lifted
      ? `<g fill="none" stroke="#f3efe4" stroke-width="4" stroke-linecap="round" opacity="0.8">` +
        `<path d="M${boxLeft + boxW + 20},${boxTop + 34} q13,13 0,26"/>` +
        `<path d="M${boxLeft + boxW + 38},${boxTop + 25} q19,22 0,44"/>` +
        `</g>`
      : `<g fill="none" stroke="#ece6d9" stroke-width="4" stroke-linecap="round" opacity="0.7">` +
        `<path d="M${boxLeft + boxW + 20},${boxTop + 10} q-10,16 0,32"/>` +
        `</g>`)
  );
};

/* ---------- assembler ---------- */

const buildLegacyAssembledSvg = (options: Required<AvatarOptions>): string => {
  const { width, height } = AVATAR_CANVAS;
  const blink = options.frame != null && isAvatarBlink(options.frame, options.fps, options.blinkSeed);
  const layers = resolveAvatarParts(options)
    .map((part) => (blink && isEyePart(part.id) ? blinkLidMarkup(part) : partElement(part)))
    .join("");
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">` +
    `<rect width="${width}" height="${height}" fill="#c0c1c2"/>${POSE_SHADOW}${layers}</svg>`
  );
};

/* ---------- gerak idle: napas, tumpuan kaki, kedip ----------
 * Kaki = tumpuan (tidak pernah bergerak, bayangan kontak tetap). Hanya badan
 * atas yang bernapas (skala dari pinggul) dan sedikit bergeser berat badan
 * (rotasi kecil di pinggul), kepala mengikuti dengan jeda — seperti rig
 * puppet-pin di After Effects dengan pin kaki dikunci. Kedip mata acak 3–7 detik
 * ada di isAvatarBlink(). Semua deterministik per frame (aman untuk render ulang). */

export interface AvatarIdleMotion {
  /** 0..1 fase napas (0 = habis hembus, 1 = penuh tarik) */
  breath: number;
  /** skala vertikal badan atas dari pinggul */
  chestScaleY: number;
  chestScaleX: number;
  /** rotasi pergeseran berat badan (derajat) di pinggul */
  sway: number;
  /** naik/turun kepala mengikuti bahu (px) */
  headLift: number;
  /** kemiringan kepala (derajat) */
  headTilt: number;
}

export const getAvatarIdleMotion = (frame: number, fps = 30, seed = 0): AvatarIdleMotion => {
  const t = Math.max(0, frame) / fps;
  const phase = Math.PI * 2 * (t / 4.2 + 0.05 * Math.sin((Math.PI * 2 * t) / 13 + seed * 2.3)) + seed * 1.7;
  // tarik napas sedikit lebih cepat dari hembus
  const raw = 0.5 - 0.5 * Math.cos(phase);
  const breath = Math.pow(raw, 1.25);
  const sway = Math.sin((Math.PI * 2 * t) / 7.3 + seed * 2.1) * 0.45;
  const rise = 0.011 * breath;
  return {
    breath,
    chestScaleY: 1 + rise,
    chestScaleX: 1 + rise * 0.45,
    sway,
    headLift: -(925 - 440) * rise * 0.9 + Math.sin(phase - 0.6) * 0.4,
    headTilt: -sway * 0.7 + Math.sin((Math.PI * 2 * t) / 9.1 + seed) * 0.5,
  };
};

/* ---------- animasi menggaruk kepala ----------
 * Gerak seperti manusia: siku TETAP RENDAH (di bawah bahu), lengan atas hanya mengayun
 * ke samping, lengan bawah menekuk naik lewat DEPAN badan (sweep \"inward\"; tidak keluar kanvas).
 * Setelah tangan sampai, ujung jari digerakkan bolak-balik kecil (~3,4 Hz) oleh IK
 * dengan solusi siku yang dikunci ke posisi akhir (hintElbow) supaya tidak melompat.
 * Kepala miring sedikit ke arah tangan. */

export interface ScratchHeadState {
  plan: ArmPlan;
  lift: number;
  rub: number;
}

const SCRATCH_TARGET: Point = { x: 545, y: 225 };
const SCRATCH_LIFT_SECONDS = 0.85;

export const getScratchHeadState = (t: number): ScratchHeadState => {
  const lift = clamp(t / SCRATCH_LIFT_SECONDS, 0, 1);
  const rest: ArmPlan = { ...AVATAR_ARM_REST.right };
  const finalPlan = solveArmIK("right", SCRATCH_TARGET, { reach: "fingertip", bend: "out", soft: 0.002, hand: "claw" });

  if (lift < 1) {
    return { plan: blendArmPlans(rest, finalPlan, lift, { sweep: "inward", forearmDelay: 0.12, maxElbowRise: 0 }), lift, rub: 0 };
  }

  // menggosok = lengan bawah berputar kecil di siku; lengan atas hampir diam
  const rub = smooth01((t - SCRATCH_LIFT_SECONDS) / 0.3);
  const phase = Math.PI * 2 * 3.4 * (t - SCRATCH_LIFT_SECONDS);
  const plan: ArmPlan = {
    side: "right",
    upper: round1(finalPlan.upper + Math.sin(phase + 0.9) * 0.8 * rub),
    lower: round1(finalPlan.lower + Math.sin(phase) * 3.2 * rub),
    hand: "claw",
  };
  return { plan, lift: 1, rub };
};

/* ---------- rencana pose ---------- */

const REST_PLANS = (): ArmPlan[] => [{ ...AVATAR_ARM_REST.left }, { ...AVATAR_ARM_REST.right }];

/** target ujung jari di koordinat DUNIA (kanvas) -> IK di ruang badan (dikurangi bodyDy) */
const ikTipWorld = (side: ScreenSide, x: number, y: number, dy: number, options: ArmIKOptions = {}): ArmPlan =>
  solveArmIK(side, { x, y: y - dy }, { reach: "fingertip", ...options });

interface PoseScene {
  bodyDy: number;
  bodyRotate: number;
  legMode?: CustomLegMode;
  plans: ArmPlan[];
  behind: string;
  afterArms: string;
  headTilt: number;
}

const resolveScene = (opt: Required<AvatarOptions>, manualPlans: ArmPlan[] | null): PoseScene => {
  const t = opt.frame != null ? opt.frame / opt.fps : 0;
  const scene: PoseScene = { bodyDy: 0, bodyRotate: 0, plans: [], behind: "", afterArms: "", headTilt: 0 };
  const L = legacyPlan;

  if (manualPlans !== null) {
    scene.plans = manualPlans;
    return scene;
  }

  switch (opt.pose) {
    case "sit": {
      scene.bodyDy = POSE_BODY.sit;
      scene.legMode = "sit";
      scene.behind = renderChair();
      scene.plans = [
        ikTipWorld("left", 428, 1112, scene.bodyDy),
        ikTipWorld("right", 510, 1112, scene.bodyDy),
      ];
      break;
    }
    case "crossLegged":
      scene.bodyDy = POSE_BODY.crossLegged;
      scene.legMode = "crossLegged";
      scene.behind = renderCushion();
      scene.plans = [L("left", 117.2, 79.8), L("right", 63.7, 100.2)];
      break;
    case "jump":
      scene.bodyDy = POSE_BODY.jump;
      scene.legMode = "jump";
      scene.behind = renderJumpShadow();
      scene.plans = [
        ikTipWorld("left", 150, 70, scene.bodyDy),
        ikTipWorld("right", 788, 70, scene.bodyDy),
      ];
      break;
    case "pointUp":
      scene.plans = [ikTipWorld("right", 726, 150, 0, { hand: "point" })];
      break;
    case "pointMiddle":
      // explainer: menunjuk ke kanan layar, siku sedikit tertekuk
      scene.plans = [ikTipWorld("right", 1030, 448, 0, { hand: "point", bend: "down" })];
      break;
    case "pointLeft":
      scene.plans = [ikTipWorld("left", -92, 448, 0, { hand: "point", bend: "down" })];
      break;
    case "pointDown":
      scene.plans = [{ side: "right", upper: 70, lower: 62, hand: "point" }];
      break;
    case "armsCrossed":
      scene.plans = [L("left", 151.3, 4), L("right", 36.8, 173.7)];
      break;
    case "chinRest":
      scene.plans = [L("left", 119, 8.5), L("right", 52.7, -104.9)];
      break;
    case "scratchHead": {
      const sc = getScratchHeadState(opt.frame == null ? 1.2 : t);
      scene.plans = [sc.plan];
      scene.headTilt = 3 * smooth01(sc.lift);
      const marks = clamp(sc.rub, 0, 1) * (0.55 + 0.45 * Math.sin(t * Math.PI * 2 * 3.4 * 0.5));
      scene.afterArms =
        opt.frame == null
          ? renderScratchMarks(566, 150)
          : marks > 0.05
            ? `<g opacity="${round1(marks * 10) / 10}">${renderScratchMarks(566, 150)}</g>`
            : "";
      break;
    }
    case "handsOnHips":
      scene.plans = [{ side: "left", upper: 150, lower: 62 }, { side: "right", upper: 30, lower: 118 }];
      break;
    case "pickUp":
      scene.bodyDy = POSE_BODY.squat;
      scene.bodyRotate = -5;
      scene.legMode = "squat";
      scene.plans = [L("left", 121, 85.1)];
      break;
    case "putDown":
      scene.bodyDy = POSE_BODY.squat;
      scene.bodyRotate = -5;
      scene.legMode = "squat";
      scene.plans = [L("left", 108.4, 90.9)];
      break;
    case "eating":
      scene.plans = [L("right", 61.1, -139.7)];
      scene.afterArms =
        renderSandwich(372, 342, -9, 1.12) + renderFoodThumb(394, 376, -12) + renderSandwichCrumbs(400, 396);
      break;
    case "phoneCall":
      scene.plans = [L("right", 36.1, -107.3)];
      scene.afterArms =
        renderPhone(588, 296, 7, 0.94, "call") +
        renderPhoneFingers(588, 296, 7, 0.94) +
        renderPhoneWaves(664, 282);
      break;
    case "scrolling":
      scene.plans = [L("left", -170.9, 47.3), L("right", -8.7, 133)];
      scene.afterArms =
        renderPhone(469, 710, -2, 1.08, "scroll") +
        renderPhoneThumb({ x: 440, y: 772 }, 170, "left") +
        renderPhoneThumb({ x: 500, y: 757 }, 12, "right");
      break;
    case "stand":
      break;
  }

  if (opt.pose === "pickUp" || opt.pose === "putDown") scene.behind = renderBoxTable(opt.pose === "pickUp");
  return scene;
};

/** SVG gabungan karakter utuh, termasuk pose & arah pandang. */
export const buildAssembledSvg = (options: AvatarOptions = {}): string =>
  buildAssembledSvgWithPlans(options, null);

/** SVG satu frame dengan sudut tulang FK manual — untuk animasi per frame
 * (interpolasi antar sudut di sisi pemakai; panjang tulang selalu tetap).
 * Pakai solveArmIK() untuk membuat ArmPlan dari target tangan. */
export const buildAssembledSvgFrame = (options: AvatarOptions = {}, plans: ArmPlan[]): string =>
  buildAssembledSvgWithPlans(options, plans);

const buildAssembledSvgWithPlans = (options: AvatarOptions, manualPlans: ArmPlan[] | null): string => {
  const opt = resolveAvatarOptions(options);
  const animated = opt.frame != null;

  if (manualPlans === null && opt.pose === "stand" && opt.headDirection === "front" && !animated) {
    return buildLegacyAssembledSvg(opt);
  }

  const blink = animated && isAvatarBlink((opt.frame as number) + opt.blinkTimeOffset * opt.fps, opt.fps, opt.blinkSeed);
  const idle = animated && opt.idle ? getAvatarIdleMotion(opt.frame as number, opt.fps, opt.blinkSeed) : null;
  const scene = resolveScene(opt, manualPlans);

  // lengan yang tidak diatur pose tetap dirender oleh rig (posisi istirahat) agar bahu seragam
  const plans: ArmPlan[] = REST_PLANS().map((rest) => scene.plans.find((p) => p.side === rest.side) ?? rest);

  const parts = resolveAvatarParts(opt);
  const headParts = parts.filter((part) => part.group === "head");
  const lowerParts = scene.legMode ? [] : parts.filter((part) => part.group === "lowerBody");
  const torsoParts = parts.filter((part) => {
    if (part.group !== "upperBody") return false;
    if (part.id === "leftArm" || part.id === "rightArm") return false;
    if (/^(left|right)Arm/.test(part.id)) return false;
    if (part.id === "watch") return false;
    return true;
  });

  const headBase = buildHeadGroup(headParts, opt.headDirection, blink);
  const headLift = idle ? idle.headLift : 0;
  const headTilt = scene.headTilt + (idle ? idle.headTilt : 0);
  const headTransform = [
    headLift !== 0 ? `translate(0 ${round1(headLift)})` : "",
    headTilt !== 0 ? `rotate(${round1(headTilt)} 469 440)` : "",
  ].filter(Boolean).join(" ");
  const swayHead = idle ? `rotate(${round1(idle.sway)} 469 925) ` : "";
  const headFull = swayHead + headTransform;
  const headMarkup = headFull ? `<g transform="${headFull}">${headBase}</g>` : headBase;

  const armsMarkup = plans
    .map((plan) => renderArm(plan, opt.top, opt.watch && plan.side === "right"))
    .join("");

  const chestTransform = idle
    ? `translate(469 925) rotate(${round1(idle.sway)}) scale(${round1(idle.chestScaleX * 1000) / 1000} ${round1(idle.chestScaleY * 1000) / 1000}) translate(-469 -925)`
    : "";
  const chest = (markup: string): string => (chestTransform ? `<g transform="${chestTransform}">${markup}</g>` : markup);

  const bodyTransform = [
    scene.bodyDy !== 0 ? `translate(0 ${scene.bodyDy})` : "",
    scene.bodyRotate !== 0 ? `rotate(${scene.bodyRotate} 469 925)` : "",
  ].filter(Boolean).join(" ");
  const bodyWrap = bodyTransform ? ` transform="${bodyTransform}"` : "";

  const customLegsMarkup = scene.legMode ? renderCustomLegs(scene.legMode, opt.bottom, scene.bodyDy) : "";

  const standing = !scene.legMode;
  const bodyMarkup =
    `<g${bodyWrap}>` +
    chest(torsoParts.map(partElement).join("")) +
    headMarkup +
    chest(armsMarkup + scene.afterArms) +
    `</g>`;

  // Lebar kanvas melebar otomatis bila tangan menunjuk keluar dari 940px (karakter tetap di tengah).
  // PENTING: ukuran frame tidak boleh berubah antar frame animasi (encoder akan menyamakan ukuran
  // sehingga karakter tampak "gepeng"). Maka untuk animasi / plan manual, pad dihitung dari pose
  // statis akhir (konstan), atau dari opsi canvasPad.
  const padPlans =
    manualPlans === null && animated
      ? REST_PLANS().map((rest) => resolveScene({ ...opt, frame: null }, null).plans.find((p) => p.side === rest.side) ?? rest)
      : plans;
  let pad = 0;
  if (opt.canvasPad >= 0) {
    pad = opt.canvasPad;
  } else if (manualPlans === null) {
    for (const plan of padPlans) {
      const tip = solveArmFK(plan).fingertip;
      pad = Math.max(pad, tip.x + 40 - AVATAR_CANVAS.width, 0 - (tip.x - 40));
    }
    pad = pad > 0 ? Math.ceil(pad / 10) * 10 : 0;
  }

  const { width, height } = AVATAR_CANVAS;
  const totalW = width + pad * 2;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-pad} 0 ${totalW} ${height}" width="${totalW}" height="${height}">` +
    `<rect x="${-pad}" width="${totalW}" height="${height}" fill="#c0c1c2"/>` +
    scene.behind +
    (standing ? POSE_SHADOW : "") +
    (scene.legMode ? customLegsMarkup : lowerParts.map(partElement).join("")) +
    bodyMarkup +
    `</svg>`
  );
};
