import React, { FC } from 'react';
import { ICommentResponse } from '../../types/ICommentResponse';
import './comment.scss';

interface IProps {
  comment?: ICommentResponse,
  user?: string,
}

const CommentInner:FC<IProps> = ({comment, user}) => {
  return (
    <div className="comments__item">
      <div className="comments__user">
        {user}
      </div>
      <div className="comments__text">
        {comment?.comment}
      </div>
    </div>
  );
};

export const Comment = React.memo(CommentInner);