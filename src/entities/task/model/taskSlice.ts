import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStatus, ITask } from '../api/types';
import { IAssignedAccount } from '../../project/api/types';

interface ITaskState {
	title: string;
	description: string;
	assignedTo: IAssignedAccount | undefined;
	dueDate: string | null;
	status: IStatus | null;
	modals: {
		isCreateTaskModalActive: boolean;
		isEditTaskModalActive: boolean;
		isDeleteTaskModalActive: boolean;
		isSidebarActive: boolean;
	};
	selectedTask: ITask | null;
	deletingTaskId: number | null;
	editingTaskId: number | null;
	accountId: string | null;
}

const initialState: ITaskState = {
	title: '',
	description: '',
	assignedTo: undefined,
	dueDate: null,
	status: null,
	modals: {
		isCreateTaskModalActive: false,
		isEditTaskModalActive: false,
		isDeleteTaskModalActive: false,
		isSidebarActive: false,
	},
	selectedTask: null,
	deletingTaskId: null,
	editingTaskId: null,
	accountId: localStorage.getItem('accountId'),
};

export const taskSlice = createSlice({
	name: 'task',
	initialState,
	selectors: {
		getSelectedTask: (state) => state.selectedTask,
		getDeletingTaskId: (state) => state.deletingTaskId,
		getEditingTaskId: (state) => state.editingTaskId,
		getAccountId: (state) => state.accountId,

		getIsCreateTaskModalActive: (state) => state.modals.isCreateTaskModalActive || false,
		getIsEditTaskModalActive: (state) => state.modals.isEditTaskModalActive || false,
		getIsDeleteTaskModalActive: (state) => state.modals.isDeleteTaskModalActive || false,

		getIsSidebarActive: (state) => state.modals.isSidebarActive,
	},
	reducers: {
		setTitle(state, action: PayloadAction<string>) {
			state.title = action.payload;
		},
		setDescription(state, action: PayloadAction<string>) {
			state.description = action.payload;
		},
		setAssignedTo(state, action: PayloadAction<IAssignedAccount | undefined>) {
			state.assignedTo = action.payload;
		},
		setDueDate(state, action: PayloadAction<string | null>) {
			state.dueDate = action.payload;
		},
		setStatus(state, action: PayloadAction<IStatus | null>) {
			state.status = action.payload;
		},
		clearData(state) {
			state.title = '';
			state.description = '';
			state.assignedTo = undefined;
			state.dueDate = null;
			state.status = null;
		},

		setSelectedTask(state, action: PayloadAction<ITask | null>) {
			state.selectedTask = action.payload;
		},
		setDeletingTaskId: (state, action: PayloadAction<number | null>) => {
			state.deletingTaskId = action.payload;
		},
		setEditingTaskId: (state, action: PayloadAction<number | null>) => {
			state.editingTaskId = action.payload;
		},
		setAccountId: (state, action: PayloadAction<string | null>) => {
			state.accountId = action.payload;

			if (action.payload !== null) {
				localStorage.setItem('accountId', action.payload);
			} else {
				localStorage.removeItem('accountId');
			}
		},

		setIsCreateTaskModalActive: (state, action: PayloadAction<boolean>) => {
			state.modals.isCreateTaskModalActive = action.payload;
		},
		setIsEditTaskModalActive: (state, action: PayloadAction<boolean>) => {
			state.modals.isEditTaskModalActive = action.payload;
		},
		setIsDeleteTaskModalActive: (state, action: PayloadAction<boolean>) => {
			state.modals.isDeleteTaskModalActive = action.payload;
		},

		setIsSidebarActive: (state, action: PayloadAction<boolean>) => {
			state.modals.isSidebarActive = action.payload;
		},
	},
});

export const {
	actions: taskActions,
	reducer: taskReducer,
} = taskSlice;
