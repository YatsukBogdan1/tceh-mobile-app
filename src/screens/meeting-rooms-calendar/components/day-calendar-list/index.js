import React from 'react';
import {
	Text,
	View,
	FlatList,
} from 'react-native';
import styles from './styles';
import type { Event } from 'flow/types';
import { Navigation } from 'react-native-navigation';
import DayCalendarListItem from './item';

type Props = {
	events: Array<Event>,
}

class DayCalendarList extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			bookings: [{
				time: '00:00',
				data: null,
			},{
				time: '01:00',
				data: null,
			},{
				time: '02:00',
				data: null,
			},{
				time: '03:00',
				data: null,
			},{
				time: '04:00',
				data: null,
			},{
				time: '05:00',
				data: null,
			},{
				time: '06:00',
				data: null,
			},{
				time: '07:00',
				data: null,
			},{
				time: '08:00',
				data: null,
			},{
				time: '09:00',
				data: {
					name: 'Виталий Марчук',
					company: 'Evris',
				},
			},{
				time: '10:00',
				data: null,
			},{
				time: '11:00',
				data: null,
			},{
				time: '12:00',
				data: null,
			},{
				time: '13:00',
				data: {
					name: 'Яцук Богдан',
					company: 'Appsider',
				},
			},{
				time: '14:00',
				data: null,
			},{
				time: '15:00',
				data: null,
			},{
				time: '16:00',
				data: null,
			},{
				time: '17:00',
				data: {
					name: 'Наталия Ведмидь',
					company: 'Appsider',
				},
			},{
				time: '18:00',
				data: null,
			},{
				time: '19:00',
				data: null,
			},{
				time: '20:00',
				data: null,
			},{
				time: '21:00',
				data: null,
			},{
				time: '22:00',
				data: null,
			},{
				time: '23:00',
				data: null,
			}],
		};
	}

	onBackPress = () => Navigation.pop(this.props.componentId);

	renderCalendarItem = ({ item }) => (
		<DayCalendarListItem
			time={item.time}
			data={item.data}
		/>
	);

	render() {
		return (
			<FlatList
				ListEmptyComponent={<Text style={styles.noEventsText}>К сожалению у вас нету событий в указаную дату</Text>}
				style={styles.scrollView}
				contentContainerStyle={{ padding: 10 }}
				keyExtractor={item => item.timestamp}
				ItemSeparatorComponent={() => <View style={styles.scrollDivider}/>}
				data={this.state.bookings}
				renderItem={this.renderCalendarItem}
			/>
		);
	}
}

export default DayCalendarList;
