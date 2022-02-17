import React, { FC, useEffect, useState } from 'react';
import { IBookResponse } from '../../types/IBookResponse';
import { FcCancel, FcAlarmClock } from "react-icons/fc";
import './bookcard.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteBooked, getAllBookedsByUserID, getBookedsForUser } from '../../store/reducers/BookedReducer/BookedActionCreators';
import { timeCulculate } from '../../services/ClientServices/TimeCulculate';

interface IProps {
  book: IBookResponse,
}

const BookCardInner:FC<IProps> = ({book}) => {
  const { user } = useAppSelector(state => state.authReducer);
  const { bookedsUserID } = useAppSelector(state => state.bookedReducer);
  const dispatch = useAppDispatch();
  const [timer, setTimer] = useState({hours: 0, minuts: 0});

  const findBooked = () => {
    return bookedsUserID.find(booked => booked.bookID === book._id);
  };
  const canselHandler = async () => {
    console.log('by user', bookedsUserID);
    const findBooked = bookedsUserID.find(booked => booked.bookID === book._id);
    if (findBooked) {
      await dispatch(deleteBooked(findBooked?._id));
      await dispatch(getBookedsForUser(user.id));
      console.log('del');
    }
  };

  useEffect(() => {
    (async () => {
      await dispatch(getAllBookedsByUserID(user.id));
    })()
  }, [])

  useEffect(() => {
    const foundBooked = findBooked();
      if (foundBooked) {
        const timeOut = timeCulculate(foundBooked.createdAt);
        setTimer({hours: timeOut.hours, minuts: timeOut.minuts});
      }
  }, [bookedsUserID]);
  
  return (
    <>
      <div className="bookcard">
        <div className="bookcard__wrapper">
          <div className="bookcard__container">
            <img className="bookcard__image" src={book.coverImage} alt="book cover"/>
            <div className="bookcard__info">
              <div className="bookcard__title">{book.title}</div>
              <div className="bookcard__author">{book.author}</div>
              <div className="bookcard__alarm">
                <FcAlarmClock size={50}/>
                <div className="bookcard__timer">{`${timer.hours}h ${timer.minuts}m`}</div>
              </div>
            </div>
            <div
              onClick={canselHandler}
              className="bookcard__cansel">
              <FcCancel size={60}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const BookCard = React.memo(BookCardInner);
