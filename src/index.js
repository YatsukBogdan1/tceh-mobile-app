import { Navigation } from 'react-native-navigation';
import { TEMPLATE_SCREEN_NAME } from 'constants/screens';

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			component: {
				name: TEMPLATE_SCREEN_NAME,
			},
		},
	});
});
