import React from 'react';
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
        <div className={classes.card__block_day}>    
          <div className={classes.card__image}>
            <img src="/icons/01-s.png" alt="weather icon"/>
            <div className={classes.temp__value_middle}>
            Sunny
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
              <div className={classes.temp__value_middle}>Wind</div>
              <div>15 km/h, W</div>
            </div>
            <div className={classes.temp__value_small}>
              <div className={classes.temp__value_middle}>Rain</div>
              <div>10 mm</div>
            </div>
            <div className={classes.temp__value_small}>
              <div className={classes.temp__value_middle}>Snow</div>
              <div>0 mm</div>
            </div>
          </div>
        </div>
        <div className={classes.card__block_night}>    
          <div className={classes.card__image}>
            <img src="/icons/01-s.png" alt="weather icon"/>
            <div className={classes.temp__value_middle}>
              Sunny
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
              <div className={classes.temp__value_middle}>Wind</div>
              <div>15 km/h, W</div>
            </div>
            <div className={classes.temp__value_small}>
              <div className={classes.temp__value_middle}>Rain</div>
              <div>10 mm</div>
            </div>
            <div className={classes.temp__value_small}>
              <div className={classes.temp__value_middle}>Snow</div>
              <div>0 mm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
 )
};

export default WeatherCard;
