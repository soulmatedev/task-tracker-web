import { useAppDispatch, useAppSelector } from '../../../../../shared/libs/utils/redux';
import { Modal } from '../../../../../shared/ui/modal';
import css from './create.module.scss';
import { taskSlice } from '../../../../../entities/task/model/taskSlice';
import { useCreateTask } from '../../../../../entities/task/model/useCreateTask';
import { TaskLabelInput } from './ui/task-label-input';
import { TaskDescriptionTextarea } from './ui/task-description-textarea';
import { CreateTaskButton } from './ui/create-task-button';
import { TaskDeadlineInput } from './ui/task-deadline-input';
import { UsersList } from './ui/users-list';

interface CreateTaskModalProps {
	projectId: number,
}

export const CreateTaskModal = (props: CreateTaskModalProps) => {
	const { projectId } = props;
	const dispatch = useAppDispatch();

	const {
		title,
		dueDate,
		description,
		updateTitle,
		updateDueDate,
		updateDescription,
		onCreateTask,
	} = useCreateTask({ projectId });

	const isActive = useAppSelector(taskSlice.selectors.getIsCreateTaskModalActive);

	const setModalVisibility = (value: boolean) => {
		dispatch(taskSlice.actions.setIsCreateTaskModalActive(value));
	};

	const onClose = () => {
		setModalVisibility(false);
	};

	const handleCreateTask = async () => {
		await onCreateTask();
		onClose();
	};

	return (
		<Modal
			styles={css.wrapper}
			active={isActive}
			closeFunc={onClose}
		>
			<div>
				<p className={css.title}>Создание задачи</p>
				<TaskLabelInput value={title} onChange={updateTitle} />
				<TaskDescriptionTextarea value={description} onChange={updateDescription} />
				<CreateTaskButton onCreateTask={handleCreateTask} />
			</div>
			<div className={css.accounts}>
				<p className={css.assigned}>Исполнитель</p>
				<p className={css.subtitle}>Выберите для назначения на задачу</p>
				<UsersList projectId={projectId} />

				<TaskDeadlineInput value={dueDate} onChange={updateDueDate} />
			</div>
		</Modal>
	);
};
