import { createAsyncThunk } from "@reduxjs/toolkit";
import BookService from "../../../services/BookService";
import { IBook, IBookUpdate } from "../../../types/IBook";

export const addBook = createAsyncThunk(
  'BOOK/addBook',
  async (book: IBook, {rejectWithValue}) => {
    try {
      const response = await BookService.addBook(book);
      // console.log(response.data)
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getBooks = createAsyncThunk(
  'BOOK/getBooks',
  async (_, {rejectWithValue}) => {
    try {
      const response = await BookService.getBooks();
      // console.log(response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getBookByID = createAsyncThunk(
  'BOOK/getBookByID',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await BookService.getBookByID(id);
      // console.log(response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const updateBookAmountByID = createAsyncThunk(
  'BOOK/updateBookAmountByID',
  async (newBook: IBookUpdate, {rejectWithValue}) => {
    try {
      const response = await BookService.updateBookAmountByID(newBook);
      // console.log(response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);