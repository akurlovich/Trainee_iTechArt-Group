import React from 'react';
import classes from './WeatherItem.module.css';

function WeatherItem() {
  return (
    <div className={classes.weather__item}>
      <h2 className={classes.item__title}>Data</h2>
      <div className={classes.item__block}>
        <div className={classes.item__image}></div>
        <div className={classes.item__info}>
          <div>tempreture</div>
          <div>Osadki</div>
          <div>Image</div>
        </div>
      </div>
    </div>
  )
};

export default WeatherItem;
