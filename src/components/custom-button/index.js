// @flow
import React, { ComponentType } from 'react';
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
	LeftIconComponent?: ComponentType,
	onLayout?: () => void,
	onPress: () => void,
	outlined: boolean,
	RightIconComponent?: ComponentType,
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
				borderColor: this.props.outlined ? COLORS.LIGHT_GREY : COLORS.TRANSPARENT,
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
			onLayout,
			onPress,
			RightIconComponent,
			style,
		} = this.props;

		return (
			<View
				onLayout={onLayout}
				style={containerStyle}
			>
				<TouchableOpacity
					onPress={onPress}
					disabled={disabled}
					style={[this.containerStyle, style]}
				>
					{LeftIconComponent}
					<Text style={[this.labelStyle, labelStyle]}>{label}</Text>
					{RightIconComponent}
				</TouchableOpacity>
			</View>
		);
	}
}

CustomButton.defaultProps = {
	onLayout: () => false,
	containerStyle: {},
	disabled: false,
	LeftIconComponent: null,
	outlined: false,
	RightIconComponent: null,
	style: {},
	labelStyle: {},
};

export default CustomButton;
