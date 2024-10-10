
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../src/components/Homepage/Userslice'; 

const store = configureStore({
  reducer: {
    user: userReducer, 
  },
});

export default store;
