import React, { FC } from 'react';
import { Route, Routes } from 'react-router';
import { AddBook } from './ts/components/AddBook/AddBook';
import { AllBooks } from './ts/components/AllBooks/AllBooks';
import { Booking } from './ts/components/Booking/Booking';
import { Footer } from './ts/components/Footer/Footer';
import { Header } from './ts/components/Header/Header';
import { LayoutRouter } from './ts/components/LayoutRouter/LayoutRouter';
import { PageNotFound } from './ts/components/PageNotFound/PageNotFound';
import { UserLogin } from './ts/components/UserLogin/UserLogin';
import { UserProfile } from './ts/components/UserProfile/UserProfile';
import { UserRegistration } from './ts/components/UserRegistration/UserRegistration';

const App: FC = () => {
  return (
    <div className='wrapper'>
      {/* <Header/>
      <div className="container">
        <AllBooks/>
      </div> */}
      {/* <Footer/> */}
      <Routes>
        <Route path='/' element={<LayoutRouter/>}>
          <Route index element={<AllBooks/>}/>
          <Route path='login' element={<UserLogin/>}/>
          <Route path='registration' element={<UserRegistration/>}/>
          <Route path='profile' element={<UserProfile/>}/>
          <Route path='booking' element={<Booking/>}/>
          <Route path='addbook' element={<AddBook/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
