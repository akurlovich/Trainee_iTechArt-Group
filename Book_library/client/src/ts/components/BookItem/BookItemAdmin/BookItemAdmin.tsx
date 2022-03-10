import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getBookByID } from '../../../store/reducers/BookReducer/BookActionCreatores';
import { IBookResponse } from '../../../types/IBookResponse';
import { Booking } from '../../Booking/Booking';
import { Loader } from '../../UI/Loader/Loader';
import { BookItemLog } from '../BookItemLog/BookItemLog';
import './bookitemadmin.scss';

interface IProps {
  book: IBookResponse;
}

const BookItemAdminInner:FC<IProps> = ({book}) => {
  console.log('bookitemADMIN', book);
  // const { book } = useAppSelector(state => state.bookReducer);
  // const { isLoading } = useAppSelector(state => state.bookedReducer);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   (async () => {
  //       await dispatch(getBookByID(bookID));
  //   })()
  // }, []);

  return (
    <>
      {/* {isLoading && <Loader/>} */}
      <div className='bookitemadmin'>
        <div className="bookitemadmin__title">
          <div className="bookitemadmin__name">
            {book.title}
          </div>
          <div className="bookitemadmin__amount">
            {`Amount: ${book.amount}`}
          </div>
        </div>
        <div className="bookitemadmin__main">
          <Booking isSearch={false} bookAdminID={book._id}/>
          <BookItemLog/>
        </div>
      </div>
    </>
  )
};

export const BookItemAdmin = React.memo(BookItemAdminInner);