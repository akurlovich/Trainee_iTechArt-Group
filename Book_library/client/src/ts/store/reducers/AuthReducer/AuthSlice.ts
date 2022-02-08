import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types/IUser";
import { checkAuth, registerUser } from "./AuthActionCreatores";

interface IAuthState {
  user: IUser,
  isLoading: boolean,
  isAuth: boolean,
  error: string,
};

const initialState: IAuthState = {
  user: {} as IUser,
  isLoading: true,
  isAuth: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [registerUser.pending.type]: (state) => {
      state.isLoading = true;
      state.isAuth = false;
    },
    [registerUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
      state.user = action.payload;
    },
    [registerUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
    [checkAuth.pending.type]: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    [checkAuth.pending.type]: (state, action) => {
      state.isAuth = true;
      state.error = action.payload;
    }
  }
});

export default authSlice.reducer;