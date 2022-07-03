import { NextPage } from "next";
import { AppState } from "store";

export type PageType = NextPage & { getLayout?: (page: JSX.Element) => JSX.Element };

export type PageProps = {
  initialState: AppState;
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
