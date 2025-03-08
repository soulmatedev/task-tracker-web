import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../entities/user/auth/model/authSlice';
import { authAPI } from '../entities/user/auth/api/api';
import { projectAPI } from '../entities/project/api/api';
import { projectReducer } from '../entities/project/model/projectSlice';

export const reducers = combineReducers({
	auth: authReducer,
	[authAPI.reducerPath]: authAPI.reducer,

	project: projectReducer,
	[projectAPI.reducerPath]: projectAPI.reducer,
});

export type RootState = ReturnType<typeof reducers>;
