import { useEffect, useRef } from 'react';

export const useOutSideClick = (callback: () => void, excludeRef?: React.RefObject<HTMLElement>) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				ref.current
				&& !ref.current.contains(event.target as Node)
				&& !(excludeRef?.current && excludeRef.current.contains(event.target as Node))
			) {
				callback();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [callback, excludeRef]);

	return ref;
};
