import React, { ComponentType } from 'react';
import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';

type Props = {
	iconComponent?: ComponentType,
	label: string,
	onPress: () => void,
}

class TouchableDateBadge extends React.Component<Props> {
	render() {
		const {
			iconComponent,
		} = this.props;

		return (
			<TouchableOpacity
				style={styles.container}
				onPress={this.props.onPress}
			>
				{Boolean(iconComponent) && (
					<View style={styles.iconContainer}>
						{iconComponent}
					</View>
				)}
				<Text style={styles.text}>{this.props.label}</Text>
			</TouchableOpacity>
		);
	}
}

TouchableDateBadge.defaultProps = {
	iconComponent: null,
};

export default TouchableDateBadge;
