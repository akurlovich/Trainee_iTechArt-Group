import { createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "../../../services/CommentService";
import { IComment, ICommentUpdate } from "../../../types/IComment";

export const addComment = createAsyncThunk(
  'COMMENT/addComment',
  async (comment: IComment, {rejectWithValue}) => {
    try {
      const response = await commentService.addComment(comment);
      console.log('addComment', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getComments = createAsyncThunk(
  'COMMENT/getComments',
  async (_, {rejectWithValue}) => {
    try {
      const response = await commentService.getComments();
      console.log('getComments', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getAllCommentByBookID = createAsyncThunk(
  'COMMENT/getAllCommentByBookID',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await commentService.getAllCommentsByBookID(id);
      console.log('getAllCommentByBookID', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const getAllCommentsByUserID = createAsyncThunk(
  'COMMENT/getAllCommentsByUserID',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await commentService.getAllCommentsByUserID(id);
      console.log('getAllCommentsByUserID', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteComment = createAsyncThunk(
  'COMMENT/deleteComment',
  async (id: string, {rejectWithValue}) => {
    try {
      const response = await commentService.deleteComment(id);
      console.log('deleteComment', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);

export const updateCommentByModerator = createAsyncThunk(
  'COMMENT/updateCommentByModerator',
  async (newComment: ICommentUpdate, {rejectWithValue}) => {
    try {
      const response = await commentService.updateCommentByModerator(newComment);
      console.log('updateCommentByModerator', response.data)
      return response.data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
);
