import React, { FC } from 'react';
import { IBookResponse } from '../../../types/IBookResponse';
import { Booking } from '../../Booking/Booking';
import './bookitemadmin.scss';

interface IProps {
  book: IBookResponse;
}

const BookItemAdminInner:FC<IProps> = ({book}) => {

  return (
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
      </div>
    </div>
  )
};

export const BookItemAdmin = React.memo(BookItemAdminInner);