import { Modal } from '../../../../../shared/ui/modal';
import { useAppDispatch, useAppSelector } from '../../../../../shared/libs/utils/redux';
import { projectSlice } from '../../../../../entities/project/model/projectSlice';
import css from './create.module.scss';
import { ProjectNameInput } from './ui/project-name-input';
import { useProject } from '../../../../../entities/project/model/useProject';
import { ProjectDescriptionTextarea } from './ui/project-description-textarea';
import { CreateProjectButton } from './ui/create-project-button';

export const CreateProjectModal = () => {
	const dispatch = useAppDispatch();

	const {
		name,
		description,
		assignedAccounts,
		updateName,
		updateDescription,
		updateAssignedAccounts,
		onCreateProject,
	} = useProject();

	const isActive = useAppSelector(projectSlice.selectors.getIsCreateProjectModalActive);

	const setModalVisibility = (value: boolean) => {
		dispatch(projectSlice.actions.setIsCreateProjectModalActive(value));
	};

	const onClose = () => {
		setModalVisibility(false);
	};

	const handleCreateProject = async () => {
		await onCreateProject();
		onClose();
	};

	return (
		<Modal
			styles={css.wrapper}
			active={isActive}
			closeFunc={onClose}
		>
			<div>
				<p className={css.title}>Создание проекта</p>
				<ProjectNameInput value={name} onChange={updateName} />
				<ProjectDescriptionTextarea value={description} onChange={updateDescription} />
				<CreateProjectButton onCreateProject={handleCreateProject} />
			</div>
			<div>
				Сотрудники
			</div>
		</Modal>
	);
};
