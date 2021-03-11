// @flow

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
import { UserState } from 'interfaces';
import moment from 'moment';

// @ts-ignore
export const debounce = (func, wait, immediate) => {
// @ts-ignore
	var timeout;
	return function() {
		// @ts-ignore
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) {func.apply(context, args);}
		};
		// @ts-ignore
		var callNow = immediate && !timeout;
		// @ts-ignore
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) {func.apply(context, args);}
	};
};

export const createActionType = (prefix: string, actionType: string): string => `${prefix}_${actionType}`;

export const getPersonalInfoFormValuesFromUserState = (state: UserState) => ({
	about: state.about,
	birthday: state.birthday,
	companyId: state.companyId,
	email: state.email,
	facebookURL: state.facebookURL,
	instagramURL: state.instagramURL,
	interests: state.interests,
	isPrivate: state.isPrivate,
	linkedInURL: state.linkedInURL,
	name: state.name,
	phone: state.phone,
	position: state.position,
	skills: state.skills,
	surname: state.surname,
});


export const getDatesArray = (minDate: Date, maxDate: Date) => {
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

export const getWeekday = (date: Date): string => WEEKDAYS[date.getDay()];
export const getDateString = (date: Date): string => `${WEEKDAYS_FULL[new Date(date).getDay()]}, ${moment(date).format('DD MMMM YYYY')}`;
export const getShortDateString = (date: string): string => moment(date).format('DD.MM.YYYY');
