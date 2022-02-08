import React, { FC } from 'react';
import { ResultBlock } from '../ResultBlock/ResultBlock';
import { SearchBlock } from '../SearchBlock/SearchBlock';
import './findbooks.scss';

const FindBooksInner:FC = () => {
  return (
    <div className="findbooks">
      <SearchBlock/>
      <ResultBlock/>
    </div>
  );
};

export const FindBooks = React.memo(FindBooksInner);