import css from './task-card.module.scss';
import { useResponsiveMinWidth } from '../../../../shared/libs/utils/useResponsiveMinWidth';

export const TaskCard = () => {
	const minWidthForTitle = useResponsiveMinWidth({
		2560: 530,
		2460: 500,
		2250: 420,
		1920: 380,
		1728: 320,
		1528: 220,
		1280: 160,
	});

	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<p className={css.title} style={{ maxWidth: `${minWidthForTitle}px` }}>
					Заголовок задачи
				</p>
				<p className={css.assigned}>Назначенный</p>
			</div>
			<p className={css.description}>Какое-то описание, ты не прочитаешь</p>
		</div>
	);
};
