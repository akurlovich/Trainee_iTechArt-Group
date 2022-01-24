import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchCityUI, fetchIP} from '../../store/citySlice';
import WeatherCard from '../WeatherCard/WeatherCard.jsx';
import classes from './Weather.module.css';
import Loader from '../UI/Loader/Loader.jsx';
import PopUp from '../UI/PopUp/PopUp';

const LOADING = 'loading';

function Weather() {
  const { status, cityShow, popUpShow } = useSelector(state => state.cities);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIP());
    dispatch(fetchCityUI());
  }, []);
  return (
    <div className={classes.weather}>
      {popUpShow.value && <PopUp/>}
      {status === LOADING ? <Loader/> : null}
      {cityShow && <WeatherCard/>}
    </div>
  )
};

export default Weather;
