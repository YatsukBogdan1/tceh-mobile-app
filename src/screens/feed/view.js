import React from 'react';
import {
	FlatList,
	KeyboardAvoidingView,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import SearchInput from 'components/search-input';
import TouchableBadge from 'components/touchable-badge';
import {
	TAB_ALL,
	TABS,
} from './constants';
import IonIcons from 'react-native-vector-icons/dist/Ionicons';
import { COLORS } from 'theme';

class Feed extends React.Component {
	state = {
		searchInputValue: '',
		activeTabId: TAB_ALL,
	};

	onSearchInputChange = value => this.setState({ searchInputValue: value });

	onTabPress = id => this.setState({ activeTabId: id });

	renderTouchableBadge = ({ item }) => (
		<TouchableBadge
			style={{ paddingHorizontal: 15 }}
			onPress={() => this.onTabPress(item.id)}
			label={item.label}
			active={this.state.activeTabId === item.value}
		/>
	);

	render() {
		return (
			<KeyboardAvoidingView
				behavior='padding'
				style={styles.container}
			>
				<View style={styles.headerContainer}>
					<SearchInput
						value={this.state.searchInputValue}
						onChange={this.onSearchInputChange}
					/>
					<TouchableOpacity style={styles.addPostButtonContainer}>
						<IonIcons
							name='ios-add'
							color={COLORS.WHITE}
							size={25}
						/>
					</TouchableOpacity>
				</View>
				<FlatList
					contentContainerStyle={{
						alignItems: 'center',
						height: 70,
						paddingHorizontal: 15,
					}}
					data={TABS}
					horizontal
					renderItem={this.renderTouchableBadge}
					showsHorizontalScrollIndicator={false}
				/>
			</KeyboardAvoidingView>
		);
	}
}

export default Feed;
