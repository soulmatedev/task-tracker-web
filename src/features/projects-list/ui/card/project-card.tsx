import css from './project-card.module.scss';
import { cutText } from '../../../../shared/libs/utils/cutText';

interface ProjectCardProps {
	name: string,
	onClick: () => void,
	isSelected: boolean,
}

export const ProjectCard = (props: ProjectCardProps) => {
	const { name, onClick, isSelected } = props;
	return (
		<button
			className={`${css.wrapper} ${isSelected ? css.selected : ''}`}
			onClick={onClick}
			type="button"
		>
			<div className={css.photo} />
			<div className={css.name}>{cutText(name, 18)}</div>
		</button>
	);
};
