import React from 'react';
import WeatherItem from '../WeatherItem/weatherItem.jsx';
import WeatherCard from '../WeatherCard/WeatherCard.jsx';
import axios from 'axios';
import classes from './Weather.module.css';

const API_KEY = 'COTk1PPFKxAfDAcm0YhYhDaTjhtn73GR';
const citySearch = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=COTk1PPFKxAfDAcm0YhYhDaTjhtn73GR&q=minsk';
const weatherSearch = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/28580?apikey=COTk1PPFKxAfDAcm0YhYhDaTjhtn73GR&details=true&metric=true";

function Weather() {
  const cityUI = '28580';
    
  const getWeather = async () => {
    const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityUI}?apikey=${API_KEY}&details=true&metric=true`);
    console.log(res.data);    
  };

  const showWeather = async () => {
    await getWeather();
  };


  return (
    <div className={classes.weather}>
      {/* <div className={classes.weather__location}>
        <div className={classes.location__item}>Minsk</div>
        <div className={classes.location__item}>Belarus</div>
      </div> */}
      <button 
        className="show-weather"
        onClick={showWeather}
      >
        Click
      </button>
      <WeatherCard/>
    </div>
  )
};

export default Weather;
