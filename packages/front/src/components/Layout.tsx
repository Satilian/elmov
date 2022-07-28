import styled from "astroturf/react";
import { MenuSpacer } from "elements/MenuSpacer";
import { PageProps } from "interfaces/common";
import { categoriesSelectors } from "modules/category/categoryState";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Footer } from "../components/Footer";
import { Menu } from "../modules/ui/components/Menu/Menu";
import { MainHeader } from "./MainHeader";

type Props = PageProps & {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();
  const menuItems = useSelector(categoriesSelectors);

  return (
    <>
      <Menu items={menuItems} topLevel />

      <Container>
        <HeaderWrapper>{pathname !== "/" && <MainHeader />}</HeaderWrapper>

        <Content>
          <MenuSpacer />

          {children}
        </Content>

        <Footer />
      </Container>
    </>
  );
};

export const getLayout = (page: JSX.Element, props: PageProps) => (
  <Layout {...props}>{page}</Layout>
);

const Container = styled.div`
  display: grid;
  grid: max-content auto / auto;
  grid-auto-rows: max-content;
  min-height: 100vh;
`;

const HeaderWrapper = styled.div`
  @import "variables";
  background: $green_l;
  box-shadow: 0px 4px 4px #74975a;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  overflow-y: auto;
`;
