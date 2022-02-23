import { createAsyncThunk } from "@reduxjs/toolkit";
import BookedService from "../../../services/BookedService";
import BookService from "../../../services/BookService";
import { allUserBookedsAndIssueds, usersBookeds } from "../../../services/ClientServices/UsersBookeds";
import { IBooked } from "../../../types/IBooked";
import { IBookResponse } from "../../../types/IBookResponse";

export const addBooked = createAsyncThunk(
  'BOOKED/addBooked',
  async (booked: IBooked, {rejectWithValue}) => {
    try {
      const response = await BookedService.addBooked(booked);
      const book = await BookService.getBookByID(booked.bookID);
      await BookService.updateBookAmountByID({id: book.data._id, amount: book.data.amount - 1});
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
      console.log(response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteBookedAndReturnAmount = createAsyncThunk(
  'BOOKED/deleteBookedAndReturnAmount',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await BookedService.deleteBooked(id);
      const book = await BookService.getBookByID(response.data.bookID);
      await BookService.updateBookAmountByID({id: book.data._id, amount: book.data.amount + 1});
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
      // const bookeds = await (await BookedService.getAllBookedsByUserID(userID)).data;
      // const userBooks = [] as IBookResponse[];

      // for (let i = 0; i < bookeds.length; i++) {
      //   let book = await (await BookService.getBookByID(bookeds[i].bookID)).data;
      //   userBooks.push(book)
      // };
      // return userBooks;
      return await usersBookeds(userID);

    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const allUsersAndBookeds = createAsyncThunk(
  'BOOKED/allUserAndBookeds',
  async (_, {rejectWithValue}) => {
    try {

      const response = await allUserBookedsAndIssueds();
      
      return response;

    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);