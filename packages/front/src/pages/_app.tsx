import { PageProps, PageType } from "interfaces/page";
import { getCategoryTree } from "modules/category/categoryState";
import App, { AppContext } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { configureStore } from "store";
import "styles/style.scss";

type Props = {
  Component: PageType;
  pageProps: PageProps;
};

export default function _App({ Component, pageProps }: Props) {
  const { store, persistor } = configureStore(pageProps.state);
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

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
  await store.dispatch(getCategoryTree());
  const { pageProps } = await App.getInitialProps(appContext);

  return {
    pageProps: {
      ...pageProps,
      state: {
        category: store.getState().category,
        ...pageProps.state,
      },
    },
  };
};
