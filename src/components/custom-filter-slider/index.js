// @flow
import React from 'react';
import {
	Text,
	View,
} from 'react-native';
import styles from './styles';
import CustomSlider from 'components/custom-slider';

type Props = {
	containerStyle?: Object,
	label: string,
	maxValue: number,
	minValue: number,
	onChange: () => void,
	step: number,
	value: string,
	valuePrefix: string,
	valueSuffix: string,
}

const CustomFilterSlider = (props: Props) => (
	<View style={props.containerStyle}>
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.label}>{props.label}</Text>
				<Text style={styles.value}>{props.valuePrefix} {props.value} {props.valueSuffix}</Text>
			</View>
			<CustomSlider
				step={props.step}
				maxValue={props.maxValue}
				minValue={props.minValue}
				onChange={props.onChange}
				value={props.value}
			/>
		</View>
	</View>
);

CustomFilterSlider.defaultProps = {
	containerStyle: {},
};

export default CustomFilterSlider;
