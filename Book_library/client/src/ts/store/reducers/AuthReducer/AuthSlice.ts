import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types/IUser";
import { checkAuth, loginUser, logoutUser, registerUser } from "./AuthActionCreatores";

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
      // state.isAuth = false;
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
    [loginUser.pending.type]: (state) => {
      state.isLoading = true;
      // state.isAuth = false;
    },
    [loginUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
      state.user = action.payload;
    },
    [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
    [logoutUser.pending.type]: (state) => {
      state.isLoading = true;
      // state.isAuth = false;
    },
    [logoutUser.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.user = {} as IUser;
    },
    [logoutUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
    [checkAuth.pending.type]: (state, action) => {
      state.isLoading = true;
      // state.isAuth = false;
    },
    [checkAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
    },
    [checkAuth.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    }
  }
});

export default authSlice.reducer;