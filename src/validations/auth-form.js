const validateName = value => {
	if (value.length === 0) {
		return 'Введите имя';
	}
	return null;
};

const validatePhone = value => {
	if (value.length === 0) {
		return 'Введите телефон';
	}
	return null;
};

const validatePassword = value => {
	if (value.length === 0) {
		return 'Введите пароль';
	}
	return null;
};

export const validateField = (field, value) => {
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
