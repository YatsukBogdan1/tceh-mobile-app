import {ON_USER_SETTING_CHANGE, SET_USER_DATA} from 'actions/user';
import {AUTHORIZATION_REQUEST_SUCCESS} from 'actions/authorization';
import {UserState} from 'interfaces';
import IMAGE_ASSETS from 'assets/images';
import {USER_ROLE} from '../constants/user';
import {UserReducerAction} from 'actions/interfaces';

const initialState: UserState = {
	about: 'About me',
	avatarURI: IMAGE_ASSETS.PROFILE_AVATAR_DEMO,
	birthday: '1996-10-08',
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
	role: USER_ROLE.ADMIN,
	skills: 'My Skills',
	surname: 'Yatsuk',
	settings: {
		benefitsNotificationsEnabled: false,
		language: 'ru',
		meetingRoomNotificationsEnabled: false,
		newCompanyNotificationEnabled: false,
		newPostNotificationsEnabled: false,
		socialNotificationsEnabled: false,
	},
};

type UserReducer = (state: UserState, action: UserReducerAction) => UserState;

const user: UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTHORIZATION_REQUEST_SUCCESS: {
			const { data } = action.payload;
			return {
				...state,
				about: data.profile.about,
				avatarURI: data.photo,
				birthday: data.profile.birthday,
				email: data.email,
				facebookURL: data.profile.facebook,
				instagramURL: data.profile.instagram,
				interests: data.profile.interests,
				isPrivate: data.profile.is_private,
				linkedInURL: data.profile.linkedin,
				name: data.first_name,
				phone: data.phone,
				skills: data.profile.skills,
				surname: data.last_name,
				settings: {
					benefitsNotificationsEnabled: data.settings.promotions,
					language: data.settings.language,
					meetingRoomNotificationsEnabled: data.settings.reservation,
					newCompanyNotificationEnabled: data.settings.company,
					newPostNotificationsEnabled: data.settings.post,
					socialNotificationsEnabled: data.settings.comment,
				},
			};
		}
		case SET_USER_DATA:
			return {
				...state,
				...action.payload.data,
			};
		case ON_USER_SETTING_CHANGE:
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
