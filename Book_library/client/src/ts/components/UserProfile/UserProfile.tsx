import React, { FC } from 'react';
import './UserProfile.scss';

const UserProfileInner: FC = () => {
  return (
    <div className='profile'>
      Profile
    </div>
  );
};

export const UserProfile = React.memo(UserProfileInner);
