import { useNavigate } from 'react-router-dom';
import css from './registration-form.module.scss';
import { RegistrationLoginInput } from '../inputs/login-input';
import { RegistrationPasswordInput } from '../inputs/password-input';
import { RegistrationButton } from '../buttons/reg-button';
import { RegistrationEmailInput } from '../inputs/email-input';
import { useRegistration } from '../../model/useRegistration';
import { handleKeyDown } from '../../../../../shared/libs/utils/handleKeyDown';

export const RegistrationForm = () => {
	const {
		email,
		login,
		password,
		onSignUp,
		handleChangeEmail,
		handleChangeLogin,
		handleChangePassword,
	} = useRegistration();

	const SIGN_IN_LINK = '/';
	const SIGN_IN_BUTTON_CONTENT = 'Войти в учетную запись';

	const navigate = useNavigate();

	const onEnterPress = () => {
		navigate(SIGN_IN_LINK);
	};

	return (
		<div className={css.block}>
			<p className={css.header}>Регистрация</p>
			<div className={css.sign_in_wrapper}>
				<div
					role="button"
					tabIndex={0}
					className={css.sign_in_button}
					onClick={() => navigate(SIGN_IN_LINK)}
					onKeyDown={handleKeyDown({ keyCode: 'Enter', isActive: true, action: onEnterPress })}
				>
					<span>
						{SIGN_IN_BUTTON_CONTENT}
					</span>
				</div>
			</div>
			<RegistrationLoginInput value={login} onChange={handleChangeLogin} />
			<RegistrationEmailInput value={email} onChange={handleChangeEmail} />
			<RegistrationPasswordInput value={password} onChange={handleChangePassword} />
			<RegistrationButton onSignUp={onSignUp} />
		</div>
	);
};
