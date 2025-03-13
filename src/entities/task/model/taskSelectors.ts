import { RootState } from '../../../app/reducers';

export const selectTitle = (state: RootState) => state.task.title;

export const selectDescription = (state: RootState) => state.task.description;

export const selectAssignedTo = (state: RootState) => state.task.assignedTo;

export const selectDueDate = (state: RootState) => state.task.dueDate;

export const selectStatus = (state: RootState) => state.task.status;

export const selectIsFormValid = (state: RootState) => state.task.title.trim() !== ''
		&& state.task.description.trim() !== ''
		&& state.task.assignedTo !== null;
