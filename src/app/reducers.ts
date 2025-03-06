import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../entities/user/auth/model/authSlice';
import { authAPI } from '../entities/user/auth/api/api';

export const reducers = combineReducers({
	auth: authReducer,
	[authAPI.reducerPath]: authAPI.reducer,
});

export type RootState = ReturnType<typeof reducers>;
