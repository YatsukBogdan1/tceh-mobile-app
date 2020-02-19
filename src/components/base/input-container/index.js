// @flow
import React from 'react';
import {
	Animated,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import styles from './styles';
import {
	LABEL_INNER_PADDING,
	TEXT_LEFT_PADDING,
} from './constants';
import {
	getAnimatedValues, getContainerAnimatedValues,
	getContainerState, getErrorAnimatedValues,
	getLabelAnimatedValues,
	getLabelState,
} from './utils';
import { COLORS } from 'theme';

type Props = {
	active: boolean,
	containerStyle?: Object,
	error?: string,
	label: string,
	labelPosition: string,
	onLayout?: () => void,
	onPress?: () => void,
	outlined?: boolean,
	style?: Object,
	touchable: boolean,
};

const animationCommonConfig = {
	duration: 200,
};

class InputContainer extends React.Component<Props> {
	constructor(props) {
		super(props);

		const {
			labelTranslateY,
			labelColor,
			labelFontSize,
			containerColor,
			errorIconTranslateX,
			errorTextTranslateY,
		} = getAnimatedValues(props);

		this.state = {
			error: null,
			containerColor,
			containerColorAnimationAnimatedValue: new Animated.Value(0),
			errorIconTranslateX: new Animated.Value(errorIconTranslateX),
			errorTextTranslateY: new Animated.Value(errorTextTranslateY),
			labelColor,
			labelColorAnimationAnimatedValue: new Animated.Value(0),
			labelFontSize: new Animated.Value(labelFontSize),
			labelTranslateY: new Animated.Value(labelTranslateY),
			newContainerColor: containerColor,
			newLabelColor: labelColor,
		};
	}

	startLabelAnimations = () => {
		const {
			labelFontSize,
			labelColor,
			labelTranslateY,
		} = getLabelAnimatedValues(this.props);

		Animated.timing(this.state.labelFontSize).stop();
		Animated.timing(this.state.labelTranslateY).stop();
		Animated.timing(this.state.labelColorAnimationAnimatedValue).stop();

		this.setState({ newLabelColor: labelColor }, () => {
			Animated.parallel([
				Animated.timing(this.state.labelFontSize, { toValue: labelFontSize, ...animationCommonConfig }),
				Animated.timing(this.state.labelTranslateY, { toValue: labelTranslateY, ...animationCommonConfig }),
				Animated.timing(this.state.labelColorAnimationAnimatedValue, { toValue: 1, ...animationCommonConfig }),
			]).start(() => {
				this.setState({
					labelColor,
					labelColorAnimationAnimatedValue: new Animated.Value(0),
				});
			});
		});
	};

	startContainerAnimations = () => {
		const { containerColor } = getContainerAnimatedValues(this.props);

		Animated.timing(this.state.containerColorAnimationAnimatedValue).stop();

		this.setState({ newContainerColor: containerColor }, () => {
			Animated.timing(
				this.state.containerColorAnimationAnimatedValue, {
					toValue: 1,
					...animationCommonConfig,
				}
			).start(() => {
				this.setState({
					containerColor,
					containerColorAnimationAnimatedValue: new Animated.Value(0),
				});
			});
		});
	};

	startErrorAnimations = () => {
		const {
			errorTextTranslateY,
			errorIconTranslateX,
		} = getErrorAnimatedValues(this.props);

		Animated.timing(this.state.errorTextTranslateY).stop();
		Animated.timing(this.state.errorIconTranslateX).stop();

		Animated.parallel([
			Animated.timing(this.state.errorTextTranslateY, { toValue: errorTextTranslateY, ...animationCommonConfig }),
			Animated.timing(this.state.errorIconTranslateX, { toValue: errorIconTranslateX, ...animationCommonConfig }),
		]).start(() => {
			this.setState({ error: this.props.error });
		});
	};

	get labelStyle() {
		const translateX = this.props.outlined ? TEXT_LEFT_PADDING - LABEL_INNER_PADDING : -5;

		return StyleSheet.compose(
			styles.label,
			{
				color: this.state.labelColorAnimationAnimatedValue.interpolate({
					inputRange: [0, 1],
					outputRange: [this.state.labelColor, this.state.newLabelColor],
				}),
				fontSize: this.state.labelFontSize,
				transform: [
					{ translateY: this.state.labelTranslateY },
					{ translateX },
				],
			}
		);
	}

	get containerStyle() {
		return StyleSheet.compose(
			this.props.outlined ? styles.containerOutlined : styles.container,
			{
				borderColor: this.state.containerColorAnimationAnimatedValue.interpolate({
					inputRange: [0, 1],
					outputRange: [this.state.containerColor, this.state.newContainerColor],
				}),
			}
		);
	}

	get errorContainerStyle() {
		const translateX = this.props.outlined ? TEXT_LEFT_PADDING : 0;
		return StyleSheet.compose(
			styles.errorContainer,
			{
				transform: [{
					translateY: this.state.errorTextTranslateY,
				}, {
					translateX,
				}],
			}
		);
	}

	get errorIconContainerStyle() {
		return StyleSheet.compose(
			styles.errorIconContainer,
			{
				right: this.state.errorIconTranslateX,
			}
		);
	}

	componentDidUpdate(prevProps: Props): * {
		if (getLabelState(this.props) !== getLabelState(prevProps)) {
			this.startLabelAnimations();
		}
		if (this.props.error !== prevProps.error) {
			if (prevProps.error === null) {
				this.setState({ error: this.props.error }, this.startErrorAnimations);
			} else {
				this.startErrorAnimations();
			}
		}
		if (getContainerState(this.props) !== getContainerState(prevProps)) {
			this.startContainerAnimations();
		}
	}

	render() {
		const {
			containerStyle,
			onPress,
			onLayout,
			touchable,
			outlined,
		} = this.props;

		const RootComponent = touchable ? TouchableOpacity : View;

		return (
			<RootComponent
				onPress={onPress}
				style={containerStyle}
			>
				<Animated.Text style={this.labelStyle}>{this.props.label}</Animated.Text>
				<Animated.View
					onLayout={onLayout}
					style={this.containerStyle}
				>
					<View style={[styles.contentContainer, { paddingLeft: outlined ? TEXT_LEFT_PADDING : 0 }]}>
						{this.props.children}
					</View>
					<Animated.View style={this.errorIconContainerStyle}>
						<Icon
							name='exclamationcircle'
							color={COLORS.RED_COLOR}
							size={15}
						/>
					</Animated.View>
				</Animated.View>
				<Animated.View style={this.errorContainerStyle}>
					{this.state.error && <Text style={styles.errorText}>{this.state.error}</Text>}
				</Animated.View>
			</RootComponent>
		);
	}
}

InputContainer.defaultProps = {
	containerStyle: {},
	error: null,
	labelPosition: 'center',
	onLayout: () => false,
	onPress: () => false,
	outlined: true,
	style: {},
	touchable: false,
};

export default InputContainer;
