import React from 'react';
import {View, Text, Alert} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import baseStyles from '../styles';
import CustomButton from 'components/custom-button';
import CustomTextInput from 'components/custom-text-input';
import { validateAuthFormField } from 'validations/auth-form';
import {API} from '../../../../api';
import { setRecoveryFormFieldValue } from 'reducers/recovery-form';

interface Props{
	navigateToSmsCode: () => void;
    setRecoveryFormFieldValue: typeof setRecoveryFormFieldValue;
}

interface State {
    phoneValue: string;
    phoneError: string | null;
    phonePristine: boolean;
    requestPending: boolean;
}

class ForgotPasswordForm extends React.Component<Props, State> {
	state: State = {
		phoneValue: '',
		phoneError: null,
		phonePristine: true,
		requestPending: false,
	};

	onPhoneChange = async (value: string) => {
	    await this.setState({
			phoneValue: value,
			phoneError: validateAuthFormField('phone', value),
		});
	};

	onPhoneBlur = async () => await this.setState({ phonePristine: false });

	onSubmit = async () => {
		await this.setState({ requestPending: true });
		await this.onPhoneChange(this.state.phoneValue);
		await this.onPhoneBlur();
		if (this.state.phoneError) {
			await this.setState({ requestPending: false });
			return;
		}
		try {
			await API.initiateRecovery(this.state.phoneValue);
			this.props.setRecoveryFormFieldValue('phone', this.state.phoneValue);
			this.props.navigateToSmsCode();
			await this.setState({ requestPending: false });
		} catch (e) {
			await this.setState({ requestPending: false });
			if (e.response.status === 404) {
				Alert.alert('Что то пошло не так', e.response.data.detail);
				return;
			}
			Alert.alert('Что то пошло не так', 'Извините за неудобства. Свяжитесь со службой поддержки');
		}
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
					keyboardType='phone-pad'
				/>
				<CustomButton
					label='Отправить'
					onPress={this.onSubmit}
					isLoading={this.state.requestPending}
				/>
			</View>
		);
	}
}

const mapDispatchToProps = { setRecoveryFormFieldValue };

export default connect(null, mapDispatchToProps)(ForgotPasswordForm);
