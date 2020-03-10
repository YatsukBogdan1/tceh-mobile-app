// @flow
import React from 'react';
import {
	Image,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import styles from './styles';

type Props = {
	name: string,
	imageURI: string,
	onPress: () => void,
}

const LocationCard = (props: Props) => (
	<View style={styles.shadowBox}>
		<TouchableOpacity
			onPress={props.onPress}
			style={styles.container}
		>
			<Image
				style={styles.image}
				resizeMode='cover'
				source={props.imageURI}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.text}>{props.name}</Text>
			</View>
		</TouchableOpacity>
	</View>
);

export default LocationCard;
