import { AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from 'navigation';
import { API } from 'api';
import moment from 'moment';
import {
	getTestLayoutWithScreen,
	INTRO_SCREEN_LAYOUT,
	TABS_LAYOUT,
} from 'navigation/layouts';
import { FEED_SCREEN } from 'constants/screens';

require('moment/min/locales.min');

moment.locale('ru');
console.disableYellowBox = true;
global.XMLHttpRequest = global.originalXMLHttpRequest
	? global.originalXMLHttpRequest
	: global.XMLHttpRequest;
global.FormData = global.originalFormData
	? global.originalFormData
	: global.FormData;

API.init();

export const start = () => {
	registerScreens();
	Navigation.events().registerAppLaunchedListener(async () => {
		const token = await AsyncStorage.getItem('access_token');
		if (token) {
			API.setToken(token);
			Navigation.setRoot(TABS_LAYOUT);
			return;
		}
		Navigation.setRoot(INTRO_SCREEN_LAYOUT);
		// Navigation.setRoot(getTestLayoutWithScreen(FEED_SCREEN));
	});
};
