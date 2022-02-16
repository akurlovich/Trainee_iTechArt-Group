import React, { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';

interface IProps {
  children: JSX.Element;
}

const RequireAuthInner: FC<IProps> = ({children}) => {
  const location = useLocation();
  const {isAuth} = useAppSelector(state => state.authReducer);

  if (!isAuth) {
    return <Navigate to='/login' state={{from: location.pathname}}/>
  }

  return children;
};

export const RequireAuth = React.memo(RequireAuthInner);
