import React from 'react';
import {
	FlatList,
	Text,
	TouchableOpacity,
	SafeAreaView,
	View,
} from 'react-native';
import styles from './styles';
import Card from './components/card';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import { Navigation } from 'react-native-navigation';
import TouchableBadge from '../../components/touchable-badge';
import { WORK_PLACES_CATEGORIES } from '../../constants/work-places';
import Footer from '../../components/footer';
import * as SCREENS from 'constants/screens';

class WorkPlaces extends React.Component {
	onBackPress = () => Navigation.pop(this.props.componentId);

	onOptionsPress = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.WORK_PLACES_FILTERS_SCREEN,
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

	get filteredWorkplaces () {
		const { filters } = this.props;
		const workplacesByType = this.props.workplaces.filter(workplace => workplace.type === filters.type);
		if (filters.type === WORK_PLACES_CATEGORIES.OFFICE) {
			return workplacesByType.filter(workplace =>
				workplace.price < filters.price &&
				workplace.capacity < filters.capacity &&
				workplace.windows === filters.windows
			);
		}
		return workplacesByType.filter(workplace =>
			workplace.price < filters.price &&
			workplace.windows === filters.windows
		);
	}

	onWorkplacePress = id => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.WORK_PLACE_SCREEN,
				passProps: {
					id,
				},
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

	renderWorkplaceItem = ({ item }) => (
		<Card
			onPress={() => this.onWorkplacePress(item.id)}
			capacity={item.capacity}
			imageURI={item.imageURI}
			label={item.label}
			liked={false}
			onLikePress={() => false}
			price={item.price}
			square={item.square}
			subtype={item.subtype}
			type={item.type}
		/>
	);

	renderListDivider = () => <View style={styles.listDivider}/>;

	get emptyListText () {
		return `К сожалению, нет свободных ${this.props.filters.type === WORK_PLACES_CATEGORIES.OFFICE ? 'офисов' : 'рабочих мест'}, соответствующих Вашему запросу`;
	}

	render() {
		return (
			<View style={styles.container}>
				<SafeAreaView style={styles.safeAreaContainer}>
					<View style={styles.headerContainer}>
						<TouchableOpacity
							style={styles.button}
							onPress={this.onBackPress}
						>
							<IonIcon
								name='ios-arrow-back'
								size={30}
							/>
						</TouchableOpacity>
						<Text style={styles.label}>{this.props.label}</Text>
						<TouchableOpacity
							style={styles.button}
							onPress={this.onOptionsPress}
						>
							<IonIcon
								name='ios-options'
								size={25}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.filterButtonsContainer}>
						<TouchableBadge
							active={this.props.filters.type === WORK_PLACES_CATEGORIES.OFFICE}
							label='Офисы'
							onPress={() => this.props.setFilter('type', WORK_PLACES_CATEGORIES.OFFICE)}
						/>
						<TouchableBadge
							active={this.props.filters.type === WORK_PLACES_CATEGORIES.SINGLE_WORK_PLACE}
							label='Рабочие места'
							onPress={() => this.props.setFilter('type', WORK_PLACES_CATEGORIES.SINGLE_WORK_PLACE)}
						/>
					</View>
					<FlatList
						ItemSeparatorComponent={this.renderListDivider}
						contentContainerStyle={styles.listContentContainer}
						style={styles.listContainer}
						ListEmptyComponent={<Text style={styles.emptyListText}>{this.emptyListText}</Text>}
						data={this.filteredWorkplaces}
						renderItem={this.renderWorkplaceItem}
					/>
				</SafeAreaView>
				<Footer
					buttonLabel='Заявка на тур'
					onButtonPress={() => false}
					linkLabel='Связаться с нами'
					onLinkPress={() => false}
				/>
			</View>
		);
	}
}

export default WorkPlaces;
