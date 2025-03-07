import css from './projects-list.module.scss';
import { ProjectCard } from '../card';

export const ProjectsList = () => {
	const a = '';
	return (
		<div className={css.wrapper}>
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	);
};
