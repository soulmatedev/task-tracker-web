import { IAssignedAccount, IProject } from '../../project/api/types';

export interface IStatus {
	id: number;
	name: string;
}

export interface ITask {
	id: number;
	title: string;
	description?: string;
	projectId?: number;
	createdBy?: number;
	assignedTo?: IAssignedAccount;
	dueDate?: string;
	status: IStatus | null;
}

export interface ICreateTaskRequest {
	title: string;
	description?: string;
	projectId?: number;
	assignedTo?: IAssignedAccount | null;
	dueDate?: string | null;
	status: IStatus | null;
}

export interface IUpdateTaskRequest {
	id: number;
	title?: string;
	description?: string;
	assignedTo?: IAssignedAccount | null;
	dueDate?: string | null;
	status: IStatus | null;
}

export interface IGetTasksByProjectIdResponse {
	id: number;
	title: string;
	description?: string;
	assignedTo: IAssignedAccount;
	status: IStatus | null;
	dueDate?: string;
}

export interface IGetTasksByAssignedToResponse {
	id: number;
	title: string;
	description?: string;
	assignedTo: IAssignedAccount;
	project: IProject;
	status: IStatus | null;
	dueDate?: string;
}
