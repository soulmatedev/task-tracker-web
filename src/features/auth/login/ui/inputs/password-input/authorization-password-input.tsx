import css from './authorization-password-input.module.scss';
import { Input } from '../../../../../../shared/ui/input';
import { InputTypes } from '../../../../../../shared/ui/input/InputTypes';

interface AuthorizationPasswordInputProps {
	value: string,
	onChange: (value: string) => void;
}

export const AuthorizationPasswordInput = (props: AuthorizationPasswordInputProps) => {
	const { value, onChange } = props;

	return (
		<div className={css.password}>
			<Input
				placeholder="Введите пароль"
				width={349}
				height={60}
				type={InputTypes.PASSWORD}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};
