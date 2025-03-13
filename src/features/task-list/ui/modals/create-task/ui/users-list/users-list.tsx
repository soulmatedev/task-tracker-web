import { authAPI } from '../../../../../../../entities/user/auth/api/api';
import css from './users-list.module.scss';
import { UserCard } from './ui/user-card';

interface UsersListProps {
	projectId: number | null,
}

export const UsersList = (props: UsersListProps) => {
	const { projectId } = props;
	const { data } = authAPI.useGetAllAccountsQuery();

	return (
		<div className={css.wrapper}>
			{data?.accounts && data?.accounts.length > 0 ? (
				// eslint-disable-next-line react/jsx-no-useless-fragment
				<>
					{data?.accounts.map((account) => (
						<UserCard
							key={account.id}
							id={account.id}
							login={account.login}
							projectId={projectId}
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
