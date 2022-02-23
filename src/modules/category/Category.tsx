import styled from 'astroturf/react';
import { Preview } from 'components/Preview';
import { menuMap } from 'consts/menuItems';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { categorySelectors } from './categoryState';

export const CategoryPage = () => {
  const { asPath } = useRouter();

  const ids = useSelector(categorySelectors.ids);

  return (
    <Container>
      <h1>{menuMap.get(asPath)?.title}</h1>
      <Content>
        {ids.map((id) => (
          <Preview key={id} id={id} />
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
  @import 'variables';
  display: grid;
  grid: 15vw / 15vw 15vw 15vw 15vw;
  grid-gap: 5vw;
  justify-content: center;
  @include respond-to(large) {
    grid: 20vw / 20vw 20vw 20vw;
  }
`;
