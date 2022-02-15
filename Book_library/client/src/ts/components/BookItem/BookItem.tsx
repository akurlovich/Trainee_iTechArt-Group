import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getBookByID } from '../../store/reducers/BookReducer/BookActionCreatores';
import { CommentsBlock } from '../CommentsBlock/CommentsBlock';
import './bookitem.scss';

const BookItemInner: FC = () => {
  const {books} = useAppSelector(state => state.bookReducer);
  const dispatch = useAppDispatch();
  console.log(useParams())

  useEffect(() => {
    // dispatch(getBookByID());
  }, []);

  return (
    <div className='bookitem'>
      <div className="bookitem__container">
        <div className="bookitem__main">
          <div className="bookitem__main__cover">
            <img className='bookitem__main__cover__image' src="./assets/book-1.png" alt="book cover" />
          </div>
          <div className="bookitem__info">
            <div className="bookitem__title">
              You dont know JS
            </div>
            <div className="bookitem__detaile">
              <div className="bookitem__author">
                Lary Craft
              </div>
              <div className="bookitem__year">
                2001
              </div>
            </div>
            <div className="bookitem__description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis illum rerum, atque dolorum perspiciatis, totam eligendi veritatis assumenda ad nisi, aspernatur accusamus quod fuga doloremque debitis. Autem, laudantium magni?
              Possimus in, nesciunt, quis neque soluta error laboriosam architecto obcaecati itaque provident quas atque ad eaque fugit reprehenderit laborum consequatur. Ab, a temporibus commodi officia labore quos animi voluptatem atque.
              Impedit natus dicta velit in incidunt rem maxime odio quasi, dolore minima consequuntur sint dignissimos nisi ratione ipsam, dolores suscipit id. Vitae amet suscipit et laboriosam recusandae delectus voluptate quos!
              Pariatur delectus numquam cum quia harum laboriosam nesciunt inventore nostrum atque? Ipsam repudiandae odit, aut obcaecati adipisci ducimus eum quam consequuntur rerum inventore harum molestiae asperiores impedit, perspiciatis ad minima!
            </div>
            <div className="bookitem__buttons">
              <div className="bookitem__button booking">
                Booking
              </div>
              <div className="bookitem__button issue">
                Issue
              </div>
            </div>
          </div>
        </div>
        <CommentsBlock/>
      </div>
    </div>
  );
};

export const BookItem = React.memo(BookItemInner);
