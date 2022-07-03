import styled from "astroturf/react";
import { CrossIcon } from "icons/CrossIcon";
import { CategoryDto } from "interfaces/page";
import * as ui from "modules/ui/uiState";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { MenuItem } from "./MenuItem";

interface IProps {
  items: CategoryDto[];
  topLevel?: boolean;
}

export const Menu = ({ items, topLevel }: IProps) => {
  const subMenu = useSelector(ui.selectors.subMenu);
  const isOpen = useSelector(ui.selectors.menuIsOpen);
  const { asPath } = useRouter();
  const dispatch = useAppDispatch();

  return (
    <Container topLevel={topLevel}>
      {topLevel && isOpen && subMenu && (
        <Icon main={asPath === "/"} onClick={() => dispatch(ui.actions.toggle())} />
      )}

      {items.map(({ id, page, image, childrens }, i) => (
        <Fragment key={id}>
          <MenuItem
            onClick={() => dispatch(ui.actions.setSubMenu(page.path))}
            topLevel={topLevel}
            delay={i * 100}
            subCategory={childrens}
            isOpen={isOpen && subMenu === page.path}
            imgUrl={image?.src}
            {...page}
          />

          {!!childrens.length && isOpen && subMenu === page.path && <Menu items={childrens} />}
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
