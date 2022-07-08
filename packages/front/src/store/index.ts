import { combineReducers, configureStore as createStore } from "@reduxjs/toolkit";
import { categoryReducer } from "modules/category/categoryState";
import { productReducer } from "modules/product/productState";
import { uiReducer } from "modules/ui/uiState";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { backStorage } from "./backStorage";

const isDev = process.env.NODE_ENV !== "production";
const isServer = typeof window === undefined;

const persistConfig = {
  key: "root",
  storage: isServer ? backStorage : storage,
};

const rootReducer = combineReducers({
  ui: uiReducer,
  category: categoryReducer,
  product: productReducer,
});

const reducer = persistReducer(persistConfig, rootReducer);

const getNewStore = (preloadedState?: AppState) =>
  createStore<AppState>({
    preloadedState,
    reducer,
    devTools: isDev,
  });

export type AppState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof getNewStore>;
export type AppDispatch = AppStore["dispatch"];

const getPersistor = (store: AppStore) => persistStore(store);

export type Persitor = ReturnType<typeof getPersistor>;

let store: AppStore;
let persistor: Persitor;

export const configureStore = (preloadedState?: AppState) => {
  if ((typeof window === "undefined" || !store) && !preloadedState) {
    store = getNewStore();
    persistor = getPersistor(store);
  }

  if (preloadedState) {
  }

  return { store, persistor };
};

export const useStore = (initialState?: AppState) =>
  useMemo(() => configureStore(initialState), [initialState]);

export const useAppDispatch = () => useDispatch<AppDispatch>();
