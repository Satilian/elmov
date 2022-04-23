import { NextPage } from 'next';
import { State } from 'store';

export type PageType = NextPage & { getLayout?: (page: JSX.Element) => JSX.Element };

export type PageProps = {
  initialReduxState: State;
  [key: string]: unknown;
};
