export const validateName = value => {
	if (value.length === 0) {
		return 'Введите имя';
	}
	return null;
};

export const validatePhone = value => {
	if (value.length === 0) {
		return 'Введите телефон';
	}
	return null;
};

export const validatePassword = value => {
	if (value.length === 0) {
		return 'Введите пароль';
	}
	return null;
};

export const validateEmail = value => {
	if (value.length === 0) {
		return 'Введите e-mail';
	}
	return null;
};
