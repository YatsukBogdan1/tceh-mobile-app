// @flow

import React from 'react';
import {
	FlatList,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import { Navigation } from 'react-native-navigation';
import * as SCREENS from 'constants/screens';
import UserBlock from './components/user-block';
import ProfileButton from './components/profile-button';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { COLORS } from 'theme';
import type { UserState } from 'flow/types';
import { getPersonalInfoFormValuesFromUserState } from 'utils';
import {USER_ROLE} from '../../constants/user';

type Props = {
	initFormValues: (values: Array) => void,
	user: UserState,
}

const buttons = [{
	id: 'personal_data',
	screen: SCREENS.PERSONAL_INFO,
	label: 'Личные данные',
	icon: 'personal-data',
}, {
	id: 'my_events',
	screen: SCREENS.EVENTS_SCREEN,
	label: 'Мои события',
	icon: 'calendar',
// }, {
// 	screen: SCREENS.PROFILE_SCREEN,
// 	label: 'Платежная информация',
// 	icon: 'wallet',
}, {
	id: 'saved',
	screen: SCREENS.SAVED_SCREEN,
	label: 'Сохраненное',
	icon: 'heart',
}, {
	id: 'my_company',
	screen: SCREENS.COMPANY_FORM_SCREEN,
	label: 'Моя компания',
	icon: 'bag',
}, {
// 	screen: SCREENS.PROFILE_SCREEN,
// 	label: 'Привилегии',
// 	icon: 'flyers',
// }, {
	id: 'settings',
	screen: SCREENS.USER_SETTINGS_SCREEN,
	label: 'Настройки',
	icon: 'gear',
}];

class ProfileScreen extends React.Component<Props> {
	pushScreen = screen => {
		this.props.initFormValues(getPersonalInfoFormValuesFromUserState(this.props.user));
		Navigation.push(this.props.componentId, {
			component: {
				name: screen,
				options: {
					topBar: {
						visible: false,
					},
				},
			},
		});
	};

	renderItem = ({ item }) => {
		const { role } = this.props.user;
		if (item.id === 'my_company' && (role !== USER_ROLE.MANAGER && role !== USER_ROLE.ADMIN)) {
			return;
		}
		return (
			<ProfileButton
				icon={item.icon}
				label={item.label}
				onPress={() => this.pushScreen(item.screen)}
			/>
		);
	};

	onLogoutPress = () => {
		//
	};

	render() {
		const { user } = this.props;

		return (
			<View style={styles.container}>
				<UserBlock
					avatarURI={user.avatarURI}
					name={`${user.name} ${user.surname}`}
					position={user.position}
				/>
				<FlatList
					data={buttons}
					ItemSeparatorComponent={() => <View style={styles.buttonsListDivider}/>}
					keyExtractor={item => item.id}
					renderItem={this.renderItem}
					style={styles.list}
				/>
				<TouchableOpacity
					onPress={this.onLogoutPress}
					style={styles.logoutButton}
				>
					<Icon
						color={COLORS.DARK_GREY}
						name='ios-log-out'
						size={25}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}

export default ProfileScreen;
