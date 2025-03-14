import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../shared/api/api';
import {
	ICreateTaskRequest,
	IGetTasksByAssignedToResponse,
	IGetTasksByProjectIdResponse, IStatus,
	IUpdateTaskRequest,
} from './types';
import {
	URI_CREATE_TASK,
	URI_TASK,
} from './consts';

export const taskAPI = createApi({
	reducerPath: 'taskAPI',
	baseQuery,
	refetchOnReconnect: true,
	tagTypes: ['task'],
	endpoints: builder => ({
		create: builder.mutation<void, ICreateTaskRequest>({
			query: (data) => ({
				url: URI_CREATE_TASK,
				method: 'POST',
				body: { ...data },
			}),
			invalidatesTags: ['task'],
		}),
		update: builder.mutation<void, IUpdateTaskRequest>({
			query: ({ id, ...data }) => ({
				url: `${URI_CREATE_TASK}/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['task'],
		}),
		delete: builder.mutation<void, { taskId: string }>({
			query: ({ taskId }) => ({
				url: `${URI_CREATE_TASK}/${taskId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['task'],
		}),
		getTasksByProjectId: builder.query<IGetTasksByProjectIdResponse[], string>({
			query: (projectId) => ({
				url: `${URI_CREATE_TASK}/project/${projectId}`,
				method: 'GET',
			}),
			providesTags: ['task'],
		}),
		getTasksByAssignedTo: builder.query<IGetTasksByAssignedToResponse[], string>({
			query: (accountId) => ({
				url: `${URI_TASK}/assigned/${accountId}`,
				method: 'GET',
			}),
			providesTags: ['task'],
		}),
		getStatuses: builder.query<IStatus[], void>({
			query: () => ({
				url: `${URI_TASK}/statuses`,
				method: 'GET',
			}),
			providesTags: ['task'],
		}),
	}),
});
