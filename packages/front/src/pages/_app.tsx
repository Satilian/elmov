import { PageProps, PageType } from "interfaces/page";
import { getCategoryTree } from "modules/category/categoryState";
import App, { AppContext } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { configureStore, useStore } from "store";
import "styles/style.scss";

type Props = {
  Component: PageType;
  pageProps: PageProps;
};

export default function _App({ Component, pageProps: { initialState, ...pageProps } }: Props) {
  const store = useStore(initialState);
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
}

_App.getInitialProps = async (appContext: AppContext) => {
  const store = configureStore();
  await store.dispatch(getCategoryTree());
  const props = await App.getInitialProps(appContext);

  return {
    ...props,
    pageProps: {
      ...props.pageProps,
      initialState: { ...props.pageProps.initialState, ...store.getState() },
    },
  };
};
