export const getTimeString = (timestamp, duration) => {
	const date1 = new Date(timestamp);
	const date2 = new Date(timestamp);
	date2.setMinutes(date2.getMinutes() + duration);
	const time1 = date1.toLocaleTimeString('ru-Ru', {
		hour: '2-digit',
		minute:'2-digit',
	});
	const time2 = date2.toLocaleTimeString('ru-Ru', {
		hour: '2-digit',
		minute:'2-digit',
	});
	return `${time1} - ${time2}`;
};
