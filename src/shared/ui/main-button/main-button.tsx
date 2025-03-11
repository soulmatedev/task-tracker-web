import React from 'react';
import css from './main-button.module.scss';

interface MainButtonProps {
	text: string,
	width?: number,
	height?: number,
	disabled?: boolean,
	onClick?: React.MouseEventHandler<HTMLButtonElement>,
	className?: string,
}

export const MainButton = (props: MainButtonProps) => {
	const {
		text, width, height, onClick, disabled = false, className = '',
	} = props;
	return (
		<button
			className={`${css.main_button} ${disabled ? css.disabled : ''} ${className}`}
			type="button"
			onClick={onClick}
			disabled={disabled}
			style={{ width, height }}
		>
			{text}
		</button>
	);
};
