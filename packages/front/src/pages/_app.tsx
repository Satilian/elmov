import { useSkipFirstEffect } from "hooks/useSkipFirstEffect";
import { PageProps, PageType } from "interfaces/common";
import App, { AppContext } from "next/app";
import { Provider } from "react-redux";
import { configureStore, hydrate, useStore } from "store";
import "styles/style.scss";

type Props = {
  Component: PageType;
  pageProps: PageProps;
};

export default function _App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);
  const store = useStore(pageProps.state);

  useSkipFirstEffect(() => {
    store.dispatch(hydrate(pageProps.state));
  }, [pageProps.state]);

  return <Provider store={store}>{getLayout(<Component {...pageProps} />, pageProps)}</Provider>;
}

_App.getInitialProps = async (appContext: AppContext) => {
  configureStore();

  return await App.getInitialProps(appContext);
};
