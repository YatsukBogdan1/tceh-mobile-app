// @flow
import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import styles from './styles';

type Props = {
	color?: string,
	containerStyle?: Object,
	label: string,
	onPress: () => void,
	textStyle?: Object,
};

const LinkButton = (props: Props) => (
	<View style={[props.containerStyle, styles.container]}>
		<TouchableOpacity style={styles.touchableArea} onPress={props.onPress}>
			<Text
				style={[
					styles.label,
					props.textStyle,
					props.color ? { color: props.color } : {},
				]}
			>
				{props.label}
			</Text>
		</TouchableOpacity>
	</View>
);

LinkButton.defaultProps = {
	containerStyle: {},
	textStyle: {},
};

export default LinkButton;
