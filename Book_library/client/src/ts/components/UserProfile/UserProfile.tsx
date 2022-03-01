import React, { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import base64 from '../../services/ClientServices/Base64';
import { updateUserProfileImage } from '../../store/reducers/AuthReducer/AuthActionCreatores';
import { getBookedsForUser } from '../../store/reducers/BookedReducer/BookedActionCreators';
import { getAllIssuedsByUserID, getIssuedsForUser } from '../../store/reducers/IssuedReducer/IssuedActionCreators';
import { BookCard } from '../BookCard/BookCard';
import { Loader } from '../UI/Loader/Loader';
import './UserProfile.scss';

const UserProfileInner: FC = () => {
  const {user} = useAppSelector(state => state.authReducer);
  const {userBookedBooks, isLoading} = useAppSelector(state => state.bookedReducer);
  const { userIssuedBooks } = useAppSelector(state => state.issuedReducer);
  const dispatch = useAppDispatch();
  const {userID} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [imageSrc, setImageSrc] = useState('');
  const [isNewImage, setIsNewImage] = useState(false)
  
  const imageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (event.target.files as FileList)[0];
    const urlImage = await base64(file);
    urlImage && setImageSrc(urlImage as string);
    (urlImage !== imageSrc) && setIsNewImage(true);
  };

  const changeImageHandler = () => {
    dispatch(updateUserProfileImage({id: user.id, profileImage: imageSrc}))
  };

  useEffect(() => {
    (async () => {
      await dispatch(getBookedsForUser(user.id));
      await dispatch(getIssuedsForUser(user.id));
      setImageSrc(user.profileImage)
    })()
    if (user.id !== userID) {
      // navigate(`/login`, {state: {from: location.pathname}});
      navigate(`/login`);
    }
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
            <div className="profile__image-block">
              <label className='profile__files-label' htmlFor="label_for_file">Select file</label>
              {isNewImage && 
                <button
                  onClick={changeImageHandler}
                  className="profile__info__avatar_button">
                  Save image
                </button>
              }
            </div>
          </div>
          <div className="profile__info__email">
            <div className="profile__info__email_title">User email:</div>
            <div className="profile__info__email_adress">{user.email}</div>
          </div>
          {/* <div className="profile__info__password">
            <div className="profile__info__password__block">
              <input className="profile__info__password_input" type="password" placeholder='Curent password'/>
              <input className="profile__info__password_input" type="password" placeholder='New password'/>
              <input className="profile__info__password_input" type="password" placeholder='Confirm new password'/>
            </div>
            <button className="profile__info__password_button">Change password</button>
          </div> */}
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
          {userIssuedBooks.length ?
          userIssuedBooks.map(booked => <BookCard key={booked._id} book={booked}/>)
          :
          <div className="profile__title">You havn`t booked books</div>}
        </div>
      </div>
    </div>
  );
};

export const UserProfile = React.memo(UserProfileInner);
