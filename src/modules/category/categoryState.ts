import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { ICategoryEntity } from 'api/dto/categoryEntity';
import { IBaseFilter } from 'api/dto/filter';
import { State } from 'store';
import { items } from './mock';

export interface ICategoryState {
  isLoading: boolean;
  filter: IBaseFilter;
  meta?: ICategoryEntity;
  list: {
    isLoading: boolean;
    ids: string[];
    items: Record<string, any>;
  };
}

export const initialState: ICategoryState = {
  isLoading: false,
  filter: {} as IBaseFilter,
  list: {
    isLoading: false,
    ids: items.map(({ id }) => id),
    items: items.reduce((obj, item) => ({ ...obj, [item.id]: item }), {}),
  },
};

export const getOne = createAsyncThunk('users/fetchByIdStatus', async () => {
  const response = await Promise.resolve([]);
  return response;
});

export const { reducer } = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOne.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getOne.rejected, (state, { error }) => ({ ...state, isLoading: false }))
      .addCase(getOne.fulfilled, (state, { payload }) => ({ ...state, isLoading: false }));
  },
});

const state = ({ category }: State) => category;

export const categorySelectors = {
  category: createSelector(state, ({ meta }) => meta),
  ids: createSelector(state, ({ list }) => list.ids),
  item: (id: string) => createSelector(state, ({ list }) => list.items[id]),
};
