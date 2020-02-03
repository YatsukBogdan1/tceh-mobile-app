import { Navigation } from 'react-native-navigation';
import { TEMPLATE_SCREEN_NAME } from 'constants/screens';
import { registerScreens } from 'navigation';

export const start = () => {
	registerScreens();
	Navigation.events().registerAppLaunchedListener(() => {
		Navigation.setRoot({
			root: {
				component: {
					name: TEMPLATE_SCREEN_NAME,
				},
			},
		});
	});
};
