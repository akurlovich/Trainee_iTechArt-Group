import React, { FC } from 'react';
import './userbooking.scss';

const UserBookingInner: FC = () => {
  return (
    <div className='registration'>
      <div className="registration__block">
        <div className="registration__container">
          <div className="registration__title">
            Confirm booking
          </div>
          <div className="userbooking__book">
            <div className="userbooking__cover">
              <img className="userbooking__cover_image" src="./assets/book-1.png" alt="book image" />
            </div>
            <div className="userbooking__item">
              <div className="userbooking__title">
                Book name
              </div>
              <div className="userbooking__author">
                Harry Potter
              </div>
            </div>
          </div>
          <div className="userbooking__buttons">
            <div className="userbooking__button booking">
              Booked
            </div>
            <div className="userbooking__button issue">
              Cansel
            </div>
          </div>
        </div>
        <img className='registration__book one' src="./assets/book-1.png" alt="book" />
        <img className='registration__book two' src="./assets/book-2.png" alt="book" />
        <img className='registration__book three' src="./assets/book-3.png" alt="book" />
      </div>
    </div>
  );
};

export const UserBooking = React.memo(UserBookingInner);
