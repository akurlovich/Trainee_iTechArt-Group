import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../types/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

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
)








