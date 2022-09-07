import styled from "astroturf/react";
import { Tabs } from "components/Tabs";
import { productTabs } from "consts/productTabs";
import { ProductDto } from "interfaces/product";
import React from "react";
import { Gallery } from "./Gallery";

type Props = {
  product?: ProductDto;
};

export const ProductPage = ({ product }: Props) => {
  return product ? (
    <Container>
      <Header>{product.page.name}</Header>

      <Content>
        <Gallery items={product.images} path={product.page.path} />
      </Content>

      <Tabs items={productTabs} />
    </Container>
  ) : null;
};

const Container = styled.div`
  @import "variables";
  display: grid;
  grid: max-content auto max-content / auto;
  grid-gap: 20px;
  margin: 0 100px;
  flex: 1 0;

  @include respond-to(large) {
    margin: 0 75px;
  }

  @include respond-to(medium) {
    margin: 0 50px;
  }

  @include respond-to(middle) {
    margin: 0 30px;
  }
`;

const Header = styled.h1`
  text-align: center;
`;

const Content = styled.div`
  @import "variables";
  display: flex;
  justify-content: center;
`;
