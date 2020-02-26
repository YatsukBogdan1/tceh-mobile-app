import React from 'react';
import {
	Animated,
	Image,
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import IMAGE_ASSETS from 'assets/images';
import styles from './styles';
import type { PersonalInfoFormState } from 'flow/types';
import CustomTextInput from 'components/custom-text-input';
import ProgressBar from './components/progress-bar';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import CustomSwitch from 'components/custom-switch';
import CustomButton from 'components/custom-button';

type Props = {
	form: PersonalInfoFormState,
	setFieldPristine: (name: string, value: string) => void,
	setFieldValue: (name: string, value: string) => void,
	setUserData: (data: Object) => void,
}

class PersonalInfoView extends React.Component<Props> {
	state = {
		keyboardVisible: false,
		saveButtonContainerBottom: new Animated.Value(-60),
		saveButtonContainerVisible: false,
	};

	get progressBarValue () {
		const { values } = this.props.form;
		const valuesLength = Object.keys(values).length;
		const enteredValuesLength = Object.values(values).filter(value => value && value.length > 0).length;
		return enteredValuesLength / valuesLength;
	}

	onFieldChange = (field, value) => {
		this.showSaveButton();
		this.props.setFieldValue(field, value);
	};

	onNameChange = value => this.onFieldChange('name', value);
	onNameBlur = () => this.props.setFieldPristine('name', false);

	onSurnameChange = value => this.onFieldChange('surname', value);
	onSurnameBlur = () => this.props.setFieldPristine('surname', false);

	onPositionChange = value => this.onFieldChange('position', value);
	onPositionBlur = () => this.props.setFieldPristine('position', false);

	onEmailChange = value => this.onFieldChange('email', value);
	onEmailBlur = () => this.props.setFieldPristine('email', false);

	onPhoneChange = value => this.onFieldChange('phone', value);
	onPhoneBlur = () => this.props.setFieldPristine('phone', false);

	onAboutChange = value => this.onFieldChange('about', value);
	onAboutBlur = () => this.props.setFieldPristine('about', false);

	onSkillsChange = value => this.onFieldChange('skills', value);
	onSkillsBlur = () => this.props.setFieldPristine('skills', false);

	onInterestsChange = value => this.onFieldChange('interests', value);
	onInterestsBlur = () => this.props.setFieldPristine('interests', false);

	onFacebookURLChange = value => this.onFieldChange('facebookURL', value);
	onFacebookURLBlur = () => this.props.setFieldPristine('facebookURL', false);

	onLinkedInURLChange = value => this.onFieldChange('linkedInURL', value);
	onLinkedInURLBlur = () => this.props.setFieldPristine('linkedInURL', false);

	onInstagramURLChange = value => this.onFieldChange('instagramURL', value);
	onInstagramURLBlur = () => this.props.setFieldPristine('instagramURL', false);

	onIsPrivateChange = () => this.onFieldChange('isPrivate', !this.props.form.values.isPrivate);

	onBackPress = () => Navigation.pop(this.props.componentId);

	onEditPhotoPress = () => {
		//
	};

	onSaveButtonPress = () => {
		this.props.setUserData(this.props.form.values);
		this.hideSaveButton();
	};

	showSaveButton = () => {
		if (this.state.saveButtonContainerVisible) return;
		this.setState({ saveButtonContainerVisible: true });
		Animated.timing(this.state.saveButtonContainerBottom, { toValue: 0, duration: 200 }).start();
	};

	hideSaveButton = () => {
		this.setState({ saveButtonContainerVisible: false });
		Animated.timing(this.state.saveButtonContainerBottom, { toValue: -60, duration: 200 }).start();
	};

	get saveButtonContainerStyle () {
		return StyleSheet.compose(
			styles.saveButtonContainer,
			{
				bottom: this.state.saveButtonContainerBottom,
			},
		);
	}

	render() {
		const {
			values,
			pristine,
			errors,
		} = this.props.form;

		return (
			<KeyboardAvoidingView style={styles.container} behavior='padding'>
				<TouchableOpacity
					style={styles.backButton}
					onPress={this.onBackPress}
				>
					<IonIcon
						name='ios-arrow-round-back'
						size={30}
					/>
				</TouchableOpacity>
				<View style={styles.userBlockContainer}>
					<View style={styles.avatarContainer}>
						<View>
							<Image
								source={IMAGE_ASSETS.PROFILE_AVATAR_DEMO}
							/>
							<TouchableOpacity
								onPress={this.onEditPhotoPress}
								style={styles.editPhotoButton}
							>
								<IonIcon
									name='ios-camera'
									size={20}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<ProgressBar value={this.progressBarValue} />
					<Text style={styles.text}>
						Пожалуйста, заполните Ваш профиль. За заполнение профиля на 100% Вас ожидает кофе в подарок.
					</Text>
				</View>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={styles.scrollView}
				>
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
						multiline
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
						LeftIconComponent={<EntypoIcon size={15} name='facebook-with-circle'/>}
						error={!pristine.facebookURL && errors.facebookURL}
						label='Facebook'
						onBlur={this.onFacebookURLBlur}
						onChange={this.onFacebookURLChange}
						value={values.facebookURL}
						outlined={false}
					/>
					<CustomTextInput
						LeftIconComponent={<EntypoIcon size={15} name='linkedin-with-circle'/>}
						error={!pristine.linkedInURL && errors.linkedInURL}
						label='LinkedIn'
						onBlur={this.onLinkedInURLBlur}
						onChange={this.onLinkedInURLChange}
						value={values.linkedInURL}
						outlined={false}
					/>
					<CustomTextInput
						LeftIconComponent={<EntypoIcon size={15} name='instagram-with-circle'/>}
						error={!pristine.instagramURL && errors.instagramURL}
						label='Instagram'
						onBlur={this.onInstagramURLBlur}
						onChange={this.onInstagramURLChange}
						value={values.instagramURL}
						outlined={false}
					/>
					<View style={styles.privatePropertyContainer}>
						<View style={styles.privatePropertyTextContainer}>
							<Text style={styles.privatePropertyHeader}>Приватность аккаунта</Text>
							<Text style={styles.privatePropertyText}>Если Ваш аккаунт приватный, он не отображается в сообществе</Text>
						</View>
						<CustomSwitch
							onChange={this.onIsPrivateChange}
							value={values.isPrivate}
						/>
					</View>
				</ScrollView>
				<Animated.View style={this.saveButtonContainerStyle}>
					<CustomButton
						label='Сохранить'
						onPress={this.onSaveButtonPress}
					/>
				</Animated.View>
			</KeyboardAvoidingView>
		);
	}
}

export default PersonalInfoView;
