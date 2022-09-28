import styled from "astroturf/react";
import { Context } from "components/Provider";
import { CrossIcon } from "icons/CrossIcon";
import { CategoryDto } from "interfaces/category";
import { useRouter } from "next/router";
import React, { Fragment, useContext } from "react";
import { MenuItem } from "./MenuItem";

interface IProps {
  items: CategoryDto[];
  topLevel?: boolean;
}

export const Menu = ({ items, topLevel }: IProps) => {
  const { asPath } = useRouter();
  const { subMenu, setSubMenu } = useContext(Context);

  return (
    <Container topLevel={topLevel}>
      {topLevel && subMenu && <Icon main={asPath === "/"} onClick={() => setSubMenu()} />}

      {items.map(({ id, page, image, childrens }, i) => (
        <Fragment key={id}>
          <MenuItem
            onClick={() => setSubMenu(page.path)}
            topLevel={topLevel}
            delay={i * 100}
            subCategory={childrens}
            isOpen={page.path === subMenu}
            imgUrl={image}
            {...page}
          />

          {!!childrens.length && page.path === subMenu && <Menu items={childrens} />}
        </Fragment>
      ))}
    </Container>
  );
};

const Container = styled.div<{ topLevel?: boolean }>`
  @import "variables";
  @include menu;

  display: grid;
  grid-auto-rows: 5vw;
  grid-gap: 0.4vw;
  z-index: 10;
  &.topLevel {
    left: 20px;
    top: 80px;
  }
`;

const Icon = styled(CrossIcon)<{ main?: boolean }>`
  @import "variables";
  color: $green;
  position: absolute;
  top: 0;
  right: -3vw;
  cursor: pointer;
  font-size: 14px;

  &.main {
    color: $white;
  }
`;
