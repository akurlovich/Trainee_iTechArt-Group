import React, { FC } from 'react';
import './header.scss';

const HeaderInner: FC = () => {
  return (
    <div className='header__wrapper'>
      <div className="header__container">
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <div className="navigation__logo">
                LOGO
              </div>
            </li>
            <li className="navigation__item">
              <ul className="navigation__menu">
                <li className="navigation__menu_item">
                  All books
                </li>
                <li className="navigation__menu_item">
                  One book
                </li>
                <li className="navigation__menu_item">
                  About
                </li>
              </ul>
            </li>
            <li className="navigation__item">
              <ul className="navigation__user">
                <li className="navigation__user_item">
                  Profile
                </li>
                <li className="navigation__user_item">
                  Log in
                </li>
                <li className="navigation__user_item">
                  Sing in
                </li>
                <li className="navigation__user_item">
                  Log out
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export const Header = React.memo(HeaderInner);

