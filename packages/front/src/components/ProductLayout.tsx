import styled from "astroturf/react";
import { PageProps } from "interfaces/common";
import { ProductPage } from "modules/product/Product";
import React, { ReactNode } from "react";
import { Layout } from "./Layout";

type Props = {
  children?: ReactNode;
};

export const ProductLayout = ({ children }: Props) => (
  <Container>
    <ProductPage />
    {children}
  </Container>
);

export const getProductLayout = (page: JSX.Element, props: PageProps) => (
  <Layout {...props}>
    <ProductLayout>{page}</ProductLayout>
  </Layout>
);

const Container = styled.div`
  flex: 1 0;
`;
