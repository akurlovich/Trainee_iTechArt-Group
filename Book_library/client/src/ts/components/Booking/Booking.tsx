import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { allUsersAndBookeds, bookUsersAndBookeds } from '../../store/reducers/BookedReducer/BookedActionCreators';
import { IUsersBookedsAndIssueds } from '../../types/IUsersAndBookeds';
import { Loader } from '../UI/Loader/Loader';
import './booking.scss';
import { BookingCard } from './BookingBooked/BookingCard';
import { BookingSearch } from './BookingSearch/BookingSearch';
import { FcUnlock, FcLock } from "react-icons/fc";
import { updateUserIsBlocked } from '../../store/reducers/AuthReducer/AuthActionCreatores';

interface IProps {
  isSearch?: boolean,
  bookAdminID?: string,
}

const BookingInner:FC<IProps> = ({isSearch = true, bookAdminID}) => {
  console.log('booking');
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
          console.log('object');
          await dispatch(bookUsersAndBookeds(bookAdminID));
          setBookingArray(bookUsersBookedsAndIssueds);
        }
      }
    })()
  }, []);

  useEffect(() => {
    setBookingArray(bookUsersBookedsAndIssueds);
  }, [bookUsersBookedsAndIssueds]);

  useEffect(() => {
    setBookingArray(allUsersBookedsAndIssueds);
  }, [allUsersBookedsAndIssueds]);


  const isBlockedHandler = async (userID: string, isBlock: boolean) => {
    await dispatch(updateUserIsBlocked({id: userID, isBlocked: !isBlock}));
    if (isSearch) {
      await dispatch(allUsersAndBookeds());
      setBookingArray(allUsersBookedsAndIssueds);
    } else {
      if (bookAdminID) {
        console.log('object');
        await dispatch(bookUsersAndBookeds(bookAdminID));
        setBookingArray(bookUsersBookedsAndIssueds);
      }
    }
    
  }
  
  return (
    <div className="bookings">
      {isSearch && <BookingSearch/>}
      {isLoading && <Loader/>}
      <div className="bookings__container">
        {bookingArray && bookingArray.map(item => (
          <div key={item.user.id} className="bookings__card">
            <div className="bookings__card__user">
              <div className="bookings__card__user_email">
                {item.user.email}
              </div>
              {item.user.isBlocked
                ? <div className='bookings__card__blocked'>
                    <FcLock onClick={() => isBlockedHandler(item.user.id, item.user.isBlocked)} size={40}/>
                  </div> 
                : <div className='bookings__card__blocked'>
                    <FcUnlock onClick={() => isBlockedHandler(item.user.id, item.user.isBlocked)} size={40}/>
                  </div> 
                }
            </div>
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
