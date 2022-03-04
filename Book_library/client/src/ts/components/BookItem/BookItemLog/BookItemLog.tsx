import React, { FC } from 'react';

const BookItemLogInner:FC = () => {
  return (
    <div className='bookitemlog'>
      Log Block
    </div>
  )
};

export const BookItemLog = React.memo(BookItemLogInner);