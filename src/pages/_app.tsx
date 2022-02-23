import { PageProps, PageType } from 'interfaces/pageType';
import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from 'store';
import 'styles/style.scss';

type Props = {
  Component: PageType;
  pageProps: PageProps;
};

export default function App({ Component, pageProps: { initialReduxState, ...pageProps } }: Props) {
  const store = useStore(initialReduxState);
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
}
