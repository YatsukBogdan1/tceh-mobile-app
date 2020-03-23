import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import store from 'store';
import * as SCREENS from 'constants/screens';
import ChangePasswordScreen from 'screens/profile/screens/change-password';
import EventsScreen from 'screens/profile/screens/events';
import GalleryModalScreen from 'components/gallery-modal';
import IntroScreen from 'screens/intro';
import LocationGalleryScreen from 'screens/location/screens/gallery';
import LocationScreen from 'screens/location';
import LocationsScreen from 'screens/locations';
import PersonalInfoScreen from 'screens/profile/screens/personal-info';
import ProfileScreen from 'screens/profile';
import SavedScreen from 'screens/profile/screens/saved';
import SettingsScreen from 'screens/profile/screens/settings';
import TemplateScreen from 'screens/template-screen';
import UiKitDemoScreen from 'screens/ui-kit-demo';
import WorkPlaceScreen from 'screens/work-place';
import WorkPlacesFilterScreen from 'screens/work-places/screens/work-places-filter';
import ModalContainer from 'components/modal-container';
import WorkPlacesScreen from 'screens/work-places';
import MeetingRoomsScreen from 'screens/meeting-rooms';
import MeetingRoomScreen from 'screens/meeting-room';
import MeetingRoomsFiltersScreen from 'screens/meeting-rooms/screens/meeting-rooms-filter';
import MeetingRoomsCalendarScreen from 'screens/meeting-rooms-calendar';

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
	Navigation.registerComponent(SCREENS.CHANGE_PASSWORD, () => wrapWithSafeAreaView(ChangePasswordScreen));
	Navigation.registerComponent(SCREENS.GALLERY_MODAL_SCREEN, () => GalleryModalScreen);
	Navigation.registerComponent(SCREENS.UI_KIT_DEMO_SCREEN, () => wrapWithSafeAreaView(UiKitDemoScreen));
	Navigation.registerComponentWithRedux(SCREENS.COMMON_MODAL, () => ModalContainer, Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.EVENTS_SCREEN, () => wrapWithSafeAreaView(EventsScreen), Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.INTRO_SCREEN, () => IntroScreen, Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.LOCATION_GALLERY_SCREEN, () => LocationGalleryScreen, Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.LOCATION_SCREEN, () => LocationScreen, Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.LOCATIONS_SCREEN, () => wrapWithSafeAreaView(LocationsScreen), Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.MEETING_ROOM, () => MeetingRoomScreen, Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.MEETING_ROOMS, () => wrapWithSafeAreaView(MeetingRoomsScreen), Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.MEETING_ROOMS_CALENDAR, () => MeetingRoomsCalendarScreen, Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.MEETING_ROOMS_FILTERS_SCREEN, () => MeetingRoomsFiltersScreen, Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.PERSONAL_INFO, () => wrapWithSafeAreaView(PersonalInfoScreen), Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.PROFILE_SCREEN, () => wrapWithSafeAreaView(ProfileScreen), Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.SAVED_SCREEN, () => wrapWithSafeAreaView(SavedScreen), Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.TEMPLATE_SCREEN, () => wrapWithSafeAreaView(TemplateScreen), Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.USER_SETTINGS_SCREEN, () => wrapWithSafeAreaView(SettingsScreen), Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.WORK_PLACE_SCREEN, () => WorkPlaceScreen, Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.WORK_PLACES_FILTERS_SCREEN, () => WorkPlacesFilterScreen, Provider, store);
	Navigation.registerComponentWithRedux(SCREENS.WORK_PLACES_SCREEN, () => WorkPlacesScreen, Provider, store);
};
