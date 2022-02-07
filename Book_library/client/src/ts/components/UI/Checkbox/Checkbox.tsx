import React, { FC } from 'react';
import './checkbox.scss';

const CheckboxInner: FC = () => {
  return (
    <div className="checkbox">
      <input className='checkbox__input' type="checkbox" name="" id="" />
      <label className='checkbox__label' htmlFor="checkbox__input">Genre</label>
      <img src="./assets/check-solid.svg" alt="" />
    </div>
  )
};

export const Checkbox = React.memo(CheckboxInner);
