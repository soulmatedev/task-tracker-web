import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../../../shared/libs/utils/redux';
import { projectAPI } from '../../../../../../entities/project/api/api';
import { projectSlice } from '../../../../../../entities/project/model/projectSlice';

export const useDeleteProject = (onClose: () => void) => {
	const dispatch = useAppDispatch();
	const [deleteProject] = projectAPI.useDeleteMutation();
	const deletingProjectId = useSelector(projectSlice.selectors.getDeletingProjectId);

	const onDeleteProject = useCallback(async () => {
		if (deletingProjectId) {
			try {
				await deleteProject({ projectId: String(deletingProjectId) })
					.unwrap();
				onClose();
				dispatch(projectAPI.util?.invalidateTags(['project']));
				toast.success('Проект удален успешно');
			} catch (e) {
				toast.error('Произошла ошибка при удалении проекта...');
			}
		}
	}, [deletingProjectId]);

	return {
		onDeleteProject,
	};
};
