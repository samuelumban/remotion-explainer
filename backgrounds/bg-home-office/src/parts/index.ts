// Every After Effects composition of the original project, one file each.
export { bgHomeOfficeComp, BGHomeOffice } from './BGHomeOffice';
export { table9Office2Comp, Table9Office2 } from './Table9Office2';
export { laptopBack2Comp, LaptopBack2 } from './LaptopBack2';
export { mugComp, Mug } from './Mug';
export { tablePicture3BackComp, TablePicture3Back } from './TablePicture3Back';
export { chairFrontComp, ChairFront } from './ChairFront';
export { drawerComp, Drawer } from './Drawer';
export { printerComp, Printer } from './Printer';
export { plantComp, Plant } from './Plant';
export { plant2Comp, Plant2 } from './Plant2';
export { window5OfficeComp, Window5Office } from './Window5Office';
export { smallTree4Comp, SmallTree4 } from './SmallTree4';
export { clockComp, Clock } from './Clock';
export { shelfWithBooksComp, ShelfWithBooks } from './ShelfWithBooks';

import { bgHomeOfficeComp, BGHomeOffice } from './BGHomeOffice';
import { table9Office2Comp, Table9Office2 } from './Table9Office2';
import { laptopBack2Comp, LaptopBack2 } from './LaptopBack2';
import { mugComp, Mug } from './Mug';
import { tablePicture3BackComp, TablePicture3Back } from './TablePicture3Back';
import { chairFrontComp, ChairFront } from './ChairFront';
import { drawerComp, Drawer } from './Drawer';
import { printerComp, Printer } from './Printer';
import { plantComp, Plant } from './Plant';
import { plant2Comp, Plant2 } from './Plant2';
import { window5OfficeComp, Window5Office } from './Window5Office';
import { smallTree4Comp, SmallTree4 } from './SmallTree4';
import { clockComp, Clock } from './Clock';
import { shelfWithBooksComp, ShelfWithBooks } from './ShelfWithBooks';
import type React from 'react';
import type { CompDef } from '../ae';

/** Registry used by Root.tsx to expose each part as its own Remotion composition. */
export const PARTS: { id: string; comp: CompDef; Component: React.FC }[] = [
  { id: 'BGHomeOffice', comp: bgHomeOfficeComp, Component: BGHomeOffice },
  { id: 'Table9Office2', comp: table9Office2Comp, Component: Table9Office2 },
  { id: 'LaptopBack2', comp: laptopBack2Comp, Component: LaptopBack2 },
  { id: 'Mug', comp: mugComp, Component: Mug },
  { id: 'TablePicture3Back', comp: tablePicture3BackComp, Component: TablePicture3Back },
  { id: 'ChairFront', comp: chairFrontComp, Component: ChairFront },
  { id: 'Drawer', comp: drawerComp, Component: Drawer },
  { id: 'Printer', comp: printerComp, Component: Printer },
  { id: 'Plant', comp: plantComp, Component: Plant },
  { id: 'Plant2', comp: plant2Comp, Component: Plant2 },
  { id: 'Window5Office', comp: window5OfficeComp, Component: Window5Office },
  { id: 'SmallTree4', comp: smallTree4Comp, Component: SmallTree4 },
  { id: 'Clock', comp: clockComp, Component: Clock },
  { id: 'ShelfWithBooks', comp: shelfWithBooksComp, Component: ShelfWithBooks },
];
