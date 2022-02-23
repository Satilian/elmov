import styled from 'astroturf/react';
import { menuItems } from 'consts/menuItems';
import { MenuSpacer } from 'elements/MenuSpacer';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Menu } from '../modules/ui/components/Menu/Menu';

export const Layout: FC = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Menu items={menuItems} topLevel />

      <Container>
        <HeaderWrapper>{pathname !== '/' && <Header />}</HeaderWrapper>
        <Content>
          <MenuSpacer />
          {children}
        </Content>
        <Footer />
      </Container>
    </>
  );
};

export const getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

const Container = styled.div`
  display: grid;
  grid: max-content auto / auto;
  grid-auto-rows: max-content;
  min-height: 100vh;
`;

const HeaderWrapper = styled.div`
  @import 'variables';
  background: $green_l;
  box-shadow: 0px 4px 4px #74975a;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  overflow-y: auto;
`;
