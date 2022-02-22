import React, { FC } from 'react';
import './booking.scss';
import { BookingCard } from './BookingBooked/BookingCard';

const BookingInner:FC = () => {
  return (
    <div className="booking">
      <div className="booking__container">
        <div className="booking__card">
          <div className="booking__card__user">dsfksjkdfj@skfjs.kj</div>
          <div className="booking__card__block">
            <div className="booking__booked booked_line">   
              <BookingCard/>
              <BookingCard/>
            </div>
            <div className="booking__booked">
              <BookingCard/>
              <BookingCard/>
              <BookingCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export const Booking = React.memo(BookingInner);
