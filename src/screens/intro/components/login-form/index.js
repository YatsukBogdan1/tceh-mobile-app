// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
	setFieldPristine,
	setFieldValue,
} from 'actions/authorization';
import styles from './styles';
import baseStyles from '../styles';
import CustomButton from 'components/custom-button';
import CustomTextInput from 'components/custom-text-input';
import type { AuthorizationFormState, State } from 'flow/types';
import Link from 'components/link-button';
import Icon from 'react-native-vector-icons/dist/Entypo';
import { COLORS } from 'theme';

type Props = {
	form: AuthorizationFormState,
	navigateToForgotPassword: () => void,
	navigateToRegistration: () => void,
	setFieldPristine: (name: string, value: string) => void,
	setFieldValue: (name: string, value: string) => void,
}

class LoginForm extends React.Component<Props> {
	onPhoneChange = value => this.props.setFieldValue('phone', value);
	onPasswordChange = value => this.props.setFieldValue('password', value);

	onPhoneBlur = () => this.props.setFieldPristine('phone', false);
	onPasswordBlur = () => this.props.setFieldPristine('password', false);

	onSubmit = () => {
		//
	};

	render() {
		const {
			errors,
			pristine,
			values,
		} = this.props.form;

		return (
			<View style={baseStyles.container}>
				<Text style={baseStyles.label}>Авторизация</Text>
				<CustomTextInput
					containerStyle={baseStyles.inputContainer}
					error={!pristine.phone && errors.phone}
					label='Телефон'
					onBlur={this.onPhoneBlur}
					onChange={this.onPhoneChange}
					onSubmitEditing={() => this.passwordInput.focus()}
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
					label='Войти'
					onPress={this.onSubmit}
				/>
				<Link
					label='Забыли пароль?'
					onPress={this.props.navigateToForgotPassword}
				/>
				<View style={styles.orContainer}>
					<View style={styles.orDivider} />
					<Text style={styles.orText}>или</Text>
					<View style={styles.orDivider} />
				</View>
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
				<Link
					label='Нет аккаунта? Регистрация'
					onPress={this.props.navigateToRegistration}
					textStyle={styles.registrationLinkText}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state: State) => ({
	form: state.authorizationForm,
});

const mapDispatchToProps = {
	setFieldPristine,
	setFieldValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
