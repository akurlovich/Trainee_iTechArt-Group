import {createSlice} from '@reduxjs/toolkit';

const citySlice = createSlice({
  name: 'CITY',
  initialState: {
    cityArr: [],
    temperature: '-9',
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
  }
});

export const {addCity, addTemperature} = citySlice.actions;

export default citySlice.reducer;