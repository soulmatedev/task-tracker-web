import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../../../../../../shared/libs/utils/redux';
import { taskActions } from '../../../../../../../entities/task/model/taskSlice';
import { StatusSelect } from './select';
import css from './status-task-container.module.scss';
import { taskAPI } from '../../../../../../../entities/task/api/api';

export const StatusDropdownContainer = () => {
	const dispatch = useAppDispatch();
	const { status, selectedTask } = useAppSelector((state) => state.task);
	const { data: statuses } = taskAPI.useGetStatusesQuery();
	const [updateStatus, { isLoading }] = taskAPI.useUpdateStatusMutation();

	const handleStatusChange = async (newStatusId: number | null) => {
		if (newStatusId === null || !selectedTask?.id) return;

		const newStatus = statuses?.find((status) => status.id === newStatusId) || null;
		if (!newStatus) return;

		dispatch(taskActions.setStatus(newStatus));

		try {
			await updateStatus({ taskId: String(selectedTask.id), statusId: newStatusId }).unwrap();
			toast.success('Статус задачи успешно обновлен');
		} catch (err) {
			toast.error('Ошибка при обновлении статуса задачи');
		}
	};

	return (
		<div className={css.dropdown}>
			<StatusSelect
				value={status?.id || null}
				onChange={handleStatusChange}
				statuses={statuses || []}
				isLoading={isLoading}
			/>
		</div>
	);
};
