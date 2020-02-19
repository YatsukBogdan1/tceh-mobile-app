// @flow
import React from 'react';
import { TextInput } from 'react-native';
import InputContainer from 'components/base/input-container';
import styles from './styles';

type Props = {
	outlined: boolean,
	containerStyle?: Object,
	error?: string,
	label: string,
	onChange: () => void,
	style?: Object,
	value: string,
};

class CustomTextInputOutlined extends React.Component<Props> {
	state = {
		focused: false,
	};

	get labelPosition () {
		if (this.props.value.length > 0 || this.state.focused) {
			return 'top';
		}
		return 'center';
	}

	onFocus = () => this.setState({ focused: true });

	onBlur = () => this.setState({ focused: false });

	render() {
		const {
			containerStyle,
			error,
			label,
			onChange,
			outlined,
			style,
			value,
		} = this.props;

		return (
			<InputContainer
				outlined={outlined}
				active={this.state.focused}
				containerStyle={containerStyle}
				error={error}
				label={label}
				labelPosition={this.labelPosition}
			>
				<TextInput
					style={[styles.textInput, style]}
					onFocus={this.onFocus}
					onBlur={this.onBlur}
					onChangeText={onChange}
					value={value}
				/>
			</InputContainer>
		);
	}
}

CustomTextInputOutlined.defaultProps = {
	outlined: true,
	containerStyle: {},
	error: null,
	style: {},
};

export default CustomTextInputOutlined;
