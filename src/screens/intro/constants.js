import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const ANIMATION_VALUES = {
	AUTHORIZATION_CONTAINER: {
		HEIGHT: 1500,
		VISIBLE: {
			KEYBOARD_HIDDEN_TOP: 170,
			KEYBOARD_VISIBLE_TOP: 80,
		},
		HIDDEN: {
			TOP: height,
		},
	},
	LOGO: {
		INTRO_PAGE: {
			TOP: height * 0.25,
			HEIGHT: 100,
		},
		AUTH_PAGE: {
			HEIGHT: 60,
			KEYBOARD_HIDDEN_TOP: 60,
			KEYBOARD_VISIBLE_TOP: -200,
		},
	},
	AUTH_BUTTONS_CONTAINER: {
		HEIGHT: height * 0.3,
		VISIBLE: {
			BOTTOM: 0,
			OPACITY: 1,
		},
		HIDDEN: {
			BOTTOM: height * -0.3,
			OPACITY: 1,
		},
	},
};
