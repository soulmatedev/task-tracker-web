import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../../../../shared/ui/modal';
import css from './delete.module.scss';
import { MainButton } from '../../../../../../shared/ui/main-button';
import { useAppDispatch } from '../../../../../../shared/libs/utils/redux';
import { useDeleteTask } from '../hooks/useDeleteTask';
import { taskActions, taskSlice } from '../../../../../../entities/task/model/taskSlice';

interface DeleteTaskModalProps {
	modalRef: React.RefObject<HTMLDivElement>,
}

export const DeleteTaskModal = (props: DeleteTaskModalProps) => {
	const { modalRef } = props;

	const dispatch = useAppDispatch();

	const isActive = useSelector(taskSlice.selectors.getIsDeleteTaskModalActive);

	const setModalVisibility = (value: boolean) => {
		dispatch(taskActions.setIsDeleteTaskModalActive(value));
		dispatch(taskActions.setDeletingTaskId(null));
	};

	const onCloseModal = () => {
		setModalVisibility(false);
	};

	const { onDeleteTask } = useDeleteTask(onCloseModal);

	return (
		<Modal
			styles={css.wrapper}
			active={isActive}
			closeFunc={onCloseModal}
		>
			<div ref={modalRef} className={css.content}>
				<p>Подтверждение удаления</p>
				<span className={css.description}>
					Вы действительно хотите удалить задачу без возможности восстановления?
				</span>
				<div className={css.btn_block}>
					<MainButton text="Нет, не хочу" onClick={onCloseModal} />
					<MainButton text="Да, хочу" onClick={onDeleteTask} />
				</div>
			</div>
		</Modal>
	);
};
