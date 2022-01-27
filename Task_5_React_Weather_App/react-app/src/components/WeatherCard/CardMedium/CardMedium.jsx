import React from 'react'
import classes from './CardMedium.module.css';
import { DayMedium } from './CardMediumDay/DayMedium';
import { NightMedium } from './CardMediumNight/NightMedium';

function CardMediumInner(props) {
  const dayDate = new Date(props.item.Date).toDateString();
  return (
    <div className={classes.cardmedium__wrapper}>
      <div className={classes.cardmedium__title}>
        {dayDate}
      </div>
      <div className={classes.cardmedium__container}>
        <DayMedium day={props.item.Day} temp={props.item.Temperature}/>
        <NightMedium night={props.item.Night} temp={props.item.Temperature}/>
      </div>
    </div>
  )
};

export const CardMedium = React.memo(CardMediumInner);
