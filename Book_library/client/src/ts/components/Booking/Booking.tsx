import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { allUsersAndBookeds } from '../../store/reducers/BookedReducer/BookedActionCreators';
import { Loader } from '../UI/Loader/Loader';
import './booking.scss';
import { BookingCard } from './BookingBooked/BookingCard';
import { BookingSearch } from './BookingSearch/BookingSearch';

const BookingInner:FC = () => {
  const { allUsersBookedsAndIssueds, isLoading } = useAppSelector(state => state.bookedReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(allUsersAndBookeds());
    })()
  }, []);
  
  return (
    <div className="bookings">
      <BookingSearch/>
      {isLoading && <Loader/>}
      <div className="bookings__container">
        {allUsersBookedsAndIssueds && allUsersBookedsAndIssueds.map(item => (
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
