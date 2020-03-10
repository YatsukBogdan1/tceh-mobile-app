// @flow
import React from 'react';
import {
	Text,
	View,
	Image,
} from 'react-native';
import styles from './styles';

type Props = {
	text: string,
	imageURI: string,
};

const BenefitCard = (props: Props) => (
	<View style={styles.container}>
		<Image
			style={styles.image}
			source={props.imageURI}
			resizeMode='cover'
		/>
		<View style={styles.imageOverlay} />
		<Text style={styles.text}>{props.text}</Text>
	</View>
);

export default BenefitCard;
