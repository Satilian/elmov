import { configureStore as createStore } from "@reduxjs/toolkit";
import { isDev, isServer } from "consts/common";
import { categoryReducer } from "modules/category/categoryState";
import { productReducer } from "modules/product/productState";
import { uiReducer } from "modules/ui/uiState";
import { useDispatch } from "react-redux";
import { persistCombineReducers, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { deepMerge } from "util/deepMerge";
import { backStorage } from "../util/backStorage";

const reducer = persistCombineReducers(
  {
    key: "root",
    debug: isDev,
    storage: isServer() ? backStorage : storage,
    stateReconciler: (inboundState: any, originalState: any) =>
      deepMerge(inboundState, originalState),
  },
  {
    ui: uiReducer,
    category: categoryReducer,
    product: productReducer,
  }
);

const getNewStore = (preloadedState?: AppState) => {
  return createStore({
    preloadedState,
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: { ignoredActions: ["persist/PERSIST"] },
      }),
    devTools: isDev,
  });
};

export type AppState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof getNewStore>;
export type AppDispatch = AppStore["dispatch"];

const getPersistor = (store: AppStore) => persistStore(store);

export type Persitor = ReturnType<typeof getPersistor>;

export let store: AppStore;
let persistor: Persitor;

export const configureStore = (preloadedState?: AppState) => {
  (isServer() || !store) && (store = getNewStore(preloadedState));
  !isServer() && !persistor && (persistor = getPersistor(store));

  return { store, persistor };
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
