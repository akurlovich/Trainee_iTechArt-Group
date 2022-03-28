import React, { FC, useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { checkAuth, loginUser } from '../../store/reducers/AuthReducer/AuthActionCreatores';
import { FormInput } from '../UI/FormInput/FormInput';
import { UserErrorWarning } from '../UI/UserErrorWarning/UserErrorWarning';
import './userlogin.scss';

interface ILocationState {
  from: string
}

const UserLoginInner: FC = () => {
  const {isAuth, error} = useAppSelector(state => state.authReducer);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false)
  const [buttonSubmit, setButtonSubmit] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  // const state = location.state as stateType;
  // const {from} = state;
  const navigate = useNavigate();
  const prevPage = location.state as ILocationState || '/';

  console.log(prevPage)

  const handlerChange = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(loginUser({email, password}));
    // await dispatch(checkAuth());
    // if (error) {
    //   console.log(error);
    //   setLoginError(true);
    // }
    setEmail('');
    setPassword('');
    setButtonSubmit(prev => false);
    navigate(prevPage ? prevPage.from : '/');
  };
  // const lpath = location.state.pathname
  // console.log("skjfdhjshf", prevPage.from);
  const validFormData = () => {
    if (email.length && password.length) {
      setButtonSubmit(prev => true)
    }
  }
  useEffect(() => {
    validFormData();
    if (isAuth) {
      if (prevPage.from) {
        navigate(prevPage.from)
      } else {
        navigate('/')
      }
    }
  }, [password, email, isAuth]);

  useEffect(() => {
    if (error) {
      console.log(error);
      setLoginError(true);
    }
  
  }, [error])

  const canselHandler = () => {
    setLoginError(false);
  }
  

  return (
    <div className='registration'>
      {loginError && <UserErrorWarning canselHandler={canselHandler} message='User not fouund!!!'/>}
      <div className="registration__block">
        <div className="registration__container">
          <div onClick={() => navigate('/')} className="registration__close">
            <AiOutlineCloseCircle size={40}/>
          </div>
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
              value={email}
              // errorMessage='Not valid email!'
              setData={setEmail}
              required={false}
              
            />
            <FormInput
              label='Password'
              name='password'
              type='password'
              value={password}
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
