import React from 'react';
import {
	FlatList,
	View,
} from 'react-native';
import styles from './styles';
import { Navigation } from 'react-native-navigation';
import * as SCREENS from 'constants/screens';
import UserBlock from './components/user-block';
import ProfileButton from './components/profile-button';
import Icon from 'tceh-vector-icons';

const buttons = [{
	screen: SCREENS.PROFILE_SCREEN,
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
			</View>
		);
	}
}

export default ProfileScreen;
