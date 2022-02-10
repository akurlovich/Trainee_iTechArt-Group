import React, { FC, useState } from 'react';
import base64 from '../../services/Base64';
import { BookCard } from '../BookCard/BookCard';
import './UserProfile.scss';

const UserProfileInner: FC = () => {
  const [imageSrc, setImageSrc] = useState('./assets/book-1.png');
  const imageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (event.target.files as FileList)[0];
    const urlImage = await base64(file);
    if (urlImage) {
      setImageSrc(urlImage as string)
    }
  }
  return (
    <div className='profile'>
      <div className="profile__container">
        <div className="profile__info">
          <div className="profile__title">User information</div>
          <div className="profile__info__block">
            <img className="profile__info__avatar" src={imageSrc} alt="user avatar" />
            <input
              onChange={imageHandler}
              className='inputs__files_display' type="file" name="label_for_file" id="label_for_file" />
            <label className='inputs__files__label' htmlFor="label_for_file">Select file</label>
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
