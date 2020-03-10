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

type Props = {
	locations: Array<Object>,
	benefits: Array<Object>,
}

class LocationsScreen extends React.Component<Props> {
	navigateToLocation = id => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.LOCATION_SCREEN,
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

	render() {
		const {
			benefits,
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
				<Text style={styles.label}>Преимущества Tceh</Text>
				<View style={styles.benefitsListContainer}>
					<FlatList
						style={styles.benefitsList}
						showsHorizontalScrollIndicator={false}
						data={benefits}
						horizontal
						ItemSeparatorComponent={() => <View style={styles.benefitsListDivider}/>}
						keyExtractor={item => item.id}
						renderItem={this.renderBenefitItem}
					/>
				</View>
			</View>
		);
	}
}

export default LocationsScreen;
