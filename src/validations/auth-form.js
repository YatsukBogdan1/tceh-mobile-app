import {
	validateName,
	validatePassword,
	validatePhone,
} from './common';

export const validateAuthFormField = (field, value) => {
	switch (field) {
		case 'name':
			return validateName(value);
		case 'phone':
			return validatePhone(value);
		case 'password':
			return validatePassword(value);
		default:
			return 'Unknown field';
	}
};
