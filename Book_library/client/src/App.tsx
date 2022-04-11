import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { AddBook } from './ts/components/AddBook/AddBook';
import { AllBooks } from './ts/components/AllBooks/AllBooks';
import { BookItem } from './ts/components/BookItem/BookItem';
import { PageNotFound } from './ts/components/PageNotFound/PageNotFound';
import { UserLogin } from './ts/components/UserLogin/UserLogin';
import { UserProfile } from './ts/components/UserProfile/UserProfile';
import { UserRegistration } from './ts/components/UserRegistration/UserRegistration';
import { useAppDispatch } from './ts/hooks/redux';
import { checkAuth } from './ts/store/reducers/AuthReducer/AuthActionCreatores';
import { LayoutRouter } from './ts/components/RouterComponents/LayoutRouter/LayoutRouter';
import { RequireAuth } from './ts/components/RouterComponents/RequireAuth/RequireAuth';
import { AdminAuthRouter } from './ts/components/RouterComponents/AdminAuth/AdminAuthRouter';
import { Booking } from './ts/components/Booking/Booking';
import { AboutLibrary } from './ts/components/AboutLibrary/AboutLibrary';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem('token')) {
        await dispatch(checkAuth());
      }

    })()
  }, []);

  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<LayoutRouter/>}>
          <Route index element={<AllBooks/>}/>
          <Route path='login' element={<UserLogin/>}/>
          <Route path='about' element={<AboutLibrary/>}/>
          <Route path='registration' element={<UserRegistration/>}/>
          <Route path='profile/:userID' element={
            <RequireAuth>
              <UserProfile/>
            </RequireAuth>
          }/>
          <Route path='addbook' element={
            <AdminAuthRouter>
              <AddBook/>
            </AdminAuthRouter>
            }/>
          <Route path='booking' element={
            <AdminAuthRouter>
              <Booking/>
            </AdminAuthRouter>
            }/>
          <Route path='book/:bookID' element={<BookItem/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
