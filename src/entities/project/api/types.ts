export interface ICreateProjectRequest {
	name: string;
	description?: string;
	assignedAccounts?: number[];
}

export interface IUpdateProjectRequest {
	id: number;
	name?: string;
	description?: string;
	assignedAccounts?: number[];
}
