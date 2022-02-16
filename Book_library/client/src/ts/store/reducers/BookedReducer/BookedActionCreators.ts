import { createAsyncThunk } from "@reduxjs/toolkit";
import BookedService from "../../../services/BookedService";
import { IBooked } from "../../../types/IBooked";

export const addBooked = createAsyncThunk(
  'BOOKED/addBooked',
  async (booked: IBooked, {rejectWithValue}) => {
    try {
      const response = await BookedService.addBooked(booked);
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
      console.log(response.data)
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