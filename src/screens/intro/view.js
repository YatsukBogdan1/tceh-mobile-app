import React from 'react';
import {
	Animated,
	Easing,
	Image,
	Keyboard,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import IMAGE_ASSETS from 'assets/images';
import styles from './styles';
import Swiper from 'react-native-swiper';
import { Navigation } from 'react-native-navigation';
import { COLORS } from 'theme';
import Link from 'components/link-button';
import CustomButton from 'components/custom-button';
import { ANIMATION_VALUES } from './constants';
import RegistrationForm from './components/registration-form';
import LoginForm from './components/login-form';
import ForgotPasswordForm from './components/forgot-password-form';
import NewPasswordForm from './components/new-password-form';
import SmsCodeForm from './components/sms-code-form';
import * as SCREENS from '../../constants/screens';
import {TABS_LAYOUT} from '../../navigation/layouts';

const slides = [{
	text: 'TCEH - это полностью готовые для работы офисы класса А в самом центре Киева.',
	image: IMAGE_ASSETS.OFFICE_PHOTO_1,
}, {
	text: 'Работа 24/7\nТехника для презентаций.\nWhite-board, барбекю-зона для мероприятий.\nПереговорные от 6 человек.',
	image: IMAGE_ASSETS.OFFICE_PHOTO_2,
}, {
	text: 'Мы предлагаем большой выбор офисов разного формата с возможностью учета особых пожеланий или потребностей.',
	image: IMAGE_ASSETS.OFFICE_PHOTO_3,
}];

const animationConfig = {
	duration: 400,
	easing: Easing.quad,
};

class IntroScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			authorizationContainerTop: new Animated.Value(ANIMATION_VALUES.AUTHORIZATION_CONTAINER.HIDDEN.TOP),
			buttonsContainerBottom: new Animated.Value(ANIMATION_VALUES.AUTH_BUTTONS_CONTAINER.HIDDEN.BOTTOM),
			buttonsContainerOpacity: new Animated.Value(ANIMATION_VALUES.AUTH_BUTTONS_CONTAINER.HIDDEN.OPACITY),
			logoHeight: new Animated.Value(ANIMATION_VALUES.LOGO.INTRO_PAGE.HEIGHT),
			logoTop: new Animated.Value(ANIMATION_VALUES.LOGO.INTRO_PAGE.TOP),
			rootSwiperScrollEnabled: true,
			smsCodeFormOpened: false,
		};
	}

	animateValues (animations) {
		const _animations = [];
		animations.forEach(animation => {
			Animated.timing(animation.instance).stop();
			_animations.push(Animated.timing(animation.instance, {
				toValue: animation.toValue,
				...animationConfig,
			}));
		});
		Animated.parallel(_animations).start();
	}

	componentDidMount() {
		this.keyboardWillShowListener = Keyboard.addListener(
			'keyboardWillShow',
			this._keyboardWillShow,
		);
		this.keyboardWillHideListener = Keyboard.addListener(
			'keyboardWillHide',
			this._keyboardWillHide,
		);
	}

	componentWillUnmount() {
		this.keyboardWillShowListener.remove();
		this.keyboardWillHideListener.remove();
	}

	_keyboardWillShow = () => {
		this.animateValues([{
			instance: this.state.authorizationContainerTop,
			toValue: ANIMATION_VALUES.AUTHORIZATION_CONTAINER.VISIBLE.KEYBOARD_VISIBLE_TOP
		}, {
			instance: this.state.logoTop,
			toValue: ANIMATION_VALUES.LOGO.AUTH_PAGE.KEYBOARD_VISIBLE_TOP,
		}]);
	};

	_keyboardWillHide = () => {
		this.animateValues([{
			instance: this.state.authorizationContainerTop,
			toValue: ANIMATION_VALUES.AUTHORIZATION_CONTAINER.VISIBLE.KEYBOARD_HIDDEN_TOP
		}, {
			instance: this.state.logoTop,
			toValue: ANIMATION_VALUES.LOGO.AUTH_PAGE.KEYBOARD_HIDDEN_TOP,
		}]);
	};

	formScrollBy = index => this.formsSwiper.scrollBy(index, true);

	scrollToRegistrationFromLogin = () => this.formScrollBy(-1);

	scrollToLoginFromRegistration = () => this.formScrollBy(1);

	scrollToForgotPasswordFromLogin = () => this.formScrollBy(1);

	scrollToSmsCodeFromRegistration = () => {
		this.smsCodeForm.focusSmsCodeInput();
		this.formScrollBy(3);
	};
	scrollToSmsCodeFromForgotPassword = () => {
		this.smsCodeForm.focusSmsCodeInput();
		this.formScrollBy(1);
	};

	scrollToNewPasswordFromSmsCode = () => this.formScrollBy(1);

	showAuthorizationContainer = () => {
		this.setState({ rootSwiperScrollEnabled: false });
		this.animateValues([
			...this.logoToTopAnimations,
			{
				instance: this.state.authorizationContainerTop,
				toValue: ANIMATION_VALUES.AUTHORIZATION_CONTAINER.VISIBLE.KEYBOARD_HIDDEN_TOP,
			},
		]);
	};

	get logoToTopAnimations () {
		return [{
			instance: this.state.logoTop,
			toValue: ANIMATION_VALUES.LOGO.AUTH_PAGE.KEYBOARD_HIDDEN_TOP,
		}, {
			instance: this.state.logoHeight,
			toValue: ANIMATION_VALUES.LOGO.AUTH_PAGE.HEIGHT,
		}];
	}

	onRegistrationPress = () => {
		this.showAuthorizationContainer();
	};

	onLoginPress = () => {
		this.showAuthorizationContainer();
		this.scrollToLoginFromRegistration();
	};

	showButtons = () => {
		this.animateValues([{
			instance: this.state.buttonsContainerBottom,
			toValue: ANIMATION_VALUES.AUTH_BUTTONS_CONTAINER.VISIBLE.BOTTOM,
		}, {
			instance: this.state.buttonsContainerOpacity,
			toValue: ANIMATION_VALUES.AUTH_BUTTONS_CONTAINER.VISIBLE.OPACITY,
		}]);
	};

	hideButtons = () => {
		this.animateValues([{
			instance: this.state.buttonsContainerBottom,
			toValue: ANIMATION_VALUES.AUTH_BUTTONS_CONTAINER.HIDDEN.BOTTOM,
		}, {
			instance: this.state.buttonsContainerOpacity,
			toValue: ANIMATION_VALUES.AUTH_BUTTONS_CONTAINER.HIDDEN.OPACITY,
		}]);
	};

	onRootSwiperIndexChanged = index => {
		if (index === 1) {
			this.showButtons();
		}
		if (index === 0) {
			this.hideButtons();
		}
	};

	scrollToEnd = () => {
		if (!this.rootSwiper || !this.childSwiper) {
			return;
		}
		this.rootSwiper.scrollBy(1, true);

		setTimeout(() => {
			this.childSwiper.scrollBy(2, true);
			this.showButtons();
		}, 1000);
	};

	navigateToApp = () => {
		Navigation.push(this.props.componentId, TABS_LAYOUT);
	};

	get logoStyle () {
		return StyleSheet.compose(
			styles.logo,
			{
				height: this.state.logoHeight,
				top: this.state.logoTop,
			}
		);
	}

	get buttonsContainerStyle () {
		return StyleSheet.compose(
			styles.authorizationButtonsContainer,
			{
				bottom: this.state.buttonsContainerBottom,
				opacity: this.state.buttonsContainerOpacity,
			},
		);
	}

	get authorizationContainerStyle () {
		return StyleSheet.compose(
			styles.authorizationContainer,
			{
				top: this.state.authorizationContainerTop,
			}
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Animated.Image
					resizeMode='contain'
					source={IMAGE_ASSETS.LOGO}
					style={this.logoStyle}
				/>
				<Swiper
					loop={false}
					onIndexChanged={this.onRootSwiperIndexChanged}
					ref={_ref => this.rootSwiper = _ref}
					scrollEnabled={this.state.rootSwiperScrollEnabled}
					showsPagination={false}
					style={styles.swiperContainer}
				>
					<Swiper
						activeDotColor={COLORS.MAIN_ORANGE_COLOR}
						dotColor={COLORS.WHITE}
						loop={false}
						paginationStyle={styles.paginationStyle}
						ref={_ref => this.childSwiper = _ref}
						style={styles.swiperContainer}
					>
						{slides.map(slide => (
							<View style={styles.cardContainer}>
								<Image style={styles.backgroundImage} source={slide.image}/>
								<View style={styles.imageOverlay} />
								<Text style={styles.text}>{slide.text}</Text>
								<Link
									containerStyle={styles.linkContainerStyle}
									textStyle={styles.linkTextStyle}
									label='Далее'
									onPress={this.scrollToEnd}
								/>
							</View>
						))}
					</Swiper>
					<View style={styles.cardContainer}>
						<Image style={styles.backgroundImage} source={IMAGE_ASSETS.OFFICE_PHOTO_4}/>
						<View style={styles.imageOverlay} />
						<Text style={styles.text}>Это больше, чем коворкинг!</Text>
						<Animated.View style={this.buttonsContainerStyle}>
							<CustomButton
								label='Регистрация'
								onPress={this.onRegistrationPress}
								containerStyle={styles.registrationButtonContainer}
							/>
							<CustomButton
								label='Вход'
								style={styles.loginButton}
								labelStyle={styles.loginButtonLabel}
								onPress={this.onLoginPress}
							/>
						</Animated.View>
					</View>
				</Swiper>
				<Animated.View style={this.authorizationContainerStyle}>
					<Swiper
						ref={_ref => this.formsSwiper = _ref}
						scrollEnabled={false}
						showsPagination={false}
					>
						<RegistrationForm
							navigateToLogin={this.scrollToLoginFromRegistration}
							navigateToSmsCode={this.scrollToSmsCodeFromRegistration}
						/>
						<LoginForm
							navigateToForgotPassword={this.scrollToForgotPasswordFromLogin}
							navigateToRegistration={this.scrollToRegistrationFromLogin}
						/>
						<ForgotPasswordForm
							navigateToSmsCode={this.scrollToSmsCodeFromForgotPassword}
						/>
						<SmsCodeForm
							navigateToNewPassword={this.scrollToNewPasswordFromSmsCode}
							ref={_ref => this.smsCodeForm = _ref}
						/>
						<NewPasswordForm
							navigateToApp={this.navigateToApp}
						/>
					</Swiper>
				</Animated.View>
			</View>
		);
	}
}

export default IntroScreen;
