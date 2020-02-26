import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type Props = {
	chosen: boolean,
	date: string,
	onPress: () => void,
	weekday: string,
}

const CalendarItem = (props: Props) => (
	<TouchableOpacity
		onPress={props.onPress}
		style={styles.itemContainer}
	>
		<Text style={styles.weekdayText}>{props.weekday}</Text>
		<View style={props.chosen ? styles.dateContainerChosen : styles.dateContainer}>
			<Text style={props.chosen ? styles.dateTextChosen : styles.dateText}>{props.date}</Text>
		</View>
	</TouchableOpacity>
);

export default CalendarItem;
