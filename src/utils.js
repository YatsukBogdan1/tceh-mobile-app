// @flow

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
import type { UserState } from 'flow/types';
import moment from 'moment';

export const debounce = (func, wait, immediate) => {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export const createActionType = (prefix, actionType) => `${prefix}_${actionType}`;

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
export const getShortDateString = date => moment(date).format('DD.MM.YYYY');
