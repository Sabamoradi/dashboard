import generalReducer from './general/slice';
import {
  Action,
  ThunkAction,
  configureStore,
} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    general: generalReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

