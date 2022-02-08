import React, { FC } from 'react';
import './comment.scss';

const CommentInner:FC = () => {
  return (
    <div className="comments__item">
      <div className="comments__user">
        Ivan
      </div>
      <div className="comments__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem exercitationem id, iusto eos quam atque possimus soluta, sunt veniam perspiciatis harum iste ullam illum hic vero eum error pariatur corrupti.
      </div>
    </div>
  );
};

export const Comment = React.memo(CommentInner);