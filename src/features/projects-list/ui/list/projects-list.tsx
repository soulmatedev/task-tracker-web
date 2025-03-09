import { useParams } from 'react-router-dom';
import css from './projects-list.module.scss';
import { ProjectCard } from '../card';
import { projectAPI } from '../../../../entities/project/api/api';

export const ProjectsList = () => {
	const { id } = useParams<{ id: string }>();
	const { data: projects } = projectAPI.useGetProjectsByAccountIdQuery(Number(id), { skip: !id });

	return (
		<div className={css.wrapper}>
			{projects && projects?.length > 0 ? (
				<>
					{projects.map((project) => (
						<ProjectCard key={project.id} name={project.name} />
					))}
				</>
			) : (
				<p>Проекты не найдены</p>
			)}
		</div>
	);
};
