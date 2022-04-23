import styled from 'astroturf/react';
import { imagePath } from 'consts/common';
import { Button } from 'components/Button';
import { categorySelectors } from 'modules/category/categoryState';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

interface IProps {
  id: string;
}

export const Preview = ({ id }: IProps) => {
  const { image, name, price } = useSelector<any, any>(categorySelectors.item(id));
  const { pathname, asPath } = useRouter();

  return (
    <Link href={`${pathname}/[prod]`} as={`${asPath}/${id}`} passHref>
      <Container>
        <ImgContainer>
          <ImageWrapper>
            <Image src={imagePath + image} alt={image} layout="fill" />
          </ImageWrapper>

          <Btn side="left" size="small">
            Купить
          </Btn>
          <Btn side="right" size="small">
            В корзину
          </Btn>
        </ImgContainer>

        <Name>{name}</Name>

        <Name>
          <b>{price}</b>&nbsp; руб.
        </Name>
      </Container>
    </Link>
  );
};

const Container = styled.a`
  @import 'variables';
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
  @import 'variables';
  position: relative;
  border: 1px solid $green;
  display: flex;
  justify-content: center;
  flex: 1 0;
`;

const ImageWrapper = styled.div`
  @import 'variables';
  overflow: hidden;
  height: 15vw;
  @include respond-to(large) {
    height: 20vw;
  }

  img {
    width: 100%;
    max-height: 80%;
    object-fit: cover;
  }
`;

const Btn = styled(Button)<{ side: string }>`
  @import 'variables';
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
