import React from 'react';
import DayBlock from './DayBlock/DayBlock';
import { useSelector } from 'react-redux';
import NightBlock from './NightBlock/NightBlock';
import CardMedium from '../WeatherCard/CardMedium/CardMedium';
import classes from './WeatherCard.module.css';

function WeatherCard() {
  const {cityByIP, cityDate, cityArr} = useSelector(state => state.cities);
  const {weatherArr, threeDays} = useSelector(state => state.weather);
  // let today = cityArr.EffectiveDate;
  const dayDate = new Date(cityDate.Date).toDateString();
  // let day2 = dayDate.toDateString();
  // let day2 = dayDate.toDateString();
  
  return (
    <div className={classes.card__wrapper}>
      <div className={classes.card__container}>
        <div className={classes.card__title}>
          <div className={classes.card__location}>
            {/* <div>{cityByIP.city}</div> */}
            <div>Brest</div>
            <div>{cityByIP.countryName}</div>
          </div>
        </div>
          {!threeDays.length ? 
            <div className={classes.temp__value_small}>
              {dayDate}
            </div>
          : null
          }
          <div className={classes.card__buttons}>
            <button className={classes.card__btn}>For 3 days</button>
            <button className={classes.card__btn}>For 7 days</button>
          </div>
          {/* <DayBlock/>  */}
          {(Object.keys(cityArr).length !== 0) ? <DayBlock/> : null}
          {(Object.keys(cityArr).length !== 0) ? <NightBlock/> : null}
          {/* <NightBlock/> */}
      </div>
        {threeDays.length ? 
          threeDays.map((item) => 
            <CardMedium 
              key={item.EpochDate}
              item={item}
            />)
          : null
        }
    </div>
 )
};

export default WeatherCard;
