import { isServer } from "consts/common";
import { PageProps, PageType } from "interfaces/page";
import { getCategoryTree } from "modules/category/categoryState";
import App, { AppContext } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate as DefaultGate } from "redux-persist/integration/react";
import { configureStore } from "store";
import "styles/style.scss";
import { getPartialState } from "util/getPartialState";

type Props = {
  Component: PageType;
  pageProps: PageProps;
};

export default function _App({ Component, pageProps }: Props) {
  const { store, persistor } = configureStore(pageProps.initialState);
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);
  const PersistGate = isServer() ? ({ children }: Record<string, any>) => children : DefaultGate;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </PersistGate>
    </Provider>
  );
}

_App.getInitialProps = async (appContext: AppContext) => {
  const { store } = configureStore();

  const props = await App.getInitialProps(appContext);
  console.log("props", props);

  await store.dispatch(getCategoryTree());

  return {
    ...props,
    pageProps: {
      ...props.pageProps,
      initialState: getPartialState(["category", "product"], store.getState()),
    },
  };
};
