import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { Booking } from '../../Booking/Booking';
import { Loader } from '../../UI/Loader/Loader';
import { BookItemLog } from '../BookItemLog/BookItemLog';
import './bookitemadmin.scss';

interface IProps {
  bookID: string;
}

const BookItemAdminInner:FC<IProps> = ({bookID}) => {
  const { isLoading } = useAppSelector(state => state.bookedReducer);
  return (
    <>
      {isLoading && <Loader/>}
      <div className='bookitemadmin'>
        <Booking isSearch={false} bookAdminID={bookID}/>
        <BookItemLog/>
      </div>
    </>
  )
};

export const BookItemAdmin = React.memo(BookItemAdminInner);