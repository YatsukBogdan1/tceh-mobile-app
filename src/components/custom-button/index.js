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
	label: string,
	disabled?: boolean,
	onPress: () => void,
	style?: Object,
	LeftIconComponent?: Function,
	RightIconComponent?: Function,
	outlined: boolean,
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
					<Text style={this.labelStyle}>{label}</Text>
					<RightIconComponent />
				</TouchableOpacity>
			</View>
		);
	}
}

CustomButton.defaultProps = {
	disabled: false,
	LeftIconComponent: () => null,
	RightIconComponent: () => null,
	containerStyle: {},
	style: {},
	outlined: false,
};

export default CustomButton;
