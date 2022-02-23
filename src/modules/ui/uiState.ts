import { createSelector, createSlice } from '@reduxjs/toolkit';
import { TState } from 'store';

export interface IUiState {
  menu: {
    subMenu: string;
    isOpen: boolean;
  };
}

export const initialState = {
  menu: {
    subMenu: '',
    isOpen: true,
  },
};

export const { actions, reducer } = createSlice({
  name: 'category',
  initialState,
  reducers: {
    toggle: (state) => ({ ...state, menu: { ...state.menu, isOpen: !state.menu.isOpen } }),
    setSubMenu: (state, { payload: subMenu }) => ({
      ...state,
      menu: { ...state.menu, subMenu, isOpen: true },
    }),
  },
});

const state = ({ ui }: TState) => ui;

export const selectors = {
  menuIsOpen: createSelector(state, ({ menu }) => menu.isOpen),
  subMenu: createSelector(state, ({ menu }) => menu.subMenu),
};
