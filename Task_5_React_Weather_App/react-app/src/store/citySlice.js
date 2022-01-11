import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchIP = createAsyncThunk(
  'CITY/fetchIP',
  async function() {
    const res = await axios.get('http://api.db-ip.com/v2/free/self');
    return res.data;
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
    [fetchIP.rejected]: (state, action) => {},
  }
});

export const {addCity, addTemperature} = citySlice.actions;

export default citySlice.reducer;