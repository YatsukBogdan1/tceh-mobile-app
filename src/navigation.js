import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import store from 'store';
import * as SCREENS from 'constants/screens';
import TemplateScreen from 'screens/template-screen';
import UiKitDemoScreen from 'screens/ui-kit-demo';
import IntroScreen from 'screens/intro';

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
};
