import React, { FC, useEffect, useState } from 'react';
import { FcCancel, FcApproval, FcAlarmClock } from "react-icons/fc";
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { timeCulculate } from '../../../services/ClientServices/TimeCulculate';
import { allUsersAndBookeds, deleteBookedAndReturnAmount, getAllBookedsByUserID } from '../../../store/reducers/BookedReducer/BookedActionCreators';
import { addIssued, deleteIssuedAndReturnAmount, getAllIssuedsByUserID } from '../../../store/reducers/IssuedReducer/IssuedActionCreators';
import { IBookResponse } from '../../../types/IBookResponse';

interface IProps {
  userBooks: IBookResponse,
  userID: string,
  isNotIssued?: boolean,
}

const BookingCardInner:FC<IProps> = ({userBooks, userID, isNotIssued = true}) => {
  const dispatch = useAppDispatch();
  const { bookedsUserID } = useAppSelector(state => state.bookedReducer);
  const { issuedsByUserID } = useAppSelector(state => state.issuedReducer);
  const [timer, setTimer] = useState({hours: 0, minuts: 0});
  const [timerIssued, setTimerIssued] = useState({hours: 0, minuts: 0});

  const findBooked = () => {
    return bookedsUserID.find(booked => booked.bookID === userBooks._id);
  };

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
    const findBooked = issuedsByUserID.find(booked => booked.bookID === userBooks._id);
    console.log(findBooked)
    if (findBooked) {
      await dispatch(deleteIssuedAndReturnAmount(findBooked._id));
      await dispatch(allUsersAndBookeds());
    };
  };

  useEffect(() => {
    (async () => {
      await dispatch(getAllBookedsByUserID(userID));
      await dispatch(getAllIssuedsByUserID(userID));
    })()
  }, []);

  useEffect(() => {
    const foundBooked = findBooked();
      if (foundBooked) {
        const timeOut = timeCulculate(foundBooked.createdAt);
        setTimer({hours: timeOut.hours, minuts: timeOut.minuts});
      }
  }, [bookedsUserID]);

  useEffect(() => {
    const findBooked = issuedsByUserID.find(booked => booked.bookID === userBooks._id);
      if (findBooked) {
        const timeOut = timeCulculate(findBooked.createdAt);
        setTimerIssued({hours: timeOut.hours, minuts: timeOut.minuts});
      }
  }, [issuedsByUserID]);

  return ( 
    <div className="bookings__main">
      <div className="bookings__item">
        <img src={userBooks.coverImage} alt="" className="bookings__item__image" />
        <div className="bookings__item__text_block">
          <div className="bookings__item__text">
            {userBooks.title}
          </div>
          <div className="bookcard__alarm">
            <FcAlarmClock size={50}/>
            {isNotIssued ? 
              <div className="bookcard__timer">{`${timer.hours}h ${timer.minuts}m`}</div>
            :
              <div className="bookcard__timer">{`${timerIssued.hours}h ${timerIssued.minuts}m`}</div>
            }
          </div>

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
    </div>
  )
};

export const BookingCard = React.memo(BookingCardInner);
