import React from 'react';
import {
	Animated,
	Image,
	KeyboardAvoidingView,
	ScrollView,
	SafeAreaView,
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
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import CustomSwitch from 'components/custom-switch';
import CustomButton from 'components/custom-button';
import { COLORS } from 'theme';
import CustomSelect from 'components/custom-select';
import { INDUSTRIES_OPTIONS } from 'constants/company';
import {USER_ROLE} from '../../../../constants/user';

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

	onFieldChange = (field, value) => {
		this.showSaveButton();
		this.props.setFieldValue(field, value);
	};

	onAddressChange = value => this.onFieldChange('address', value);
	onAddressBlur = () => this.props.setFieldPristine('address', false);

	onDescriptionChange = value => this.onFieldChange('description', value);
	onDescriptionBlur = () => this.props.setFieldPristine('description', false);

	onEmailChange = value => this.onFieldChange('email', value);
	onEmailBlur = () => this.props.setFieldPristine('email', false);

	onFacebookURLChange = value => this.onFieldChange('facebookURL', value);
	onFacebookURLBlur = () => this.props.setFieldPristine('facebookURL', false);

	onIndustryChange = value => this.onFieldChange('industryId', value);

	onInstagramURLChange = value => this.onFieldChange('instagramURL', value);
	onInstagramURLBlur = () => this.props.setFieldPristine('instagramURL', false);

	onIsPrivateChange = () => this.onFieldChange('isPrivate', !this.props.form.values.isPrivate);

	onLabelChange = value => this.onFieldChange('label', value);
	onLabelBlur = () => this.props.setFieldPristine('label', false);

	onLinkedInURLChange = value => this.onFieldChange('linkedInURL', value);
	onLinkedInURLBlur = () => this.props.setFieldPristine('linkedInURL', false);

	onLocationChange = value => this.onFieldChange('locationId', value);

	onOfficeChange = value => this.onFieldChange('office', value);
	onOfficeBlur = () => this.props.setFieldPristine('office', false);

	onPhoneChange = value => this.onFieldChange('phone', value);
	onPhoneBlur = () => this.props.setFieldPristine('phone', false);

	onWebsiteChange = value => this.onFieldChange('website', value);
	onWebsiteBlur = () => this.props.setFieldPristine('website', false);

	onManagerChange = value => this.onFieldChange('managerId', value);

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
			form: {
				values,
				pristine,
				errors,
			},
			user,
		} = this.props;

		return (
			<KeyboardAvoidingView style={styles.container} behavior='padding'>
				<SafeAreaView style={styles.backgroundImageContainer}>
					<Image
						resizeMode='cover'
						style={styles.backgroundImage}
						source={IMAGE_ASSETS.COMPANY_BACKGROUND}
					/>
					<View style={{ flex: 1 }}>
						<TouchableOpacity
							style={styles.backButton}
							onPress={this.onBackPress}
						>
							<IonIcon
								name='ios-arrow-round-back'
								size={30}
								color={COLORS.WHITE}
							/>
						</TouchableOpacity>
						<View style={styles.avatarContainer}>
							<Image
								style={styles.avatarImage}
								source={IMAGE_ASSETS.APPSIDER_LOGO}
							/>
							<TouchableOpacity
								onPress={this.onEditPhotoPress}
								style={styles.editAvatarButton}
							>
								<IonIcon
									name='ios-camera'
									size={20}
								/>
							</TouchableOpacity>
						</View>
						<TouchableOpacity
							onPress={this.onEditPhotoPress}
							style={styles.editBackgroundButton}
						>
							<IonIcon
								name='ios-camera'
								size={20}
							/>
						</TouchableOpacity>
					</View>
				</SafeAreaView>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={styles.scrollView}
					contentContainerStyle={styles.scrollViewContentContainer}
				>
					<CustomTextInput
						error={!pristine.label && errors.label}
						label='Название компании'
						onBlur={this.onLabelBlur}
						onChange={this.onLabelChange}
						value={values.label}
						outlined={false}
					/>
					<CustomTextInput
						error={!pristine.address && errors.address}
						label='Юридический адрес'
						onBlur={this.onAddressBlur}
						onChange={this.onAddressChange}
						value={values.address}
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
						error={!pristine.website && errors.website}
						label='Сайт'
						onBlur={this.onWebsiteBlur}
						onChange={this.onWebsiteChange}
						value={values.website}
						outlined={false}
					/>
					<CustomSelect
						label='Отрасль'
						onChange={this.onIndustryChange}
						options={INDUSTRIES_OPTIONS}
						value={values.industryId}
						outlined={false}
					/>
					<CustomTextInput
						error={!pristine.email && errors.email}
						label='E-mail'
						onBlur={this.onEmailBlur}
						onChange={this.onEmailChange}
						value={values.email}
						outlined={false}
					/>
					<CustomSelect
						label='Локация'
						onChange={this.onLocationChange}
						options={this.props.locationsOptions}
						value={values.locationId}
						outlined={false}
					/>
					<CustomTextInput
						error={!pristine.office && errors.office}
						label='Оффис'
						onBlur={this.onOfficeBlur}
						onChange={this.onOfficeChange}
						value={values.office}
						outlined={false}
					/>
					<CustomTextInput
						error={!pristine.description && errors.description}
						label='Описание'
						onBlur={this.onDescriptionBlur}
						onChange={this.onDescriptionChange}
						value={values.description}
						outlined={false}
						multiline
					/>
					{user.role === USER_ROLE.ADMIN && (
						<CustomSelect
							label='Менеджер аккаунта'
							onChange={this.onManagerChange}
							options={[{
								value: '1',
								text: 'Bohdan Yatsuk',
							},{
								value: '2',
								text: 'Vedmid Natalya',
							},{
								value: '3',
								text: 'Lebedeva Angelina',
							}]}
							value={values.managerId}
							outlined={false}
						/>
					)}
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
