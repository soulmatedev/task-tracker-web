import css from './task-card.module.scss';
import { useResponsiveMinWidth } from '../../../../shared/libs/utils/useResponsiveMinWidth';
import { IGetTasksByAssignedToResponse } from '../../../../entities/task/api/types';

interface TaskCardProps {
	task: IGetTasksByAssignedToResponse,
	onClick: () => void,
	isSelected: boolean,
}

export const TaskCard = (props: TaskCardProps) => {
	const { task, onClick, isSelected } = props;
	const {
		title,
		description,
		assignedTo,
	} = task;

	const minWidthForTitle = useResponsiveMinWidth({
		2560: 530,
		2460: 500,
		2250: 420,
		1920: 380,
		1728: 320,
		1528: 220,
		1280: 160,
	});

	return (
		<button
			className={`${css.wrapper} ${isSelected ? css.selected : ''}`}
			onClick={onClick}
			type="button"
		>
			<div className={css.header}>
				<p className={css.title} style={{ maxWidth: `${minWidthForTitle}px` }}>
					{title}
				</p>
				<p className={css.assigned}>{assignedTo?.login}</p>
			</div>
			<p className={css.description}>{description}</p>
		</button>
	);
};
