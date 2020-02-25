import {
	validateEmail,
	validateName,
	validatePhone,
} from './common';

export const validateSurname = value => {
	if (value.length === 0) {
		return 'Введите фамилию';
	}
	return null;
};

export const validatePosition = value => {
	if (value.length === 0) {
		return 'Введите позицию';
	}
	return null;
};

export const validateAbout = value => {
	if (value.length === 0) {
		return 'Расскажите о себе';
	}
	return null;
};

export const validateSkills = value => {
	if (value.length === 0) {
		return 'Введите навыки';
	}
	return null;
};

export const validateInterests = value => {
	if (value.length === 0) {
		return 'Введите интересы';
	}
	return null;
};

export const validateFacebookURL = value => {
	if (value.length === 0) {
		return 'Введите вашу ссылку на Facebook';
	}
	return null;
};

export const validateLinkedInURL = value => {
	if (value.length === 0) {
		return 'Введите вашу ссылку на LinkedIn';
	}
	return null;
};

export const validateInstagramURL = value => {
	if (value.length === 0) {
		return 'Введите вашу ссылку на Instagram';
	}
	return null;
};

export const validatePersonalInfoFormField = (field, value) => {
	switch (field) {
		case 'name':
			return validateName(value);
		case 'surname':
			return validateSurname(value);
		case 'position':
			return validatePosition(value);
		case 'email':
			return validateEmail(value);
		case 'phone':
			return validatePhone(value);
		case 'about':
			return validateAbout(value);
		case 'skills':
			return validateSkills(value);
		case 'interests':
			return validateInterests(value);
		case 'linkedInURL':
			return validateLinkedInURL(value);
		case 'instagramURL':
			return validateInstagramURL(value);
		case 'facebookURL':
			return validateFacebookURL(value);
		default:
			return 'Unknown field';
	}
};
