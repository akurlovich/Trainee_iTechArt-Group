import React, { FC, useEffect } from 'react';
import { IBookResponse } from '../../types/IBookResponse';
import { FcCancel } from "react-icons/fc";
import './bookcard.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteBooked, getAllBookedsByUserID, getBookedsForUser } from '../../store/reducers/BookedReducer/BookedActionCreators';
import { updateBookAmountByID } from '../../store/reducers/BookReducer/BookActionCreatores';
import { Loader } from '../UI/Loader/Loader';

interface IProps {
  book: IBookResponse,
}

const BookCardInner:FC<IProps> = ({book}) => {
  const {user} = useAppSelector(state => state.authReducer);
  const {userBookedBooks, bookedsUserID} = useAppSelector(state => state.bookedReducer);
  const dispatch = useAppDispatch();
  const canselHandler = async () => {
    // await dispatch(getAllBookedsByUserID(user.id));
    console.log('by user', bookedsUserID);
    const findBooked = bookedsUserID.find(booked => booked.bookID === book._id);
    if (findBooked) {
      // await dispatch(updateBookAmountByID({id: book._id, amount: book.amount + 1}));
      await dispatch(deleteBooked(findBooked?._id));
      await dispatch(getBookedsForUser(user.id));
      console.log('del');
    }
  };

  useEffect(() => {
    dispatch(getAllBookedsByUserID(user.id));
  }, [])
  
  return (
    <>
      <div className="bookcard">
        <div className="bookcard__container">
          <img className="bookcard__image" src={book.coverImage} alt="book cover"/>
          <div className="bookcard__info">
            <div className="bookcard__title">{book.title}</div>
            <div className="bookcard__author">{book.author}</div>
          </div>
          {/* <button className="bookcard__cansel">Cansel booking</button> */}
          <div
            onClick={canselHandler}
            className="bookcard__cansel">
            <FcCancel size={60}/>
          </div>
        </div>
      </div>
    </>
  );
};

export const BookCard = React.memo(BookCardInner);
