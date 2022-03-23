import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../constants/http";
import AuthService from "../../../services/AuthService";
import RoleService from "../../../services/RoleService";
import UserService from "../../../services/UserService";
import { IAuthResponse } from "../../../types/IAuthResponse";
import { IUserUpdateIsBlocked, IUserUpdateProfileImage } from "../../../types/IUser";

interface IUserReg {
  email: string,
  password: string,
  profileImage: string,
};

interface IUserLogin {
  email: string,
  password: string,
};

export const registerUser = createAsyncThunk(
  'AUTH/regUser',
  async (data: IUserReg, {rejectWithValue}) => {
    try {
      const { email, password, profileImage } = data;
      const response = await AuthService.registration(email, password, profileImage);
      localStorage.setItem('token', response.data.refreshToken);
      // console.log(response.data)
      const role = await RoleService.getRoleByID(response.data.user.role[0]);
      return {
        user: response.data.user,
        role: role.data.value,
      }
      
    } catch (error) {
      return rejectWithValue('Can not register this users')
    }
  }
);

export const loginUser = createAsyncThunk(
  'AUTH/loginUser',
  async (data: IUserLogin, {rejectWithValue}) => {
    try {
      const { email, password } = data;
      const response = await AuthService.login(email, password);
      // console.log(response)
      localStorage.setItem('token', response.data.accessToken);
      const role = await RoleService.getRoleByID(response.data.user.role[0]);
      // console.log('role id', response.data.user.role[0]);
      // console.log('role', role.data.value)
      return {
        user: response.data.user,
        role: role.data.value,
      }
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
      const response = await axios.get<IAuthResponse>(`${API_URL}refresh`, {withCredentials: true});
      localStorage.setItem('token', response.data.accessToken);
      // console.log('auth', response);
      const role = await RoleService.getRoleByID(response.data.user.role[0]);
      return {
        user: response.data.user,
        role: role.data.value,
      }
      
    } catch (error) {
      return rejectWithValue(`Auth went wrong!`)
    }
  }
);

export const updateUserProfileImage = createAsyncThunk(
  'AUTH/updateUserProfileImage',
  async (newImage: IUserUpdateProfileImage, thunkAPI) => {
    try {
      const response = await UserService.updateUserProfileImage(newImage)
      return response.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue("Can't update user!")
    }
  }
);

export const updateUserIsBlocked = createAsyncThunk(
  'AUTH/updateUserIsBlocked',
  async (newIsBlocked: IUserUpdateIsBlocked, thunkAPI) => {
    try {
      const response = await UserService.updateUserIsBlocked(newIsBlocked)
      return response.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue("Can't update user!")
    }
  }
);
