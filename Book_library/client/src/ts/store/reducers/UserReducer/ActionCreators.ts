import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../../../services/AuthService";
import UserService from "../../../services/UserService";
import { IUser, IUserUpdateProfileImage } from "../../../types/IUser";


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFatching());
//     const response = await axios.get<IUser[]>('http://localhost:4000/api/users');
//     dispatch(userSlice.actions.usersFatchingSuccess(response.data));
//   } catch (error: any) {
//     dispatch(userSlice.actions.usersFatchingError(error.message));
//   }
// }

export const fetchUsers = createAsyncThunk(
  'USER/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>('http://localhost:4000/api/users');
      return response.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue('Don"t get users')
    }
  }
);

// export const updateUserProfileImage = createAsyncThunk(
//   'USER/updateUserProfileImage',
//   async (newImage: IUserUpdateProfileImage, thunkAPI) => {
//     try {
//       const response = await UserService.updateUserProfileImage(newImage)
//       return response.data;
      
//     } catch (error) {
//       return thunkAPI.rejectWithValue("Can't update user!")
//     }
//   }
// );









