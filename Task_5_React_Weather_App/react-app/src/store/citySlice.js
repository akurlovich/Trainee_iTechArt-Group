import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getCityByIP, getCityUI, getWeather } from '../userAPI';

const LOADING = 'loading';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
const DEFAULT_CITY = '28580';

export const fetchIP = createAsyncThunk(
  'CITY/fetchIP',
  async function(_, {rejectWithValue}) {
    try {
      const res = await getCityByIP();
      if (res.status !== 200) {
        throw new Error('City by IP not found!')
      } 
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchCityUI = createAsyncThunk(
  'CITY/fetchCityUI',
  async function (cityKey, {rejectWithValue, getState}) {
    try {
      const resByIP = await getCityByIP();
      if (resByIP.status !== 200) {
        throw new Error('City by IP not found!')
      };
      const resCityUI = await getCityUI(resByIP.data.city);
      if (resCityUI.status !== 200) {
        throw new Error('City UI not found!')
      } 
      let keyForCity = DEFAULT_CITY;
      if (resCityUI.data[0]) {
        keyForCity = resCityUI.data[0].Key
      };
      if (cityKey) {
        keyForCity = cityKey;
      };
      const resCityWeather = await getWeather(keyForCity, 5);
      if (resCityWeather.status !== 200) {
        throw new Error('Weather not found!')
      } 
      return resCityWeather.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const citySlice = createSlice({
  name: 'CITY',
  initialState: {
    cityShow: false,
    cityShow1Day: false,
    cityShow3Day: false,
    cityShow5Day: false,
    popUpShow: {
      value: false,
      city: '',
    },
    cityByIP: {},
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
    weatherArr: [],
    threeDays: [],
    status: null,
    error: null,
  },
  reducers: {
    addNewCity(state, action) {
      state.cityByIP = action.payload;
      state.cityShow = true;
      state.cityShow3Day = false;
      state.cityShow5Day = false;
    },
    addShow1Day(state, action) {
      state.cityShow1Day = true;
      state.cityShow3Day = false;
      state.cityShow5Day = false;
    },
    addShow3Day(state, action) {
      state.cityShow1Day = false;
      state.cityShow3Day = true;
      state.cityShow5Day = false;
    },
    addShow5Day(state, action) {
      state.cityShow1Day = false;
      state.cityShow3Day = false;
      state.cityShow5Day = true;
    },
    addPopUpShow(state, action) {
      state.popUpShow = action.payload;
    }
  },
  extraReducers: {
    [fetchIP.pending]: (state) => {
      state.status = LOADING;
      state.error = null;
    },
    [fetchIP.fulfilled]: (state, action) => {
      state.status = RESOLVED;
      state.cityByIP = action.payload;
      state.cityShow = true;
    },
    [fetchIP.rejected]: (state, action) => {
      state.status = REJECTED;
      state.error = action.payload;
      state.cityShow = false;
    },
    [fetchCityUI.pending]: (state, action) => {
      state.status = LOADING;
    },
    [fetchCityUI.fulfilled]: (state, action) => {
      state.cityShow = true;
      state.cityShow1Day = true;
      state.status = RESOLVED;
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
      state.weatherArr = action.payload.DailyForecasts;
      for (let i = 0; i <= 2; i++) {
        state.threeDays.push(action.payload.DailyForecasts[i])
      }
    },
    [fetchCityUI.rejected]: (state, action) => {
      state.status = REJECTED;
      state.cityShow = false;
      state.error = action.payload;
    }
  }
});
export const {
  addCity,
  addNewCity,
  addShow1Day,
  addShow3Day,
  addShow5Day,
  addPopUpShow,
} = citySlice.actions;

export default citySlice.reducer;