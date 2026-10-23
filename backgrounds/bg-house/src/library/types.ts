import type { LayerData } from '../ae';

/** Potongan scenery (shape layer) milik comp utama. Transform-nya diatur di config.ts. */
export type SceneryData = Pick<LayerData, 'name' | 'contents' | 'masks' | 'fx'>;
