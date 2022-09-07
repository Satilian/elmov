import { useState } from "react";

export const useMenu = () => {
  const [subMenu, setSubMenu] = useState<string | undefined>();

  const handleSetSubMenu = (name?: string) => setSubMenu(name);

  return { subMenu, setSubMenu: handleSetSubMenu };
};
