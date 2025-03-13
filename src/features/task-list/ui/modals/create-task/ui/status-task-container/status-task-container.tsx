import { useAppDispatch, useAppSelector } from '../../../../../../../shared/libs/utils/redux';
import { taskActions } from '../../../../../../../entities/task/model/taskSlice';
import { StatusSelect } from './select';
import css from './status-task-container.module.scss';
import { taskAPI } from '../../../../../../../entities/task/api/api';

export const StatusDropdownContainer = () => {
	const dispatch = useAppDispatch();
	const { status } = useAppSelector((state) => state.task);
	const { data: statuses } = taskAPI.useGetStatusesQuery();

	const handleStatusChange = (newStatusId: number | null) => {
		const newStatus = statuses?.find((status) => status.id === newStatusId) || null;
		dispatch(taskActions.setStatus(newStatus));
	};

	return (
		<div className={css.dropdown}>
			<StatusSelect value={status?.id || null} onChange={handleStatusChange} statuses={statuses || []} />
		</div>
	);
};
