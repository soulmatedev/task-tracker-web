import { IAssignedAccount } from '../../../../../../entities/project/api/types';
import css from './assigned-accounts-list.module.scss';

interface AssignedAccountsListProps {
	assignedAccounts: IAssignedAccount[];
}

export const AssignedAccountsList = (props: AssignedAccountsListProps) => {
	const { assignedAccounts } = props;
	return (
		<div className={css.assigned_accounts_list}>
			{assignedAccounts && assignedAccounts.length > 0 ? (
				assignedAccounts.map((account: IAssignedAccount) => (
					<p key={account.id} className={css.account}>
						{account.login}
					</p>
				))
			) : (
				<p className={css.no_accounts}>Нет назначенных пользователей</p>
			)}
		</div>
	);
};
