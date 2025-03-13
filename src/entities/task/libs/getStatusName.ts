import { TaskStatus } from '../model/IStatus';

export const getStatusName = (status: TaskStatus): string => {
	switch (status) {
	case TaskStatus.PENDING:
		return 'Ожидает';
	case TaskStatus.IN_PROGRESS:
		return 'В работе';
	case TaskStatus.SUSPENDED:
		return 'Приостановлена';
	case TaskStatus.AWAITING_REVIEW:
		return 'Ожидает проверки';
	case TaskStatus.COMPLETED:
		return 'Завершена';
	case TaskStatus.CANCELLED:
		return 'Отменена';
	default:
		return 'Неизвестный статус';
	}
};
