import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../shared/api/api';
import { URI_CREATE_PROJECT, URI_PROJECT } from './consts';
import { ICreateProjectRequest, IUpdateProjectRequest } from './types';

export const projectAPI = createApi({
	reducerPath: 'projectAPI',
	baseQuery,
	refetchOnReconnect: true,
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
	}),
});
