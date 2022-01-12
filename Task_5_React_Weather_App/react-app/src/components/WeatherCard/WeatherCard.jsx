import React from 'react';
import DayBlock from './DayBlock/DayBlock';
import { useSelector } from 'react-redux';
import NightBlock from './NightBlock/NightBlock';
import classes from './WeatherCard.module.css';

function WeatherCard() {
  const {cityByIP, cityDate} = useSelector(state => state.cities);
  // let today = cityArr.EffectiveDate;
  let dayDate = new Date(cityDate.Date);
  // let day2 = dayDate.toDateString();
  let day2 = dayDate.toDateString();

  return (
    <div className={classes.card__wrapper}>
      <div className={classes.card__container}>
        <div className={classes.card__title}>
          <div className={classes.card__location}>
            <div>{cityByIP.city}</div>
            <div>{cityByIP.countryName}</div>
          </div>
        </div>
        <div className={classes.temp__value_small}>
          {/* Today: 06 december 2022 */}
          {day2}
        </div>
        <DayBlock/> 
        <NightBlock/>
      </div>
      {/* <CardMedium/>
      <CardMedium/>
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
