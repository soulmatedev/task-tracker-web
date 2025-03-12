import css from './task-list-page.module.scss';
import { TaskListForm } from '../../features/task-list';

export const TaskListPage = () => (
	<div className={css.wrapper}>
		<TaskListForm />
	</div>
);
