import React from 'react';
import {
	Text,
	View,
} from 'react-native';
import styles from './styles';

type Props = {
	imageURI: string,
	label: string,
	onPress: () => void,
	time: string,
	type: string,
}

class EventItem extends React.Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Text>{this.props.label}</Text>
				<Text>{this.props.time}</Text>
				<Text>{this.props.type}</Text>
			</View>
		);
	}
}

export default EventItem;
