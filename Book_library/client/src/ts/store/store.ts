import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice';
import authReducer from './reducers/AuthReducer/AuthSlice';
import bookReducer from './reducers/BookReducer/BookSlice';

const rootReducer = combineReducers({
  userReducer,
  authReducer,
  bookReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']