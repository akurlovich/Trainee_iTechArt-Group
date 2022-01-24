import axios from 'axios';

const API_KEY = 'COTk1PPFKxAfDAcm0YhYhDaTjhtn73GR';
const GET_CITY_BY_ID_URL = 'http://api.db-ip.com/v2/free/self';
const BASE_URL = 'http://dataservice.accuweather.com';

export const getCityByIP = async () => {
  return await axios.get(GET_CITY_BY_ID_URL)
};
export const getCityUI = async (city) => {
  return await axios.get(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`);  
};
export const getWeather = async (cityUI, dayCount) => {
  return await axios.get(`${BASE_URL}/forecasts/v1/daily/${dayCount}day/${cityUI}?apikey=${API_KEY}&details=true&metric=true`);
};
export const getSearchCity = async (data) => {
  return await axios.get(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${data}`);
};