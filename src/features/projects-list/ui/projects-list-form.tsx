import { useParams } from 'react-router-dom';
import css from './projects-list-frame.module.scss';
import { CreateProjectButton } from './button/create-project-button';
import { CreateProjectModal } from './modals/create-project/create';
import { ProjectsList } from './list';

export const ProjectsListForm = () => {
	const { id } = useParams<{ id: string }>();
	const accountId = Number(id);

	if (!accountId) {
		throw new Error('accountId не найден');
	}

	return (
		<>
			<div className={css.wrapper}>
				<div className={css.header}>
					<p className={css.title}>Проекты</p>
					<CreateProjectButton />
				</div>
				<ProjectsList accountId={accountId} />
			</div>
			<CreateProjectModal accountId={accountId} />
		</>
	);
};
