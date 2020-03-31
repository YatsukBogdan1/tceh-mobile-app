// @flow
import React from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	Image,
} from 'react-native';
import styles from './styles';

type Props = {
	avatar: string,
	position: string,
	name: string,
	onPress: () => void,
	surname: string,
}

const UserItem = (props: Props) => (
	<TouchableOpacity
		onPress={props.onPress}
		style={styles.container}
	>
		<View style={styles.row}>
			<Image
				resizeMode='cover'
				style={styles.avatar}
				source={props.avatar}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.name}>{props.name}</Text>
				<Text style={styles.surname}>{props.surname}</Text>
				<Text style={styles.position}>{props.position}</Text>
			</View>
		</View>
	</TouchableOpacity>
);

export default UserItem;
