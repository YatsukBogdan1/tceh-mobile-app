// @flow
import React from 'react';
import {
	Text,
	View,
	Image,
} from 'react-native';
import styles from './styles';

type Props = {
	user: {
		avatarURI: string,
		name: string,
	},
	date: string,
	text: string,
}

const Comment = (props: Props) => (
	<View style={styles.container}>
		<View style={styles.row}>
			<Image
				source={props.user.avatarURI}
				style={styles.avatar}
			/>
			<View>
				<Text style={styles.name}>{props.user.name}</Text>
				<Text style={styles.date}>{props.date}</Text>
			</View>
		</View>
		<Text style={styles.text}>{props.text}</Text>
	</View>
);

export default Comment;
