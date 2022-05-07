import { LoadingScreen } from 'client/components/LoadingScreen';
import { useStore } from 'client/store';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'client/styles/style.scss';

export default function App({ Component, pageProps: { state, ...pageProps } }) {
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
