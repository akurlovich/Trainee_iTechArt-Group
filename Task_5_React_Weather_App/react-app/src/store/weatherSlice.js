import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { getCityByIP, getCityUI, getWeather } from '../userAPI';

export const fiveDay = createAsyncThunk(
  'CITY/fetchCityUI',
  async function (_, {rejectWithValue, getState}) {
    try {
      // const city = getState().cities;
      const resByIP = await getCityByIP();
      if (resByIP.status !== 200) {
        throw new Error('City by IP not found!')
      };
      // console.log(res.data);
      const resCityUI = await getCityUI(resByIP.data.city);
      if (resCityUI.status !== 200) {
        throw new Error('City UI not found!')
      } 
      // console.log(res2.data[0].Key);
      const resCityWeather = await getWeather(resCityUI.data[0].Key, 5);
      if (resCityWeather.status !== 200) {
        throw new Error('Weather not found!')
      } 
      // console.log(resCityWeather.data);
      // return resCityWeather.data;
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
    status: null,
    error: null,
  },
  reducers: {
    // addCity(state, action) {
    //   state.cityArr.push({
    //     id: new Date().toISOString(),
    //     city: action.payload,
    //   })
    // },
    // addTemperature(state, action) {
    //   state.temperature = action.payload;
    // },
  },
  extraReducers: {
    [fiveDay.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fiveDay.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.weatherArr = action.payload.DailyForecasts;
      // state.cityArr = action.payload;
      // state.cityTemp = action.payload.DailyForecasts[0].Temperature;
      // state.cityDate = action.payload.DailyForecasts[0];
      // state.cityDay = action.payload.DailyForecasts[0].Day;
      // state.cityDayWind = action.payload.DailyForecasts[0].Day.Wind;
      // state.cityDayRain = action.payload.DailyForecasts[0].Day.Rain; 
      // state.cityDaySnow = action.payload.DailyForecasts[0].Day.Snow;
      // state.cityNight = action.payload.DailyForecasts[0].Night;
      // state.cityNightWind = action.payload.DailyForecasts[0].Night.Wind;
      // state.cityNightRain = action.payload.DailyForecasts[0].Night.Rain; 
      // state.cityNightSnow = action.payload.DailyForecasts[0].Night.Snow;
    },
    [fiveDay.rejected]: (state, action) => {
      state.status = 'rejected';
    }
  }
});

// export const {addCity, addTemperature} = citySlice.actions;

export default weatherSlice.reducer;