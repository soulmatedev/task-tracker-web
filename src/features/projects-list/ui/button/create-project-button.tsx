import { MainButton } from '../../../../shared/ui/main-button';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';
import { projectSlice } from '../../../../entities/project/model/projectSlice';

export const CreateProjectButton = () => {
	const dispatch = useAppDispatch();

	const openCreateProjectModal = () => {
		dispatch(projectSlice.actions.setIsCreateProjectModalActive(true));
	};

	return (
		<MainButton
			text="Создать проект"
			width={140}
			onClick={openCreateProjectModal}
		/>
	);
};
