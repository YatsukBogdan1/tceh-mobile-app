import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import store from 'store';
import * as SCREENS from 'constants/screens';
import TemplateScreen from 'screens/template-screen';
import UiKitDemoScreen from 'screens/ui-kit-demo';
import IntroScreen from 'screens/intro';
import ProfileScreen from 'screens/profile';
import PersonalInfoScreen from 'screens/profile/screens/personal-info';
import EventsScreen from 'screens/profile/screens/events';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

const wrapWithSafeAreaView = Component => props => (
	<SafeAreaView style={styles.container}>
		<Component {...props} />
	</SafeAreaView>
);

export const registerScreens = () => {
	Navigation.registerComponentWithRedux(SCREENS.TEMPLATE_SCREEN, () => wrapWithSafeAreaView(TemplateScreen), Provider, store);
	Navigation.registerComponent(SCREENS.UI_KIT_DEMO_SCREEN, () => wrapWithSafeAreaView(UiKitDemoScreen));
	Navigation.registerComponentWithRedux(SCREENS.INTRO_SCREEN, () => IntroScreen, Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.PROFILE_SCREEN, () => wrapWithSafeAreaView(ProfileScreen), Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.PERSONAL_INFO, () => wrapWithSafeAreaView(PersonalInfoScreen), Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.EVENTS_SCREEN, () => wrapWithSafeAreaView(EventsScreen), Provider, store);
};
