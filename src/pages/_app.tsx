import { LoadingScreen } from 'components/LoadingScreen';
import { PageType } from 'interfaces/pageType';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { State, useStore } from 'store';
import 'styles/style.scss';

type Props = {
  Component: PageType;
  pageProps: { state?: State; [key: string]: unknown };
};

export default function App({ Component, pageProps: { state, ...pageProps } }: Props) {
  const { store, persistor } = useStore(state);
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        {getLayout(<Component {...pageProps} />)}
      </PersistGate>
    </Provider>
  );
}
