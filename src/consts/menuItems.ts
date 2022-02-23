import { MenuItemType } from 'interfaces/menuItem';
import { IRout } from 'interfaces/rout';
import { topMenuRouts } from '../routs/menuRouts';

const getMenuItems = (routs: Record<string, IRout>): any[] =>
  Object.values(routs).map(({ subRouts, ...item }) =>
    subRouts ? { ...item, subRouts: getMenuItems(subRouts) } : item,
  );

export const menuItems = getMenuItems(topMenuRouts);

const getMenuMap = (map: Map<string, Omit<MenuItemType, 'subRouts'>>, routs?: MenuItemType[]) =>
  routs?.forEach(({ subRouts, ...item }) => {
    map.set(item.link, item);
    getMenuMap(map, subRouts);
  });

export const menuMap = new Map();
getMenuMap(menuMap, menuItems);
