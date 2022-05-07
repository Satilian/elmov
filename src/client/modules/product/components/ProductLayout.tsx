import styled from 'astroturf/react';
import { Layout } from 'client/components/Layout';
import { ProductPage } from 'client/modules/product/Product';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const ProductLayout = ({ children }: Props) => (
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
