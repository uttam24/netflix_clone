import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice';
import { getAuth } from "firebase/auth";


export const store = configureStore({
  reducer: {
  	user:userReducer,
  },
})

