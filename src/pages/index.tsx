import { getLayout } from 'components/Layout';
import { Main } from 'components/Main';
import { PageType } from 'interfaces/pageType';
import { GetServerSideProps } from 'next';
import React from 'react';

const Home: PageType = () => {
  return <Main />;
};

Home.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      /* state: {
        ui: {
          menu: {
            subMenu: '/transport',
            isOpen: true,
          },
        },
      }, */
    },
  };
};

export default Home;
