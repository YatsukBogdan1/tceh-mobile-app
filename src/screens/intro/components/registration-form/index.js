// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
	setFieldError,
	setFieldPristine,
	setFieldValue,
} from 'actions/registration';
import baseStyles from '../styles';
import CustomButton from 'components/custom-button';
import CustomTextInput from 'components/custom-text-input';
import type { RegistrationFormState } from 'flow/types';
import Link from 'components/link-button';
import Icon from 'react-native-vector-icons/dist/Entypo';
import { COLORS } from 'theme';
import {API} from '../../../../api';

type Props = {
	form: RegistrationFormState,
	navigateToLogin: () => void,
	navigateToSmsCode: () => void,
	setFieldPristine: (name: string, value: string) => void,
	setFieldValue: (name: string, value: string) => void,
}

class RegistrationForm extends React.Component<Props> {
	state = {
		registrationPending: false,
	};

	onNameChange = value => this.props.setFieldValue('name', value);
	onPhoneChange = value => this.props.setFieldValue('phone', value);
	onPasswordChange = value => this.props.setFieldValue('password', value);

	onNameBlur = () => this.props.setFieldPristine('name', false);
	onPhoneBlur = () => this.props.setFieldPristine('phone', false);
	onPasswordBlur = () => this.props.setFieldPristine('password', false);

	setPhoneError = error => this.props.setFieldError('phone', error);
	setPasswordError = error => this.props.setFieldError('password', error);

	onSubmit = async () => {
		// this.props.navigateToSmsCode();
	};

	render() {
		const {
			errors,
			pristine,
			values,
		} = this.props.form;

		return (
			<View style={baseStyles.container}>
				<Text style={baseStyles.label}>Регистрация</Text>
				<CustomTextInput
					containerStyle={baseStyles.inputContainer}
					error={!pristine.name && errors.name}
					label='Имя'
					onBlur={this.onNameBlur}
					onChange={this.onNameChange}
					onSubmitEditing={() => this.phoneInput.focus()}
					returnKeyType='next'
					value={values.name}
				/>
				<CustomTextInput
					containerStyle={baseStyles.inputContainer}
					error={!pristine.phone && errors.phone}
					keyboardType='phone-pad'
					label='Телефон'
					onBlur={this.onPhoneBlur}
					onChange={this.onPhoneChange}
					onSubmitEditing={() => this.passwordInput.focus()}
					ref={_ref => this.phoneInput = _ref}
					returnKeyType='next'
					value={values.phone}
				/>
				<CustomTextInput
					containerStyle={baseStyles.inputContainer}
					error={!pristine.password && errors.password}
					label='Пароль'
					onBlur={this.onPasswordBlur}
					onChange={this.onPasswordChange}
					ref={_ref => this.passwordInput = _ref}
					secureTextEntry
					value={values.password}
				/>
				<CustomButton
					label='Регистрация'
					onPress={this.onSubmit}
					isLoading={this.state.registrationPending}
					disabled={this.state.registrationPending}
				/>
				<Link
					label='Уже есть аккаунт? Войти'
					onPress={this.props.navigateToLogin}
				/>
				<View style={baseStyles.socialButtonsContainer}>
					<CustomButton
						containerStyle={baseStyles.facebookButton}
						label='Facebook'
						labelStyle={baseStyles.socialButtonsLabel}
						LeftIconComponent={
							<Icon
								name='facebook-with-circle'
								size={23}
								color={COLORS.MAIN_ORANGE_COLOR}
							/>
						}
						onPress={() => false}
						outlined
					/>
					<CustomButton
						containerStyle={baseStyles.googleButton}
						label='Google'
						labelStyle={baseStyles.socialButtonsLabel}
						LeftIconComponent={
							<Icon
								name='google--with-circle'
								size={23}
								color={COLORS.MAIN_ORANGE_COLOR}
							/>
						}
						onPress={() => false}
						outlined
					/>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	form: state.registrationForm,
});

const mapDispatchToProps = {
	setFieldError,
	setFieldPristine,
	setFieldValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
