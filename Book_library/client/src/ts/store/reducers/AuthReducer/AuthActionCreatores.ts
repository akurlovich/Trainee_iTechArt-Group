import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../constants/http";
import AuthService from "../../../services/AuthService";
import { IAuthResponse } from "../../../types/IAuthResponse";

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
      console.log(response)
      localStorage.setItem('token', response.data.accessToken);
      return response.data.user;
      
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

export const checkAuth = createAsyncThunk(
  'AUTH/chechAuth',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
      localStorage.setItem('token', response.data.accessToken);
      console.log('auth', response);
      return response.data.user;
      
    } catch (error) {
      return rejectWithValue(`Auth went wrong!`)
    }
  }
);
