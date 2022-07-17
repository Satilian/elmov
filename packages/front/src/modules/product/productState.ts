import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { productRep } from "api/productRep";
import { PageDto } from "interfaces/page";
import { ProductDto } from "interfaces/product";
import { ThunkApiType } from "interfaces/store";
import { AppState } from "store";

export interface ProductState {
  isLoading: boolean;
  products?: ProductDto[];
}

export const initialState: ProductState = {
  isLoading: false,
};

export const getProductsByCategory = createAsyncThunk<ProductDto[], PageDto["path"], ThunkApiType>(
  "product/getByCategory",
  (path) => productRep.fetchByCategory(path)
);

export const { reducer: productReducer } = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsByCategory.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getProductsByCategory.rejected, (state) => ({ ...state, isLoading: false }))
      .addCase(getProductsByCategory.fulfilled, (state, { payload: products }) => ({
        ...state,
        products,
        isLoading: false,
      }));
  },
});

const state = ({ product }: AppState) => product;

export const selectProductList = createSelector(state, ({ products }) => products);
