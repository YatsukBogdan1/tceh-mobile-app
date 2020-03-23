import { Navigation } from 'react-native-navigation';
import * as SCREENS from 'constants/screens';
import { registerScreens } from 'navigation';
import API from 'api';
import moment from 'moment';
require('moment/min/locales.min');

moment.locale('ru');
console.disableYellowBox = true;

API.init();

export const start = () => {
	registerScreens();
	Navigation.events().registerAppLaunchedListener(() => {
		Navigation.setRoot({
			root: {
				stack: {
					children: [{
						component: {
							name: SCREENS.INTRO_SCREEN,
							options: {
								topBar: {
									visible: false,
								}
							}
						},
					}],
				},
			},
		});
	});
};
