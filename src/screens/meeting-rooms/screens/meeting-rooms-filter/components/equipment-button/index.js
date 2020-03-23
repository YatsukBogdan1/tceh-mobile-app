// @flow
import React from 'react';
import {
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import TcehVectorIcons from 'tceh-vector-icons';
import { COLORS } from 'theme';

type Props = {
	active: boolean,
	iconName: string,
	onPress: () => void,
	text: string,
}

const EquipmentButton = (props: Props) => (
	<View style={styles.container}>
		<TouchableOpacity
			onPress={props.onPress}
			style={props.active ? styles.buttonContainerActive : styles.buttonContainerInactive}
		>
			<TcehVectorIcons
				size={20}
				color={props.active ? COLORS.WHITE : COLORS.DARK_GREY}
				name={props.iconName}
			/>
		</TouchableOpacity>
		<Text style={styles.text}>{props.text}</Text>
	</View>
);

export default EquipmentButton;
