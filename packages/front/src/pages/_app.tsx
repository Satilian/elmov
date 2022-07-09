import { PageProps, PageType } from "interfaces/page";
import { getCategoryTree } from "modules/category/categoryState";
import App, { AppContext } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { configureStore } from "store";
import "styles/style.scss";

type Props = {
  Component: PageType;
  pageProps: PageProps;
};

export default function _App({ Component, pageProps: { initialState, ...pageProps } }: Props) {
  const { store, persistor } = configureStore(initialState);
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);
  console.log("isServer", typeof window === undefined);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {getLayout(<Component {...pageProps} />)}
      </PersistGate>
    </Provider>
  );
}

_App.getInitialProps = async (appContext: AppContext) => {
  const { store } = configureStore();

  const props = await App.getInitialProps(appContext);

  await store.dispatch(getCategoryTree());

  return {
    ...props,
    pageProps: {
      ...props.pageProps,
      initialState: { ...props.pageProps.initialState, ...store.getState() },
    },
  };
};
