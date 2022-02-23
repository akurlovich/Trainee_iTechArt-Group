import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookedResponse } from "../../../types/IBookedResponse";
import { IBookResponse } from "../../../types/IBookResponse";
import { IUsersBookedsAndIssueds } from "../../../types/IUsersAndBookeds";
import { addBooked, allUsersAndBookeds, deleteBooked, deleteBookedAndReturnAmount, getAllBookedsByBookID, getAllBookedsByUserID, getBookedsForUser,  } from "./BookedActionCreators";

interface IBookedState {
  booked: IBookedResponse,
  bookedsBookID: IBookedResponse[],
  bookedsUserID: IBookedResponse[],
  userBookedBooks: IBookResponse[],
  allUsersBookedsAndIssueds: IUsersBookedsAndIssueds[],
  isLoading: boolean,
  error: string,
};

const initialState: IBookedState = {
  booked: {} as IBookedResponse,
  bookedsBookID: [],
  bookedsUserID: [],
  userBookedBooks: [],
  allUsersBookedsAndIssueds: [],
  isLoading: false,
  error: '',
};

export const bookedSlice = createSlice({
  name: 'BOOKED',
  initialState,
  reducers: {

  },
  extraReducers: {
    [addBooked.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addBooked.fulfilled.type]: (state, action: PayloadAction<IBookedResponse>) => {
      state.isLoading = false;
      state.booked = action.payload;
    },
    [addBooked.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getAllBookedsByBookID.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAllBookedsByBookID.fulfilled.type]: (state, action: PayloadAction<IBookedResponse[]>) => {
      state.isLoading = false;
      state.bookedsBookID = action.payload;
    },
    [getAllBookedsByBookID.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getAllBookedsByUserID.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getAllBookedsByUserID.fulfilled.type]: (state, action: PayloadAction<IBookedResponse[]>) => {
      state.isLoading = false;
      state.bookedsUserID = action.payload;
    },
    [getAllBookedsByUserID.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteBooked.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteBooked.fulfilled.type]: (state) => {
      state.isLoading = false;
    },
    [deleteBooked.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteBookedAndReturnAmount.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteBookedAndReturnAmount.fulfilled.type]: (state) => {
      state.isLoading = false;
    },
    [deleteBookedAndReturnAmount.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getBookedsForUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBookedsForUser.fulfilled.type]: (state, action: PayloadAction<IBookResponse[]>) => {
      state.isLoading = false;
      state.userBookedBooks = action.payload;
    },
    [getBookedsForUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [allUsersAndBookeds.pending.type]: (state) => {
      state.isLoading = true;
    },
    [allUsersAndBookeds.fulfilled.type]: (state, action: PayloadAction<IUsersBookedsAndIssueds[]>) => {
      state.isLoading = false;
      state.allUsersBookedsAndIssueds = action.payload;
    },
    [allUsersAndBookeds.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default bookedSlice.reducer;