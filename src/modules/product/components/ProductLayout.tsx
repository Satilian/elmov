import { ProductPage } from 'modules/product/Product';
import React, { FC } from 'react';
import { Layout } from 'components/Layout';
import styled from 'astroturf/react';

export const ProductLayout: FC = ({ children }) => (
  <Container>
    <ProductPage />
    {children}
  </Container>
);

export const getProductLayout = (page: JSX.Element) => (
  <Layout>
    <ProductLayout>{page}</ProductLayout>
  </Layout>
);

const Container = styled.div`
  flex: 1 0;
`;
