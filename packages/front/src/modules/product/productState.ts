import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productRep } from "api/productRep";
import { CategoryDto } from "interfaces/page";
import { ProductEntity } from "interfaces/product";
import { ThunkApiType } from "interfaces/store";

interface IProductState {
  isLoading: boolean;
  products?: ProductEntity[];
}

export const initialState: IProductState = {
  isLoading: false,
};

export const getProductsByCategory = createAsyncThunk<
  ProductEntity[],
  CategoryDto["id"],
  ThunkApiType
>("product/getByCategory", (id) => productRep.fetchByCategory(id));

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
