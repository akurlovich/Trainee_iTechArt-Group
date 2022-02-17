import { createAsyncThunk } from "@reduxjs/toolkit";
import BookedService from "../../../services/BookedService";
import BookService from "../../../services/BookService";
import { IBooked } from "../../../types/IBooked";
import { IBookedResponse } from "../../../types/IBookedResponse";
import { IBookResponse } from "../../../types/IBookResponse";
import { getBookByID } from "../BookReducer/BookActionCreatores";

export const addBooked = createAsyncThunk(
  'BOOKED/addBooked',
  async (booked: IBooked, {rejectWithValue}) => {
    try {
      const response = await BookedService.addBooked(booked);
      const book = await BookService.getBookByID(booked.bookID);
      const updateBook = await BookService.updateBookAmountByID({id: book.data._id, amount: book.data.amount - 1});
      console.log(response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getBookeds = createAsyncThunk(
  'BOOKED/getBookeds',
  async (_, {rejectWithValue}) => {
    try {
      const response = await BookedService.getBookeds();
      console.log('getBookeds', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getAllBookedsByBookID = createAsyncThunk(
  'BOOKED/getAllBookedsByBookID',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await BookedService.getAllBookedsByBookID(id);
      console.log('getAllBookedsByBookID', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getAllBookedsByUserID = createAsyncThunk(
  'BOOKED/getAllBookedsByUserID',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await BookedService.getAllBookedsByUserID(id);
      console.log('getAllBookedsByUserID', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteBooked = createAsyncThunk(
  'BOOKED/deleteBooked',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await BookedService.deleteBooked(id);
      const book = await BookService.getBookByID(response.data.bookID);
      const updateBook = await BookService.updateBookAmountByID({id: book.data._id, amount: book.data.amount + 1});
      console.log(response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getBookedsForUser = createAsyncThunk(
  'BOOKED/getBookedsForUser',
  async (userID: string, {rejectWithValue}) => {
    try {
      const bookeds = await (await BookedService.getAllBookedsByUserID(userID)).data;
      // console.log('getBookeds', bookeds)
      // const userBookeds = bookeds.filter(booked => booked.userID === userID);
      const userBooks = [] as IBookResponse[]
      // let book = await BookService.getBookByID(bookeds[i].bookID)

      for (let i = 0; i < bookeds.length; i++) {
        let book = await (await BookService.getBookByID(bookeds[i].bookID)).data;
        // console.log(book)
        userBooks.push(book)
      };
      // console.log('books arr', userBooks)


      return userBooks;
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);