import React, { FC } from 'react';
import './forminput.scss';''

interface IFormInput {
  placeholder?: string,
  name?: string,
  type?: string,
  setData: (event: string) => void,
}

const FormInputInner: FC<IFormInput> = ({
  placeholder = '',
  name = '',
  type = 'text',
  setData
}) => {
  console.log(placeholder);
  return (
    <div className="form-input">
      {/* <label className='form-input__label' htmlFor="">{placeholder}</label> */}
      <input
        onChange={e => setData(e.target.value)}
        className='form-input__text'
        placeholder={placeholder}
        name={name}
        type={type}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export const FormInput = React.memo(FormInputInner);