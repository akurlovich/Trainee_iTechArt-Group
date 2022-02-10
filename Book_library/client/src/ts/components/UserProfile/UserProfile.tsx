import React, { FC } from 'react';
import { BookCard } from '../BookCard/BookCard';
import './UserProfile.scss';

const UserProfileInner: FC = () => {
  return (
    <div className='profile'>
      <div className="profile__container">
        <div className="profile__info">
          <div className="profile__title">User information</div>
          <div className="profile__info__block">
            <img className="profile__info__avatar" src="./assets/book-1.png" alt="user avatar" />
            <button className="profile__info__avatar_button">Change image</button>
          </div>
          <div className="profile__info__email">
            <div className="profile__info__email_title">User email:</div>
            <div className="profile__info__email_adress">yandex_and_tut@tut_mail.by</div>
          </div>
          <div className="profile__info__password">
            <div className="profile__info__password__block">
              <input className="profile__info__password_input" type="password" placeholder='Curent password'/>
              <input className="profile__info__password_input" type="password" placeholder='New password'/>
              <input className="profile__info__password_input" type="password" placeholder='Confirm new password'/>
            </div>
            <button className="profile__info__password_button">Change password</button>
          </div>
        </div>
        <div className="profile__books">
          <div className="profile__title">Booked books:</div>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
        </div>
        <div className="profile__books">
        <div className="profile__title">Issued books:</div>
          <BookCard/>
        </div>
      </div>
    </div>
  );
};

export const UserProfile = React.memo(UserProfileInner);
