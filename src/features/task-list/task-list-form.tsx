import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './task-list-frame.module.scss';
import { CreateTaskButton } from './ui/button/create-task-button';
import { TaskCard } from './ui/card';
import { projectSlice } from '../../entities/project/model/projectSlice';
import { CreateTaskModal } from './ui/modals/create-task';
import { taskAPI } from '../../entities/task/api/api';
import { taskSlice } from '../../entities/task/model/taskSlice';

export const TaskListForm = () => {
	const { id } = useParams<{ id: string }>();
	const projectId = Number(id);

	const accountId = useSelector(taskSlice.selectors.getAccountId);

	if (accountId === null) {
		throw new Error('accountId не найден');
	}

	const accountIdString = accountId.toString();

	const { data: myTasks } = taskAPI.useGetTasksByAssignedToQuery(accountIdString);

	const selectedProject = (projectSlice.selectors.getSelectedProject);

	if (!selectedProject) {
		throw new Error('accountId не найден');
	}

	console.log(myTasks);

	return (
		<>
			<div className={css.wrapper}>
				<div className={css.header}>
					<p className={css.title}>Задачи</p>
					<CreateTaskButton />
				</div>
				<div className={css.columns_wrapper}>
					<div className={css.my_tasks}>
						<p className={css.label}>Мои задачи</p>
						<div className={css.tasks}>
							<div className={css.tasks}>
								{myTasks?.map(task => (
									<TaskCard key={task.id} task={task} />
								))}
							</div>
						</div>
					</div>
					<div className={css.other_tasks}>
						<p className={css.label}>Задачи других исполнителей</p>
						<div className={css.tasks}>
							123
						</div>
					</div>
					<div className={css.not_assigned}>
						<p className={css.label}>Не назначены</p>
						<div className={css.tasks}>
							123
						</div>
					</div>
				</div>
			</div>
			<CreateTaskModal projectId={projectId} />
		</>
	);
};
