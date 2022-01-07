import React from 'react';
import classes from './WeatherCard.module.css';

function WeatherCard() {
  return (
    <div className={classes.card__wrapper}>
    <div className={classes.card__container}>
      <div className={classes.card__image}>
        <img src="/icons/01-s.png" alt="weather icon"/>
      </div>
      <div className={classes.card__temp}>
        <div className={classes.temp__value}>13</div>
        <div className={classes.temp__icon}>°C</div>
      </div>
      <div className={classes.card__location}>Minsk, Belarus</div>
    </div>
 
    </div>
 )
};

export default WeatherCard;
