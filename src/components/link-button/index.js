// @flow
import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import styles from './styles';

type Props = {
	containerStyle?: Object,
	label: string,
	onPress: () => void,
	textStyle?: Object,
};

const Link = (props: Props) => (
	<View style={props.containerStyle}>
		<TouchableOpacity style={styles.touchableArea} onPress={props.onPress}>
			<Text style={[styles.label, props.textStyle]}>{props.label}</Text>
		</TouchableOpacity>
	</View>
);

Link.defaultProps = {
	containerStyle: {},
	textStyle: {},
};

export default Link;
