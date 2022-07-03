import { combineReducers, configureStore as createStore } from "@reduxjs/toolkit";
import { categoryReducer } from "modules/category/categoryState";
import { productReducer } from "modules/product/productState";
import { uiReducer } from "modules/ui/uiState";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

const reducer = combineReducers({
  ui: uiReducer,
  category: categoryReducer,
  product: productReducer,
});

const getNewStore = (preloadedState?: AppState) =>
  createStore<AppState>({
    preloadedState,
    reducer,
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof getNewStore>;
export type AppDispatch = AppStore["dispatch"];

let store: AppStore;
export const configureStore = (preloadedState?: AppState) => {
  if (typeof window === "undefined" || !store) {
    store = getNewStore(preloadedState);
  }

  return store;
};

export const useStore = (initialState?: AppState) =>
  useMemo(() => configureStore(initialState), [initialState]);

export const useAppDispatch = () => useDispatch<AppDispatch>();
