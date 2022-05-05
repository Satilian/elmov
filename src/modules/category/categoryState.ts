import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { categoryRepo } from 'api/categoryRepo';
import { ICategoryEntity } from 'api/dto/categoryEntity';
import { IBaseFilter } from 'api/dto/filter';
import { ThunkApiType } from 'interfaces/common';
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

export const getAllCategories = createAsyncThunk<any, undefined, ThunkApiType>(
  'category/getAll',
  (_, { rejectWithValue }) => categoryRepo.fetchAll().catch((error) => rejectWithValue({ error })),
);

export const { reducer: categoryReducer } = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getAllCategories.rejected, (state) => ({ ...state, isLoading: false }))
      .addCase(getAllCategories.fulfilled, (state, { payload }) => {
        console.log(payload);
        return { ...state, isLoading: false };
      });
  },
});

const state = ({ category }: State) => category;

export const categorySelectors = {
  category: createSelector(state, ({ meta }) => meta),
  ids: createSelector(state, ({ list }) => list.ids),
  item: (id: string) => createSelector(state, ({ list }) => list.items[id]),
};
