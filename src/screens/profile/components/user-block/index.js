// @flow
import React from 'react';
import {
	Image,
	Text,
	View,
} from 'react-native';
import styles from './styles';

type Props = {
	avatarURI: string,
	name: string,
	position: string,
}

class UserBlock extends React.Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Image
					source={this.props.avatarURI}
					// source={{ uri: this.props.avatarURI }}
					style={styles.avatar}
					resizeMode='contain'
				/>
				<Text style={styles.name}>{this.props.name}</Text>
				<Text style={styles.position}>{this.props.position}</Text>
			</View>
		);
	}
}

export default UserBlock;
