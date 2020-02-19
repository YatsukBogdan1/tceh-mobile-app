// @flow
import React from 'react';
import { RadioButton } from 'react-native-paper';
import { COLORS } from 'theme';

type Props = {
	value: string,
	checked: boolean,
	onPress: () => void,
}

class CustomRadioButton extends React.Component<Props> {
	render() {
		const {
			checked,
			onPress,
			value,
		} = this.props;

		return (
			<RadioButton.Android
				color={COLORS.MAIN_ORANGE_COLOR}
				uncheckedColor={COLORS.LIGHT_GREY}
				onPress={onPress}
				status={checked ? 'checked' : 'unchecked'}
				value={value}
			/>
		);
	}
}

export default CustomRadioButton;
