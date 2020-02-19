import { Navigation } from 'react-native-navigation';
import { UI_KIT_DEMO_SCREEN } from 'constants/screens';
import { registerScreens } from 'navigation';
import API from 'api';

API.init();

export const start = () => {
	registerScreens();
	Navigation.events().registerAppLaunchedListener(() => {
		Navigation.setRoot({
			root: {
				component: {
					name: UI_KIT_DEMO_SCREEN,
				},
			},
		});
	});
};
