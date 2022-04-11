import React, { FC } from 'react';
import { SearchBlock } from '../SearchBlock/SearchBlock';
import './findbooks.scss';

const FindBooksInner:FC = () => {
  return (
    <div className="findbooks">
      <SearchBlock/>
    </div>
  );
};

export const FindBooks = React.memo(FindBooksInner);