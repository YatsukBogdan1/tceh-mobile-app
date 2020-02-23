// @flow
import React from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import baseStyles from '../styles';
import LinkButton from 'components/link-button';

type Props = {
	navigateToNewPassword: () => void,
}

class SmsCodeForm extends React.Component<Props> {
	state = {
		codeValue: '',
		codeError: null,
		inputFocused: false,
		cursorVisible: false,
	};

	componentDidMount(): * {
		this.cursorVisibleAnimation = setInterval(() => {
			this.setState({ cursorVisible: !this.state.cursorVisible });
		}, 700);
	}

	renderCellContent = index => {
		const { codeValue } = this.state;
		if (codeValue[index]) {
			return <Text style={styles.smsCodeText}>{codeValue[index]}</Text>;
		}
		if ((codeValue[index - 1] || index === 0) && this.state.inputFocused && this.state.cursorVisible) {
			return <View style={styles.cursor} />;
		}
		return null;
	};

	componentWillUnmount(): * {
		clearInterval(this.cursorVisibleAnimation);
	}

	onFocus = () => this.setState({ inputFocused: true });
	onBlur = () => this.setState({ inputFocused: false });

	focusSmsCodeInput = () => this.input.focus();

	onCodeChange = value => {
		this.setState({ codeValue: value });
		if (value.length === 4) {
			this.props.navigateToNewPassword();
			this.input.blur();
		}
	};

	render() {
		return (
			<View style={baseStyles.container}>
				<Text style={styles.label}>Подтверждение</Text>
				<Text style={styles.text}>Мы отправили Вам sms с кодом подтверждения</Text>
				<TouchableWithoutFeedback onPress={this.focusSmsCodeInput}>
					<View style={styles.inputContainer}>
						<View style={styles.inputCell}>{this.renderCellContent(0)}</View>
						<View style={styles.inputCell}>{this.renderCellContent(1)}</View>
						<View style={styles.inputCell}>{this.renderCellContent(2)}</View>
						<View style={styles.inputCell}>{this.renderCellContent(3)}</View>
					</View>
				</TouchableWithoutFeedback>
				<Text style={styles.text}>Не получили код?</Text>
				<LinkButton
					label='Отправить повторно'
					onPress={() => false}
					textStyle={styles.link}
				/>
				<TextInput
					keyboardType='number-pad'
					onBlur={this.onBlur}
					onFocus={this.onFocus}
					ref={_ref => this.input = _ref}
					style={styles.hiddenInput}
					onChangeText={this.onCodeChange}
				/>
			</View>
		);
	}
}

export default SmsCodeForm;
