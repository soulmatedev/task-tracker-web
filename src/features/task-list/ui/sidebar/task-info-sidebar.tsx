import { useRef } from 'react';
import css from './task-info-sidebar.module.scss';
import { CloseModalButton } from '../../../../shared/ui/modal/close-modal-button';
import { useOutSideClick } from '../../../../shared/libs/utils/useOutsideClick';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';
import { ActionButtons } from './ui/action-buttons';
import { DeleteTaskModal } from './modals/delete';
import { EditTaskModal } from './modals/edit';
import { ITask } from '../../../../entities/task/api/types';
import { taskActions } from '../../../../entities/task/model/taskSlice';
import { taskAPI } from '../../../../entities/task/api/api';

interface TaskInfoSidebarProps {
	task: ITask,
	onClose: () => void,
}

export const TaskInfoSidebar = (props: TaskInfoSidebarProps) => {
	const { task, onClose } = props;

	const { data: assignedAccounts } = taskAPI.useGetTasksByAssignedToQuery(String(task.id));

	const dispatch = useAppDispatch();

	const sidebarRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	useOutSideClick(() => {
		dispatch(taskActions.setIsSidebarActive(false));
		dispatch(taskActions.setSelectedTask(null));
	}, sidebarRef, modalRef);

	const accountId = assignedAccounts?.[0]?.id ? Number(assignedAccounts[0].id) : 0;

	return (
		<>
			<div className={css.sidebar}>
				<div className={css.name_wrapper}>
					<p className={css.label}>Название</p>
					<p className={css.name}>{task.title}</p>
				</div>
				<div className={css.description_wrapper}>
					<p className={css.label}>Описание</p>
					<p className={css.description}>{task.description}</p>
				</div>
				<div className={css.assigned_accounts}>
					<p className={css.label}>Назначены</p>
					<div>{task.assignedTo?.login}</div>
				</div>

				<ActionButtons taskId={task.id} />

				<CloseModalButton onClose={onClose} />
			</div>
			<DeleteTaskModal modalRef={modalRef} />
			<EditTaskModal modalRef={modalRef} projectId={accountId} taskId={task.id} />
		</>
	);
};
