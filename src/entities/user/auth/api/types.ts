export interface IAccount {
	id: number;
	email: string;
	login: string;
	role: string;
	profilePictureUrl?: string | null;
}

// Авторизация
export interface ISignInRequest {
	email: string;
	password: string;
}

export interface ISignInResponse {
	id: number;
	access_token: string;
	refresh_token: string;
}

// Регистрация
export interface ISignUpRequest {
	email: string;
	login: string;
	password: string;
}

export interface IGetAllAccountsResponse {
	accounts: IAccount[];
}
