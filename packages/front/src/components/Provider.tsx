import { useInitialData } from "hooks/useInitialData";
import { useMenu } from "hooks/useMenu";
import { InitialDataType } from "interfaces/common";
import React, { createContext, ReactNode } from "react";

export type DataContextType = ReturnType<typeof useInitialData> & ReturnType<typeof useMenu>;

export const Context = createContext<DataContextType>({} as DataContextType);

type Props = {
  initialData?: InitialDataType;
  children: ReactNode;
};

export const Provider = ({ children, initialData }: Props) => {
  const data = useInitialData(initialData);
  const menu = useMenu();

  return <Context.Provider value={{ ...data, ...menu }}>{children}</Context.Provider>;
};
