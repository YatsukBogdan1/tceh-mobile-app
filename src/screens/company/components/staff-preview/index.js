// @flow
import React from 'react';
import {
	Text,
	TouchableOpacity,
	Image,
	View,
} from 'react-native';
import styles from './styles';

type Props = {
	onPress: () => void,
	staff: Array,
	companyName: string,
}

const StaffPreview = (props: Props) => {
	if (props.staff.length === 0) return null;
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={styles.container}
		>
			<View style={styles.avatarsContainer}>
				<Image
					style={styles.firstAvatar}
					source={props.staff[0].avatarURI}
				/>
				{props.staff[1] && (
					<Image
						style={styles.secondAvatar}
						source={props.staff[1].avatarURI}
					/>
				)}
				{props.staff[2] && (
					<Image
						style={styles.thirdAvatar}
						source={props.staff[2].avatarURI}
					/>
				)}
			</View>
			<Text style={styles.text}>{props.staff[0].name} и еще {props.staff.length - 1} работают в {props.companyName}</Text>
		</TouchableOpacity>
	);
};

export default StaffPreview;
