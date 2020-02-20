// @flow
import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import styles from './styles';
import { COLORS } from 'theme';
import baseStyles from 'components/base/styles';

type Props = {
	containerStyle?: Object,
	disabled?: boolean,
	label: string,
	labelStyle?: Object,
	LeftIconComponent?: Function,
	onPress: () => void,
	outlined: boolean,
	RightIconComponent?: Function,
	style?: Object,
};

class CustomButton extends React.Component<Props> {
	get containerStyle () {
		return StyleSheet.compose(
			styles.container,
			{
				...baseStyles.shadowBox,
				opacity: this.props.disabled ? 0.5 : 1,
				backgroundColor: this.props.outlined ? COLORS.WHITE : COLORS.MAIN_ORANGE_COLOR,
			},
		);
	}

	get labelStyle () {
		return StyleSheet.compose(
			styles.label,
			{
				color: this.props.outlined ? COLORS.DARK_GREY : COLORS.WHITE,
			},
		);
	}

	render() {
		const {
			containerStyle,
			disabled,
			label,
			labelStyle,
			LeftIconComponent,
			onPress,
			RightIconComponent,
			style,
		} = this.props;

		return (
			<View style={containerStyle}>
				<TouchableOpacity
					onPress={onPress}
					disabled={disabled}
					style={[this.containerStyle, style]}
				>
					<LeftIconComponent />
					<Text style={[this.labelStyle, labelStyle]}>{label}</Text>
					<RightIconComponent />
				</TouchableOpacity>
			</View>
		);
	}
}

CustomButton.defaultProps = {
	containerStyle: {},
	disabled: false,
	LeftIconComponent: () => null,
	outlined: false,
	RightIconComponent: () => null,
	style: {},
	labelStyle: {},
};

export default CustomButton;
