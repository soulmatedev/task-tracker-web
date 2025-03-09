import { useEffect } from 'react';
import css from './user-card.module.scss';
import { useProject } from '../../../../../../../../../entities/project/model/useProject';

interface UserCardProps {
	id: number;
	login: string;
}

export const UserCard = (props: UserCardProps) => {
	const { id, login } = props;
	const { assignedAccounts, updateAssignedAccounts } = useProject();

	useEffect(() => {
		if (assignedAccounts.length === 0 && id === 1) {
			updateAssignedAccounts([id]);
		}
	}, [assignedAccounts, id, updateAssignedAccounts]);

	const isSelected = assignedAccounts.includes(id);

	const handleSelectAccount = () => {
		const updatedAssignedAccounts = isSelected
			? assignedAccounts.filter((accountId) => accountId !== id)
			: [...assignedAccounts, id];

		if (JSON.stringify(assignedAccounts) !== JSON.stringify(updatedAssignedAccounts)) {
			updateAssignedAccounts(updatedAssignedAccounts);
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
