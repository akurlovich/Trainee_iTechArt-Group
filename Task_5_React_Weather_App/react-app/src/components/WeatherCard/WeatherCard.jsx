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
    {/*<div className={classes.card__location}>
        <div>Minsk</div>
        <div>Belarus</div>
      </div>*/}
    </div>
 
    </div>
 )
};

export default WeatherCard;
