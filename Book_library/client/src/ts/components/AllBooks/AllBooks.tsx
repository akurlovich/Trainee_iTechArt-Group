import React, { FC } from 'react';
import { BookBlock } from '../BookBlock/BookBlock';
import './allbooks.scss';

const AllBooksInner: FC = () => {
  return (
    <div className='allbooks'>
      <div className="allbooks__container">
        <BookBlock/>
        <BookBlock/>
        <BookBlock/>
      </div>
    </div>
  );
};

export const AllBooks = React.memo(AllBooksInner);
