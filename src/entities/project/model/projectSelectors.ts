import { RootState } from '../../../app/reducers';

export const selectName = (state: RootState) => state.project.name;

export const selectDescription = (state: RootState) => state.project.description;

export const selectAssignedAccounts = (state: RootState) => state.project.assigned_accounts;

export const selectIsFormValid = (state: RootState) => state.project.name.trim() !== ''
	&& state.project.description.trim() !== '';
