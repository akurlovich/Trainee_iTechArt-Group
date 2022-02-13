import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { checkAuth, loginUser } from '../../store/reducers/AuthReducer/AuthActionCreatores';
import { FormInput } from '../UI/FormInput/FormInput';
import './userlogin.scss';

const UserLoginInner: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonSubmit, setButtonSubmit] = useState(false);
  const dispatch = useAppDispatch();
  const handlerChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginUser({email, password}));
    dispatch(checkAuth());
    setEmail('');
    setPassword('');
  };
  const validFormData = () => {
    if (email.length && password.length) {
      setButtonSubmit(prev => true)
    }
  }
  useEffect(() => {
    validFormData();
  }, [password, email]);

  return (
    <div className='registration'>
      <div className="registration__block">
        <div className="registration__container">
          <div className="registration__title">
            Log in
          </div>
          <form
            onSubmit={handlerChange}
            className="registration__form"
            >
            <FormInput
              label='Email address'
              name='email'
              type='text'
              // errorMessage='Not valid email!'
              setData={setEmail}
              required={false}
              
            />
            <FormInput
              label='Password'
              name='password'
              type='password'
              // errorMessage='Password shoud be 8-20 characters and include 1 number and 1 letter!'
              setData={setPassword}
              required={false}
            />
            <div className="registration__form__button">
              <input
                className={buttonSubmit ? "registration__form__button_send active" : "registration__form__button_send"}
                type="submit"
                value="Log in"
              />
            </div>
          </form>
          <div className="registration__login-link">
            <div className="registration__login-link__text">
              Нou don't have an account?
            </div>
            <div className="registration__login-link__link">
              <Link to='/registration'>Sing in</Link> 
            </div>
          </div>
        </div>
        <img className='registration__book one' src="./assets/book-1.png" alt="book" />
        <img className='registration__book two' src="./assets/book-2.png" alt="book" />
        <img className='registration__book three' src="./assets/book-3.png" alt="book" />
      </div>
    </div>
  );
};

export const UserLogin = React.memo(UserLoginInner);
