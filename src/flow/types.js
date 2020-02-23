export type RegistrationFormState = {
	values: {
		name: string,
		phone: string,
		password: string,
	},
	pristine: {
		name: boolean,
		phone: boolean,
		password: boolean,
	},
	errors: {
		name: ?string,
		phone: ?string,
		password: ?string,
	},
};

export type AuthorizationFormState = {
	values: {
		phone: string,
		password: string,
	},
	pristine: {
		phone: boolean,
		password: boolean,
	},
	errors: {
		phone: ?string,
		password: ?string,
	},
};

export type State = {
	registrationForm: RegistrationFormState,
	authorizationForm: AuthorizationFormState,
};
