import styled from "astroturf/react";
import { Preview } from "components/Preview";
import { ProductDto } from "interfaces/product";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  productList: ProductDto[];
};

export const Category = ({ productList }: Props) => {
  const { asPath } = useRouter();

  return (
    <Container>
      <h1>{asPath}</h1>

      <Content>
        {productList.map((product: ProductDto) => (
          <Preview key={product.id} product={product} />
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  flex: 1 0;
  h1 {
    text-align: center;
  }
`;

const Content = styled.div`
  @import "variables";
  display: grid;
  grid: auto / 1fr 1fr 1fr 1fr;
  grid-gap: 100px;
  margin: 100px;
  @include respond-to(large) {
    grid: auto / 1fr 1fr 1fr;
  }
  @include respond-to(medium) {
    grid-gap: 50px;
    margin: 50px;
  }
  @include respond-to(middle) {
    grid-gap: 30px;
    margin: 30px;
  }
`;
