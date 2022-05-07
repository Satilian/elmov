import styled from 'astroturf/react';
import React from 'react';
import { Bootstrap } from './Bootstrap';

export const Footer = () => (
  <Wrapper>
    <Container>
      <span>Название© 2020</span>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  @import 'variables';
  background: $green_l;
`;

const Container = styled(Bootstrap)`
  display: flex;
  align-items: baseline;
  height: 130px;
  font-size: 18px;
  span {
    line-height: 130px;
    font-size: 32px;
    font-weight: 300;
  }
`;
