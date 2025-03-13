import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { authAPI } from '../entities/user/auth/api/api';
import { projectAPI } from '../entities/project/api/api';
import { taskAPI } from '../entities/task/api/api';

const setupStore = () => configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}).concat(
		authAPI.middleware,
		projectAPI.middleware,
		taskAPI.middleware,
	),
});

const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default store;
