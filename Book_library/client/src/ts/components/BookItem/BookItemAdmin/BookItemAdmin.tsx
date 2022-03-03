import React, { FC } from 'react';

const BookItemAdminInner:FC = () => {
  return (
    <div>BookItemMain</div>
  )
};

export const BookItemAdmin = React.memo(BookItemAdminInner);