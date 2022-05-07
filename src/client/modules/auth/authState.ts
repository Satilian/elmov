import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IBaseFilter } from 'client/api/dto/filter';
import { ThunkApiType } from 'client/interfaces/common';
import { State } from 'client/store';

export interface IAuthState {
  isLoading?: boolean;
  filter?: IBaseFilter;
  user?: any;
}

export const initialState: IAuthState = {};

export const signup = createAsyncThunk<any, any, ThunkApiType>(
  'auth/signup',
  (user, { rejectWithValue }) =>
    Promise.resolve({ id: 1, ...user } as any).catch((error) => rejectWithValue({ error })),
);

export const { reducer: authReducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(signup.rejected, (state) => ({ ...state, isLoading: false }))
      .addCase(signup.fulfilled, (state) => ({ ...state, isLoading: false }));
  },
});

const state = ({ auth }: State) => auth;

export const authSelectors = {};