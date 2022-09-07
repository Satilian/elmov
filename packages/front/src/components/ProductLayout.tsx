import styled from "astroturf/react";
import { PageProps } from "interfaces/common";
import { ProductDto } from "interfaces/product";
import { ProductPage } from "modules/product/Product";
import React, { ReactNode } from "react";
import { Layout } from "./Layout";

type Props = {
  children?: ReactNode;
  product?: ProductDto;
};

export const ProductLayout = ({ children, product }: Props) => (
  <Container>
    <ProductPage product={product} />
    {children}
  </Container>
);

export const getProductLayout = (page: JSX.Element, props: PageProps<{ product?: ProductDto }>) => (
  <Layout {...props}>
    <ProductLayout product={props.product}>{page}</ProductLayout>
  </Layout>
);

const Container = styled.div`
  flex: 1 0;
`;
