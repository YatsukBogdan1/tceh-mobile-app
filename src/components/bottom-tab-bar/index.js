// @flow
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import BottomTabBarItem from './item';

type Props = {};

const tabs = [{
	icon: 'people-icon',
	id: 'tceh',
	label: 'Tceh',
},{
	icon: 'house-icon',
	id: 'locations',
	label: 'Локации',
},{
	icon: 'tablet-icon',
	id: 'booking',
	label: 'Бронь',
},{
	icon: 'chat-icon',
	id: 'chats',
	label: 'Чат',
},{
	icon: 'person-icon',
	id: 'profile',
	label: 'Профиль',
}];

class BottomTabBar extends React.Component<Props> {
	state = {
		selectedTabId: tabs[0].id,
		badges: [null, null, null, null, null],
	};

	createRandomNotification = () => {
		const badgeIndex = Math.floor(Math.random() * 4);
		const badgeNumber = String(Math.floor(Math.random() * 100));

		this.setState({
			badges: [
				...this.state.badges.slice(0, badgeIndex),
				badgeNumber,
				...this.state.badges.slice(badgeIndex + 1),
			],
		});
	};

	clearNotification = index => this.setState({
		badges: [
			...this.state.badges.slice(0, index),
			null,
			...this.state.badges.slice(index + 1),
		],
	});

	onTabPress = (id, index) => {
		this.createRandomNotification();
		this.setState({ selectedTabId: id }, () => this.clearNotification(index));
	};

	render() {
		return (
			<View style={styles.container}>
				{tabs.map((tab, index) => (
					<BottomTabBarItem
						key={tab.id}
						badge={this.state.badges[index]}
						icon={tab.icon}
						label={tab.label}
						selected={tab.id === this.state.selectedTabId}
						onPress={() => this.onTabPress(tab.id, index)}
					/>
				))}
			</View>
		);
	}
}

export default BottomTabBar;
