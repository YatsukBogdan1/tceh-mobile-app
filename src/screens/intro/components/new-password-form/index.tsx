// @flow
import React from 'react';
import {View, Text, Alert, AsyncStorage} from 'react-native';
import styles from './styles';
import baseStyles from '../styles';
import CustomButton from 'components/custom-button';
import CustomTextInput from 'components/custom-text-input';
import { validateAuthFormField } from 'validations/auth-form';
import { API } from 'api';
import {connect} from 'react-redux';
import {State} from 'interfaces';

interface Props {
    phone: string;
    code: string;
	navigateToApp: () => void;
}

interface State {
    passwordValue: string;
    passwordError: string | null;
    passwordPristine: boolean;
    requestPending: boolean;
}

class NewPasswordForm extends React.Component<Props, State> {
	state: State = {
		passwordValue: '',
		passwordError: null,
		passwordPristine: true,
		requestPending: false,
	};

	onPasswordChange = async (value: string) => {
		await this.setState({
			passwordValue: value,
			passwordError: validateAuthFormField('password', value),
		});
	};

	onPasswordBlur = async () => await this.setState({ passwordPristine: false });

	onSubmit = async () => {
	    await this.setState({ requestPending: true });
		await this.onPasswordChange(this.state.passwordValue);
		await this.onPasswordBlur();
		if (this.state.passwordError) {
			await this.setState({ requestPending: false });
			return;
		}
		try {
			await API.recovery(this.props.phone, 0, this.state.passwordValue);
			const authResponse = await API.login(this.props.phone, this.state.passwordValue);
			await this.setState({ requestPending: false });
			API.setToken(authResponse.data.token);
			AsyncStorage.setItem('token', authResponse.data.token);
			this.props.navigateToApp();
		} catch (e) {
			await this.setState({ requestPending: false });
			if (e.response.status === 404 || e.response.status === 303) {
				Alert.alert('Что то пошло не так', e.response.data.detail);
				return;
			}
			if (e.response.status === 400) {
				this.setState({ passwordError: e.response.data.password[0] });
				return;
			}
			Alert.alert('Что то пошло не так', 'Извините за неудобства. Свяжитесь со службой поддержки');
		}

	};

	render() {
		return (
			<View style={baseStyles.container}>
				<Text style={styles.label}>Создайте новый пароль</Text>
				<Text style={styles.text}>Ваш новый пароль должен отличаться от предыдущего</Text>
				<CustomTextInput
					containerStyle={styles.inputContainer}
					error={!this.state.passwordPristine && this.state.passwordError}
					label='Пароль'
					onBlur={this.onPasswordBlur}
					onChange={this.onPasswordChange}
					secureTextEntry
					value={this.state.passwordValue}
				/>
				<CustomButton
					label='Сохранить'
					onPress={this.onSubmit}
                    isLoading={this.state.requestPending}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state: State) => ({
	phone: state.recoveryForm.phone,
	code: state.recoveryForm.code,
});

export default connect(mapStateToProps)(NewPasswordForm);
