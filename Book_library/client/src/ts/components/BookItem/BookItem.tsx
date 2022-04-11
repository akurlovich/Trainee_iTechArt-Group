import React, { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteBookedAndReturnAmount, getAllBookedsByBookID } from '../../store/reducers/BookedReducer/BookedActionCreators';
import { getBookByID } from '../../store/reducers/BookReducer/BookActionCreatores';
import { getAllIssuedsByBookID } from '../../store/reducers/IssuedReducer/IssuedActionCreators';
import { IBookedResponse } from '../../types/IBookedResponse';
import { CommentsBlock } from '../CommentsBlock/CommentsBlock';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Loader } from '../UI/Loader/Loader';
import { UserBooking } from '../UserBooking/UserBooking';
import './bookitem.scss';
import { IIssuedResponse } from '../../types/IIssuedResponse';
import { BookItemMain } from './BookItemMain/BookItemMain';
import { ADMIN_ROLE } from '../../constants/user';
import { BookItemAdmin } from './BookItemAdmin/BookItemAdmin';

const BookItemInner: FC = () => {
  console.log('BookItem');
  const { isAuth, user, role } = useAppSelector(state => state.authReducer);
  const { book, isLoading } = useAppSelector(state => state.bookReducer);
  const { bookedsBookID } = useAppSelector(state => state.bookedReducer);
  const { issuedsByBookID } = useAppSelector(state => state.issuedReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {bookID} = useParams();
  const [booking, setBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [isIssued, setIsIssued] = useState(false);

  const findBooked = (array: IBookedResponse[] | IIssuedResponse[]) => {
    const bookArray = array.filter(item => item.bookID === book._id);
    return bookArray.find(item => item.userID === user.id);
  };

  useEffect(() => {
    (async () => {
      if (role !== ADMIN_ROLE) {
        if (book._id) {
          await dispatch(getBookByID(book._id));
          await dispatch(getAllBookedsByBookID(book._id));
          await dispatch(getAllIssuedsByBookID(book._id));
        } else if (bookID) {
          await dispatch(getBookByID(bookID));
          await dispatch(getAllBookedsByBookID(bookID));
          await dispatch(getAllIssuedsByBookID(bookID));
      }
    }})()
  }, [role]);


  useEffect(() => {
    if (findBooked(bookedsBookID)) {
      setIsBooked(true);
    }
  }, [bookedsBookID]);

  useEffect(() => {
    if (findBooked(issuedsByBookID)) {
      setIsIssued(true);
    }
  }, [issuedsByBookID]);

  const bookingHandler = () => {
    if (isAuth) {
      setBooking(true);
    } else {
      navigate(`/login`, {state: {from: location.pathname}});
      console.log(location.state)
    }
  };

  const canselBookingHandler = async () => {
    const booked = findBooked(bookedsBookID);
    if (booked) {
      await dispatch(deleteBookedAndReturnAmount(booked._id));
      await dispatch(getAllBookedsByBookID(book._id));
      setIsBooked(false);
    }
  };

  return (
    <>
      {isLoading && <Loader/>}
      {booking && <UserBooking book={book} setData={setBooking}/>}
      {!book?.title ? <PageNotFound/> : 
        <div className='bookitem'>
          <div className="bookitem__container">
            {role !== ADMIN_ROLE ?
              <BookItemMain
                blocked={user.isBlocked}
                book={book}
                isBooked={isBooked}
                isIssued={isIssued}
                canselBookingHandler={canselBookingHandler}
                bookingHandler={bookingHandler}
              />
            :
              <BookItemAdmin book={book}/>
            }
            <CommentsBlock/>
          </div>
        </div>
      }
    </>
  );
};

export const BookItem = React.memo(BookItemInner);
