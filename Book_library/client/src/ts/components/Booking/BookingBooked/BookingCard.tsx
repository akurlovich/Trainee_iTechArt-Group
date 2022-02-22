import React, { FC } from 'react';
import { FcCancel, FcApproval } from "react-icons/fc";
import book1 from '../../../../assets/book-1.png';
import { IBookResponse } from '../../../types/IBookResponse';
import { IUsersAndBookeds } from '../../../types/IUsersAndBookeds';

interface IProps {
  userBooks: IBookResponse,
}

const BookingCardInner:FC<IProps> = ({userBooks}) => {
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
        <div className="bookings__item__button">
          <FcApproval size={60}/>
        </div>
      </div>
    </div>
  )
};

export const BookingCard = React.memo(BookingCardInner);
