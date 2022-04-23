import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IBaseFilter } from 'api/dto/filter';
import { ThunkApiType } from 'interfaces/common';
import { State } from 'store';
import { CreateUserDto } from '../../../server/users/dto/create-user.dto';
import { UpdateUserDto } from '../../../server/users/dto/update-user.dto';

export interface IAuthState {
  isLoading?: boolean;
  filter?: IBaseFilter;
  user?: any;
}

export const initialState: IAuthState = {};

export const signup = createAsyncThunk<UpdateUserDto, CreateUserDto, ThunkApiType>(
  'auth/signup',
  (user, { rejectWithValue }) =>
    Promise.resolve({ id: 1, ...user } as UpdateUserDto).catch((error) =>
      rejectWithValue({ error }),
    ),
);

export const { reducer } = createSlice({
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
