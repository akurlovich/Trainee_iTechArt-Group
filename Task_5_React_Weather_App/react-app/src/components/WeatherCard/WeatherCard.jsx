import React from 'react';
import CardMedium from './CardMedium/CardMedium';
import CardSmall from './CardSmall/CardSmall';
import DayBlock from './DayBlock/DayBlock';
import NightBlock from './NightBlock/NightBlock';
import classes from './WeatherCard.module.css';

function WeatherCard() {
  return (
    <div className={classes.card__wrapper}>
      <div className={classes.card__container}>
        <div className={classes.card__title}>
          <div className={classes.card__location}>
            <div>Minsk</div>
            <div>Belarus</div>
          </div>
        </div>
        <div className={classes.temp__value_small}>
          Today: 06 december 2022
        </div>
        <DayBlock/> 
        <NightBlock/>
      </div>
      <CardMedium/>
      <CardMedium/>
      <CardMedium/>
      <CardSmall/>
      <CardSmall/>
      <CardSmall/>
      <CardSmall/>
      <CardSmall/>
      <CardSmall/>
      <CardSmall/>
    </div>
 )
};

export default WeatherCard;
