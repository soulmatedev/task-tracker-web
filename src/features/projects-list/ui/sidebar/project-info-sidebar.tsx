import { useRef } from 'react';
import css from './project-info-sidebar.module.scss';
import { IProject } from '../../../../entities/project/api/types';
import { CloseModalButton } from '../../../../shared/ui/modal/close-modal-button';
import { useOutSideClick } from '../../../../shared/libs/utils/useOutsideClick';
import { projectActions } from '../../../../entities/project/model/projectSlice';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';
import { projectAPI } from '../../../../entities/project/api/api';
import { AssignedAccountsList } from './ui/list';
import { ActionButtons } from './ui/action-buttons';
import { DeleteProjectModal } from './modals/delete';

interface ProjectInfoSidebarProps {
	project: IProject,
	onClose: () => void,
}

export const ProjectInfoSidebar = (props: ProjectInfoSidebarProps) => {
	const { project, onClose } = props;

	const { data: assignedAccounts } = projectAPI.useGetAssignedAccountsQuery(project.id);

	const dispatch = useAppDispatch();

	const modalRef = useRef<HTMLDivElement>(null);
	const ref = useOutSideClick(() => {
		dispatch(projectActions.setIsSidebarActive(false));
		dispatch(projectActions.setSelectedProject(null));
	}, modalRef);

	return (
		<>
			<div className={css.sidebar} ref={ref}>
				<div className={css.name_wrapper}>
					<p className={css.label}>Название</p>
					<p className={css.name}>{project.name}</p>
				</div>
				<div className={css.description_wrapper}>
					<p className={css.label}>Описание</p>
					<p className={css.description}>{project.description}</p>
				</div>
				<div className={css.assigned_accounts}>
					<p className={css.label}>Назначены</p>
					<AssignedAccountsList assignedAccounts={assignedAccounts || []} />
				</div>

				<ActionButtons projectId={project.id} />

				<CloseModalButton onClose={onClose} />
			</div>
			<DeleteProjectModal modalRef={modalRef} />
		</>
	);
};
