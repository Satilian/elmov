import { createSelector, createSlice } from '@reduxjs/toolkit';
import { State } from 'store';

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

export const { actions: uiActions, reducer: uiReducer } = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle: (state) => ({
      ...state,
      menu: { ...state.menu, isOpen: !state.menu.isOpen, subMenu: '' },
    }),
    setSubMenu: (state, { payload: subMenu }) => ({
      ...state,
      menu: { ...state.menu, subMenu, isOpen: true },
    }),
  },
});

const state = ({ ui }: State) => ui;

export const uiSelectors = {
  menuIsOpen: createSelector(state, ({ menu }) => menu.isOpen),
  subMenu: createSelector(state, ({ menu }) => menu.subMenu),
};
