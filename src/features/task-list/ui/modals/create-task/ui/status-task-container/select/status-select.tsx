import React from 'react';
import css from './status-select.module.scss';
import { IStatus } from '../../../../../../../../entities/task/api/types';

interface StatusSelectProps {
	value: number | null;
	onChange: (value: number | null) => void;
	statuses: IStatus[];
	isLoading: boolean;
}

export const StatusSelect: React.FC<StatusSelectProps> = ({
	value, onChange, statuses, isLoading,
}) => (
	<div className={css.statusSelectContainer}>
		<select
			className={css.statusSelect}
			value={value ?? ''}
			onChange={(e) => onChange(Number(e.target.value) || null)}
			disabled={isLoading}
		>
			{statuses.map((status) => (
				<option key={status.id} value={status.id}>
					{status.name}
				</option>
			))}
		</select>
		{isLoading && <span className={css.loading}>Загрузка...</span>}
	</div>
);
