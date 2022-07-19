import styled from "astroturf/react";
import { imagePath } from "consts/common";
import { Button } from "elements/Button";
import { ProductDto } from "interfaces/product";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  product: ProductDto;
};

export const Preview = ({ product }: Props) => {
  const { images, page, price } = product;
  const { asPath } = useRouter();

  return (
    <Link href={`${asPath}/${product.page.path}`} passHref>
      <Container>
        <ImgContainer>
          <ImageWrapper>
            <Image
              src={`${imagePath}${product.page.path}/${images[0]?.src}`}
              alt="image"
              layout="fill"
            />
          </ImageWrapper>

          <Btn side="left" size="small">
            Купить
          </Btn>

          <Btn side="right" size="small">
            В корзину
          </Btn>
        </ImgContainer>

        <Name>{page.name}</Name>

        <Name>
          <b>{price}</b>&nbsp; руб.
        </Name>
      </Container>
    </Link>
  );
};

const Container = styled.a`
  @import "variables";
  text-decoration: none;
  position: relative;
  display: flex;
  flex-flow: column;
  transition: all 0.6s ease;
  color: $black;
  font-family: Roboto;

  &:hover {
    box-shadow: 0 22px 43px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
`;

const ImgContainer = styled.div`
  @import "variables";
  position: relative;
  border: 1px solid $green;
  display: flex;
  justify-content: center;
  flex: 1 0;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 80%;
  height: 12vw;

  img {
    width: 100%;
    max-height: 80%;
  }
`;

const Btn = styled(Button)<{ side: string }>`
  @import "variables";
  position: absolute;
  bottom: 0;
  background: $green;

  &.side-left {
    left: 0;
  }

  &.side-right {
    right: 0;
    color: $white;
  }
`;

const Name = styled.div`
  font-size: 1.5vw;
  min-height: 1.6vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
