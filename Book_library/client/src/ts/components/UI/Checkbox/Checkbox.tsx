import React, { FC } from 'react';
import './checkbox.scss';

interface ICheckboxProps {
  field?: string,
}

const CheckboxInner: FC<ICheckboxProps> = ({field}) => {
  return (
    <div className="checkbox">
      <input className='checkbox__input' type="checkbox" name="checkbox__input" id={field} />
      <label className='checkbox__label' htmlFor={field}>{field}</label>
      <img className='checkbox__image' src="./assets/check-solid.svg" alt="check icon" />
    </div>
  )
};

export const Checkbox = React.memo(CheckboxInner);
