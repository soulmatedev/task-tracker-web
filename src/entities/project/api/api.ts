import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../shared/api/api';
import { URI_CREATE_PROJECT, URI_PROJECT } from './consts';
import {
	ICreateProjectRequest, IGetAssignedAccountsResponse,
	IProject,
	IUpdateProjectRequest,
} from './types';

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
			invalidatesTags: ['project'],
		}),
		update: builder.mutation<void, IUpdateProjectRequest>({
			query: ({ id, ...data }) => ({
				url: `${URI_PROJECT}/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['project'],
		}),
		delete: builder.mutation<void, { projectId: string }>({
			query: ({ projectId }) => ({
				url: `${URI_PROJECT}/${projectId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['project'],
		}),
		getProjectsByAccountId: builder.query<IProject[], number>({
			query: (accountId) => ({
				url: `${URI_PROJECT}/${accountId}`,
				method: 'GET',
			}),
			providesTags: ['project'],
		}),
		getAssignedAccounts: builder.query<IGetAssignedAccountsResponse[], number>({
			query: (projectId) => ({
				url: `${URI_PROJECT}/assigned-accounts/${projectId}`,
				method: 'GET',
			}),
			providesTags: ['project'],
		}),
	}),
});
