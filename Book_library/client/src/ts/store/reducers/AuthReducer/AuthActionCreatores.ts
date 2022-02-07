import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/AuthService";

interface IUserReg {
  email: string,
  password: string,
};

export const registerUser = createAsyncThunk(
  'AUTH/regUser',
  async (data: IUserReg, {rejectWithValue}) => {
    try {
      const { email, password } = data;
      const response = await AuthService.registration(email, password);
      localStorage.setItem('token', response.data.refreshToken);
      console.log(response.data)
      return response.data.user;
      
    } catch (error) {
      return rejectWithValue('Can not register this users')
    }
  }
);

export const loginUser = createAsyncThunk(
  'AUTH/loginUser',
  async (data: IUserReg, {rejectWithValue}) => {
    try {
      const { email, password } = data;
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.refreshToken);
      return response.data;
      
    } catch (error) {
      return rejectWithValue(`User with email ${data.email} not found!`)
    }
  }
);

export const logoutUser = createAsyncThunk(
  'AUTH/logoutUser',
  async (_, {rejectWithValue}) => {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      return;
      
    } catch (error) {
      return rejectWithValue(`Something went wrong!`)
    }
  }
);

