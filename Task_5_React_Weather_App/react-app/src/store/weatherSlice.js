import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getCityByIP, getCityUI, getWeather } from '../userAPI';

export const fiveDay = createAsyncThunk(
  'CITY/fiveDay',
  async function (_, {rejectWithValue, getState}) {
    try {
      const resByIP = await getCityByIP();
      if (resByIP.status !== 200) {
        throw new Error('City by IP not found!')
      };
      const resCityUI = await getCityUI(resByIP.data.city);
      if (resCityUI.status !== 200) {
        throw new Error('City UI not found!')
      } 
      const resCityWeather = await getWeather(resCityUI.data[0].Key, 5);
      if (resCityWeather.status !== 200) {
        throw new Error('Weather not found!')
      } 
      return resCityWeather.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const weatherSlice = createSlice({
  name: 'WEATHER',
  initialState: {
    weatherArr: [],
    threeDays: [],
    status: null,
    error: null,
  },
  reducers: {
  },
  extraReducers: {
    [fiveDay.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fiveDay.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.weatherArr = action.payload.DailyForecasts;
      for (let i = 0; i <= 2; i++) {
        state.threeDays.push(action.payload.DailyForecasts[i])
      }
    },
    [fiveDay.rejected]: (state, action) => {
      state.status = 'rejected';
    }
  }
});

export default weatherSlice.reducer;