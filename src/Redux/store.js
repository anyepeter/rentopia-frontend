
import houseSlice from './houses/houseSlice';
import registerSlice from './authentication/singup'
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
      houses: houseSlice,
      register: registerSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

  export default store;