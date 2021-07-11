import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import contactSlice from './contactSlice';

const store = configureStore({
  reducer: {
    contact: contactSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
