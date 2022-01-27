import React from 'react'
import classes from './Loader.module.css';

function LoaderInner() {
  return (
    <div className={classes.loader__wrapper}>
      <div className={classes.loader}></div>
    </div>
  )
};

export const Loader = React.memo(LoaderInner)
