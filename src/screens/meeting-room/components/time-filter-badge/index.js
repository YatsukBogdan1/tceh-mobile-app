// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import * as SCREENS from 'constants/screens';
import TouchableDateBadge from 'components/touchable-date-badge';
import { setFilter } from 'actions/meeting-rooms';
import TcehIcons from 'tceh-vector-icons';
import { COLORS } from 'theme';
import moment from 'moment';

class TimeFilterBadge extends React.Component {
	onPress = () => {
		Navigation.showModal({
			component: {
				name: SCREENS.COMMON_MODAL,
				passProps: {
					id: 'double_time_picker_ios',
					data: {
						mode: 'time',
						date: this.props.date,
						duration: this.props.duration,
						saveDateAndDuration: (date, duration) => {
							this.props.setFilter('date', date);
							this.props.setFilter('duration', duration);
						},
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

	get label () {
		const {
			date,
			duration,
		} = this.props;
		const dateEnd = new Date(date);
		dateEnd.setMinutes(dateEnd.getMinutes() + duration);
		return `${moment(date).format('HH:mm')}-${moment(dateEnd).format('HH:mm')}`;
	}

	render() {
		return (
			<TouchableDateBadge
				label={this.label}
				onPress={this.onPress}
				iconComponent={(
					<TcehIcons
						name='clocks'
						size={15}
						color={COLORS.MAIN_ORANGE_COLOR}
					/>
				)}
			/>
		);
	}
};

const mapStateToProps = state => ({
	date: state.meetingRooms.filters.date,
	duration: state.meetingRooms.filters.duration,
});

const mapDispatchToProps = {
	setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeFilterBadge);
