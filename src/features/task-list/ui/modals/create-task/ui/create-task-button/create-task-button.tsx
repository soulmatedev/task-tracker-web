import { MainButton } from '../../../../../../../shared/ui/main-button';

interface CreateTaskButtonProps {
	onCreateTask: () => void,
}

export const CreateTaskButton = (props: CreateTaskButtonProps) => {
	const { onCreateTask } = props;
	return (
		<MainButton
			text="Создать"
			width={120}
			height={40}
			onClick={onCreateTask}
		/>
	);
};
