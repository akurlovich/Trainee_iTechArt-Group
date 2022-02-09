import React, { FC } from 'react';
import './bookcard.scss';

const BookCardInner:FC = () => {
  return (
    <div className="bookcard">
      <div className="bookcard__container">
        <img className="bookcard__image" src="./assets/book-1.png" alt="book cover"/>
        <div className="bookcard__info">
          <div className="bookcard__title">Harry Potterr</div>
          <div className="bookcard__author">Bill inton</div>
        </div>
      </div>
    </div>
  );
};

export const BookCard = React.memo(BookCardInner);
