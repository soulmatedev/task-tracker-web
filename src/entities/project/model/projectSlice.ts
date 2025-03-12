import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAssignedAccount, IProject } from '../api/types';

interface IProjectState {
	name: string,
	description: string,
	assignedAccounts: IAssignedAccount[],
	modals: {
		isCreateProjectModalActive: boolean,
		isEditProjectModalActive: boolean,
		isDeleteProjectModalActive: boolean,
		isSidebarActive: boolean;
	}
	selectedProject: IProject | null,
	deletingProjectId: number | null,
	editingProjectId: number | null,
}

const initialState: IProjectState = {
	name: '',
	description: '',
	assignedAccounts: [],
	modals: {
		isCreateProjectModalActive: false,
		isEditProjectModalActive: false,
		isDeleteProjectModalActive: false,
		isSidebarActive: false,
	},
	selectedProject: null,
	deletingProjectId: null,
	editingProjectId: null,
};

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	selectors: {
		getSelectedProject: (state) => state.selectedProject,
		getDeletingProjectId: (state) => state.deletingProjectId,
		getEditingProjectId: (state) => state.editingProjectId,

		getIsCreateProjectModalActive: (state) => state.modals.isCreateProjectModalActive || false,
		getIsEditProjectModalActive: (state) => state.modals.isEditProjectModalActive || false,
		getIsDeleteProjectModalActive: (state) => state.modals.isDeleteProjectModalActive || false,

		getIsSidebarActive: (state) => state.modals.isSidebarActive,
	},
	reducers: {
		setName(state, action: PayloadAction<string>) {
			state.name = action.payload;
		},
		setDescription(state, action: PayloadAction<string>) {
			state.description = action.payload;
		},
		setAssignedAccounts(state, action: PayloadAction<IAssignedAccount[]>) {
			state.assignedAccounts = action.payload;
		},
		clearData(state) {
			state.name = '';
			state.description = '';
		},

		setSelectedProject(state, action: PayloadAction<IProject | null>) {
			state.selectedProject = action.payload;
		},
		setDeletingProjectId: (state, action: PayloadAction<number | null>) => {
			state.deletingProjectId = action.payload;
		},
		setEditingProjectId: (state, action: PayloadAction<number | null>) => {
			state.editingProjectId = action.payload;
		},

		setIsCreateProjectModalActive: (state, action: PayloadAction<boolean>) => {
			state.modals.isCreateProjectModalActive = action.payload;
		},
		setIsEditProjectModalActive: (state, action: PayloadAction<boolean>) => {
			state.modals.isEditProjectModalActive = action.payload;
		},
		setIsDeleteProjectModalActive: (state, action: PayloadAction<boolean>) => {
			state.modals.isDeleteProjectModalActive = action.payload;
		},

		setIsSidebarActive: (state, action: PayloadAction<boolean>) => {
			state.modals.isSidebarActive = action.payload;
		},
	},
});

export const {
	actions: projectActions,
	reducer: projectReducer,
} = projectSlice;
