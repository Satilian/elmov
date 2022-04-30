import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IProductState {
  isLoading: boolean;
  product?: any;
  error?: Error;
}

export const initialState: IProductState = {
  isLoading: false,
};

export const get = createAsyncThunk('users/fetchByIdStatus', async () => {
  const response = await Promise.resolve();
  return response;
});

export const { reducer: productReducer } = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(get.rejected, (state, { error }) => ({ ...state, isLoading: false }))
      .addCase(get.fulfilled, (state, { payload }) => ({ ...state, isLoading: false }));
  },
});
