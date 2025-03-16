import { useMemo } from 'react';
import { format } from 'date-fns';

export const useFormattedDate = (dateString: string | undefined) => useMemo(() => {
	if (!dateString) return '';
	const date = new Date(dateString);
	return format(date, 'dd.MM.yy');
}, [dateString]);
