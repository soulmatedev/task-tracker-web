import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../../../../shared/ui/modal';
import css from './edit.module.scss';
import { projectSlice } from '../../../../../../entities/project/model/projectSlice';
import { useAppDispatch } from '../../../../../../shared/libs/utils/redux';
import { useEditProject } from '../../../../../../entities/project/model/useEditProject';
import { ProjectNameInput } from '../../../modals/create-project/ui/project-name-input';
import { ProjectDescriptionTextarea } from '../../../modals/create-project/ui/project-description-textarea';
import { UsersList } from '../../../modals/create-project/ui/users-list';
import { SaveProjectButton } from './ui/save-project-button';

interface EditProjectModalProps {
	modalRef: React.RefObject<HTMLDivElement>,
	projectId: number;
	accountId: number | null;
}

export const EditProjectModal = (props: EditProjectModalProps) => {
	const { modalRef, projectId, accountId } = props;

	const dispatch = useAppDispatch();

	const {
		name,
		description,
		assignedAccounts,
		updateName,
		updateDescription,
		updateAssignedAccounts,
		onUpdateProject,
	} = useEditProject();

	const isActive = useSelector(projectSlice.selectors.getIsEditProjectModalActive);

	const setModalVisibility = (value: boolean) => {
		dispatch(projectSlice.actions.setIsEditProjectModalActive(value));
		dispatch(projectSlice.actions.setEditingProjectId(null));
	};

	const onCloseModal = () => {
		setModalVisibility(false);
	};

	const handleSaveProject = async () => {
		await onUpdateProject(projectId);
		onCloseModal();
	};

	return (
		<Modal styles={css.wrapper} active={isActive} closeFunc={onCloseModal}>
			<div ref={modalRef} className={css.content}>
				<div>
					<p className={css.title}>Редактирование проекта</p>
					<ProjectNameInput value={name} onChange={updateName} />
					<ProjectDescriptionTextarea value={description} onChange={updateDescription} />
					<SaveProjectButton onSaveProject={handleSaveProject} />
				</div>
				<div className={css.accounts}>
					<p className={css.assigned}>Исполнители</p>
					<p className={css.subtitle}>Выберите для назначения на проект</p>
					<UsersList accountId={accountId} />
				</div>
			</div>
		</Modal>
	);
};
