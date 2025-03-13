import css from './task-deadline-input.module.scss';

interface TaskDeadlineInputProps {
	value: string | null;
	onChange: (dueDate: string | null) => void;
}

export const TaskDeadlineInput = (props: TaskDeadlineInputProps) => {
	const { value, onChange } = props;
	return (
		<div className={css.deadline_wrapper}>
			<p className={css.deadline}>Дедлайн</p>
			<input
				type="date"
				value={value || ''}
				onChange={(e) => onChange(e.target.value || null)}
			/>
		</div>
	);
};
