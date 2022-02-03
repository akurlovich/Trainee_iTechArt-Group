import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import './header.scss';

const HeaderInner: FC = () => {
  return (
    // <>
      <header className='header__wrapper'>
        <div className='header__container'>
          <nav className='navigation'>
            <ul className='navigation__list'>
              <li className='navigation__item'>
                <div className='navigation__logo'>
                  LOGO
                </div>
              </li>
              <li className='navigation__item'>
                <ul className='navigation__menu'>
                  <li className='navigation__menu_item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='navigation__menu_item'>
                    <Link to='/addbook'>Add book</Link>
                  </li>
                  <li className='navigation__menu_item'>
                    About
                  </li>
                </ul>
              </li>
              <li className='navigation__item'>
                <ul className='navigation__user'>
                  <li className='navigation__user_item'>
                    <Link to='/profile'>Profile</Link>
                  </li>
                  <li className='navigation__user_item'>
                    <Link to='/login'>Log in</Link>
                  </li>
                  <li className='navigation__user_item'>
                    <Link to='/registration'>Sing in</Link> 
                  </li>
                  <li className='navigation__user_item'>
                    Log out
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
  );
};

export const Header = React.memo(HeaderInner);

