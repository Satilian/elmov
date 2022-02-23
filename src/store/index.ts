import {
  combineReducers,
  configureStore as createStore,
  createReducer,
  EnhancedStore,
} from '@reduxjs/toolkit';
import * as category from 'modules/category/categoryState';
import * as product from 'modules/product/productState';
import * as ui from 'modules/ui/uiState';
import { useMemo } from 'react';

const reducer = combineReducers({
  ui: ui.reducer,
  category: category.reducer,
  product: product.reducer,
});

const initialState = {
  ui: ui.initialState,
  category: category.initialState,
  product: product.initialState,
};

export type TState = typeof initialState;

const rootReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase(reducer);
});

let store: EnhancedStore;
export const configureStore = (preloadedState?: TState) => {
  if (typeof window === 'undefined' || !store) {
    store = createStore({
      preloadedState,
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
      devTools: process.env.NODE_ENV !== 'production',
    });
  }
  return store;
};

export const useStore = (initialState?: TState) =>
  useMemo(() => configureStore(initialState), [initialState]);
