import css from './task-description-textarea.module.scss';
import { TextArea } from '../../../../../../../shared/ui/textarea';

interface ProjectNameInputProps {
	value: string,
	onChange: (value: string) => void;
}

export const TaskDescriptionTextarea = (props: ProjectNameInputProps) => {
	const { value, onChange } = props;

	return (
		<div className={css.wrapper}>
			<TextArea
				placeholder="Описание"
				width={400}
				height={180}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};
