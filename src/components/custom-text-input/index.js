// @flow
import React from 'react';
import {
	TextInput,
	TouchableOpacity,
	Animated,
	StyleSheet,
} from 'react-native';
import InputContainer from 'components/base/input-container';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import styles from './styles';
import { COLORS } from 'theme';

type Props = {
	containerStyle?: Object,
	error?: string,
	label: string,
	onBlur?: () => void,
	onChange: () => void,
	onFocus?: () => void,
	onSubmitEditing?: () => void,
	outlined: boolean,
	returnKeyType?: string,
	secureTextEntry: boolean,
	style?: Object,
	value: string,
};

class CustomTextInput extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			secureTextEntryButtonContainerRight: new Animated.Value(5),
			focused: false,
			secureTextEntry: props.secureTextEntry,
		};
	}

	setSecureTextEntryButtonContainerRight = (value) => {
		Animated.timing(this.state.secureTextEntryButtonContainerRight, {
			toValue: value,
			duration: 200,
		}).start();
	};

	componentDidUpdate (prevProps: Props) {
		if (this.props.error && !prevProps.error) {
			this.setSecureTextEntryButtonContainerRight(35);
		}
		if (!this.props.error && prevProps.error) {
			this.setSecureTextEntryButtonContainerRight(5);
		}
	}

	get secureTextEntryButtonContainerStyle () {
		return StyleSheet.compose(
			styles.secureTextEntryButtonContainer,
			{
				right: this.state.secureTextEntryButtonContainerRight,
			}
		);
	}

	toggleSecureTextEntry = () => this.setState({ secureTextEntry: !this.state.secureTextEntry });

	get labelPosition () {
		if (this.props.value.length > 0 || this.state.focused) {
			return 'top';
		}
		return 'center';
	}

	focus = () => this.input.focus();

	onFocus = () => {
		this.props.onFocus();
		this.setState({ focused: true });
	};

	onBlur = () => {
		this.props.onBlur();
		this.setState({ focused: false });
	};

	render() {
		const {
			containerStyle,
			error,
			label,
			onChange,
			outlined,
			returnKeyType,
			style,
			value,
			onSubmitEditing,
		} = this.props;

		return (
			<InputContainer
				active={this.state.focused}
				containerStyle={containerStyle}
				error={error}
				label={label}
				labelPosition={this.labelPosition}
				outlined={outlined}
			>
				<TextInput
					onBlur={this.onBlur}
					onChangeText={onChange}
					onFocus={this.onFocus}
					onSubmitEditing={onSubmitEditing}
					ref={_ref => this.input = _ref}
					returnKeyType={returnKeyType}
					secureTextEntry={this.state.secureTextEntry}
					style={[styles.textInput, style]}
					value={value}
				/>
				{this.props.secureTextEntry && (
					<Animated.View style={this.secureTextEntryButtonContainerStyle}>
						<TouchableOpacity
							onPress={this.toggleSecureTextEntry}
							style={styles.secureTextEntryButton}
						>
							<Icon
								color={COLORS.LIGHT_GREY}
								name={this.state.secureTextEntry ? 'ios-eye-off' : 'ios-eye'}
								size={20}
							/>
						</TouchableOpacity>
					</Animated.View>
				)}
			</InputContainer>
		);
	}
}

CustomTextInput.defaultProps = {
	containerStyle: {},
	error: null,
	onBlur: () => false,
	onFocus: () => false,
	onSubmitEditing: () => false,
	outlined: true,
	returnKeyType: 'done',
	secureTextEntry: false,
	style: {},
};

export default CustomTextInput;
