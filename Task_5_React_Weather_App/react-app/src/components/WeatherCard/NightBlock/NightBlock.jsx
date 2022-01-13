import React from 'react';
import { useSelector } from 'react-redux';
import classes from '../DayBlock/DayBlock.module.css';

export default function NightBlock() {
  const {cityNight} = useSelector(state => state.cities);

  let icon = `/icons/${(+cityNight.Icon > 9) ? cityNight.Icon : '0'+cityNight.Icon}-s.png`;

  return (
    <div className={classes.card__block_night}>    
      <div className={classes.card__image}>
        <img src={icon}  alt="weather icon"/>
        <div className={classes.temp__value_middle}>
          {cityNight.LongPhrase}
        </div>
      </div>
      <div className={classes.card__info}>
        <div className={classes.card__temp}>
          <div className={classes.temp__value}>13</div>
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
