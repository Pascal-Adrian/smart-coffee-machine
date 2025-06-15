import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import machineSlice from './machineSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    machine: machineSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;
