import {
  AnyAction,
  combineReducers,
  configureStore as createStore,
  createAction,
} from "@reduxjs/toolkit";
import { isDev } from "consts/common";
import { categoryReducer } from "modules/category/categoryState";
import { productReducer } from "modules/product/productState";
import { uiReducer } from "modules/ui/uiState";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { deepMerge } from "util/deepMerge";

const reducers = {
  ui: uiReducer,
  category: categoryReducer,
  product: productReducer,
};

const combinedReducer = combineReducers(reducers);

export const hydrate = createAction<AppState>("HYDRATE");

const reducer = (state = {} as AppState, action: AnyAction) => {
  if (action.type === hydrate.toString()) {
    return deepMerge<AppState>(state, action.payload);
  }
  return combinedReducer(state, action);
};

const getNewStore = (preloadedState?: AppState) =>
  createStore({
    preloadedState,
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: { ignoredActions: ["persist/PERSIST"] },
      }),
    devTools: isDev,
  });

export type AppState = {
  [Key in keyof typeof reducers]: ReturnType<typeof reducers[Key]>;
};
export type AppStore = ReturnType<typeof getNewStore>;
export type AppDispatch = AppStore["dispatch"];

export let store: AppStore;

export const configureStore = (preloadedState?: AppState) =>
  store || (store = getNewStore(preloadedState));

export const useStore = (preloadedState?: AppState) =>
  useMemo(() => configureStore(preloadedState), []);

export const useAppDispatch = () => useDispatch<AppDispatch>();
