import {createSlice} from '@reduxjs/toolkit';

const citySlice = createSlice({
  name: 'CITY',
  initialState: {
    cityArr: [],
    temperature: '-9',
  },
  reducers: {
    addCity(state, action) {
      console.log(state);
      console.log(action);
      state.city.push({
        id: new Date().toISOString(),
        city: action.payload.city,
      })
    },
    addTemperature(state, action) {},
  }
});

export const {addCity, addTemperature} = citySlice.actions;

export default citySlice.reducer;