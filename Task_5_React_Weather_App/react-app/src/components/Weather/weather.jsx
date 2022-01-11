import React from 'react';
import {useSelector} from 'react-redux';
import WeatherItem from '../WeatherItem/weatherItem.jsx';
import WeatherCard from '../WeatherCard/WeatherCard.jsx';
import axios from 'axios';
import classes from './Weather.module.css';

const API_KEY = 'COTk1PPFKxAfDAcm0YhYhDaTjhtn73GR';
const citySearch = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=COTk1PPFKxAfDAcm0YhYhDaTjhtn73GR&q=minsk';
const weatherSearch = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/28580?apikey=COTk1PPFKxAfDAcm0YhYhDaTjhtn73GR&details=true&metric=true";

function Weather() {
  const cityUI = '28580';

  const city = useSelector(state => state.cities.cityArr);
    
  const getWeather = async () => {
    const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityUI}?apikey=${API_KEY}&details=true&metric=true`);
    console.log(res.data);    
  };

  const showWeather = async () => {
    await getWeather();
  };

  const showIP = async () => {
    const res = await (await axios.get('http://api.db-ip.com/v2/free/self'));
    console.log(res.data);
  };

  const showCity = () => {
    console.log(city);
  }


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
      <button 
        className="show-weather"
        onClick={showIP}
      >
        Click
      </button>
      <button 
        className="show-weather"
        onClick={showCity}
      >
        test
      </button>
      <WeatherCard/>
    </div>
  )
};

export default Weather;
