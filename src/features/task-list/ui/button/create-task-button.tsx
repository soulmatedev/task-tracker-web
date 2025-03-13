import { MainButton } from '../../../../shared/ui/main-button';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';
import { taskSlice } from '../../../../entities/task/model/taskSlice';

export const CreateTaskButton = () => {
	const dispatch = useAppDispatch();

	const openCreateTaskModal = () => {
		dispatch(taskSlice.actions.setIsCreateTaskModalActive(true));
	};

	return (
		<MainButton
			text="Создать задачу"
			width={160}
			height={40}
			onClick={openCreateTaskModal}
		/>
	);
};
