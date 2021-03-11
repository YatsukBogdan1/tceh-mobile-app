import React from 'react';
import {
	FlatList,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import SearchInput from 'components/search-input';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import { Navigation } from 'react-native-navigation';
import * as SCREENS from '../../constants/screens';
import UserItem from './components/user-item';

class StaffScreen extends React.Component {
	state = {
		searchValue: '',
	};

	onBackPress = () => Navigation.pop(this.props.componentId);

	onSearchValueChange = value => this.setState({ searchValue: value });

	navigateToUser = id => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.USER_SCREEN,
				passProps: { id },
				options: {
					topBar: {
						visible: false,
					},
					bottomTabs: {
						visible: false,
					},
				},
			},
		});
	};

	get filteredStaff () {
		if (this.state.searchValue.length > 0) {
			return this.props.staff.filter(user => user.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1);
		}
		return this.props.staff;
	}

	renderUser = ({ item }) => (
		<UserItem
			avatar={item.avatarURI}
			position={item.position}
			name={item.name}
			onPress={() => this.navigateToUser(item.id)}
			surname={item.surname}
		/>
	);

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity
						style={styles.backButton}
						onPress={this.onBackPress}
					>
						<IonIcon
							name='ios-arrow-back'
							size={30}
						/>
					</TouchableOpacity>
					<SearchInput
						onChange={this.onSearchValueChange}
						value={this.state.searchValue}
					/>
				</View>
				<Text style={styles.label}>Команда {this.props.companyName}</Text>
				<FlatList
					contentContainerStyle={styles.listContentContainer}
					data={this.filteredStaff}
					ItemSeparatorComponent={() => <View style={styles.listSeparator}/>}
					keyExtractor={item => item.id}
					ListEmptyComponent={() => <Text style={styles.noCompaniesText}>К сожалению нету сотрудников по вашему запросу</Text>}
					renderItem={this.renderUser}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		);
	}
}

export default StaffScreen;
