import React from 'react';
import css from './status-select.module.scss';
import { IStatus } from '../../../../../../../../entities/task/api/types';

interface StatusSelectProps {
	value: number | null;
	onChange: (value: number | null) => void;
	statuses: IStatus[];
}

export const StatusSelect: React.FC<StatusSelectProps> = ({ value, onChange, statuses }) => (
	<select
		className={css.statusSelect}
		value={value ?? ''}
		onChange={(e) => onChange(Number(e.target.value) || null)}
	>
		{statuses.map((status) => (
			<option key={status.id} value={status.id}>
				{status.name}
			</option>
		))}
	</select>
);
