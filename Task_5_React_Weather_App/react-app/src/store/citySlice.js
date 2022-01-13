import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { getCityByIP, getCityUI, getWeather } from '../userAPI';

export const fetchIP = createAsyncThunk(
  'CITY/fetchIP',
  async function(_, {rejectWithValue}) {
    try {
      // const res = await axios.get('http://api.db-ip.com/v2/free/self');
      const res = await getCityByIP();
      // console.log('object', res)
      if (res.status !== 200) {
        throw new Error('City by IP not found!')
      } 
      return res.data;
      // return [];
    } catch (error) {
      return rejectWithValue(error.message);
    }

  }
);

export const fetchCityUI = createAsyncThunk(
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
      const resCityWeather = await getWeather(resCityUI.data[0].Key);
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
)

const citySlice = createSlice({
  name: 'CITY',
  initialState: {
    cityByIP: {},
    cityArr: {},
    cityDay: {},
    cityNight: {},
    cityDate: {},
    cityTemp: {
      Minimum: {}, 
      Maximum: {},
    },
    cityDayWind: {
      Direction: {},
      Speed: {},
    },
    cityDayRain: {},
    cityDaySnow: {},
    cityNightWind: {
      Direction: {},
      Speed: {},
    },
    cityNightRain: {},
    cityNightSnow: {},
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
      state.cityByIP = action.payload;
    },
    [fetchIP.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [fetchCityUI.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchCityUI.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.cityArr = action.payload;
      state.cityTemp = action.payload.DailyForecasts[0].Temperature;
      state.cityDate = action.payload.DailyForecasts[0];
      state.cityDay = action.payload.DailyForecasts[0].Day;
      state.cityDayWind = action.payload.DailyForecasts[0].Day.Wind;
      state.cityDayRain = action.payload.DailyForecasts[0].Day.Rain; 
      state.cityDaySnow = action.payload.DailyForecasts[0].Day.Snow;
      state.cityNight = action.payload.DailyForecasts[0].Night;
      state.cityNightWind = action.payload.DailyForecasts[0].Night.Wind;
      state.cityNightRain = action.payload.DailyForecasts[0].Night.Rain; 
      state.cityNightSnow = action.payload.DailyForecasts[0].Night.Snow;
    },
    [fetchCityUI.rejected]: (state, action) => {
      state.status = 'rejected';
    }
  }
});

export const {addCity, addTemperature} = citySlice.actions;

export default citySlice.reducer;