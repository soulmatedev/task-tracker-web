import { useEffect } from 'react';
import css from './user-card.module.scss';
import { useProject } from '../../../../../../../../../entities/project/model/useProject';

interface UserCardProps {
	id: number,
	login: string,
	accountId: string,
}

export const UserCard = (props: UserCardProps) => {
	const { id, login, accountId } = props;
	const { assignedAccounts, updateAssignedAccounts } = useProject();

	useEffect(() => {
		if (assignedAccounts.length === 0 && id === Number(accountId)) {
			updateAssignedAccounts([{ id, login }]);
		}
	}, [assignedAccounts, id, login, updateAssignedAccounts]);

	const isSelected = assignedAccounts.some((account) => account.id === id);

	const handleSelectAccount = () => {
		const updatedAssignedAccounts = isSelected
			? assignedAccounts.filter((account) => account.id !== id)
			: [...assignedAccounts, { id, login }];

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
