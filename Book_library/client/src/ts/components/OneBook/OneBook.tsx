import React, { FC } from 'react';
import './onebook.scss';

const OneBookInner: FC = () => {
  return (
    <div className='onebook'>
      One book
    </div>
  );
};

export const OneBook = React.memo(OneBookInner);
