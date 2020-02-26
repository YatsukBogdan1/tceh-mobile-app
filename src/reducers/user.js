import { SET_USER_DATA } from 'actions/user';
import type { UserState } from 'flow/types';
import IMAGE_ASSETS from 'assets/images';

const initialState: UserState = {
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
};

const user = (state: UserState = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload.data,
			};
		default:
			return state;
	}
};

export default user;
