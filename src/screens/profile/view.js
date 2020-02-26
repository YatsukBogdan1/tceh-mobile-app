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

type Props = {
	initFormValues: (values: Array) => void,
	user: UserState,
}

const buttons = [{
	screen: SCREENS.PERSONAL_INFO,
	label: 'Личные данные',
	icon: 'personal-data',
// }, {
// 	screen: SCREENS.PROFILE_SCREEN,
// 	label: 'Мои события',
// 	icon: 'calendar',
// }, {
// 	screen: SCREENS.PROFILE_SCREEN,
// 	label: 'Платежная информация',
// 	icon: 'wallet',
// }, {
// 	screen: SCREENS.PROFILE_SCREEN,
// 	label: 'Сохраненное',
// 	icon: 'heart',
// }, {
// 	screen: SCREENS.PROFILE_SCREEN,
// 	label: 'Привилегии',
// 	icon: 'flyers',
// }, {
// 	screen: SCREENS.PROFILE_SCREEN,
// 	label: 'Настройки',
// 	icon: 'gear',
}];

class ProfileScreen extends React.Component<Props> {
	pushScreen = screen => {
		this.props.initFormValues(getPersonalInfoFormValuesFromUserState(this.props.user));
		Navigation.push(this.props.componentId, {
			component: {
				name: screen,
			},
		});
	};

	renderItem = ({ item }) => (
		<ProfileButton
			icon={item.icon}
			label={item.label}
			onPress={() => this.pushScreen(item.screen)}
		/>
	);

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
					keyExtractor={item => item.icon}
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
