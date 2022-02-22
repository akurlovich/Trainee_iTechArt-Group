import React, { FC } from 'react';
import { FcCancel, FcApproval } from "react-icons/fc";
import book1 from '../../../../assets/book-1.png';

const BookingCardInner:FC = () => {
  return ( 
    <div className="booking__item">
      <img src={book1} alt="" className="booking__item__image" />
      <div className="booking__item__text">
        Harry Potter
      </div>
      <div className="booking__item__button">
        <FcCancel size={60}/>
      </div>
      <div className="booking__item__button">
        <FcApproval size={60}/>
      </div>
    </div>
  )
};

export const BookingCard = React.memo(BookingCardInner);
