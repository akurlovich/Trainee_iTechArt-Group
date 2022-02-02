import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormInput } from '../UI/FormInput/FormInput';
import './userregistration.scss';

const UserRegistrationInner: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirPassword, setConfirPassword] = useState('');
  const [buttonSubmit, setButtonSubmit] = useState(true);
  const handlerChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <div className='registration'>
      <div className="registration__container">
        <div className="registration__title">
          Create Account
        </div>
        <form
          onSubmit={handlerChange}
          className="registration__form"
          >
          <FormInput
            placeholder='Email address'
            name='email'
            type='email'
            errorMessage='Not valid email!'
            setData={setEmail}
            required={true}
            // pattern='^[A-Za-z0-9]{3,16}$'
          />
          <FormInput
            placeholder='Password'
            name='password'
            type='password'
            errorMessage='Password shoud be 8-20 characters and include 1 number and 1 letter!'
            setData={setPassword}
            required={true}
            pattern='^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,20}$'
          />
          <FormInput
            placeholder='Confirm password'
            name='confirm'
            type='password'
            errorMessage="Password don'n match"
            setData={setConfirPassword}
            required={true}
            pattern={password}
          />
          {/* <div className="registration__form__inputs-block">
            <div className="registration__form__input">
              <input className='registration__input__text' type="email" name="" id="" />
              <label className='registration__input__label' htmlFor="">
                Email Address
              </label>
            </div>
            <div className="registration__form__input">
              <input className='registration__input__text' type="password" name="" id="" />
              <label className='registration__input__label' htmlFor="">
                Password
              </label>
            </div>
            <div className="registration__form__input">
              <input className='registration__input__text' type="password" name="" id="" />
              <label className='registration__input__label' htmlFor="">
                Confirm password
              </label>
            </div>
          </div> */}
          <div className="registration__form__button">
            <input
              className={!buttonSubmit ? "registration__form__button_send" : "registration__form__button_send active"}
              type="submit"
              value="Sing in"
              // disabled={true}
            />
          </div>
        </form>
        <div className="registration__login-link">
          <div className="registration__login-link__text">
            Already have an account?
          </div>
          <div className="registration__login-link__link">
            <Link to='/login'>Login</Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export const UserRegistration = React.memo(UserRegistrationInner);
