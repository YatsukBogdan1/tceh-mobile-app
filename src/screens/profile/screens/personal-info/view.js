import React from 'react';
import {
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';
import styles from './styles';
import type { PersonalInfoFormState } from 'flow/types';
import CustomTextInput from 'components/custom-text-input';

type Props = {
	form: PersonalInfoFormState,
	setFieldValue: (name: string, value: string) => void,
	setFieldPristine: (name: string, value: string) => void,
}

class PersonalInfoView extends React.Component<Props> {
	onNameChange = value => this.props.setFieldValue('name', value);
	onNameBlur = () => this.props.setFieldPristine('name', false);

	onSurnameChange = value => this.props.setFieldValue('surname', value);
	onSurnameBlur = () => this.props.setFieldPristine('surname', false);

	onPositionChange = value => this.props.setFieldValue('position', value);
	onPositionBlur = () => this.props.setFieldPristine('position', false);

	onEmailChange = value => this.props.setFieldValue('email', value);
	onEmailBlur = () => this.props.setFieldPristine('email', false);

	onPhoneChange = value => this.props.setFieldValue('phone', value);
	onPhoneBlur = () => this.props.setFieldPristine('phone', false);

	onAboutChange = value => this.props.setFieldValue('about', value);
	onAboutBlur = () => this.props.setFieldPristine('about', false);

	onSkillsChange = value => this.props.setFieldValue('skills', value);
	onSkillsBlur = () => this.props.setFieldPristine('skills', false);

	onInterestsChange = value => this.props.setFieldValue('interests', value);
	onInterestsBlur = () => this.props.setFieldPristine('interests', false);

	onFacebookURLChange = value => this.props.setFieldValue('facebookURL', value);
	onFacebookURLBlur = () => this.props.setFieldPristine('facebookURL', false);

	onLinkedInURLChange = value => this.props.setFieldValue('linkedInURL', value);
	onLinkedInURLBlur = () => this.props.setFieldPristine('linkedInURL', false);

	onInstagramURLChange = value => this.props.setFieldValue('instagramURL', value);
	onInstagramURLBlur = () => this.props.setFieldPristine('instagramURL', false);

	render() {
		const {
			values,
			pristine,
			errors,
		} = this.props.form;

		return (
			<KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
				<ScrollView style={styles.container}>
					<CustomTextInput
						error={!pristine.name && errors.name}
						label='Имя'
						onBlur={this.onNameBlur}
						onChange={this.onNameChange}
						value={values.name}
						outlined={false}
					/>
					<CustomTextInput
						error={!pristine.surname && errors.surname}
						label='Фамилия'
						onBlur={this.onSurnameBlur}
						onChange={this.onSurnameChange}
						value={values.surname}
						outlined={false}
					/>
					{/* birthday */}
					<CustomTextInput
						error={!pristine.position && errors.position}
						label='Позиция'
						onBlur={this.onPositionBlur}
						onChange={this.onPositionChange}
						value={values.position}
						outlined={false}
					/>
					{/*<CustomSelect label={} onChange={} options={}/>*/}
					<CustomTextInput
						error={!pristine.email && errors.email}
						label='E-mail'
						onBlur={this.onEmailBlur}
						onChange={this.onEmailChange}
						value={values.email}
						outlined={false}
					/>
					<CustomTextInput
						error={!pristine.phone && errors.phone}
						label='Телефон'
						onBlur={this.onPhoneBlur}
						onChange={this.onPhoneChange}
						value={values.phone}
						outlined={false}
					/>
					<CustomTextInput
						error={!pristine.skills && errors.skills}
						label='Навыки'
						onBlur={this.onSkillsBlur}
						onChange={this.onSkillsChange}
						value={values.skills}
						outlined={false}
					/>
					<CustomTextInput
						error={!pristine.about && errors.about}
						label='Расскажите о себе'
						onBlur={this.onAboutBlur}
						onChange={this.onAboutChange}
						value={values.about}
						outlined={false}
					/>
					<CustomTextInput
						error={!pristine.interests && errors.interests}
						label='Интересы'
						onBlur={this.onInterestsBlur}
						onChange={this.onInterestsChange}
						value={values.interests}
						outlined={false}
					/>
					<CustomTextInput
						error={!pristine.facebookURL && errors.facebookURL}
						label='Facebook'
						onBlur={this.onFacebookURLBlur}
						onChange={this.onFacebookURLChange}
						value={values.facebookURL}
						outlined={false}
					/>
					<CustomTextInput
						error={!pristine.linkedInURL && errors.linkedInURL}
						label='LinkedIn'
						onBlur={this.onLinkedInURLBlur}
						onChange={this.onLinkedInURLChange}
						value={values.linkedInURL}
						outlined={false}
					/>
					<CustomTextInput
						error={!pristine.instagramURL && errors.instagramURL}
						label='Instagram'
						onBlur={this.onInstagramURLBlur}
						onChange={this.onInstagramURLChange}
						value={values.instagramURL}
						outlined={false}
					/>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}

export default PersonalInfoView;
