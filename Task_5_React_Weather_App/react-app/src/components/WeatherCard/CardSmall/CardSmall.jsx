import React from 'react'
import classes from './CardSmall.module.css';

export default function CardSmall({item}) {
  const dayDate = new Date(item.Date).toDateString();
  const icon = `/icons/${(+item.Day.Icon > 9) ? item.Day.Icon : '0'+item.Day.Icon}-s.png`;
  const tempMin = item.Temperature.Minimum.Value;
  const tempMax = item.Temperature.Maximum.Value; 
  const temp = Math.ceil((tempMin + tempMax) / 2).toString();
  const windSpeed = item.Day.Wind.Speed.Value;
  const windDirection = item.Day.Wind.Direction.Localized;
  const rain = item.Day.Rain.Value;
  const snowValue = Math.ceil(item.Day.Snow.Value * 10);

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
            <img className={classes.temp__image} src='/icons/Wind.png'>
            </img>
            <div>{Math.ceil(windSpeed)} km/h, {windDirection}</div>
          </div>
          <div className={classes.temp__value_small}>
            <img className={classes.temp__image} src='/icons/rain.png'></img>
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
