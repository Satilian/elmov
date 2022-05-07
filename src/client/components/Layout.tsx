import styled from 'astroturf/react';
import { MenuSpacer } from 'client/components/MenuSpacer';
import { menuItems } from 'client/consts/menuItems';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Footer } from 'client/components/Footer';
import { Header } from 'client/components/Header';
import { Menu } from 'client/modules/ui/components/Menu/Menu';

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
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
