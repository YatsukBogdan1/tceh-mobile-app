import { Navigation } from 'react-native-navigation';
import * as SCREENS from 'constants/screens';
import { registerScreens } from 'navigation';
import API from 'api';

API.init();

export const start = () => {
	registerScreens();
	Navigation.events().registerAppLaunchedListener(() => {
		Navigation.setRoot({
			root: {
				component: {
					name: SCREENS.INTRO_SCREEN,
				},
			},
		});
	});
};
