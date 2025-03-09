import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../shared/api/api';
import { URI_CREATE_PROJECT, URI_PROJECT } from './consts';
import { ICreateProjectRequest, IProject, IUpdateProjectRequest } from './types';

export const projectAPI = createApi({
	reducerPath: 'projectAPI',
	baseQuery,
	refetchOnReconnect: true,
	tagTypes: ['project'],
	endpoints: builder => ({
		create: builder.mutation<void, ICreateProjectRequest>({
			query: (data) => ({
				url: URI_CREATE_PROJECT,
				method: 'POST',
				body: { ...data },
			}),
		}),
		update: builder.mutation<void, IUpdateProjectRequest>({
			query: ({ id, ...data }) => ({
				url: `${URI_PROJECT}/${id}`,
				method: 'PUT',
				body: data,
			}),
		}),
		delete: builder.mutation<void, number>({
			query: (id) => ({
				url: `${URI_PROJECT}/${id}`,
				method: 'DELETE',
			}),
		}),
		getProjectsByAccountId: builder.query<IProject[], number>({
			query: (accountId) => ({
				url: `${URI_PROJECT}/${accountId}`,
				method: 'GET',
			}),
			providesTags: ['project'],
		}),
	}),
});
