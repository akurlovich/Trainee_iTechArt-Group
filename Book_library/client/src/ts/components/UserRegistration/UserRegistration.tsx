import React, { FC } from 'react';
import './userregistration.scss';

const UserRegistrationInner: FC = () => {
  return (
    <div className='userregistration'>
      Register user
    </div>
  );
};

export const UserRegistration = React.memo(UserRegistrationInner);
