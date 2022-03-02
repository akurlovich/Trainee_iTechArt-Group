import React, { FC } from 'react';
import { FcCancel, FcApproval } from "react-icons/fc";
import { useAppDispatch } from '../../../hooks/redux';
import { allUsersAndBookeds } from '../../../store/reducers/BookedReducer/BookedActionCreators';
import { addIssued } from '../../../store/reducers/IssuedReducer/IssuedActionCreators';
import { IBookResponse } from '../../../types/IBookResponse';
import { IUsersBookedsAndIssueds } from '../../../types/IUsersAndBookeds';

interface IProps {
  userBooks: IBookResponse,
  userID: string,
  isNotIssued?: boolean,
}

const BookingCardInner:FC<IProps> = ({userBooks, userID, isNotIssued = true}) => {
  const dispatch = useAppDispatch();
  const approvalHandler = async () => {
    await dispatch(addIssued({userID: userID, bookID: userBooks._id}));
    await dispatch(allUsersAndBookeds());
  }
  return ( 
    <div className="bookings__item">
      <img src={userBooks.coverImage} alt="" className="bookings__item__image" />
      <div className="bookings__item__text">
        {userBooks.title}
      </div>
      <div className="bookings__item__buttons">
        <div className="bookings__item__button">
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
