// @flow
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import baseStyles from '../styles';
import CustomButton from 'components/custom-button';
import CustomTextInput from 'components/custom-text-input';
import { validateField } from 'validations/auth-form';

class NewPasswordForm extends React.Component<> {
	state = {
		passwordValue: '',
		passwordError: null,
		passwordPristine: true,
	};

	onPasswordChange = value => this.setState({
		passwordValue: value,
		passwordError: validateField('phone', value),
	});
	onPasswordBlur = () => this.setState({ passwordPristine: false });

	onSubmit = () => {
		//
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
				/>
			</View>
		);
	}
}

export default NewPasswordForm;
