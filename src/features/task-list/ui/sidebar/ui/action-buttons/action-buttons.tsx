import { MainButton } from '../../../../../../shared/ui/main-button';
import css from './action-buttons.module.scss';
import { useAppDispatch } from '../../../../../../shared/libs/utils/redux';
import { taskActions } from '../../../../../../entities/task/model/taskSlice';

interface ActionButtonsProps {
	taskId: number,
}

export const ActionButtons = (props: ActionButtonsProps) => {
	const { taskId } = props;
	const dispatch = useAppDispatch();

	const onEditProject = () => {
		dispatch(taskActions.setIsEditTaskModalActive(true));
		dispatch(taskActions.setEditingTaskId(taskId));
	};

	const onDeleteProject = () => {
		dispatch(taskActions.setIsDeleteTaskModalActive(true));
		dispatch(taskActions.setDeletingTaskId(taskId));
	};

	return (
		<div className={css.buttons}>
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
