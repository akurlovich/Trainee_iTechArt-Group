import React from 'react';
import DayBlock from './DayBlock/DayBlock';
import { useSelector, useDispatch } from 'react-redux';
import NightBlock from './NightBlock/NightBlock';
import CardMedium from '../WeatherCard/CardMedium/CardMedium';
import { addShow1Day, addShow3Day, addShow5Day } from '../../store/citySlice';
import classes from './WeatherCard.module.css';
import CardSmall from './CardSmall/CardSmall';

function WeatherCard() {
  const {cityByIP, cityDate, weatherArr, threeDays, cityShow1Day, cityShow3Day, cityShow5Day} = useSelector(state => state.cities);
  const dispatch = useDispatch();
  const dayDate = new Date(cityDate.Date).toDateString();
  const show3Day = () => {
    dispatch(addShow3Day());
  };
  const show5Day = () => {
    dispatch(addShow5Day());
  };
  const show1Day = () => {
    dispatch(addShow1Day());
  }
  return (
    <div className={classes.card__wrapper}>
      <div className={classes.card__container}>
        <div className={classes.card__title}>
          <div className={classes.card__location}>
            <div>{cityByIP.city}</div>
            <div>{cityByIP.countryName}</div>
          </div>
        </div>
          {cityShow1Day && 
            <div className={classes.temp__value_small}>
              {dayDate}
            </div>
          }
          <div className={classes.card__buttons}>
            <button
              className={classes.card__btn}
              onClick={show1Day}
            >Today</button>
            <button
              className={classes.card__btn}
              onClick={show3Day}
            >For 3 days</button>
            <button
              className={classes.card__btn}
              onClick={show5Day}
            >For 7 days</button>
          </div>
          {cityShow1Day && <DayBlock/>}
          {cityShow1Day && <NightBlock/>}
      </div>
        {cityShow3Day && 
          threeDays.map((item, index) => 
            <CardMedium 
              key={item.EpochDate + index}
              item={item}
            />)
        }
        {cityShow5Day &&
          weatherArr.map((item, index) => 
            <CardSmall 
              key={item.EpochDate + index}
              item={item}
            />)
        }
    </div>
 )
};

export default WeatherCard;
