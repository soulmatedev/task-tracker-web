import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from './task-list-frame.module.scss';
import { CreateTaskButton } from './ui/button/create-task-button';
import { TaskCard } from './ui/card';
import { CreateTaskModal } from './ui/modals/create-task';
import { taskAPI } from '../../entities/task/api/api';
import { taskActions, taskSlice } from '../../entities/task/model/taskSlice';
import { RootState } from '../../app/reducers';
import { TaskInfoSidebar } from './ui/sidebar';
import { useAppDispatch } from '../../shared/libs/utils/redux';
import { ITask } from '../../entities/task/api/types';
import { projectSlice } from '../../entities/project/model/projectSlice';

export const TaskListForm = () => {
	const { id } = useParams<{ id: string }>();
	const projectId = Number(id);
	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const accountId = useSelector(taskSlice.selectors.getAccountId);

	if (accountId === null) {
		throw new Error('accountId не найден');
	}

	const accountIdString = accountId.toString();

	const { data: myTasks } = taskAPI.useGetTasksByAssignedToQuery(accountIdString);
	const {
		data: tasksWithoutCurrentUser,
	} = taskAPI.useGetTasksWithoutCurrentUserQuery();

	const selectedTask = useSelector((state: RootState) => state.task.selectedTask);
	const isSidebarActive = useSelector((state: RootState) => state.task.modals.isSidebarActive);

	const otherUsersTasks = tasksWithoutCurrentUser?.filter(
		task => task.assignedTo !== undefined
		&& task.assignedTo !== null
		&& task.assignedTo.id !== Number(accountId),
	);

	const unassignedTasks = tasksWithoutCurrentUser?.filter(task => task.assignedTo === null);

	const onTaskClick = (task: ITask) => {
		if (selectedTask?.id === task.id) {
			return;
		}
		dispatch(taskActions.setSelectedTask(task));

		if (!isSidebarActive) {
			dispatch(taskActions.setIsSidebarActive(true));
		}
	};

	const closeSidebar = () => {
		dispatch(taskActions.setIsSidebarActive(false));
		dispatch(taskActions.setSelectedTask(null));
	};

	const selectedProject = (projectSlice.selectors.getSelectedProject);

	if (!selectedProject) {
		navigate('/');
		throw new Error('accountId не найден');
	}

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
									<TaskCard
										key={task.id}
										task={task}
										onClick={() => onTaskClick(task)}
										isSelected={selectedTask?.id === task.id}
									/>
								))}
							</div>
						</div>
					</div>
					<div className={css.other_tasks}>
						<p className={css.label}>Задачи других исполнителей</p>
						<div className={css.tasks}>
							{otherUsersTasks?.map(task => (
								<TaskCard
									key={task.id}
									task={task}
									onClick={() => onTaskClick(task)}
									isSelected={selectedTask?.id === task.id}
								/>
							))}
						</div>
					</div>
					<div className={css.not_assigned}>
						<p className={css.label}>Не назначены</p>
						<div className={css.tasks}>
							{unassignedTasks?.map(task => (
								<TaskCard
									key={task.id}
									task={task}
									onClick={() => onTaskClick(task)}
									isSelected={selectedTask?.id === task.id}
								/>
							))}
						</div>
					</div>
				</div>

				{
					isSidebarActive && selectedTask
					&& (
						<TaskInfoSidebar
							task={selectedTask}
							onClose={closeSidebar}
						/>
					)
				}
			</div>
			<CreateTaskModal projectId={projectId} />
		</>
	);
};
