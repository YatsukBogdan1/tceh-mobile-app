import React from 'react';
import {
	Text,
	TouchableOpacity,
} from 'react-native';
import styles from './styles';

type Props = {
	active: boolean,
	label: string,
	onPress: () => void,
	style?: Object,
}

class TouchableBadge extends React.Component<Props> {
	render() {
		const { active } = this.props;

		return (
			<TouchableOpacity
				style={[active ? styles.containerActive : styles.containerInactive, this.props.style]}
				onPress={this.props.onPress}
			>
				<Text style={active ? styles.textActive : styles.textInactive}>{this.props.label}</Text>
			</TouchableOpacity>
		);
	}
}

TouchableBadge.defaultProps = {
	style: {},
};

export default TouchableBadge;
