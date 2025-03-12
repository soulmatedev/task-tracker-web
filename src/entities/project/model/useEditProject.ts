import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { projectActions } from './projectSlice';
import { projectAPI } from '../api/api';
import { IAssignedAccount, IUpdateProjectRequest } from '../api/types';
import { selectAssignedAccounts, selectDescription, selectName } from './projectSelectors';
import { useAppDispatch } from '../../../shared/libs/utils/redux';

export const useEditProject = () => {
	const dispatch = useAppDispatch();

	const [update] = projectAPI.useUpdateMutation();

	const name = useSelector(selectName);
	const description = useSelector(selectDescription);
	const assignedAccounts = useSelector(selectAssignedAccounts);

	const onUpdateProject = async (id: number) => {
		try {
			const projectData: IUpdateProjectRequest = {
				id,
				name,
				description,
				assignedAccounts,
			};
			await update(projectData).unwrap();
			dispatch(projectAPI.util?.invalidateTags(['project']));
			dispatch(projectActions.clearData());
			toast.success('Проект успешно обновлён');
		} catch (error) {
			console.error('Ошибка при обновлении проекта:', error);
			toast.error('Не удалось обновить проект');
		}
	};

	const updateName = (name: string) => {
		dispatch(projectActions.setName(name));
	};

	const updateDescription = (description: string) => {
		dispatch(projectActions.setDescription(description));
	};

	const updateAssignedAccounts = (newAssignedAccounts: IAssignedAccount[]) => {
		const updatedAssignedAccounts = [
			...assignedAccounts.filter(
				account => !newAssignedAccounts.some(newAccount => newAccount.id === account.id),
			),
			...newAssignedAccounts,
		];
		dispatch(projectActions.setAssignedAccounts(updatedAssignedAccounts));
	};

	return {
		name,
		description,
		assignedAccounts,
		updateName,
		updateDescription,
		updateAssignedAccounts,
		onUpdateProject,
	};
};
