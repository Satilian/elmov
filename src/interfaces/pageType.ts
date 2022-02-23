import { NextPage } from 'next';
import { TState } from 'store';

export type PageType = NextPage & { getLayout?: (page: JSX.Element) => JSX.Element };

export type PageProps = {
  initialReduxState: TState;
  [key: string]: unknown;
};
