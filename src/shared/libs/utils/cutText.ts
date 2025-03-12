export const cutText = (text: string, limit: number) => {
	text = text.trim();
	if (text.length <= limit) return text;

	text = text.slice(0, limit);
	const lastSpace = text.lastIndexOf(' ');

	if (lastSpace > 0) {
		text = text.substring(0, lastSpace);
	}
	return `${text}...`;
};
