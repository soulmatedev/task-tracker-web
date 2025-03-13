import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../entities/user/auth/model/authSlice';
import { authAPI } from '../entities/user/auth/api/api';
import { projectAPI } from '../entities/project/api/api';
import { projectReducer } from '../entities/project/model/projectSlice';
import { taskAPI } from '../entities/task/api/api';
import { taskReducer } from '../entities/task/model/taskSlice';

export const reducers = combineReducers({
	auth: authReducer,
	[authAPI.reducerPath]: authAPI.reducer,

	project: projectReducer,
	[projectAPI.reducerPath]: projectAPI.reducer,

	[taskAPI.reducerPath]: taskAPI.reducer,
	task: taskReducer,
});

export type RootState = ReturnType<typeof reducers>;
