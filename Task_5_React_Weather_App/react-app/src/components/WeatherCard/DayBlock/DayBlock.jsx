import React from 'react';
import { useSelector } from 'react-redux';
import classes from './DayBlock.module.css';

export default function DayBlock() {
  const {cityDay, cityTemp} = useSelector(state => state.cities);
  // let temp = Math.ceil(cityTemp.Value).toString();
  let temp = cityTemp.Maximum.Value;
  // let temp = cityTemp.Value;

  return (
    <div className={classes.card__block_day}> 
      <div className={classes.card__image}>
        <img src={`/icons/0${cityDay.Icon}-s.png`} alt="weather icon"/>
        <div className={classes.temp__value_middle}>
        {/* {cityArr.DailyForecasts[0].Day.LongPhrase} */}
        {cityDay.LongPhrase}
        </div>
      </div>
      <div className={classes.card__info}>
        <div className={classes.card__temp}>
          <div className={classes.temp__value}>{temp}</div>
          <div className={classes.temp__icon}>°C</div>
        </div>
        <div className={classes.card__minmax}>
        <div className={classes.minmax__min}>
          <div className={classes.temp__value_small}>Min:</div>
            <div className={classes.card__temp}>
              <div className={classes.temp__value_small}>13</div>
              <div className={classes.temp__icon_small}>°C</div>
            </div>
          </div>
        <div className={classes.minmax__max}>
          <div className={classes.minmax__min}>
            <div className={classes.temp__value_small}>Max:</div>
              <div className={classes.card__temp}>
                <div className={classes.temp__value_small}>13</div>
                <div className={classes.temp__icon_small}>°C</div>
              </div>
          </div>
        </div>
        </div> 
      </div>
      <div className={classes.temp__options}>
        <div className={classes.temp__value_small}>
          <img className={classes.temp__image} src='/icons/Wind.png'>

          </img>
          <div>15 km/h, W</div>
        </div>
        <div className={classes.temp__value_small}>
          <img className={classes.temp__image} src='/icons/rain.png'></img>
          <div>10 mm</div>
        </div>
        <div className={classes.temp__value_small}>
          <img className={classes.temp__image} src='icons/snow.png'></img>
          <div>0 mm</div>
        </div>
      </div>
    </div>
  )
}
