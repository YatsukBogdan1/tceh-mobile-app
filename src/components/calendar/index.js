import React from 'react';
import {
	ScrollView,
	Text,
	View,
} from 'react-native';
import styles from './styles';
import {
	getDatesArray,
	getDateString,
	getWeekday,
} from 'utils';
import CalendarItem from './item';

type Props = {
	date: string,
	maxDate: string,
	minDate: string,
	onDatePress: () => void,
}

class Calendar extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			dates: getDatesArray(props.minDate, props.maxDate),
		};
	}

	onDatePress = date => this.props.onDatePress(date.toISOString());

	componentDidUpdate (prevProps) {
		if (prevProps.minDate !== this.props.minDate || prevProps.maxDate !== this.props.maxDate) {
			this.setState({
				dates: getDatesArray(this.props.minDate, this.props.maxDate),
			});
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{this.state.dates.map(date => (
						<CalendarItem
							chosen={date.toISOString() === this.props.date}
							date={date.getDate()}
							onPress={() => this.onDatePress(date)}
							weekday={getWeekday(date)}
						/>
					))}
				</ScrollView>
				<Text style={styles.currentDateText}>{getDateString(this.props.date)}</Text>
			</View>
		);
	}
}

export default Calendar;
