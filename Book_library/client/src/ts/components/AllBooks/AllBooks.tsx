import React, { FC } from 'react';
import './allbooks.scss';

const AllBooksInner: FC = () => {
  return (
    <div className='allbooks'>
      All Books
    </div>
  );
};

export const AllBooks = React.memo(AllBooksInner);
