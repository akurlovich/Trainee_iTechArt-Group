import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser";

interface IUserState {
  users: IUser[],
  isLoading: boolean,
  error: string,
}

const initialState: IUserState = {
  users: [],
  isLoading: true,
  error: '',
}

export const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {

  }
})

export default userSlice.reducer;