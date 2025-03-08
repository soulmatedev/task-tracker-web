import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../shared/libs/utils/redux';
import { projectActions } from './projectSlice';
import { ICreateProjectRequest } from '../api/types';
import { selectAssignedAccounts, selectDescription, selectName } from './projectSelectors';
import { projectAPI } from '../api/api';

export const useProject = () => {
	const dispatch = useAppDispatch();

	const [create] = projectAPI.useCreateMutation();

	const name = useSelector(selectName);
	const description = useSelector(selectDescription);
	const assignedAccounts = useSelector(selectAssignedAccounts);

	const projectData: ICreateProjectRequest = {
		name,
		description,
		assignedAccounts,
	};

	const onCreateProject = async () => {
		try {
			const response = await create(projectData).unwrap();
			dispatch(projectActions.clearData());
			toast.success('Проект создан успешно');
			return response;
		} catch (error) {
			console.error('Ошибка при создании проекта:', error);
		}
	};

	const updateName = (name: string) => {
		dispatch(projectActions.setName(name));
	};

	const updateDescription = (description: string) => {
		dispatch(projectActions.setDescription(description));
	};

	const updateAssignedAccounts = (assignedAccounts: number[]) => {
		dispatch(projectActions.setAssignedAccounts(assignedAccounts));
	};

	const resetData = () => {
		dispatch(projectActions.clearData());
	};

	return {
		name,
		description,
		assignedAccounts,
		updateName,
		updateDescription,
		updateAssignedAccounts,
		resetData,
		onCreateProject,
	};
};
