import React from 'react';
import {
	FlatList,
	KeyboardAvoidingView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import SearchInput from 'components/search-input';
import CompanyCard from '../../components/company-card';
import { INDUSTRIES } from '../../constants/company';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import TouchableBadge from '../../components/touchable-badge';
import {Navigation} from 'react-native-navigation';
import * as SCREENS from '../../constants/screens';

class CompaniesScreen extends React.Component {
	state = {
		searchValue: '',
		locationId: null,
	};

	onBackPress = () => Navigation.pop(this.props.componentId);

	onSearchValueChange = value => this.setState({ searchValue: value });

	setLocationId = id => this.setState({ locationId: id });

	get filteredCompanies () {
		let filteredCompanies = [...this.props.companies];
		if (this.state.locationId) {
			filteredCompanies = filteredCompanies.filter(company => company.locationId === this.state.locationId);
		}
		if (this.state.searchValue.length > 0) {
			filteredCompanies = filteredCompanies.filter(company => company.label.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1);
		}
		return filteredCompanies;
	}

	navigateToCompany = id => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.COMPANY_SCREEN,
				passProps: { id },
				options: {
					topBar: {
						visible: false,
					}
				}
			},
		});
	};

	renderCompanyItem = ({ item }) => (
		<CompanyCard
			backgroundImage={item.backgroundURI}
			description={item.description}
			industry={INDUSTRIES[item.industryId]}
			label={item.label}
			location={this.props.locationsObject[item.locationId].name}
			logoImage={item.avatarURI}
			office={item.office}
			onPress={() => this.navigateToCompany(item.id)}
			style={{ height: 350 }}
		/>
	);

	get locationsOptions () {
		return [
			{
				value: null,
				text: 'Все',
			},
			...this.props.locationsOptions,
		];
	}

	renderLocationBadge = ({ item }) => (
		<TouchableBadge
			style={styles.badge}
			active={this.state.locationId === item.value}
			label={item.text}
			onPress={() => this.setLocationId(item.value)}
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
							name='ios-arrow-round-back'
							size={30}
						/>
					</TouchableOpacity>
					<SearchInput
						onChange={this.onSearchValueChange}
						value={this.state.searchValue}
					/>
				</View>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					style={styles.badgesScrollView}
					contentContainerStyle={styles.badgesContainer}
				>
					{this.locationsOptions.map(option => (
						<TouchableBadge
							style={styles.badge}
							active={this.state.locationId === option.value}
							label={option.text}
							onPress={() => this.setLocationId(option.value)}
						/>
					))}
				</ScrollView>
				<FlatList
					contentContainerStyle={styles.listContentContainer}
					data={this.filteredCompanies}
					ItemSeparatorComponent={() => <View style={styles.listSeparator}/>}
					keyExtractor={item => item.id}
					ListEmptyComponent={() => <Text style={styles.noCompaniesText}>К сожалению нету компаний удовлетворяющих ваши критерии</Text>}
					renderItem={this.renderCompanyItem}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		);
	}
}

export default CompaniesScreen;
