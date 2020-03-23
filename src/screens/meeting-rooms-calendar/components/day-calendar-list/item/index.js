import React from 'react';
import {
	Text,
	View,
} from 'react-native';
import styles from './styles';

type Props = {
	time: string,
	data?: Object,
}

class DayCalendarListItem extends React.Component<Props> {
	render() {
		const {
			time,
			data,
		} = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.timeContainer}>
					<Text>{time}</Text>
				</View>
				{data ? (
					<View style={[styles.bookingContainer, styles.row]}>
						<View style={{ marginHorizontal: 15 }}>
							<Text style={styles.company}>{data.company}</Text>
							<Text style={styles.name}>{data.name}</Text>
						</View>
					</View>
				) : <View style={styles.emptyBookingContainer} />}
			</View>
		);
	}
}

export default DayCalendarListItem;
