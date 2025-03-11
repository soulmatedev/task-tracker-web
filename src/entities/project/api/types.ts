export interface IAssignedAccount {
	id: number;
	login: string;
}

export interface IProject {
	id: number;
	name: string;
	description?: string;
	createdBy: number;
	createdAt: string;
	assignedAccounts?: IAssignedAccount[];
}

export interface ICreateProjectRequest {
	name: string;
	description?: string;
	assignedAccounts?: IAssignedAccount[];
}

export interface IUpdateProjectRequest {
	id: number;
	name?: string;
	description?: string;
	assignedAccounts?: number[];
}

export interface IGetAssignedAccountsResponse {
	id: number,
	login: string,
}
