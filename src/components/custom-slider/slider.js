// @flow
import React from 'react';
import Slider from 'react-native-multi-slider';
import styles from './styles';

type Props = {
	maxValue: number,
	minValue: number,
	onChange: () => void,
	onChangeStart?: () => void,
	value: number,
};

class CustomSlider extends React.Component<Props> {
	render() {
		const {
			maxValue,
			minValue,
			value,
			onChange,
			onChangeStart,
		} = this.props;

		return (
			<Slider
				max={maxValue}
				min={minValue}
				onValuesChange={values => onChange(values[0])}
				onValuesChangeStart={onChangeStart}
				values={[value]}
			/>
		);
	}
}

CustomSlider.defaultProps = {
	onChangeStart: () => null,
};

export default CustomSlider;
