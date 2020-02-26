import moment from 'moment';



export const getDatesArray = (minDate, maxDate) => {
	const datesArray = [];
	let date = new Date(minDate);
	date.setHours(0,0,0,0);
	const maxDateObj = new Date(maxDate);
	datesArray.push(date);
	let nextDay = 1;
	while (date <= maxDateObj) {
		date = new Date(minDate);
		date.setDate(date.getDate() + nextDay);
		date.setHours(0,0,0,0);
		datesArray.push(date);
		nextDay++;
	}
	return datesArray;
};

const WEEKDAYS = [
	'Вс',
	'Пн',
	'Вт',
	'Ср',
	'Чт',
	'Пт',
	'Сб',
];

const WEEKDAYS_FULL = [
	'Воскресение',
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
];

export const getWeekday = date => WEEKDAYS[date.getDay()];

export const getDateString = date => `${WEEKDAYS_FULL[new Date(date).getDay()]}, ${moment(date).format('DD MMMM YYYY')}`;
