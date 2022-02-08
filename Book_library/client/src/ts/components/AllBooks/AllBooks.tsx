import React, { FC } from 'react';
import { BookBlock } from '../BookBlock/BookBlock';
import { Checkbox } from '../UI/Checkbox/Checkbox';
import { SearchBar } from '../UI/SearchBar/SearchBar';
import './allbooks.scss';

const AllBooksInner: FC = () => {
  return (
    <div className='allbooks'>
      <Checkbox field='Genre'/>
      <div className="allbooks__title">
        Most popular:
      </div>
      <div className="allbooks__container">
        <BookBlock bgColor='#405F71'/>
        <BookBlock bgColor='#563E70'/>
        <BookBlock bgColor='#733F55'/>
      </div>
      <div className="allbooks__search-bar">
        <SearchBar/>
      </div>
    </div>
  );
};

export const AllBooks = React.memo(AllBooksInner);
