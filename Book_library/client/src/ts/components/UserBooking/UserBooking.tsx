import React, { FC, useState } from 'react';
import './userbooking.scss';
import bookOne from '../../../assets/book-1.png';
import bookTwo from '../../../assets/book-2.png';
import bookThree from '../../../assets/book-3.png';
import { IBookResponse } from '../../types/IBookResponse';
import successIcon from '../../../assets/Success-Icon.png';
import { useAppSelector } from '../../hooks/redux';
import { useDispatch } from 'react-redux';
import { addBooked, getAllBookedsByBookID } from '../../store/reducers/BookedReducer/BookedActionCreators';
import { updateBookAmountByID } from '../../store/reducers/BookReducer/BookActionCreatores';

interface IProps {
  book: IBookResponse,
  setData: (event: boolean) => void,
}

const UserBookingInner: FC<IProps> = ({book, setData}) => {
  const { user } = useAppSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const canselHandler = () => {
    setData(false);
  };
  const bookedHandler = () => {
    setSuccess(true);
    console.log('book', book?._id, 'user', user.id);
    dispatch(addBooked({bookID: book?._id, userID: user.id}));
    dispatch(getAllBookedsByBookID(book._id));
    dispatch(updateBookAmountByID({id: book._id, amount: book.amount - 1}));
  };

  return (
    <div className='registration'>
      <div className="registration__block">
        <div className="registration__container">
          {success ?
            <>
            <img src={successIcon} />
            <div className="registration__title">
              Success!
            </div>
            <div
              onClick={canselHandler}
              className="userbooking__button issue">
              Complete
            </div>
            </>
            : 
            <>
            <div className="registration__title">
              Confirm booking
            </div>
            <div className="userbooking__book">
              <div className="userbooking__cover">
                <img className="userbooking__cover_image" src={book?.coverImage} alt="book image" />
              </div>
              <div className="userbooking__item">
                <div className="userbooking__title">
                  {book?.title}
                </div>
                <div className="userbooking__author">
                  {book?.author}
                </div>
              </div>
            </div>
            <div className="userbooking__buttons">
              <div
                onClick={bookedHandler} 
                className="userbooking__button booking">
                Booked
              </div>
              <div
                onClick={canselHandler}
                className="userbooking__button issue">
                Cansel
              </div>
            </div>
            </>
            }
        </div>
        <img className='registration__book one' src={bookOne} alt="book" />
        <img className='registration__book two' src={bookTwo} alt="book" />
        <img className='registration__book three' src={bookThree} alt="book" />
      </div>
    </div>
  );
};

export const UserBooking = React.memo(UserBookingInner);
