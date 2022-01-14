import React from 'react';
import DayBlock from './DayBlock/DayBlock';
import { useSelector } from 'react-redux';
import NightBlock from './NightBlock/NightBlock';
import CardMedium from '../WeatherCard/CardMedium/CardMedium';
import classes from './WeatherCard.module.css';

function WeatherCard() {
  const {cityByIP, cityDate, cityArr} = useSelector(state => state.cities);
  const {weatherArr, warr} = useSelector(state => state.weather);
  // let today = cityArr.EffectiveDate;
  const dayDate = new Date(cityDate.Date).toDateString();
  // let day2 = dayDate.toDateString();
  // let day2 = dayDate.toDateString();

  return (
    <div className={classes.card__wrapper}>
      <div className={classes.card__container}>
        <div className={classes.card__title}>
          <div className={classes.card__location}>
            <div>{cityByIP.city}</div>
            <div>{cityByIP.countryName}</div>
          </div>
        </div>
        {!weatherArr.length ? 
          <div className={classes.temp__value_small}>
            {dayDate}
          </div>
        : null
        }
        {/* <DayBlock/>  */}
        {/* {(Object.keys(cityArr).length !== 0) ? <DayBlock/> : null} */}
        {/* <NightBlock/> */}
        {warr.length ? 
          warr.map((item) => 
            <CardMedium 
            key={item.EpochDate}
            item={item}
            />)
          : null
        }
      </div>
      {/* <CardMedium/>
      <CardMedium/>
      <CardSmall/>
      <CardSmall/>
      <CardSmall/>
      <CardSmall/>
      <CardSmall/>
      <CardSmall/>
      <CardSmall/> */}
    </div>
 )
};

export default WeatherCard;
