import { IRout } from './rout';

export type MenuItemType = Omit<IRout, 'subRouts'> & { subRouts: MenuItemType[] };
