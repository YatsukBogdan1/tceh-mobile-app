// @flow
import React, { ComponentType } from 'react';
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
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
	isLoading?: boolean,
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
			isLoading,
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
					{ isLoading && (
						<View style={styles.isLoadingContainer}>
							<ActivityIndicator color={COLORS.MAIN_ORANGE_COLOR} />
						</View>
					)}
				</TouchableOpacity>
			</View>
		);
	}
}

CustomButton.defaultProps = {
	containerStyle: {},
	disabled: false,
	isLoading: false,
	labelStyle: {},
	LeftIconComponent: null,
	onLayout: () => false,
	outlined: false,
	RightIconComponent: null,
	style: {},
};

export default CustomButton;
