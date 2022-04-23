import { combineReducers, configureStore as createStore, EnhancedStore } from '@reduxjs/toolkit';
import * as auth from 'modules/auth/authState';
import * as category from 'modules/category/categoryState';
import * as product from 'modules/product/productState';
import * as ui from 'modules/ui/uiState';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

const reducer = combineReducers({
  ui: ui.reducer,
  category: category.reducer,
  product: product.reducer,
  auth: auth.reducer,
});

const initialState = {
  ui: ui.initialState,
  category: category.initialState,
  product: product.initialState,
  auth: auth.initialState,
};

export type State = typeof initialState;

let store: EnhancedStore;
export const configureStore = (preloadedState?: State) => {
  if (typeof window === 'undefined' || !store) {
    store = createStore({
      preloadedState,
      reducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
      devTools: process.env.NODE_ENV !== 'production',
    });
  }
  return store;
};

export const useStore = (initialState?: State) =>
  useMemo(() => configureStore(initialState), [initialState]);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
