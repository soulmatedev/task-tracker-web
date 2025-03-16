import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../../../shared/libs/utils/redux';
import { taskAPI } from '../../../../../../entities/task/api/api';
import { taskActions, taskSlice } from '../../../../../../entities/task/model/taskSlice';

export const useDeleteTask = (onClose: () => void) => {
	const dispatch = useAppDispatch();
	const [deleteTask] = taskAPI.useDeleteMutation();
	const deletingTaskId = useSelector(taskSlice.selectors.getDeletingTaskId);

	const onDeleteTask = useCallback(async () => {
		if (deletingTaskId) {
			try {
				await deleteTask({ taskId: String(deletingTaskId) })
					.unwrap();
				onClose();
				dispatch(taskActions.setIsSidebarActive(false));
				dispatch(taskAPI.util?.invalidateTags(['task']));
				toast.success('Задача удалена успешно');
			} catch (e) {
				toast.error('Произошла ошибка при удалении задачи...');
			}
		}
	}, [deletingTaskId]);

	return {
		onDeleteTask,
	};
};
