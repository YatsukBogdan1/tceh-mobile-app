// @flow
import React from 'react';
import {
	Image,
	Text,
	View,
} from 'react-native';
import styles from './styles';
import IMAGE_ASSETS from 'assets/images';

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
					source={IMAGE_ASSETS.PROFILE_AVATAR_DEMO}
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
