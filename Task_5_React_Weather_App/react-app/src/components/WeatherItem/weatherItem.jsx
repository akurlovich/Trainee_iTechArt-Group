import React from 'react';
import classes from './WeatherItem.module.css';

function WeatherItem() {
  const a = '01'
  const img1 = `/icons/${a}-s.png`
  return (
    <div className={classes.weather__item}>
      <h2 className={classes.item__title}>Data</h2>
      <div className={classes.item__block}>
        <img src={img1} className={classes.item__image}/>
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
