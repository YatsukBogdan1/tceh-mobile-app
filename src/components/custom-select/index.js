// @flow
import React from 'react';
import {
	Animated,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import InputContainer from 'components/base/input-container';
import Icon from 'react-native-vector-icons/dist/Entypo';
import styles, {
	FOOTER_HEIGHT,
	HEADER_OUTLINED_HEIGHT,
	HEADER_REGULAR_HEIGHT,
	ITEM_HEIGHT,
} from './styles';
import baseStyles from 'components/base/styles';

type Props = {
	containerStyle?: Object,
	error?: string,
	label: string,
	onChange: () => void,
	options: Array<Object>,
	outlined?: boolean,
	style?: Object,
	value?: string,
};

const animationCommonConfig = {
	duration: 200,
};

class CustomSelect extends React.Component<Props> {
	constructor(props) {
		super(props);

		const dividersHeight = props.outlined ? HEADER_OUTLINED_HEIGHT + FOOTER_HEIGHT : HEADER_REGULAR_HEIGHT + FOOTER_HEIGHT;
		const optionsHeight = props.options.length * ITEM_HEIGHT + dividersHeight;

		this.state = {
			height: new Animated.Value(0),
			iconRotationAngle: new Animated.Value(Math.PI),
			maxHeight:  optionsHeight > 300 ? 300 : optionsHeight,
			opacity: new Animated.Value(0),
			opened: false,
			width: 0,
			zIndex: 1,
		};
	}

	toggleOptions = () => {
		if (this.state.opened) {
			this.hideOptions();
			return;
		}
		this.showOptions();
	};

	hideOptions = () => {
		this.setState({ opened: false }, () => {
			Animated.parallel([
				Animated.timing(this.state.height, { toValue: 0, ...animationCommonConfig }),
				Animated.timing(this.state.opacity, { toValue: 0, ...animationCommonConfig }),
				Animated.timing(this.state.iconRotationAngle, { toValue: Math.PI, ...animationCommonConfig }),
			]).start(() => {
				this.setState({ zIndex: 1 });
			});
		});
	};

	showOptions = () => {
		this.setState({
			opened: true,
			zIndex: 100,
		}, () => {
			Animated.parallel([
				Animated.timing(this.state.height, { toValue: this.state.maxHeight, ...animationCommonConfig }),
				Animated.timing(this.state.opacity, { toValue: 1, ...animationCommonConfig }),
				Animated.timing(this.state.iconRotationAngle, { toValue: 0, ...animationCommonConfig }),
			]).start();
		});
	};

	get labelPosition () {
		if (this.props.value || this.state.focused) {
			return 'top';
		}
		return 'center';
	}

	onContainerLayout = ({ nativeEvent }) => {
		if (nativeEvent.layout.width !== this.state.width) {
			this.setState({
				width: nativeEvent.layout.width,
			});
		}
	};

	get optionsContainerStyle () {
		return StyleSheet.compose(
			styles.optionsContainer,
			{
				height: this.state.height,
				opacity: this.state.opacity,
				width: this.state.width,
				borderBottomLeftRadius: this.props.outlined ? 24 : 6,
				borderBottomRightRadius: this.props.outlined ? 24 : 6,
				transform: [{
					translateY: this.props.outlined ? 34 : 57,
				}],
			}
		);
	}

	get optionsContainerHeaderStyle () {
		return {
			height: this.props.outlined ? HEADER_OUTLINED_HEIGHT : HEADER_REGULAR_HEIGHT,
		};
	}

	get arrowContainerStyle () {
		return StyleSheet.compose(
			styles.arrowContainer,
			{
				transform: [{
					rotateZ: this.state.iconRotationAngle,
				}],
			}
		);
	}

	get selectValueText () {
		const selectedOption = this.props.options.find(option => option.value === this.props.value);
		if (selectedOption) {
			return selectedOption.text;
		}
		return '';
	}

	onItemPress = value => {
		this.props.onChange(value);
		this.hideOptions();
	};

	render() {
		const {
			containerStyle,
			error,
			label,
			options,
			outlined,
			value,
		} = this.props;

		return (
			<View style={{ zIndex: this.state.zIndex }}>
				<InputContainer
					outlined={outlined}
					onLayout={this.onContainerLayout}
					active={this.state.opened}
					containerStyle={containerStyle}
					error={error}
					label={label}
					labelPosition={this.labelPosition}
					touchable
					onPress={this.toggleOptions}
				>
					<Text style={baseStyles.regularText}>{this.selectValueText}</Text>
					<Animated.View style={this.arrowContainerStyle}>
						<Icon
							name='chevron-thin-up'
						/>
					</Animated.View>
				</InputContainer>
				<Animated.ScrollView style={this.optionsContainerStyle}>
					<View style={this.optionsContainerHeaderStyle} />
					{options.map(option => (
						<TouchableOpacity
							key={option.value}
							style={option.value === value ? styles.itemSelected : styles.item}
							onPress={() => this.onItemPress(option.value)}
						>
							<Text style={baseStyles.regularText}>{option.text}</Text>
						</TouchableOpacity>
					))}
					<View style={styles.optionsContainerFooter} />
				</Animated.ScrollView>
			</View>
		);
	}
}

CustomSelect.defaultProps = {
	containerStyle: {},
	error: null,
	style: {},
	outlined: true,
};

export default CustomSelect;
