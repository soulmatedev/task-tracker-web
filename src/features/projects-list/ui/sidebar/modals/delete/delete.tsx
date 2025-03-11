import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../../../../shared/ui/modal';
import css from './delete.module.scss';
import { MainButton } from '../../../../../../shared/ui/main-button';
import { projectSlice } from '../../../../../../entities/project/model/projectSlice';
import { useAppDispatch } from '../../../../../../shared/libs/utils/redux';
import { useDeleteProject } from '../hooks/useDeleteProject';

interface DeleteProjectModalProps {
	modalRef: React.RefObject<HTMLDivElement>,
}

export const DeleteProjectModal = (props: DeleteProjectModalProps) => {
	const { modalRef } = props;

	const dispatch = useAppDispatch();

	const isActive = useSelector(projectSlice.selectors.getIsDeleteProjectModalActive);
	const setModalVisibility = (value: boolean) => {
		dispatch(projectSlice.actions.setIsDeleteProjectModalActive(value));
		dispatch(projectSlice.actions.setDeletingProjectId(null));
	};

	const onCloseModal = () => {
		setModalVisibility(false);
	};

	const { onDeleteProject } = useDeleteProject(onCloseModal);

	return (
		<Modal
			styles={css.wrapper}
			active={isActive}
			closeFunc={onCloseModal}
		>
			<div ref={modalRef} className={css.content}>
				<p>Подтверждение удаления</p>
				<span className={css.description}>
					Вы действительно хотите удалить проект без возможности восстановления?
				</span>
				<div className={css.btn_block}>
					<MainButton text="Нет, не хочу" onClick={onCloseModal} />
					<MainButton text="Да, хочу" onClick={onDeleteProject} />
				</div>
			</div>
		</Modal>
	);
};
