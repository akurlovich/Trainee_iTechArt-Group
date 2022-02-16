import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getBookByID } from '../../store/reducers/BookReducer/BookActionCreatores';
import { CommentsBlock } from '../CommentsBlock/CommentsBlock';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Loader } from '../UI/Loader/Loader';
import './bookitem.scss';

const BookItemInner: FC = () => {
  const {book, isLoading} = useAppSelector(state => state.bookReducer);
  const dispatch = useAppDispatch();
  const {bookID} = useParams();

  useEffect(() => {
    if (bookID) {
      dispatch(getBookByID(bookID));
    }
  }, []);

  return (
    <>
      {isLoading && <Loader/>}
      {!book?.title ? <PageNotFound/> : 
        <div className='bookitem'>
          <div className="bookitem__container">
            <div className="bookitem__main">
              <div className="bookitem__main__cover">
                <img className='bookitem__main__cover__image' src={book?.coverImage} alt="book cover" />
              </div>
              <div className="bookitem__info">
                <div className="bookitem__title">
                  {book?.title}
                </div>
                <div className="bookitem__detaile">
                  <div className="bookitem__author">
                    {book?.author}
                  </div>
                  <div className="bookitem__year">
                    {book?.year}
                  </div>
      //TODO_______HOW GET GENRE_________
                  {/* <div className="bookitem__year">
                    {book?.genre}
                  </div> */}
                </div>
                <div className="bookitem__description">
                  {book?.description}
                </div>
                <div className="bookitem__buttons">
                  <div className="bookitem__button booking">
                    Booking
                  </div>
                  <div className="bookitem__button issue">
                    Issue
                  </div>
                </div>
              </div>
            </div>
            <CommentsBlock/>
          </div>
        </div>
      }
    </>
  );
};

export const BookItem = React.memo(BookItemInner);
