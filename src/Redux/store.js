
import houseSlice from './houses/houseSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
      houses: houseSlice
    }
  });

  export default store;