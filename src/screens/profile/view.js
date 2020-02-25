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

const buttons = [{
	screen: SCREENS.PERSONAL_INFO,
	label: 'Личные данные',
	icon: 'personal-data',
}, {
	screen: SCREENS.PROFILE_SCREEN,
	label: 'Мои события',
	icon: 'calendar',
}, {
	screen: SCREENS.PROFILE_SCREEN,
	label: 'Платежная информация',
	icon: 'wallet',
}, {
	screen: SCREENS.PROFILE_SCREEN,
	label: 'Сохраненное',
	icon: 'heart',
}, {
	screen: SCREENS.PROFILE_SCREEN,
	label: 'Привилегии',
	icon: 'flyers',
}, {
	screen: SCREENS.PROFILE_SCREEN,
	label: 'Настройки',
	icon: 'gear',
}];

class ProfileScreen extends React.Component {
	pushScreen = screen => {
		console.log(screen);
		console.log(this.props);
		Navigation.push(this.props.componentId, {
			component: {
				name: screen,
			},
		}).then(res => console.log(res));
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
		return (
			<View style={styles.container}>
				<UserBlock
					avatarURI='some-uri'
					name='Антонина Ковальчук'
					position='Brand Manager'
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