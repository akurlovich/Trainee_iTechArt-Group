import React, { FC } from 'react';
import './addbook.scss';

const AddBookInner: FC = () => {
  return (
    <div className='addbook'>
      Add book
    </div>
  );
};

export const AddBook = React.memo(AddBookInner);
