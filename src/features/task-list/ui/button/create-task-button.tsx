import { MainButton } from '../../../../shared/ui/main-button';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';
import { projectSlice } from '../../../../entities/project/model/projectSlice';

export const CreateTaskButton = () => {
	const dispatch = useAppDispatch();

	const openCreateProjectModal = () => {
		dispatch(projectSlice.actions.setIsCreateProjectModalActive(true));
	};

	return (
		<MainButton
			text="Создать задачу"
			width={160}
			height={40}
			onClick={openCreateProjectModal}
		/>
	);
};
