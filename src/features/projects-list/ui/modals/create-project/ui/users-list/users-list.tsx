import { authAPI } from '../../../../../../../entities/user/auth/api/api';
import css from './users-list.module.scss';
import { UserCard } from './ui/user-card';

interface UsersListProps {
	accountId: number | null,
}

export const UsersList = (props: UsersListProps) => {
	const { accountId } = props;
	const { data } = authAPI.useGetAllAccountsQuery();

	const filteredAccounts = data?.accounts.filter((account) => account.id !== Number(accountId));

	return (
		<div className={css.wrapper}>
			{filteredAccounts && filteredAccounts.length > 0 ? (
				<>
					{filteredAccounts.map((account) => (
						<UserCard
							key={account.id}
							id={account.id}
							login={account.login}
							accountId={accountId}
						/>
					))}
				</>
			) : (
				<div className={css.not_found_wrapper}>
					<p className={css.not_found}>Список пуст</p>
				</div>
			)}
		</div>
	);
};
