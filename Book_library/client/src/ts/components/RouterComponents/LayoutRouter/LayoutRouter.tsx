import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../Footer/Footer';
import { Header } from '../../Header/Header';
import './layoutrouter.scss';

const LayoutRouterInner: FC = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <Outlet/>  
      </div>
      <Footer/>
    </>
  );
};

export const LayoutRouter = React.memo(LayoutRouterInner);
