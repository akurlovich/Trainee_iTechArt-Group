import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteBooked, getAllBookedsByBookID } from '../../store/reducers/BookedReducer/BookedActionCreators';
import { getBookByID, updateBookAmountByID } from '../../store/reducers/BookReducer/BookActionCreatores';
import { IBookedResponse } from '../../types/IBookedResponse';
import { CommentsBlock } from '../CommentsBlock/CommentsBlock';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Loader } from '../UI/Loader/Loader';
import { UserBooking } from '../UserBooking/UserBooking';
import './bookitem.scss';

const BookItemInner: FC = () => {
  const {isAuth, user} = useAppSelector(state => state.authReducer);
  const {book, isLoading} = useAppSelector(state => state.bookReducer);
  const { bookedsBookID } = useAppSelector(state => state.bookedReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {bookID} = useParams();
  const [booking, setBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const findBooked = (array: IBookedResponse[]) => {
    const bookArray = array.filter(item => item.bookID === book._id);
    return bookArray.find(item => item.userID === user.id);
  }

  useEffect(() => {
    (async () => {
      if (book._id) {
        await dispatch(getBookByID(book._id));
        console.log('from book book id', book.title);
        await dispatch(getAllBookedsByBookID(book._id));
      } else if (bookID) {
        await dispatch(getBookByID(bookID));
        console.log('from book params', book.title);
        await dispatch(getAllBookedsByBookID(bookID));
      }
    })()
  }, []);

  useEffect(() => {
    console.log('from bookedID', bookedsBookID);
    if (findBooked(bookedsBookID)) {
      console.log('book found');
      setIsBooked(true);
    }
  }, [bookedsBookID]);

  const bookingHandler = () => {
    if (isAuth) {
      setBooking(true);
      console.log('booked', bookedsBookID);
    } else {
      navigate(`/login`);
    }
  };

  const canselBookingHandler = async () => {
    const booked = findBooked(bookedsBookID);
    console.log('from cansel', booked)
    console.log('from cansel bookedsBookID', bookedsBookID)
    if (booked) {
      await dispatch(deleteBooked(booked._id));
      await dispatch(getAllBookedsByBookID(book._id));
      setIsBooked(false);
    }
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
                  <>
                    <div className="bookitem__button booked">
                      Already booked
                    </div>
                    <button
                      onClick={canselBookingHandler} 
                      className="bookitem__button booking">
                      Cansel Booking
                    </button>
                  </>
                  : book.amount <= 0 ? 
                    <div className="bookitem__button booked warning">
                      Sorry, out of stock
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
