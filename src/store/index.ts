import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'modules/auth/authState';
import { categoryReducer } from 'modules/category/categoryState';
import { productReducer } from 'modules/product/productState';
import { uiReducer } from 'modules/ui/uiState';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { deepMerge } from 'utils/deepMerge';
import { getServerStorage } from 'utils/getServerStorage';

const isServer = typeof window === 'undefined';
const isDev = process.env.NODE_ENV !== 'production';

const rootReducer = combineReducers({
  ui: uiReducer,
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
});

export type State = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: isServer ? getServerStorage() : storage,
  stateReconciler: (inboundState: State, originalState: State) =>
    deepMerge(inboundState, originalState),
};

const reducer = persistReducer(persistConfig, rootReducer);

const storeCreator = (preloadedState: unknown) =>
  configureStore({
    preloadedState,
    reducer,
    devTools: isDev,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: { ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'] },
      }),
  });

export let store: ReturnType<typeof storeCreator>;
export let persistor: Persistor;

const initStore = (preloadedState?: State) => {
  isServer || !store ? (store = storeCreator(preloadedState)) : store;
  !isServer && !persistor && (persistor = persistStore(store));

  return { store, persistor };
};

export const useStore = (initialState?: State) =>
  useMemo(() => {
    initStore(initialState);

    return { store, persistor };
  }, [initialState]);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
