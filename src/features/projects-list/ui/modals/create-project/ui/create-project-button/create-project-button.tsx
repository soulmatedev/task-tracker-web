import { MainButton } from '../../../../../../../shared/ui/main-button';

interface CreateProjectButtonProps {
	onCreateProject: () => void,
}

export const CreateProjectButton = (props: CreateProjectButtonProps) => {
	const { onCreateProject } = props;
	return (
		<MainButton
			text="Создать"
			width={120}
			height={40}
			onClick={onCreateProject}
		/>
	);
};
