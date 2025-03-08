import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProjectState {
	name: string,
	description: string,
	assigned_accounts: number[],
	modals: {
		isCreateProjectModalActive: boolean,
		isUpdateProjectModalActive: boolean,
		isDeleteProjectModalActive: boolean,
	}
}

const initialState: IProjectState = {
	name: '',
	description: '',
	assigned_accounts: [],
	modals: {
		isCreateProjectModalActive: false,
		isUpdateProjectModalActive: false,
		isDeleteProjectModalActive: false,
	},
};

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	selectors: {
		getIsCreateProjectModalActive: (state) => state.modals.isCreateProjectModalActive || false,
		getIsUpdateProjectModalActive: (state) => state.modals.isUpdateProjectModalActive || false,
		getIsDeleteProjectModalActive: (state) => state.modals.isDeleteProjectModalActive || false,
	},
	reducers: {
		setName(state, action: PayloadAction<string>) {
			state.name = action.payload;
		},
		setDescription(state, action: PayloadAction<string>) {
			state.description = action.payload;
		},
		setAssignedAccounts(state, action: PayloadAction<number[]>) {
			state.assigned_accounts = action.payload;
		},
		clearData(state) {
			state.name = '';
			state.description = '';
		},

		setIsCreateProjectModalActive: (state, action: PayloadAction<boolean>) => {
			state.modals.isCreateProjectModalActive = action.payload;
		},
		setIsUpdateProjectModalActive: (state, action: PayloadAction<boolean>) => {
			state.modals.isUpdateProjectModalActive = action.payload;
		},
		setIsDeleteProjectModalActive: (state, action: PayloadAction<boolean>) => {
			state.modals.isDeleteProjectModalActive = action.payload;
		},
	},
});

export const {
	actions: projectActions,
	reducer: projectReducer,
} = projectSlice;
