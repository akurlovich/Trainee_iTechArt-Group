import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchIP = createAsyncThunk(
  'CITY/fetchIP',
  async function(_, {rejectWithValue}) {
    try {
      const res = await axios.get('http://api.db-ip.com/v2/free/self');
      if (res.status !== 200) {
        throw new Error('City by IP not found!')
      } 
      return res.data;
      // return [];
    } catch (error) {
      return rejectWithValue(error.message);
    }

  }
)

const citySlice = createSlice({
  name: 'CITY',
  initialState: {
    cityArr: [],
    temperature: '-9',
    status: null,
    error: null,
  },
  reducers: {
    addCity(state, action) {
      state.cityArr.push({
        id: new Date().toISOString(),
        city: action.payload,
      })
    },
    addTemperature(state, action) {
      state.temperature = action.payload;
    },
  },
  extraReducers: {
    [fetchIP.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchIP.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.cityArr = action.payload;
    },
    [fetchIP.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
});

export const {addCity, addTemperature} = citySlice.actions;

export default citySlice.reducer;