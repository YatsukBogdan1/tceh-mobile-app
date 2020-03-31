import {
	ON_SETTING_CHANGE,
	SET_USER_DATA,
} from 'actions/user';
import type { UserState } from 'flow/types';
import IMAGE_ASSETS from 'assets/images';
import { USER_ROLE } from '../constants/user';

const initialState: UserState = {
	role: USER_ROLE.ADMIN,
	about: 'About me',
	avatarURI: IMAGE_ASSETS.PROFILE_AVATAR_DEMO,
	birthday: '1996-10-08',
	companyId: null,
	email: 'yatsukbogdan@gmail.com',
	events: ['1', '2', '3', '4', '5', '6'],
	facebookURL: 'https://url',
	instagramURL: 'https://url',
	interests: 'My interests',
	isPrivate: false,
	linkedInURL: 'https://url',
	name: 'Bohdan',
	phone: '+380968246091',
	position: 'Senior Software Developer',
	skills: 'My Skills',
	surname: 'Yatsuk',
	company: {
		address: 'Parkova St.2',
		avatarURI: IMAGE_ASSETS.PROFILE_AVATAR_DEMO,
		backgroundImageURI: IMAGE_ASSETS.PROFILE_AVATAR_DEMO,
		description: 'Our company description',
		email: 'info@appsider.net',
		facebookURL: 'https://url',
		industryId: 'mobile_apps',
		instagramURL: 'https://url',
		isPrivate: false,
		label: 'Appsider',
		linkedInURL: 'https://url',
		locationId: 'park',
		office: 'A2',
		phone: '+380671111111',
		website: 'www.appsider.com',
	},
	settings: {
		benefitsNotificationsEnabled: false,
		language: 'ru',
		meetingRoomNotificationsEnabled: false,
		newCompanyNotificationEnabled: false,
		newPostNotificationsEnabled: false,
		socialNotificationsEnabled: false,
	},
};

const user = (state: UserState = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload.data,
			};
		case ON_SETTING_CHANGE:
			return {
				...state,
				settings: {
					...state.settings,
					[action.payload.field]: action.payload.value,
				},
			};
		default:
			return state;
	}
};

export default user;
