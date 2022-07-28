import { getCategoryTree } from "modules/category/categoryState";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { AppState, store } from "store";

const initData = async () => {
  await store.dispatch(getCategoryTree());
};

type Options = {
  keys?: (keyof AppState)[];
  req: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>["req"];
};

export const getPartialState = async ({ keys = [], req }: Options) => {
  const isFirstPage = !req.url?.startsWith("/_next/data");
  const defaultKeys: (keyof AppState)[] = isFirstPage ? ["category", ...keys] : keys;
  isFirstPage && (await initData());
  const state = store.getState();

  return defaultKeys.reduce<AppState>((partial: any, key) => {
    partial[key] = state[key];
    return partial;
  }, {} as AppState);
};
