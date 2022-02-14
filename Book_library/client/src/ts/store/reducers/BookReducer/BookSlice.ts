import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../types/IBook";
import { IBookResponse } from "../../../types/IBookResponse";
import { addBook, getBookByID, getBooks } from "./BookActionCreatores";

interface IBookState {
  book: IBookResponse,
  books: IBookResponse[],
  isLoading: boolean,
  error: string,
};

const initialState: IBookState = {
  book: {} as IBookResponse,
  books: [],
  isLoading: false,
  error: '',
};

export const bookSlice = createSlice({
  name: 'BOOK',
  initialState,
  reducers: {

  },
  extraReducers: {
    [addBook.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addBook.fulfilled.type]: (state, action: PayloadAction<IBookResponse>) => {
      state.isLoading = false;
      state.book = action.payload;
    },
    [addBook.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getBooks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled.type]: (state, action: PayloadAction<IBookResponse[]>) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getBookByID.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBookByID.fulfilled.type]: (state, action: PayloadAction<IBookResponse>) => {
      state.isLoading = false;
      state.book = action.payload;
    },
    [getBookByID.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default bookSlice.reducer;