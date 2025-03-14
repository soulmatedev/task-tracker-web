import css from './task-card.module.scss';
import { useResponsiveMinWidth } from '../../../../shared/libs/utils/useResponsiveMinWidth';
import { IGetTasksByAssignedToResponse } from '../../../../entities/task/api/types';

interface TaskCardProps {
	task: IGetTasksByAssignedToResponse,
}

export const TaskCard = (props: TaskCardProps) => {
	const { task } = props;
	const { title, description, assignedTo } = task;

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
		<div className={css.wrapper}>
			<div className={css.header}>
				<p className={css.title} style={{ maxWidth: `${minWidthForTitle}px` }}>
					{title}
				</p>
				<p className={css.assigned}>{assignedTo?.login}</p>
			</div>
			<p className={css.description}>{description}</p>
		</div>
	);
};
