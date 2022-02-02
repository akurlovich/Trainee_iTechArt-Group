import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormInput } from '../UI/FormInput/FormInput';
import './userregistration.scss';

const UserRegistrationInner: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirPassword, setConfirPassword] = useState('');
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
            type='text'
            setData={setEmail}
          />
          <FormInput
            placeholder='Password'
            name='password'
            type='password'
            setData={setPassword}
          />
          <FormInput
            placeholder='Confirm password'
            name='confirm'
            type='password'
            setData={setConfirPassword}
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
              className="registration__form__button_send"
              type="submit"
              value="Sing in"
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
