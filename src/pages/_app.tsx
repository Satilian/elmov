import React from 'react';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  return getLayout(<Component {...pageProps} />);
}
