import { MainButton } from '../../../../../../../../shared/ui/main-button';

interface SaveProjectButtonProps {
	onSaveProject: () => void,
}

export const SaveProjectButton = (props: SaveProjectButtonProps) => {
	const { onSaveProject } = props;

	return (
		<MainButton
			text="Сохранить"
			width={120}
			height={40}
			onClick={onSaveProject}
		/>
	);
};
