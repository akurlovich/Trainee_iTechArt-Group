import React from 'react'
import { useMemo } from 'react';
import classes from './CardSmall.module.css';

export default function CardSmall({item}) {
  const dayDate = useMemo(() => {
    return new Date(item.Date).toDateString();
  }, [item.Date]);
  const icon = useMemo(() => {
    return `/icons/${(+item.Day.Icon > 9) ? item.Day.Icon : '0'+item.Day.Icon}-s.png`;
  }, [item.Day]);
  const tempMin = item.Temperature.Minimum.Value;
  const tempMax = item.Temperature.Maximum.Value; 
  const temp = useMemo(() => {
    return Math.ceil((tempMin + tempMax) / 2).toString();
  }, [item.Temperature]);
  const windSpeed = item.Day.Wind.Speed.Value;
  const windDirection = item.Day.Wind.Direction.Localized;
  const rain = item.Day.Rain.Value;
  const snowValue = useMemo(() => {
    return Math.ceil(item.Day.Snow.Value * 10);
  }, [item.Day]);
  
  return (
    <div className={classes.smallCard__container}>
      <div className={classes.card__block_day}>
        <div className={classes.smallCard__date}>
          <div className={classes.date_day}>{dayDate}</div>
        </div>
        <div className={classes.card__image}>
          <img src={icon} alt="weather icon"/>
        </div>
        <div className={classes.card__info}>
          <div className={classes.card__temp}>
            <div className={classes.temp__value}>{temp}</div>
            <div className={classes.temp__icon}>°C</div>
          </div>
        </div>
        <div className={classes.temp__options}>
          <div className={classes.temp__value_small}>
            <img className={classes.temp__image} src='icons/Wind.png'>
            </img>
            <div>{Math.ceil(windSpeed)} km/h, {windDirection}</div>
          </div>
          <div className={classes.temp__value_small}>
            <img className={classes.temp__image} src='icons/rain.png'></img>
            <div>{rain} mm</div>
          </div>
          <div className={classes.temp__value_small}>
            <img className={classes.temp__image} src='icons/snow.png'></img>
            <div>{snowValue} mm</div>
          </div>
        </div>
      </div>
    </div>
  )
}
