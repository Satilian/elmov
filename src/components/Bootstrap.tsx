import styled from 'astroturf/react';

export const Bootstrap = styled.div`
  @import 'variables';
  margin: 0 auto;
  width: 1520px;
  @include respond-to(large) {
    width: 1140px;
  }
  @include respond-to(medium) {
    width: 960px;
  }
  @include respond-to(middle) {
    width: 720px;
  }
  @include respond-to(small) {
    width: 540px;
  }
  @include respond-to(mobile) {
    width: auto;
    margin: 0;
  }
`;
