// @flow
import React from 'react';
import {
	Text,
	TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Icon from 'tceh-vector-icons';

type Props = {
	icon: string,
	label: string,
	onPress: string,
}

class ProfileButton extends React.Component<Props> {
	render() {
		return (
			<TouchableOpacity
				onPress={this.props.onPress}
				style={styles.container}
			>
				<Text style={styles.label}>{this.props.label}</Text>
				<Icon
					name={this.props.icon}
					size={18}
				/>
			</TouchableOpacity>
		);
	}
}

export default ProfileButton;
