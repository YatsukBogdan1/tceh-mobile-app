// @flow
import React from 'react';
import {
	Text,
	View,
	FlatList,
} from 'react-native';
import styles from './styles';
import { Navigation } from 'react-native-navigation';
import LocationCard from './components/location-card';
import BenefitCard from './components/benefit-card';
import * as SCREENS from '../../constants/screens';
import {COLORS} from '../../theme';
import {USER_ROLE} from '../../constants/user';
import CompanyCard from '../../components/company-card';
import {INDUSTRIES} from '../../constants/company';
import LinkButton from '../../components/link-button';

type Props = {
	benefits: Array<Object>,
	companies: Array<Object>,
	locations: Array<Object>,
}

class LocationsScreen extends React.Component<Props> {
	navigateToLocation = id => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.LOCATION_SCREEN,
				passProps: { id },
				options: {
					bottomTabs: {
						visible: false,
					},
					topBar: {
						visible: false,
					}
				}
			},
		});
	};

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

	navigateToCompanies = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.COMPANIES_SCREEN,
				options: {
					topBar: {
						visible: false,
					}
				}
			},
		});
	};

	renderLocationItem = ({ item }) => (
		<LocationCard
			name={item.name}
			imageURI={item.imageURI}
			onPress={() => this.navigateToLocation(item.id)}
		/>
	);

	renderBenefitItem = ({ item }) => (
		<BenefitCard
			text={item.text}
			imageURI={item.imageURI}
		/>
	);

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
			style={{ width: 300 }}
		/>
	);

	renderUserRoleContent = () => {
		if (this.props.userRole === USER_ROLE.GUEST) {
			return (
				<React.Fragment>
					<Text style={styles.label}>Преимущества Tceh</Text>
					<View style={styles.benefitsListContainer}>
						<FlatList
							style={styles.benefitsList}
							showsHorizontalScrollIndicator={false}
							data={this.props.benefits}
							horizontal
							ItemSeparatorComponent={() => <View style={styles.benefitsListDivider}/>}
							keyExtractor={item => item.id}
							renderItem={this.renderBenefitItem}
						/>
					</View>
				</React.Fragment>
			);
		}
		return (
			<React.Fragment>
				<Text style={styles.label}>Наши мемберы</Text>
				<View style={styles.benefitsListContainer}>
					<FlatList
						style={styles.benefitsList}
						showsHorizontalScrollIndicator={false}
						data={this.props.companies}
						horizontal
						ItemSeparatorComponent={() => <View style={styles.benefitsListDivider}/>}
						keyExtractor={item => item.id}
						renderItem={this.renderCompanyItem}
					/>
				</View>
				<LinkButton
					label='Смотреть все'
					onPress={this.navigateToCompanies}
					color={COLORS.MAIN_ORANGE_COLOR}
				/>
			</React.Fragment>
		);
	};

	render() {
		const {
			locations,
		} = this.props;

		return (
			<View style={styles.container}>
				<Text style={styles.label}>Локации</Text>
				<View style={styles.locationsListContainer}>
					<FlatList
						style={styles.locationsList}
						showsHorizontalScrollIndicator={false}
						data={locations}
						horizontal
						ItemSeparatorComponent={() => <View style={styles.locationsListDivider}/>}
						keyExtractor={item => item.id}
						renderItem={this.renderLocationItem}
					/>
				</View>
				{this.renderUserRoleContent()}
			</View>
		);
	}
}

export default LocationsScreen;
