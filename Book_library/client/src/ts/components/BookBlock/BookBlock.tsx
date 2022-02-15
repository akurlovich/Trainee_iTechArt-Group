import React, { FC } from 'react';
import { IBookResponse } from '../../types/IBookResponse';
import './bookblock.scss';

interface IBooKBlock {
  bgColor?: string,
  book?: IBookResponse,
}

const BookBlockItem: FC<IBooKBlock> = ({bgColor, book}) => {
  const style = {
    background: bgColor,
  }
  return (
    <div className="bookblock">
      <div className="bookblock__container" style={style}>
        <div className="bookblock__cover">
          <div className="bookblock__cover_block">
            <img className='bookblock__cover_image' src={book?.coverImage} alt="book cover" />
          </div>
          <div className="bookblock__cover_line"></div>
        </div>
        <div className="bookblock__item">
          <div className="bookblock__header">
            {book?.title}
          </div>
          <div className="bookblock__discription">
            {book?.description}
          </div>
          <div className="bookblock__info">
            <div className="bookblock__info_author">
              {book?.author}
            </div>
            <div className="bookblock__info_year">
              {book?.year}
            </div>
          </div>
          <div className="bookblock__button">
            More
          </div>
        </div>
      </div>
    </div>
  );
};

export const BookBlock = React.memo(BookBlockItem);
