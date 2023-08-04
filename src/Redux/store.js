
import houseSlice from './houses/houseSlice';
import registerSlice from './authentication/singup'
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
      houses: houseSlice,
      register: registerSlice,
    }
  });

  export default store;