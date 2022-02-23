import styled from 'astroturf/react';
import Link from 'next/link';
import React from 'react';
import { ContactsIcon } from '../icons/ContactsIcon';
import { SearchIcon } from '../icons/SearchIcon';
import { ShoppingIcon } from '../icons/ShoppingIcon';

export const Header = () => (
  <Container>
    <Link href="/" passHref>
      <Name>Название</Name>
    </Link>
    <Desc>&nbsp;- Магазин электротранспорта</Desc>

    <div />
    <Icons>
      <SearchIcon />
      <ContactsIcon />
      <ShoppingIcon />
    </Icons>
  </Container>
);

const Container = styled.div`
  margin: 0 20px;
  display: grid;
  grid: 57px / max-content max-content auto 150px;
  align-items: baseline;
`;

const Name = styled.span`
  @import 'variables';
  font-weight: 700;
  font-size: 32px;
  color: $white;
  line-height: 57px;
`;

const Desc = styled.span`
  @import 'variables';
  font-weight: 500;
  font-size: 24px;
  color: $white;
  line-height: 57px;
`;

const Icons = styled.div`
  line-height: 57px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  align-items: center;
  align-self: center;
  svg {
    cursor: pointer;
  }
`;
