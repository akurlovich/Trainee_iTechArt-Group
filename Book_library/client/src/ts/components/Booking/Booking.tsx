import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { allUsersAndBookeds, bookUsersAndBookeds } from '../../store/reducers/BookedReducer/BookedActionCreators';
import { IUsersBookedsAndIssueds } from '../../types/IUsersAndBookeds';
import { Loader } from '../UI/Loader/Loader';
import './booking.scss';
import { BookingCard } from './BookingBooked/BookingCard';
import { BookingSearch } from './BookingSearch/BookingSearch';

interface IProps {
  isSearch?: boolean,
  bookAdminID?: string,
}

const BookingInner:FC<IProps> = ({isSearch = true, bookAdminID}) => {
  const { allUsersBookedsAndIssueds, bookUsersBookedsAndIssueds, isLoading } = useAppSelector(state => state.bookedReducer);
  const [bookingArray, setBookingArray] = useState<IUsersBookedsAndIssueds[]>([]);
  const dispatch = useAppDispatch();

  // const foundBooking = allUsersBookedsAndIssueds.filter(item => 
  //   (item.userBookeds.filter(booked => booked._id === bookAdminID) & item.userIssueds.filter(issued => issued._id === bookAdminID))
  //   )

  useEffect(() => {
    (async () => {
      if (isSearch) {
        await dispatch(allUsersAndBookeds());
        setBookingArray(allUsersBookedsAndIssueds);
      } else {
        if (bookAdminID) {
          await dispatch(bookUsersAndBookeds(bookAdminID));
          setBookingArray(bookUsersBookedsAndIssueds);
        }
      }
    })()
  }, []);
  
  return (
    <div className="bookings">
      {isSearch && <BookingSearch/>}
      {isLoading && <Loader/>}
      <div className="bookings__container">
        {bookingArray && bookingArray.map(item => (
          <div key={item.user.id} className="bookings__card">
            <div className="bookings__card__user">{item.user.email}</div>
            <div className="bookings__card__block">
              <div className="bookings__booked booked_line">
                <div className="bookings__booked__title">Booking</div>
                 {item.userBookeds.map(card => (
                   <BookingCard key={card._id} userID={item.user.id} userBooks={card}/>
                 ))}
              </div>
              <div className="bookings__booked">
                <div className="bookings__booked__title">Issued</div>
                {item.userIssueds.map(card => (
                   <BookingCard key={card._id} userID={item.user.id} userBooks={card} isNotIssued={false}/>
                 ))}
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
};

export const Booking = React.memo(BookingInner);
