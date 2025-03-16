import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../shared/libs/utils/redux';
import { taskAPI } from '../api/api';
import {
	selectAssignedTo, selectDescription, selectDueDate, selectStatus, selectTitle,
} from './taskSelectors';
import { IStatus, ITask, IUpdateTaskRequest } from '../api/types';
import { taskActions } from './taskSlice';
import { IAssignedAccount } from '../../project/api/types';

export const useEditTask = () => {
	const dispatch = useAppDispatch();
	const [update] = taskAPI.useUpdateMutation();

	const title = useSelector(selectTitle);
	const description = useSelector(selectDescription);
	const assignedTo = useSelector(selectAssignedTo);
	const status = useSelector(selectStatus);
	const dueDate = useSelector(selectDueDate);

	const onUpdateProject = async (id: number) => {
		try {
			const taskData: IUpdateTaskRequest = {
				id,
				title,
				description,
				assignedTo: assignedTo ? { id: assignedTo.id, login: assignedTo.login } : null,
				status,
				dueDate,
			};
			await update(taskData).unwrap();
			dispatch(taskAPI.util?.invalidateTags(['task']));
			dispatch(taskActions.setSelectedTask(taskData as ITask));
			dispatch(taskActions.clearData());
			toast.success('Проект успешно обновлён');
		} catch (error) {
			console.error('Ошибка при обновлении проекта:', error);
			toast.error('Не удалось обновить проект');
		}
	};

	const updateName = (name: string) => {
		dispatch(taskActions.setTitle(name));
	};

	const updateDescription = (description: string) => {
		dispatch(taskActions.setDescription(description));
	};

	const updateAssignedAccounts = (newAssignedAccount: IAssignedAccount | undefined) => {
		dispatch(taskActions.setAssignedTo(newAssignedAccount));
	};

	const updateDueDate = (dueDate: string | null) => {
		dispatch(taskActions.setDueDate(dueDate));
	};

	const updateStatus = (status: IStatus | null) => {
		dispatch(taskActions.setStatus(status));
	};

	return {
		title,
		description,
		dueDate,
		assignedTo,
		updateName,
		updateDescription,
		updateAssignedAccounts,
		updateDueDate,
		updateStatus,
		onUpdateProject,
	};
};
