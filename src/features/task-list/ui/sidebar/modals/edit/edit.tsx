import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../../../../shared/ui/modal';
import css from './edit.module.scss';
import { useAppDispatch } from '../../../../../../shared/libs/utils/redux';
import { SaveProjectButton } from './ui/save-project-button';
import { ProjectNameInput } from '../../../../../projects-list/ui/modals/create-project/ui/project-name-input';
import {
	ProjectDescriptionTextarea,
} from '../../../../../projects-list/ui/modals/create-project/ui/project-description-textarea';
import { taskActions, taskSlice } from '../../../../../../entities/task/model/taskSlice';
import { useEditTask } from '../../../../../../entities/task/model/useEditTask';
import { UsersList } from '../../../modals/create-task/ui/users-list';

interface EditTaskModalProps {
	modalRef: React.RefObject<HTMLDivElement>,
	taskId: number;
	projectId: number;
}

export const EditTaskModal = (props: EditTaskModalProps) => {
	const { modalRef, taskId, projectId } = props;

	const dispatch = useAppDispatch();

	const {
		title,
		description,
		updateName,
		updateDescription,
		onUpdateProject,
	} = useEditTask();

	const isActive = useSelector(taskSlice.selectors.getIsEditTaskModalActive);

	const setModalVisibility = (value: boolean) => {
		dispatch(taskActions.setIsEditTaskModalActive(value));
		dispatch(taskActions.setEditingTaskId(null));
	};

	const onCloseModal = () => {
		setModalVisibility(false);
	};

	const handleSaveProject = async () => {
		await onUpdateProject(taskId);
		onCloseModal();
	};

	return (
		<Modal styles={css.wrapper} active={isActive} closeFunc={onCloseModal}>
			<div ref={modalRef} className={css.content}>
				<div>
					<p className={css.title}>Редактирование задачи</p>
					<ProjectNameInput value={title} onChange={updateName} />
					<ProjectDescriptionTextarea value={description} onChange={updateDescription} />
					<SaveProjectButton onSaveProject={handleSaveProject} />
				</div>
				<div className={css.accounts}>
					<p className={css.assigned}>Исполнители</p>
					<p className={css.subtitle}>Выберите для назначения на задачу</p>
					<UsersList projectId={projectId} />
				</div>
			</div>
		</Modal>
	);
};
