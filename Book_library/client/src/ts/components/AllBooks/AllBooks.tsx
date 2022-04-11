import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { SearchBlock } from '../SearchBlock/SearchBlock';
import { Loader } from '../UI/Loader/Loader';
import './allbooks.scss';
import '../FindBooks/findbooks.scss';

const AllBooksInner: FC = () => {
  const { isLoading } = useAppSelector(state => state.bookReducer);

  return (
    <>
      {isLoading && <Loader/>}
      <div className='allbooks'>
        <div className="findbooks">
          <SearchBlock/>
        </div>
      </div>
    </>
  );
};

export const AllBooks = React.memo(AllBooksInner);
