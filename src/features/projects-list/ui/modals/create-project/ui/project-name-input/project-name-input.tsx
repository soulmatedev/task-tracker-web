import { Input } from '../../../../../../../shared/ui/input';
import { InputTypes } from '../../../../../../../shared/ui/input/InputTypes';
import css from './project-name-input.module.scss';

interface ProjectNameInputProps {
	value: string,
	onChange: (value: string) => void;
}

export const ProjectNameInput = (props: ProjectNameInputProps) => {
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
