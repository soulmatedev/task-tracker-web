import css from './registration-email-input.module.scss';
import { Input } from '../../../../../../shared/ui/input';
import { InputTypes } from '../../../../../../shared/ui/input/InputTypes';

interface RegistrationEmailInputProps {
	value: string,
	onChange: (value: string) => void;
}

export const RegistrationEmailInput = (props: RegistrationEmailInputProps) => {
	const { value, onChange } = props;

	return (
		<div className={css.login}>
			<Input
				placeholder="Введите почту"
				width={349}
				height={60}
				value={value}
				type={InputTypes.TEXT}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};
