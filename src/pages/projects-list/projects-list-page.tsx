import css from './project-list-page.module.scss';
import { ProjectsListForm } from '../../features/projects-list/ui';

export const ProjectsListPage = () => (
	<div className={css.wrapper}>
		<ProjectsListForm />
	</div>
);
