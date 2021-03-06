import React from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	FlatList,
} from 'react-native';
import styles from './styles';
import Calendar from 'components/calendar';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import type { Event } from 'flow/types';
import { Navigation } from 'react-native-navigation';
import { getTimeString } from './utils';
import { EVENT_TYPE_LABELS } from 'constants/events';
import TouchableCard from 'components/touchable-card';

type Props = {
	events: Array<Event>,
}

class EventsScreen extends React.Component<Props> {
	constructor(props) {
		super(props);

		const maxDate = new Date(props.events[props.events.length - 1].timestamp);
		maxDate.setDate(maxDate.getDate() + 7);
		const minDate = new Date(props.events[0].timestamp);
		minDate.setDate(minDate.getDate() - 7);
		const date = new Date();
		date.setHours(0,0,0,0);

		this.state = {
			maxDate: maxDate.toISOString(),
			minDate: minDate.toISOString(),
			date: date.toISOString(),
		};
	}

	setDate = date => this.setState({ date });

	get events () {
		const today = new Date(this.state.date);
		const tomorrow = new Date(this.state.date);
		tomorrow.setDate(tomorrow.getDate() + 1);

		return this.props.events.filter(event => {
			const date = new Date(event.timestamp);
			return date > today && date < tomorrow;
		});
	}

	onBackPress = () => Navigation.pop(this.props.componentId);

	renderEventItem = ({ item }) => (
		<TouchableCard
			imageURI={item.imageURI}
			label={item.label}
			onPress={() => false}
			description={getTimeString(item.timestamp, item.duration)}
			type={EVENT_TYPE_LABELS[item.type]}
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
						name='ios-arrow-back'
						size={30}
					/>
				</TouchableOpacity>
				<Text style={styles.label}>Мои события</Text>
				<Calendar
					date={this.state.date}
					maxDate={this.state.maxDate}
					minDate={this.state.minDate}
					onDatePress={this.setDate}
				/>
				<View style={styles.divider} />
				<FlatList
					ListEmptyComponent={<Text style={styles.noEventsText}>К сожалению у вас нету событий в указаную дату</Text>}
					style={styles.scrollView}
					keyExtractor={item => item.timestamp}
					ItemSeparatorComponent={() => <View style={styles.scrollDivider}/>}
					data={this.events}
					renderItem={this.renderEventItem}
				/>
			</View>
		);
	}
}

export default EventsScreen;
