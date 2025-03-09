import css from './project-card.module.scss';

interface ProjectCardProps {
	name: string,
}

export const ProjectCard = (props: ProjectCardProps) => {
	const { name } = props;
	return (
		<div className={css.wrapper}>
			<div className={css.photo} />
			<div className={css.name}>{name}</div>
		</div>
	);
};
