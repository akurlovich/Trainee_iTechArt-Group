import React, { FC } from 'react';
import { BookBlock } from '../BookBlock/BookBlock';
import { FindBooks } from '../FindBooks/FindBooks';
import './allbooks.scss';

const AllBooksInner: FC = () => {
  return (
    <div className='allbooks'>
      <div className="allbooks__title">
        Most popular:
      </div>
      <div className="allbooks__container">
        <BookBlock bgColor='#405F71'/>
        <BookBlock bgColor='#563E70'/>
        <BookBlock bgColor='#733F55'/>
      </div>
      <div className="allbooks__search-bar">
      </div>
      <FindBooks/>
    </div>
  );
};

export const AllBooks = React.memo(AllBooksInner);
