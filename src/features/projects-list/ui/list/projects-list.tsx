import { useSelector } from 'react-redux';
import css from './projects-list.module.scss';
import { projectAPI } from '../../../../entities/project/api/api';
import { IProject } from '../../../../entities/project/api/types';
import { projectActions } from '../../../../entities/project/model/projectSlice';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';
import { ProjectInfoSidebar } from '../sidebar';
import { RootState } from '../../../../app/reducers';
import { ProjectCard } from '../card';

interface ProjectsListProps {
	accountId: string,
}

export const ProjectsList = (props: ProjectsListProps) => {
	const { accountId } = props;
	const dispatch = useAppDispatch();
	const selectedProject = useSelector((state: RootState) => state.project.selectedProject);
	const isSidebarActive = useSelector((state: RootState) => state.project.modals.isSidebarActive);
	const { data: projects } = projectAPI.useGetProjectsByAccountIdQuery(Number(accountId), { skip: !accountId });

	const onProjectClick = (project: IProject) => {
		if (selectedProject?.id === project.id) {
			return;
		}
		dispatch(projectActions.setSelectedProject(project));

		if (!isSidebarActive) {
			dispatch(projectActions.setIsSidebarActive(true));
		}
	};

	const closeSidebar = () => {
		dispatch(projectActions.setIsSidebarActive(false));
		dispatch(projectActions.setSelectedProject(null));
	};

	return (
		<div className={css.wrapper}>
			{projects && projects?.length > 0 ? (
				<>
					{projects.map((project) => (
						<ProjectCard
							key={project.id}
							name={project.name}
							onClick={() => onProjectClick(project)}
							isSelected={selectedProject?.id === project.id}
						/>
					))}
				</>
			) : (
				<p>Проекты не найдены</p>
			)}

			{
				isSidebarActive && selectedProject
					&& (
						<ProjectInfoSidebar
							project={selectedProject}
							onClose={closeSidebar}
						/>
					)
			}
		</div>
	);
};
