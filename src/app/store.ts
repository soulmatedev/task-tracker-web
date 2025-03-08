import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { authAPI } from '../entities/user/auth/api/api';
import { projectAPI } from '../entities/project/api/api';

const setupStore = () => configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}).concat(
		authAPI.middleware,
		projectAPI.middleware,
	),
});

const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default store;
