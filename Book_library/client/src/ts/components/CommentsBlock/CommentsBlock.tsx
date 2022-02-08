import React, { FC } from 'react';
import { Comment } from '../Comment/Comment';
import './commentsblock.scss';

const CommentsBlockInner:FC = () => {
  return (
    <div className="comments">
          <div className="comments__title">
            Comments:
          </div>
          <Comment/>
          <div className="comments__add">
            <div className="comments__add__block">
              <div className="comments__add__title">
                Leave comment:
              </div>
              <textarea className="comments__add__input"/>
            </div>
            <div className="comments__add__button">
              Send comment
            </div>
          </div>
        </div>
  );
};

export const CommentsBlock = React.memo(CommentsBlockInner);
