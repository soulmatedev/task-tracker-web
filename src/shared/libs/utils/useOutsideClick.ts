import { useEffect, useRef } from 'react';

export const useOutSideClick = (
	callback: () => void,
	ref: React.RefObject<HTMLElement>,
	ignoreRef?: React.RefObject<HTMLElement>,
) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (
				ref.current
				&& !ref.current.contains(event.target as Node)
				&& !(ignoreRef?.current && ignoreRef.current.contains(event.target as Node))
			) {
				callback();
			}
		};

		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [callback, ref, ignoreRef]);
};
