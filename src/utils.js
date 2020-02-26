// @flow

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
import type { UserState } from 'flow/types';

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
