import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
  'BOOK/fetchBooks',
  async function(_, {rejectWithValue, getState}) {
    try {
      
      
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const bookSlice = createSlice({
  name: 'BOOK',
  initialState: {
    
  },
  reducers: {
    addBook(state, action) {
      
    },
  },
  extraReducers: {
    // [fetchBooks.pending]: (state, action) => {
      
    // },
    // [fetchBooks.fulfilled]: (state, action) => {
      
    // },
    // [fetchBooks.rejected]: (state, action) => {
      
    // },
  }
});
export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;