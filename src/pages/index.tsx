import { getLayout } from 'components/Layout';
import { Main } from 'components/Main';
import { PageType } from 'interfaces/pageType';
import { getAllCategories } from 'modules/category/categoryState';
import { GetServerSideProps } from 'next';
import React from 'react';
import { initStore } from 'store';

const Home: PageType = () => {
  return <Main />;
};

Home.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = async () => {
  const { store } = initStore();
  await store.dispatch(getAllCategories());

  return {
    props: {
      state: store.getState(),
    },
  };
};

export default Home;
