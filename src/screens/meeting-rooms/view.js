import React from 'react';
import {
	FlatList,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import Card from './components/card';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import { Navigation } from 'react-native-navigation';
import * as SCREENS from 'constants/screens';
import TouchableDateBadge from 'components/touchable-date-badge';
import TcehVectorIcons from 'tceh-vector-icons';
import { COLORS } from 'theme';
import { getDateString } from 'utils';
import moment from 'moment';
import DateFilterBadge from '../meeting-room/components/date-filter-badge';
import TimeFilterBadge from '../meeting-room/components/time-filter-badge';

class MeetingRooms extends React.Component {
	onBackPress = () => Navigation.pop(this.props.componentId);

	onOptionsPress = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.MEETING_ROOMS_FILTERS_SCREEN,
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

	get filteredMeetingRooms () {
		const { filters } = this.props;
		return this.props.meetingRooms;
		// const meetingRoomsWithoutEquipmentFilters = this.props.meetingRooms.filter(meetingRoom =>
		// 	meetingRoom.type === filters.type &&
		// 	meetingRoom.capacity < filters.capacity,
		// );
		// const equipmentFilters = [];
		// if (filters.desk) {
		// 	equipmentFilters.push('desk');
		// }
		// if (filters.flipchart) {
		// 	equipmentFilters.push('flipchart');
		// }
		// if (filters.projector) {
		// 	equipmentFilters.push('projector');
		// }
		// if (filters.screen) {
		// 	equipmentFilters.push('screen');
		// }
		// if (equipmentFilters.length === 0) {
		// 	return meetingRoomsWithoutEquipmentFilters;
		// }
		// return meetingRoomsWithoutEquipmentFilters.filter(meetingRoom => equipmentFilters.every(equipment => meetingRoom[equipment]));
	}

	onMeetingRoomPress = id => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.MEETING_ROOM,
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

	onCalendarPress = id => {
		Navigation.push(this.props.componentId, {
			component: {
				name: SCREENS.MEETING_ROOMS_CALENDAR,
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
	}

	renderMeetingRoomItem = ({ item }) => (
		<Card
			capacity={item.capacity}
			desk={item.desk}
			flipchart={item.flipchart}
			imageURI={item.imageURI}
			label={item.label}
			liked={false}
			onBookPress={() => this.onMeetingRoomPress(item.id)}
			onCalendarPress={() => this.onCalendarPress(item.id)}
			projector={item.projector}
			screen={item.screen}
			type={item.type}
		/>
	);

	renderListDivider = () => <View style={styles.listDivider}/>;

	get emptyListText () {
		return 'К сожалению, нет свободных переговорных, соответствующих Вашему запросу';
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<View style={styles.button} />
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
				<View style={styles.dateBadgesContainer}>
					<DateFilterBadge />
					<TimeFilterBadge />
				</View>
				<FlatList
					ItemSeparatorComponent={this.renderListDivider}
					contentContainerStyle={styles.listContentContainer}
					style={styles.listContainer}
					ListEmptyComponent={<Text style={styles.emptyListText}>{this.emptyListText}</Text>}
					data={this.filteredMeetingRooms}
					renderItem={this.renderMeetingRoomItem}
				/>
			</View>
		);
	}
}

export default MeetingRooms;
