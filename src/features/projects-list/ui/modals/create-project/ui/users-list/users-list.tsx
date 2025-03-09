import { authAPI } from '../../../../../../../entities/user/auth/api/api';
import css from './users-list.module.scss';
import { UserCard } from './ui/user-card';

export const UsersList = () => {
	const { data } = authAPI.useGetAllAccountsQuery();

	return (
		<div className={css.wrapper}>
			{data && data.accounts.length > 0 ? (
				<>
					{data.accounts.map((account) => (
						<UserCard
							key={account.id}
							id={account.id}
							login={account.login}
						/>
					))}
				</>
			) : (
				<p className={css.not_found}>Список пуст</p>
			)}
		</div>
	);
};
