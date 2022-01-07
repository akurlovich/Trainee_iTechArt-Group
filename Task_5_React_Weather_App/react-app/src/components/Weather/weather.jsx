import React from 'react';
import WeatherItem from '../WeatherItem/weatherItem.jsx';
import WeatherCard from '../WeatherCard/WeatherCard.jsx';
import axios from 'axios';

const API_KEY = 'COTk1PPFKxAfDAcm0YhYhDaTjhtn73GR';
const citySearch = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=COTk1PPFKxAfDAcm0YhYhDaTjhtn73GR&q=minsk';
const weatherSearch = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/28580?apikey=COTk1PPFKxAfDAcm0YhYhDaTjhtn73GR&metric=true";

function Weather() {
  const cityUI = '28580';
    
  const getWeather = async () => {
    const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityUI}?apikey=${API_KEY}&metric=true`);
    console.log(res.data.DailyForecasts[0]);    
  };

  const showWeather = async () => {
    await getWeather();
  };


  return (
    <div className="weather">
      <button 
        className="show-weather"
        onClick={showWeather}
      >
        Click
      </button>
      <WeatherItem/>
      <WeatherCard/>
    </div>
  )
};

export default Weather;
