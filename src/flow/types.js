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

export type Event = {
	duration: number,
	imageURI: string,
	label: string,
	timestamp: string,
	type: string,
};

export type EventsState = { [string]: Event };

export type UserSettings = {
	benefitsNotificationsEnabled: boolean,
	language: string,
	meetingRoomNotificationsEnabled: boolean,
	newCompanyNotificationEnabled: boolean,
	newPostNotificationsEnabled: boolean,
	socialNotificationsEnabled: boolean,
}

export type UserState = {
	role: string,
	about: string,
	avatarURI: string,
	birthday: string,
	companyId: ?string,
	email: string,
	facebookURL: string,
	instagramURL: string,
	interests: string,
	isPrivate: boolean,
	linkedInURL: string,
	name: string,
	phone: string,
	position: string,
	skills: string,
	surname: string,
	events: Array<string>,
	settings: UserSettings,
};

export type PersonalInfoFormState = {
	values: {
		about: string,
		birthday: string,
		companyId: ?string,
		email: string,
		facebookURL: string,
		instagramURL: string,
		interests: string,
		isPrivate: boolean,
		linkedInURL: string,
		name: string,
		phone: string,
		position: string,
		skills: string,
		surname: string,
	},
	pristine: {
		about: boolean,
		birthday: boolean,
		email: boolean,
		facebookURL: boolean,
		instagramURL: boolean,
		interests: boolean,
		linkedInURL: boolean,
		name: boolean,
		phone: boolean,
		position: boolean,
		skills: boolean,
		surname: boolean,
	},
	errors: {
		about: ?string,
		birthday: ?string,
		email: ?string,
		facebookURL: ?string,
		instagramURL: ?string,
		interests: ?string,
		linkedInURL: ?string,
		name: ?string,
		phone: ?string,
		position: ?string,
		skills: ?string,
		surname: ?string,
	},
}

export type State = {
	authorizationForm: AuthorizationFormState,
	events: EventsState,
	personalInfoForm: PersonalInfoFormState,
	registrationForm: RegistrationFormState,
	user: UserState,
};
