import { ProductPage } from 'modules/product/Product';
import { Layout } from 'components/Layout';
import styled from 'astroturf/react';

type Props = {
  children?: React.ReactNode;
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
