import React from 'react';
import { getLayout } from 'client/components/Layout';
import { Main } from 'client/components/Main';

const Home = () => {
  return <Main />;
};

Home.getLayout = getLayout;

export default Home;
