import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../shared/libs/utils/redux';
import { taskAPI } from '../api/api';
import { taskActions } from './taskSlice';
import { IAssignedAccount } from '../../project/api/types';
import { ICreateTaskRequest, IStatus } from '../api/types';
import {
	selectAssignedTo, selectDescription, selectDueDate, selectStatus, selectTitle,
} from './taskSelectors';

interface IUseCreateTaskProps {
	projectId: number,
}

export const useCreateTask = (props: IUseCreateTaskProps) => {
	const { projectId } = props;

	const dispatch = useAppDispatch();

	const [create] = taskAPI.useCreateMutation();

	const title = useSelector(selectTitle);
	const description = useSelector(selectDescription);
	const assignedTo = useSelector(selectAssignedTo);
	const dueDate = useSelector(selectDueDate);
	const status = useSelector(selectStatus);

	const taskData: ICreateTaskRequest = {
		projectId,
		title,
		description,
		assignedTo: assignedTo ? { id: assignedTo.id, login: assignedTo.login } : null,
		dueDate,
		status,
	};

	const onCreateTask = async () => {
		try {
			const response = await create(taskData).unwrap();
			dispatch(taskActions.clearData());
			console.log(taskData);
			dispatch(taskAPI.util?.invalidateTags(['task']));
			toast.success('Задача создана успешно');
			return response;
		} catch (error) {
			console.error('Ошибка при создании задачи:', error);
			toast.error('Ошибка при создании задачи');
		}
	};

	const updateTitle = (title: string) => {
		dispatch(taskActions.setTitle(title));
	};

	const updateDescription = (description: string) => {
		dispatch(taskActions.setDescription(description));
	};

	const updateAssignedTo = (assignedTo: IAssignedAccount | undefined) => {
		dispatch(taskActions.setAssignedTo(assignedTo));
	};

	const updateDueDate = (dueDate: string | null) => {
		dispatch(taskActions.setDueDate(dueDate));
	};

	const updateStatus = (status: IStatus | null) => {
		dispatch(taskActions.setStatus(status));
	};

	const resetData = () => {
		dispatch(taskActions.clearData());
	};

	return {
		title,
		description,
		assignedTo,
		dueDate,
		status,
		updateTitle,
		updateDescription,
		updateAssignedTo,
		updateDueDate,
		updateStatus,
		resetData,
		onCreateTask,
	};
};
