import React, { FC } from 'react';
import './checkbox.scss';

const CheckboxInner: FC = () => {
  return (
    <div className="checkbox">
      <input className='checkbox__input' type="checkbox" name="checkbox__input" id="checkbox__input" />
      <label className='checkbox__label' htmlFor="checkbox__input">Genre</label>
      <img className='checkbox__image' src="./assets/check-solid.svg" alt="" />
    </div>
  )
};

export const Checkbox = React.memo(CheckboxInner);
