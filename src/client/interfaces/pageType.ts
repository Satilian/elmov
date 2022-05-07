import { NextPage } from 'next';

export type PageType = NextPage & { getLayout?: (page: JSX.Element) => JSX.Element };
