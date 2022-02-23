import styled from 'astroturf/react';
import { CrossIcon } from 'icons/CrossIcon';
import { MenuItemType } from 'interfaces/menuItem';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem } from './MenuItem';
import * as ui from 'modules/ui/uiState';

interface IProps {
  items: MenuItemType[];
  topLevel?: boolean;
}

export const Menu = ({ items, topLevel }: IProps) => {
  const subMenu = useSelector(ui.selectors.subMenu);
  const isOpen = useSelector(ui.selectors.menuIsOpen);
  const { asPath } = useRouter();
  const dispatch = useDispatch();

  return (
    <Container topLevel={topLevel}>
      {topLevel && isOpen && subMenu && (
        <Icon main={asPath === '/'} onClick={() => dispatch(ui.actions.toggle())} />
      )}
      {items.map(({ link, subRouts, ...item }, i) => (
        <Fragment key={link}>
          <MenuItem
            onClick={() => dispatch(ui.actions.setSubMenu(link))}
            link={link}
            topLevel={topLevel}
            delay={i * 100}
            subRouts={subRouts}
            isOpen={isOpen && subMenu === link}
            {...item}
          />
          {subRouts && isOpen && subMenu === link && <Menu items={subRouts} />}
        </Fragment>
      ))}
    </Container>
  );
};

const Container = styled.div<{ topLevel?: boolean }>`
  @import 'variables';
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
  @import 'variables';
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
