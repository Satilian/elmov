import { NextPage } from 'next';
import React from 'react';
import 'styles/style.scss';

type Props = {
  Component: NextPage;
  pageProps: Record<string, any>;
};

export default function App({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}
