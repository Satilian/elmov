import { createSelector, createSlice } from "@reduxjs/toolkit";
import { AppState } from "store";

export interface UiState {
  menu: {
    subMenu: string;
    isOpen: boolean;
  };
}

export const initialState = {
  menu: {
    subMenu: "",
    isOpen: false,
  },
};

export const { actions, reducer: uiReducer } = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle: (state) => ({ ...state, menu: { ...state.menu, isOpen: !state.menu.isOpen } }),
    setSubMenu: (state, { payload: subMenu }) => ({
      ...state,
      menu: { ...state.menu, subMenu, isOpen: true },
    }),
  },
});

const state = ({ ui }: AppState) => ui;

export const selectors = {
  menuIsOpen: createSelector(state, ({ menu }) => menu.isOpen),
  subMenu: createSelector(state, ({ menu }) => menu.subMenu),
};
