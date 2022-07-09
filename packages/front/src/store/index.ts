import { configureStore as createStore } from "@reduxjs/toolkit";
import { categoryReducer } from "modules/category/categoryState";
import { productReducer } from "modules/product/productState";
import { uiReducer } from "modules/ui/uiState";
import { useDispatch } from "react-redux";
import { persistCombineReducers, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { deepMerge } from "util/deepMerge";
import { backStorage } from "../util/backStorage";

const isDev = process.env.NODE_ENV !== "production";
const isServer = typeof window === undefined;

const reducer = persistCombineReducers(
  {
    key: "root",
    debug: isDev,
    storage: isServer ? backStorage : storage,
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
  console.log("getNewStore");
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

let store: AppStore;
let persistor: Persitor;

export const configureStore = (preloadedState?: AppState) => {
  if (!store) {
    store = getNewStore(preloadedState);
    persistor = getPersistor(store);
  }

  return { store, persistor };
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
