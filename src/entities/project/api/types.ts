export interface IProject {
	id: number;
	name: string;
	description?: string;
	createdBy: number;
	createdAt: string;
	assignedAccounts?: number[];
}

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
