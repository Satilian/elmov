import { NextPage } from "next";
import { AppState } from "store";

export type PageType = NextPage<PageProps> & {
  getLayout?: (page: JSX.Element, pageProps: PageProps) => JSX.Element;
};

export type PageProps = {
  state: AppState;
  [key: string]: unknown;
};
