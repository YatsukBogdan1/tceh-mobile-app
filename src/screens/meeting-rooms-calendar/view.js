import React from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	SafeAreaView,
} from 'react-native';
import styles from './styles';
import Calendar from 'components/calendar';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import type { Event } from 'flow/types';
import { Navigation } from 'react-native-navigation';
import DayCalendarList from './components/day-calendar-list';
import Footer from '../../components/footer';
import * as SCREENS from '../../constants/screens';

type Props = {
	events: Array<Event>,
}

class MeetingRoomsCalendar extends React.Component<Props> {
	constructor(props) {
		super(props);

		const maxDate = new Date();
		maxDate.setDate(maxDate.getDate() + 7);
		const minDate = new Date();
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

	onBackPress = () => Navigation.pop(this.props.componentId);

	onBookingPress = () => {
		Navigation.showModal({
			component: {
				name: SCREENS.COMMON_MODAL,
				passProps: {
					id: 'booking_request_modal',
					data: {
						meetingRoomId: this.props.meetingRoom.id,
					},
				},
				options: {
					modalTransitionStyle: 'crossDissolve',
					modalPresentationStyle: 'overCurrentContext',
					layout: {
						backgroundColor: 'transparent',
					},
				},
			},
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<SafeAreaView>
					<View style={styles.headerContainer}>
						<TouchableOpacity
							style={styles.button}
							onPress={this.onBackPress}
						>
							<IonIcon
								name='ios-arrow-round-back'
								size={30}
							/>
						</TouchableOpacity>
						<Text style={styles.label}>{this.props.meetingRoom.label}</Text>
						<View style={styles.button} />
					</View>
				</SafeAreaView>
				<Calendar
					date={this.state.date}
					maxDate={this.state.maxDate}
					minDate={this.state.minDate}
					onDatePress={this.setDate}
				/>
				<View style={styles.divider} />
				<DayCalendarList />
				<Footer
					buttonLabel='Бронировать'
					onButtonPress={this.onBookingPress}
					linkLabel='Мой календарь'
					onLinkPress={() => false}
				/>
			</View>
		);
	}
}

export default MeetingRoomsCalendar;
