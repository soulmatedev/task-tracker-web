import { useParams } from 'react-router-dom';
import css from './task-list-frame.module.scss';
import { CreateTaskButton } from './ui/button/create-task-button';
import { TaskCard } from './ui/card';

export const TaskListForm = () => {
	const { id } = useParams<{ id: string }>();
	const accountId = Number(id);

	if (!accountId) {
		throw new Error('accountId не найден');
	}

	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<p className={css.title}>Задачи</p>
				<CreateTaskButton />
			</div>
			<div className={css.columns_wrapper}>
				<div className={css.my_tasks}>
					<p className={css.label}>Мои задачи</p>
					<div className={css.tasks}>
						<TaskCard />
						<TaskCard />
						<TaskCard />
					</div>
				</div>
				<div className={css.other_tasks}>
					<p className={css.label}>Задачи других исполнителей</p>
					<div className={css.tasks}>
						<TaskCard />
					</div>
				</div>
				<div className={css.not_assigned}>
					<p className={css.label}>Не назначены</p>
					<div className={css.tasks}>
						<TaskCard />
					</div>
				</div>
			</div>
		</div>
	);
};
