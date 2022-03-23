import { createAsyncThunk } from "@reduxjs/toolkit";
import BookedService from "../../../services/BookedService";
import BookService from "../../../services/BookService";
import IssuedService from "../../../services/IssuedService";
import { IBookResponse } from "../../../types/IBookResponse";
import { IIssued } from "../../../types/IIssued";

export const addIssued = createAsyncThunk(
  'ISSUED/addIssued',
  async (issued: IIssued, {rejectWithValue}) => {
    try {
      const response = await IssuedService.addIssued(issued);
      const bookeds = await (await BookedService.getAllBookedsByBookID(issued.bookID)).data;
      const foundByUser = bookeds.find(booked => booked.userID === issued.userID);
      if (foundByUser) {
        const delBooked = await BookedService.deleteBooked(foundByUser?._id);
      }
      console.log('addIssued', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getIssueds = createAsyncThunk(
  'ISSUED/getIssueds',
  async (_, {rejectWithValue}) => {
    try {
      const response = await IssuedService.getIssueds();
      console.log('getIssueds', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getAllIssuedsByBookID = createAsyncThunk(
  'ISSUED/getAllIssuedsByBookID',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await IssuedService.getAllIssuedsByBookID(id);
      console.log('getAllIssuedsByBookID', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getAllIssuedsByUserID = createAsyncThunk(
  'ISSUED/getAllIssuedsByUserID',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await IssuedService.getAllIssuedsByUserID(id);
      console.log('getAllIssuedsByUserID', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteIssued = createAsyncThunk(
  'ISSUED/deleteIssued',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await IssuedService.deleteIssued(id);
      console.log('deleteIssued', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteIssuedAndReturnAmount = createAsyncThunk(
  'ISSUED/deleteIssuedAndReturnAmount',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await IssuedService.deleteIssued(id);
      const book = await BookService.getBookByID(response.data.bookID);
      const updateBook = await BookService.updateBookAmountByID({id: book.data._id, amount: book.data.amount + 1});
      console.log('deleteIssuedAndReturnAmount', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getIssuedsForUser = createAsyncThunk(
  'ISSUED/getIssuedsForUser',
  async (userID: string, {rejectWithValue}) => {
    try {
      const issueds = await (await IssuedService.getAllIssuedsByUserID(userID)).data;
      // console.log('getBookeds', bookeds)
      // const userBookeds = bookeds.filter(booked => booked.userID === userID);
      const userBooks = [] as IBookResponse[]
      // let book = await BookService.getBookByID(bookeds[i].bookID)

      for (let i = 0; i < issueds.length; i++) {
        let book = await (await BookService.getBookByID(issueds[i].bookID)).data;
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