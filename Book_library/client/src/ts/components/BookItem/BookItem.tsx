import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllBookedsByBookID } from '../../store/reducers/BookedReducer/BookedActionCreators';
import { getBookByID } from '../../store/reducers/BookReducer/BookActionCreatores';
import { IBookedResponse } from '../../types/IBookedResponse';
import { CommentsBlock } from '../CommentsBlock/CommentsBlock';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Loader } from '../UI/Loader/Loader';
import { UserBooking } from '../UserBooking/UserBooking';
import './bookitem.scss';

const BookItemInner: FC = () => {
  const {book, isLoading} = useAppSelector(state => state.bookReducer);
  const { bookedsBookID } = useAppSelector(state => state.bookedReducer);
  const dispatch = useAppDispatch();
  const {bookID} = useParams();
  const [booking, setBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false)

  const findBook = (array: IBookedResponse[]) => {
    return array.find(item => item.bookID === bookID);
  }

  useEffect(() => {
    if (bookID) {
      dispatch(getBookByID(bookID));
      dispatch(getAllBookedsByBookID(bookID))
    }
  }, []);

  useEffect(() => {
    if (findBook(bookedsBookID)) {
      setIsBooked(prev => true);
    }
  }, [bookedsBookID]);

  const bookingHandler = () => {
    setBooking(prev => true);
    console.log('booked', bookedsBookID);
  }

  return (
    <>
      {isLoading && <Loader/>}
      {booking && <UserBooking book={book} setData={setBooking}/>}
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
                  {isBooked ?
                  <div className="bookitem__button booked">
                    Already booked
                  </div>
                  :
                  <button
                    onClick={bookingHandler} 
                    className="bookitem__button booking">
                    Booking
                  </button>
                  
                  }
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
