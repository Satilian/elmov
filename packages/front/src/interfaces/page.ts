import { NextPage } from "next";
import { AppState } from "store";

export type PageType = NextPage<PageProps> & {
  getLayout?: (page: JSX.Element, pageProps: PageProps) => JSX.Element;
};

export type PageProps = {
  initialState: Partial<AppState>;
  [key: string]: unknown;
};

export type CategoryDto = {
  id: string;
  page: {
    name: string;
    path: string;
  };
  image?: {
    src: string;
  };
  childrens: CategoryDto[];
};
