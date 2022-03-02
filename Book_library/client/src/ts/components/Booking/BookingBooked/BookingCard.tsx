import React, { FC, useEffect } from 'react';
import { FcCancel, FcApproval } from "react-icons/fc";
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { allUsersAndBookeds, deleteBookedAndReturnAmount, getAllBookedsByUserID } from '../../../store/reducers/BookedReducer/BookedActionCreators';
import { addIssued } from '../../../store/reducers/IssuedReducer/IssuedActionCreators';
import { IBookResponse } from '../../../types/IBookResponse';

interface IProps {
  userBooks: IBookResponse,
  userID: string,
  isNotIssued?: boolean,
}

const BookingCardInner:FC<IProps> = ({userBooks, userID, isNotIssued = true}) => {
  const dispatch = useAppDispatch();
  const { bookedsUserID } = useAppSelector(state => state.bookedReducer);

  const approvalHandler = async () => {
    await dispatch(addIssued({userID: userID, bookID: userBooks._id}));
    await dispatch(allUsersAndBookeds());
  };

  const canselHandler = async () => {
    console.log('booking')
    const findBooked = bookedsUserID.find(booked => booked.bookID === userBooks._id);
    console.log(findBooked)
    if (findBooked) {
      await dispatch(deleteBookedAndReturnAmount(findBooked._id));
      await dispatch(allUsersAndBookeds());
    };

  };

  const canselIssuedHandler = async () => {
    console.log('issued')
    await dispatch(allUsersAndBookeds());
  };

  useEffect(() => {
    (async () => {
      await dispatch(getAllBookedsByUserID(userID));
    })()
  }, [])

  return ( 
    <div className="bookings__item">
      <img src={userBooks.coverImage} alt="" className="bookings__item__image" />
      <div className="bookings__item__text">
        {userBooks.title}
      </div>
      <div className="bookings__item__buttons">
        <div
          onClick={isNotIssued ? canselHandler : canselIssuedHandler}
          className="bookings__item__button">
          <FcCancel size={60}/>
        </div>
        {isNotIssued && 
          <div
            onClick={approvalHandler}
            className="bookings__item__button">
            <FcApproval size={60}/>
          </div>
        }
      </div>
    </div>
  )
};

export const BookingCard = React.memo(BookingCardInner);
