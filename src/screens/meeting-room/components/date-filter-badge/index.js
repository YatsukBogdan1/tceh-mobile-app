// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import * as SCREENS from 'constants/screens';
import TouchableDateBadge from 'components/touchable-date-badge';
import { getShortDateString } from 'utils';
import { setFilter } from 'actions/meeting-rooms';
import TcehIcons from 'tceh-vector-icons';
import { COLORS } from 'theme';

class DateFilterBadge extends React.Component {
	onPress = () => {
		Navigation.showModal({
			component: {
				name: SCREENS.COMMON_MODAL,
				passProps: {
					id: 'date_picker_ios',
					data: {
						date: this.props.date,
						saveDate: date => this.props.setFilter('date', date),
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
		return getShortDateString(this.props.date);
	}

	render() {
		return (
			<TouchableDateBadge
				label={this.label}
				onPress={this.onPress}
				iconComponent={(
					<TcehIcons
						name='calendar'
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
});

const mapDispatchToProps = {
	setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateFilterBadge);
