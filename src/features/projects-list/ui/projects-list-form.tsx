import css from './projects-list-frame.module.scss';
import { CreateProjectButton } from './button/create-project-button';
import { ProjectsList } from './list/projects-list';

export const ProjectsListForm = () => {
	const a = '';
	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<p className={css.title}>Проекты</p>
				<CreateProjectButton />
			</div>
			<ProjectsList />
		</div>
	);
};
