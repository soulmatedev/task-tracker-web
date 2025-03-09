import { createApi } from '@reduxjs/toolkit/query/react';
import {
	URI_GET_ALL_USERS, URI_GET_CURRENT_USER,
	URI_SIGN_IN, URI_SIGN_UP,
} from './consts';
import {
	IGetAllAccountsResponse,
	ISignInRequest, ISignInResponse, ISignUpRequest,
} from './types';
import { baseQuery } from '../../../../shared/api/api';

export const authAPI = createApi({
	reducerPath: 'authAPI',
	baseQuery,
	refetchOnReconnect: true,
	endpoints: builder => ({
		signIn: builder.mutation<ISignInResponse, ISignInRequest>({
			query: (data) => ({
				url: URI_SIGN_IN,
				method: 'POST',
				body: { ...data },
			}),
		}),
		signUp: builder.mutation<void, ISignUpRequest>({
			query: (data) => ({
				url: URI_SIGN_UP,
				method: 'POST',
				body: { ...data },
			}),
		}),
		getCurrentAccount: builder.query<{ role: string }, void>({
			query: () => ({
				url: URI_GET_CURRENT_USER,
				method: 'GET',
			}),
		}),
		getAllAccounts: builder.query<IGetAllAccountsResponse, void>({
			query: () => ({
				url: URI_GET_ALL_USERS,
				method: 'GET',
			}),
		}),
	}),
});
