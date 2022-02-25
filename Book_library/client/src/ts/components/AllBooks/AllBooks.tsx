import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getBooks } from '../../store/reducers/BookReducer/BookActionCreatores';
import { BookBlock } from '../BookBlock/BookBlock';
import { FindBooks } from '../FindBooks/FindBooks';
import { Loader } from '../UI/Loader/Loader';
import './allbooks.scss';

const AllBooksInner: FC = () => {
  const {books, isLoading} = useAppSelector(state => state.bookReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  
  return (
    <>
    {isLoading && <Loader/>}
    <div className='allbooks'>
      <div className="allbooks__title">
        Latest books:
      </div>
      <div className="allbooks__container">
        <BookBlock book={books[books.length - 3]}/>
        <BookBlock book={books[books.length - 2]}/>
        <BookBlock book={books[books.length - 1]}/>
      </div>
      <div className="allbooks__search-bar">
      </div>
      <FindBooks/>
    </div>
    </>
  );
};

export const AllBooks = React.memo(AllBooksInner);
