import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { AddBook } from './ts/components/AddBook/AddBook';
import { AllBooks } from './ts/components/AllBooks/AllBooks';
import { UserBooking } from './ts/components/UserBooking/UserBooking';
import { BookItem } from './ts/components/BookItem/BookItem';
import { PageNotFound } from './ts/components/PageNotFound/PageNotFound';
import { UserLogin } from './ts/components/UserLogin/UserLogin';
import { UserProfile } from './ts/components/UserProfile/UserProfile';
import { UserRegistration } from './ts/components/UserRegistration/UserRegistration';
import { useAppDispatch, useAppSelector } from './ts/hooks/redux';
import { fetchUsers } from './ts/store/reducers/ActionCreators';
import { checkAuth } from './ts/store/reducers/AuthReducer/AuthActionCreatores';
import UserService from './ts/services/UserService';
import { LayoutRouter } from './ts/components/RouterComponents/LayoutRouter/LayoutRouter';
import { RequireAuth } from './ts/components/RouterComponents/RequireAuth/RequireAuth';
import { AdminAuthRouter } from './ts/components/RouterComponents/AdminAuth/AdminAuthRouter';
import { Booking } from './ts/components/Booking/Booking';
import { allUserAndBookeds } from './ts/services/ClientServices/UsersBookeds';

const App: FC = () => {
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);
  const { user, isAuth } = useAppSelector(state => state.authReducer);
  // const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  // const checkUserAuth = () => {
  //   dispatch(checkAuth());
  // };

  const getUsers = async () => {
    // try {
    //   const response = await UserService.fetchUsers();
    //   console.log('users', response.data);
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(await allUserAndBookeds())
  }
  

  return (
    <div className='wrapper'>
      {isLoading && <h1 style={{fontSize: '200px'}}>loading</h1>}
      <h1 style={{fontSize: '200px'}}>{isAuth ? 'авторизован' : 'войдите'}</h1>
      <button onClick={() => console.log(users, error)}>click</button>
      <button onClick={getUsers}>USERS</button>
      <Routes>
        <Route path='/' element={<LayoutRouter/>}>
          <Route index element={<AllBooks/>}/>
          <Route path='login' element={<UserLogin/>}/>
          <Route path='registration' element={<UserRegistration/>}/>
          <Route path='profile/:userID' element={
            <RequireAuth>
              <UserProfile/>
            </RequireAuth>
          }/>
          {/* <Route path='booking' element={<Booking/>}/> */}
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
          <Route path='book' element={<BookItem/>}/>
          <Route path='book/:bookID' element={<BookItem/>}/>
          {/* <Route path='confirm-booking' element={
            <RequireAuth>
              <UserBooking/>
            </RequireAuth>
          }/> */}
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
