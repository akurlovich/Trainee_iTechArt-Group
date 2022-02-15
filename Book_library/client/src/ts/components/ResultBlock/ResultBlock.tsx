import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getBooks } from '../../store/reducers/BookReducer/BookActionCreatores';
import { BookBlock } from '../BookBlock/BookBlock';
import './resultblock.scss';

const ResultBlockInner: FC = () => {
  const {books} = useAppSelector(state => state.bookReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!books.length) {
      dispatch(getBooks());
    }
  }, []);

  return (
    <div className="resultblock">
      {books.map(item => 
        <BookBlock key={item._id} book={item} bgColor='#405F71'/>
      )}
    </div>
  );
};

export const ResultBlock = React.memo(ResultBlockInner);
