export * from './Steam';
export * from './LittlePlant2';
export * from './StreetLight';
export * from './FenceHome';
export * from './Bush4';
export * from './LittlePlant1';
export * from './House2';
export * from './House';
export * from './Bush2';
export * from './Bush3';
export * from './Tree2';
export * from './Tree1';
export * from './Door1Home2';
export * from './Door1Home';

import type { CompData } from '../../ae';
import { steamComp } from './Steam';
import { littlePlant2Comp } from './LittlePlant2';
import { streetLightComp } from './StreetLight';
import { fenceHomeComp } from './FenceHome';
import { bush4Comp } from './Bush4';
import { littlePlant1Comp } from './LittlePlant1';
import { house2Comp } from './House2';
import { houseComp } from './House';
import { bush2Comp } from './Bush2';
import { bush3Comp } from './Bush3';
import { tree2Comp } from './Tree2';
import { tree1Comp } from './Tree1';
import { door1Home2Comp } from './Door1Home2';
import { door1HomeComp } from './Door1Home';

/** Registry semua part (nama comp AE → data) */
export const PARTS: Record<string, CompData> = {
  'Steam': steamComp,
  'Little Plant 2': littlePlant2Comp,
  'Street Light': streetLightComp,
  'Fence Home': fenceHomeComp,
  'Bush 4': bush4Comp,
  'Little Plant 1': littlePlant1Comp,
  'House 2': house2Comp,
  'House': houseComp,
  'Bush 2': bush2Comp,
  'Bush 3': bush3Comp,
  'Tree 2': tree2Comp,
  'Tree 1': tree1Comp,
  'Door 1 Home 2': door1Home2Comp,
  'Door 1 Home': door1HomeComp,
};
