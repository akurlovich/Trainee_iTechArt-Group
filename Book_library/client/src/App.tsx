import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import { useAppDispatch, useAppSelector } from './ts/hooks/redux';
import { fetchUsers } from './ts/store/reducers/ActionCreators';

const App: FC = () => {
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);
  const { user } = useAppSelector(state => state.authReducer);
  // const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
  }, []);
  

  return (
    <div className='wrapper'>
      {isLoading && <h1 style={{fontSize: '200px'}}>loading</h1>}
      <button onClick={() => console.log(users, error)}>click</button>
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
