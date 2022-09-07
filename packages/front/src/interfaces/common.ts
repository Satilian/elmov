import { NextPage } from "next";
import { CategoryDto } from "./category";

export type PageType = NextPage<PageProps> & {
  getLayout?: (page: JSX.Element, pageProps: PageProps) => JSX.Element;
};

export type PageProps<T = { [key: string]: unknown }> = T & {
  initialData?: InitialDataType;
};

export type InitialDataType = {
  menuItems: CategoryDto[];
};
