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
        Most popular:
      </div>
      <div className="allbooks__container">
        <BookBlock book={books[0]} bgColor='#405F71'/>
        <BookBlock book={books[1]} bgColor='#563E70'/>
        <BookBlock book={books[2]} bgColor='#733F55'/>
      </div>
      <div className="allbooks__search-bar">
      </div>
      <FindBooks/>
    </div>
    </>
  );
};

export const AllBooks = React.memo(AllBooksInner);
