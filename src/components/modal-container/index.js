// @flow
import React from 'react';
import {
	View,
} from 'react-native';
import TourRequestModal from 'screens/work-place/components/tour-request-modal';
import { Navigation } from 'react-native-navigation';
import DatePickerIos from '../date-picker-ios';
import DoubleTimePickerIOS from '../double-time-picker-ios';
import BookingRequestModal from 'screens/meeting-room/components/booking-request-modal';

type Props = {
	modalId: string,
}

class ModalContainer extends React.Component<Props> {
	close = () => Navigation.dismissModal(this.props.componentId);

	get modalContent () {
		switch (this.props.id) {
			case 'tour_request_modal':
				return <TourRequestModal close={this.close}/>;
			case 'date_picker_ios':
				return <DatePickerIos close={this.close} {...this.props.data} />;
			case 'double_time_picker_ios':
				return <DoubleTimePickerIOS close={this.close} {...this.props.data} />;
			case 'booking_request_modal':
				return <BookingRequestModal close={this.close} {...this.props.data} />;
		}
	}

	render() {
		return (
			<View style={{flex: 1}}>
				{this.modalContent}
			</View>
		);
	}
}

export default ModalContainer;
