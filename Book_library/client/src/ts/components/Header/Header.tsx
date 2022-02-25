import React, { FC } from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logoutUser } from '../../store/reducers/AuthReducer/AuthActionCreatores';
import { Footer } from '../Footer/Footer';
import logo from '../../../assets/book_logo.png';
import './header.scss';
import { ADMIN_ROLE } from '../../constants/user';

const HeaderInner: FC = () => {
  const {user, role, isAuth} = useAppSelector(state => state.authReducer);
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
  }
  return (
    // <>
      <header className='header__wrapper'>
        <div className='header__container'>
          <nav className='navigation'>
            <ul className='navigation__list'>
              <li className='navigation__item'>
                <div className='navigation__logo'>
                  <img className='navigation__logo__image' src={logo} alt="logo" />
                  {/* {user?.email?.length > 0 ? `${user.email}` : 'LOGO'} */}
                </div>
              </li>
              <li className='navigation__item'>
                <ul className='navigation__menu'>
                  <li className='navigation__menu_item'>
                    <NavLink className={({isActive}) => isActive ? 'active-link' : 'navigation__link'} to='/'>Home</NavLink>
                  </li>
                  {(role === ADMIN_ROLE) && 
                  <>
                    <li className='navigation__menu_item'>
                      <NavLink className={({isActive}) => isActive ? 'active-link' : 'navigation__link'} to='/booking'>Booking</NavLink>
                    </li>
                    <li className='navigation__menu_item'>
                      <NavLink className={({isActive}) => isActive ? 'active-link' : 'navigation__link'} to='/addbook'>Add book</NavLink>
                    </li>
                  </>
                  }
                  {/* <li className='navigation__menu_item'>
                    <Link to='/book'>Book</Link>
                  </li> */}
                  <li className='navigation__menu_item'>
                    <NavLink className={({isActive}) => isActive ? 'active-link' : 'navigation__link'} to='/about'>About</NavLink>
                  </li>
                </ul>
              </li>
              <li className='navigation__item'>
                <ul className='navigation__user'>
                  {(isAuth && (role !== ADMIN_ROLE)) &&
                  <>
                    <li className='navigation__user_item'>
                      <Link className={'navigation__link'} to={`/profile/${user.id}`}>{user?.email?.length > 0 ? `${user.email}` : ''}</Link>
                    </li>
                  </>}
                  {!isAuth && 
                  <>
                    <li className='navigation__user_item'>
                      <Link className={'navigation__link_login'} to='/login'>Log in</Link>
                    </li>
                    <li className='navigation__user_item'>
                      <Link className={'navigation__link_sing-in'} to='/registration'>Sing in</Link> 
                    </li>
                  </>}
                  
                  {isAuth && 
                  <>
                    <li onClick={logoutHandler} className='navigation__user_item'>
                      <Link className={'navigation__link_login'} to='/'>Log out</Link>
                    </li>
                  </>}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
  );
};

export const Header = React.memo(HeaderInner);

