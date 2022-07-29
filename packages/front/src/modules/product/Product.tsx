import styled from "astroturf/react";
import { Tabs } from "components/Tabs";
import { productTabs } from "consts/productTabs";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { Gallery } from "./components/Gallery/Gallery";
import { selectProduct } from "./productState";

export const ProductPage = () => {
  const {
    query: { prod },
  } = useRouter();
  const { images = [] } = useSelector(selectProduct);

  return (
    <Container>
      <Header>{prod}</Header>

      <Content>
        <Gallery items={images} path={String(prod)} />
      </Content>

      <Tabs items={productTabs} />
    </Container>
  );
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
