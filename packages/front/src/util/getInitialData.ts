import { categoryRep } from "api/categoryRep";

export const getInitialData = async () => {
  const menuItems = await categoryRep.fetchTree();

  return { menuItems };
};
