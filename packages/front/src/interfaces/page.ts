import { NextPage } from "next";
import { AppState } from "store";

export type PageType = NextPage<PageProps> & {
  getLayout?: (page: JSX.Element, pageProps: PageProps) => JSX.Element;
};

export type PageProps = {
  state: Partial<AppState>;
  [key: string]: unknown;
};

export type PageTypeDto = {
  id: string;
  name: string;
};

export type PageDto = {
  id: string;
  path: string;
  name: string;
  type: PageTypeDto;
};
