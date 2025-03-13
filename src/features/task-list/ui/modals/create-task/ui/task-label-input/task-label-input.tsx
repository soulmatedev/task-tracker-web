import { Input } from '../../../../../../../shared/ui/input';
import { InputTypes } from '../../../../../../../shared/ui/input/InputTypes';
import css from './task-label-input.module.scss';

interface ProjectNameInputProps {
	value: string,
	onChange: (value: string) => void;
}

export const TaskLabelInput = (props: ProjectNameInputProps) => {
	const { value, onChange } = props;

	return (
		<div className={css.wrapper}>
			<Input
				placeholder="Название"
				width={400}
				height={60}
				value={value}
				type={InputTypes.TEXT}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};
