// @flow
import React from 'react';
import Slider from '@react-native-community/slider';
import { COLORS } from 'theme';

class CustomSlider extends React.Component<Props> {
	render() {
		const {
			maxValue,
			minValue,
			onChange,
			step,
			value,
		} = this.props;

		return (
			<Slider
				maximumValue={maxValue}
				minimumTrackTintColor={COLORS.MAIN_ORANGE_COLOR}
				minimumValue={minValue}
				onValueChange={onChange}
				step={step}
				thumbTintColor={COLORS.MAIN_ORANGE_COLOR}
				value={value}
			/>
		);
	}
}

export default CustomSlider;
