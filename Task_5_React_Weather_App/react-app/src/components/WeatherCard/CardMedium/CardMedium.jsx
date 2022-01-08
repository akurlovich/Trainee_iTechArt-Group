import React from 'react'
import classes from './CardMedium.module.css';
import DayMedium from './CardMediumDay/DayMedium';
import NightMedium from './CardMediumNight/NightMedium';

export default function CardMedium() {
  return (
    <div className={classes.cardmedium__wrapper}>
      <div className={classes.cardmedium__title}>
        08 Juniary 2022
      </div>
      <div className={classes.cardmedium__container}>
        <DayMedium/>
        <NightMedium/>
      </div>
    </div>
    
  )
}
