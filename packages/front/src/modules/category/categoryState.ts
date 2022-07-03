import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { categoryRep } from "api/categoryRep";
import { CategoryDto } from "interfaces/page";
import { ThunkApiType } from "interfaces/store";
import { AppState } from "store";

export interface CategoryState {
  categories: CategoryDto[];
}

export const initialState: CategoryState = {
  categories: [],
};

export const getCategoryTree = createAsyncThunk<CategoryDto[], undefined, ThunkApiType>(
  "category/getAll",
  () => categoryRep.fetchTree()
);

export const { reducer: categoryReducer } = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryTree.fulfilled, (state, { payload }) => ({
      ...state,
      categories: payload,
    }));
  },
});

const state = ({ category }: AppState) => category;

export const categoriesSelectors = createSelector(state, ({ categories }) => categories);
