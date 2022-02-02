import React, { FC, useState, FocusEvent } from 'react';
import './forminput.scss';''

interface IFormInput {
  placeholder?: string,
  name?: string,
  type?: string,
  errorMessage?: string,
  required?: boolean,
  pattern?: string,
  setData: (event: string) => void,
}

const FormInputInner: FC<IFormInput> = ({
  placeholder = '',
  name = '',
  type = 'text',
  errorMessage = '',
  required = false,
  pattern,
  setData
}) => {
  const [focused, setFocused] = useState(false);
  const handlerBlur = () => {
    setFocused(true);
  };
  const handlerFocus = (event: FocusEvent<HTMLInputElement>) => {
    name === 'confirm' && setFocused(true)
  }
  return (
    <div className="form-input">
      {/* <label className='form-input__label' htmlFor="">{placeholder}</label> */}
      <input
        onChange={e => setData(e.target.value)}
        className='form-input__text'
        placeholder={placeholder}
        name={name}
        type={type}
        pattern={pattern}
        required={required}
        onBlur={handlerBlur}
        onFocus={handlerFocus}
        datatype={focused.toString()}
      />
      <div className='form-input__error'>{errorMessage}</div>
    </div>
  );
};

export const FormInput = React.memo(FormInputInner);