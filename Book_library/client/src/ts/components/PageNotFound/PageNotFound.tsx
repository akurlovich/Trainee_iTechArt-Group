import React, { FC } from 'react';
import './pagenotfound.scss';

const PageNotFoundInner: FC = () => {
  return (
    <div className='pagenotfound'>
      404
    </div>
  );
};

export const PageNotFound = React.memo(PageNotFoundInner);
