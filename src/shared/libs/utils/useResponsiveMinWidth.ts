import { useEffect, useState } from 'react';

export const useResponsiveMinWidth = (breakpoints: { [key: string]: number }) => {
	const [minWidth, setMinWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth;

			for (const [breakpoint, width] of Object.entries(breakpoints)) {
				if (screenWidth >= Number(breakpoint)) {
					setMinWidth(width);
				}
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [breakpoints]);

	return minWidth;
};
