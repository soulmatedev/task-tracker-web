import { useNavigate } from 'react-router-dom';
import { MainButton } from '../../../../../../shared/ui/main-button';
import css from './action-buttons.module.scss';
import { useAppDispatch } from '../../../../../../shared/libs/utils/redux';
import { projectActions, projectSlice } from '../../../../../../entities/project/model/projectSlice';
import { IProject } from '../../../../../../entities/project/api/types';
import { taskActions } from '../../../../../../entities/task/model/taskSlice';
import { projectAPI } from '../../../../../../entities/project/api/api';

interface ActionButtonsProps {
	projectId: number,
	accountId: string | null;
}

export const ActionButtons = (props: ActionButtonsProps) => {
	const { projectId, accountId } = props;
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onEditProject = () => {
		dispatch(projectActions.setIsEditProjectModalActive(true));
		dispatch(projectSlice.actions.setEditingProjectId(projectId));
	};

	const onDeleteProject = () => {
		dispatch(projectActions.setIsDeleteProjectModalActive(true));
		dispatch(projectSlice.actions.setDeletingProjectId(projectId));
	};

	const onGoToProject = () => {
		navigate(`/task-list/${projectId}`);
		dispatch(projectActions.setSelectedProject({ id: projectId } as IProject));
		dispatch(taskActions.setAccountId(accountId));
		dispatch(projectAPI.util.invalidateTags(['project']));
	};

	return (
		<div className={css.buttons}>
			<MainButton
				text="Перейти в проект"
				className={css.go_to_project}
				onClick={onGoToProject}
			/>
			<div className={css.down_buttons}>
				<MainButton
					text="Редактировать"
					className={css.edit}
					onClick={onEditProject}
				/>
				<MainButton
					text="Удалить"
					className={css.delete}
					onClick={onDeleteProject}
				/>
			</div>
		</div>
	);
};
