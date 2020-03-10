import React from 'react';
import {
	FlatList,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import type { Event } from 'flow/types';
import { Navigation } from 'react-native-navigation';
import TouchableCard from 'components/touchable-card';
import TouchableBadge from 'components/touchable-badge';
import IMAGE_ASSETS from 'assets/images';
import {
	LOCATIONS,
	MEMBERS,
	PUBLICATIONS,
} from './constants';

type Props = {
	events: Array<Event>,
}

class SavedScreen extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			filter: LOCATIONS,
			data: [{
				id: '1',
				description: 'Ланчи в Razzle Dazzle',
				imageURI: IMAGE_ASSETS.SAVED_1,
				label: 'Tceh Park',
				time: '27.01.2020',
				type: LOCATIONS,
			},{
				id: '2',
				description: 'Tceh Club day!',
				imageURI: IMAGE_ASSETS.SAVED_2,
				label: 'Tceh Park',
				time: '27.01.2020',
				type: LOCATIONS,
			},{
				id: '3',
				description: 'Новый мембер - компания Appsider!',
				imageURI: IMAGE_ASSETS.SAVED_3,
				label: 'Tceh Park',
				time: '27.01.2020',
				type: LOCATIONS,
			},{
				id: '5',
				description: 'Старший юрист',
				imageURI: IMAGE_ASSETS.SAVED_5,
				label: 'Катерина Ярмош',
				time: 'Evris',
				type: MEMBERS,
			},{
				id: '6',
				description: 'Мобильная разработка',
				imageURI: IMAGE_ASSETS.SAVED_4,
				label: 'Appsider',
				time: 'Tceh Park',
				type: 'LOCATIONS',
			}],
		};
	}

	get noSavedText () {
		const commonString = 'К сожалению у вас нету сохраненных ';
		switch (this.state.filter) {
			case LOCATIONS:
				return `${commonString} локаций`;
			case MEMBERS:
				return `${commonString} мемберов`;
			case PUBLICATIONS:
				return `${commonString} публикаций`;
			default:
				return `${commonString} локаций`;
		}
	}

	get filteredSavedData () {
		return this.state.data.filter(item => item.type === this.state.filter);
	}

	setCurrentFilter = filter => this.setState({ filter });

	onBackPress = () => Navigation.pop(this.props.componentId);

	renderSavedItem = ({ item }) => (
		<TouchableCard
			description={item.description}
			imageURI={item.imageURI}
			label={item.label}
			onPress={() => false}
			type={item.time}
		/>
	);

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.backButton}
					onPress={this.onBackPress}
				>
					<IonIcon
						name='ios-arrow-round-back'
						size={30}
					/>
				</TouchableOpacity>
				<Text style={styles.label}>Сохраненное</Text>
				<View style={styles.filterButtonsContainer}>
					<TouchableBadge
						active={this.state.filter === LOCATIONS}
						label='Локации'
						onPress={() => this.setCurrentFilter(LOCATIONS)}
					/>
					<TouchableBadge
						active={this.state.filter === MEMBERS}
						label='Мемберы'
						onPress={() => this.setCurrentFilter(MEMBERS)}
					/>
					<TouchableBadge
						active={this.state.filter === PUBLICATIONS}
						label='Публикации'
						onPress={() => this.setCurrentFilter(PUBLICATIONS)}
					/>
				</View>
				<FlatList
					keyExtractor={item => item.id}
					ListEmptyComponent={<Text style={styles.noSavedText}>{this.noSavedText}</Text>}
					style={styles.scrollView}
					ItemSeparatorComponent={() => <View style={styles.scrollDivider}/>}
					data={this.filteredSavedData}
					renderItem={this.renderSavedItem}
				/>
			</View>
		);
	}
}

export default SavedScreen;
