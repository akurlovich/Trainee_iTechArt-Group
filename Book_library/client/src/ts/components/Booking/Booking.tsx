import React, { FC } from 'react';
import './Booking.scss';

const BookingInner: FC = () => {
  return (
    <div className='booking'>
      Booking
    </div>
  );
};

export const Booking = React.memo(BookingInner);
