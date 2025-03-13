import { useEffect } from 'react';
import css from './user-card.module.scss';
import { useCreateTask } from '../../../../../../../../../entities/task/model/useCreateTask';

interface UserCardProps {
	id: number;
	login: string;
	projectId: number | null,
}

export const UserCard = (props: UserCardProps) => {
	const { id, login, projectId } = props;

	const { assignedTo, updateAssignedTo } = useCreateTask({ projectId: projectId ?? 0 });

	useEffect(() => {
		if (!assignedTo && id === Number(projectId)) {
			updateAssignedTo(id);
		}
	}, [assignedTo, id, projectId, updateAssignedTo]);

	const isSelected = assignedTo === id;

	const handleSelectAccount = () => {
		if (isSelected) {
			updateAssignedTo(null);
		} else {
			updateAssignedTo(id);
		}
	};

	const handleKeyDownPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === 'Enter') {
			handleSelectAccount();
		}
	};

	return (
		<button
			className={`${css.login} ${isSelected ? css.selected : ''}`}
			onClick={handleSelectAccount}
			onKeyDown={handleKeyDownPress}
			type="button"
		>
			{login}
		</button>
	);
};
