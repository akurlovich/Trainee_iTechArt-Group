import React, { FC } from 'react';
import './bookblock.scss';

interface IBooKBlock {
  bgColor?: string,
}

const BookBlockItem: FC<IBooKBlock> = ({bgColor}) => {
  const style = {
    background: bgColor,
  }
  return (
    <div className="bookblock">
      <div className="bookblock__container" style={style}>
        <div className="bookblock__cover">
          <div className="bookblock__cover_block">
            <img className='bookblock__cover_image' src="./assets/you_dont_know_JS.jpg" alt="" />
          </div>
          <div className="bookblock__cover_line"></div>
        </div>
        <div className="bookblock__item">
          <div className="bookblock__header">
            You Don’t Know JS
          </div>
          <div className="bookblock__discription">
            With the "You Don’t Know JS" book series, you'll get a more complete understanding of JavaScript, including trickier parts of the language that many experienced JavaScript programmers simply avoid. The series' first book, Up & Going, provides the necessary background for those of you with limited programming experience. By learning the basic building blocks of programming, as well as JavaScript's core mechanisms, you'll be prepared to dive into the other, more in-depth books in the series--and be well on your way toward true JavaScript.
          </div>
          <div className="bookblock__info">
            <div className="bookblock__info_author">
              Kyle Simpson
            </div>
            <div className="bookblock__info_year">
              2015
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
