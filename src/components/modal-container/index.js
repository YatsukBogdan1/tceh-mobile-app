// @flow
import React from 'react';
import {
	View,
} from 'react-native';
import TourRequestModal from 'screens/work-place/components/tour-request-modal';
import { Navigation } from 'react-native-navigation';

type Props = {
	modalId: string,
}

class ModalContainer extends React.Component<Props> {
	close = () => Navigation.dismissModal(this.props.componentId);

	get modalContent () {
		switch (this.props.modalId) {
			case 'tour_request_modal':
				return <TourRequestModal close={this.close}/>;
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
