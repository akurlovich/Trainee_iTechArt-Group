import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import base64 from '../../services/Base64';
import { getBookedsForUser } from '../../store/reducers/BookedReducer/BookedActionCreators';
import { BookCard } from '../BookCard/BookCard';
import { Loader } from '../UI/Loader/Loader';
import './UserProfile.scss';

const UserProfileInner: FC = () => {
  const {user} = useAppSelector(state => state.authReducer);
  const {userBookedBooks, isLoading} = useAppSelector(state => state.bookedReducer);
  const dispatch = useAppDispatch();
  const [imageSrc, setImageSrc] = useState('./assets/book-1.png');
  const imageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (event.target.files as FileList)[0];
    const urlImage = await base64(file);
    if (urlImage) {
      setImageSrc(urlImage as string)
    }
  };

  useEffect(() => {
    dispatch(getBookedsForUser(user.id))
  }, []);

  return (
    <div className='profile'>
      {isLoading && <Loader/>}
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
            <div className="profile__info__email_adress">{user.email}</div>
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
          {userBookedBooks.length ?
          userBookedBooks.map(booked => <BookCard key={booked._id} book={booked}/>)
          :
          <div className="profile__title">You havn`t booked books</div>}
          {/* <BookCard/>
          <BookCard/>
          <BookCard/> */}
        </div>
        <div className="profile__books">
        <div className="profile__title">Issued books:</div>
          {/* <BookCard/> */}
        </div>
      </div>
    </div>
  );
};

export const UserProfile = React.memo(UserProfileInner);
