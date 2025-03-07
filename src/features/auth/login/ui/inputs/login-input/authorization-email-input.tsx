import css from './authorization-email-input.module.scss';
import { Input } from '../../../../../../shared/ui/input';
import { InputTypes } from '../../../../../../shared/ui/input/InputTypes';

interface AuthorizationEmailInputProps {
	value: string,
	onChange: (value: string) => void;
}

export const AuthorizationEmailInput = (props: AuthorizationEmailInputProps) => {
	const { value, onChange } = props;

	return (
		<div className={css.email}>
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
