// @flow
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import baseStyles from '../styles';
import CustomButton from 'components/custom-button';
import CustomTextInput from 'components/custom-text-input';
import { validateField } from 'validations/auth-form';

type Props = {
	navigateToSmsCode: () => void,
}

class ForgotPasswordForm extends React.Component<Props> {
	state = {
		phoneValue: '',
		phoneError: null,
		phonePristine: true,
	};

	onPhoneChange = value => this.setState({
		phoneValue: value,
		phoneError: validateField('phone', value),
	});
	onPhoneBlur = () => this.setState({ phonePristine: false });

	onSubmit = () => {
		this.props.navigateToSmsCode();
		//
	};

	render() {
		return (
			<View style={baseStyles.container}>
				<Text style={styles.label}>Забыли пароль?</Text>
				<Text style={styles.text}>Введите Ваш номер телефона и  Вы получите sms с кодом подтверждения</Text>
				<CustomTextInput
					containerStyle={styles.inputContainer}
					error={!this.state.phonePristine && this.state.phoneError}
					label='Телефон'
					onBlur={this.onPhoneBlur}
					onChange={this.onPhoneChange}
					value={this.state.phoneValue}
				/>
				<CustomButton
					label='Отправить'
					onPress={this.onSubmit}
				/>
			</View>
		);
	}
}

export default ForgotPasswordForm;
