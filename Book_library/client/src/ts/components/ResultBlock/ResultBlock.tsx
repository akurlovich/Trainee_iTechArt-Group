import React, { FC, useEffect } from 'react';
import { IBookResponse } from '../../types/IBookResponse';
import { BookBlock } from '../BookBlock/BookBlock';
import './resultblock.scss';

interface IPropt {
  books: IBookResponse[],
}

const ResultBlockInner: FC<IPropt> = ({books}) => {

  return (
    <div className="resultblock">
      {books.map(item => 
        <BookBlock key={item._id} book={item} />
      )}
    </div>
  );
};

export const ResultBlock = React.memo(ResultBlockInner);
