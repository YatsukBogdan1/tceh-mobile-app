import React from 'react';
import {
	Text,
	View,
	Image,
	Animated,
	StyleSheet,
} from 'react-native';
import IMAGE_ASSETS from 'assets/images';
import styles from './styles';
import Swiper from 'react-native-swiper';
import { COLORS } from '../../theme';
import Link from '../../components/link-button';
import CustomButton from '../../components/custom-button';
import {
	BUTTONS_CONTAINER_HIDDEN_BOTTOM,
	BUTTONS_CONTAINER_HIDDEN_OPACITY,
	BUTTONS_CONTAINER_VISIBLE_BOTTOM, BUTTONS_CONTAINER_VISIBLE_OPACITY,
} from './constants';

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

class ScreenName extends React.Component {
	state = {
		buttonsContainerBottom: new Animated.Value(BUTTONS_CONTAINER_HIDDEN_BOTTOM),
		buttonsContainerOpacity: new Animated.Value(BUTTONS_CONTAINER_HIDDEN_OPACITY),
	};

	showButtons = () => {
		Animated.timing(this.state.buttonsContainerBottom).stop();
		Animated.timing(this.state.buttonsContainerOpacity).stop();
		Animated.parallel([
			Animated.timing(this.state.buttonsContainerBottom, { toValue: BUTTONS_CONTAINER_VISIBLE_BOTTOM }),
			Animated.timing(this.state.buttonsContainerOpacity, { toValue: BUTTONS_CONTAINER_VISIBLE_OPACITY }),
		]).start();
	};

	hideButtons = () => {
		Animated.timing(this.state.buttonsContainerBottom).stop();
		Animated.timing(this.state.buttonsContainerOpacity).stop();

		Animated.parallel([
			Animated.timing(this.state.buttonsContainerBottom, { toValue: BUTTONS_CONTAINER_HIDDEN_BOTTOM }),
			Animated.timing(this.state.buttonsContainerOpacity, { toValue: BUTTONS_CONTAINER_HIDDEN_OPACITY }),
		]).start();
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

	get buttonsContainerStyle () {
		return StyleSheet.compose(
			styles.authorizationButtonsContainer,
			{
				bottom: this.state.buttonsContainerBottom,
				opacity: this.state.buttonsContainerOpacity,
			},
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.logo} source={IMAGE_ASSETS.LOGO}/>
				<Swiper
					ref={_ref => this.rootSwiper = _ref}
					showsPagination={false}
					onIndexChanged={this.onRootSwiperIndexChanged}
					style={styles.swiperContainer}
					loop={false}
				>
					<Swiper
						ref={_ref => this.childSwiper = _ref}
						style={styles.swiperContainer}
						paginationStyle={styles.paginationStyle}
						loop={false}
						activeDotColor={COLORS.MAIN_ORANGE_COLOR}
						dotColor={COLORS.WHITE}
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
								onPress={() => false}
								containerStyle={styles.registrationButtonContainer}
							/>
							<CustomButton
								label='Вход'
								style={styles.loginButton}
								labelStyle={styles.loginButtonLabel}
								onPress={() => false}
							/>
						</Animated.View>
					</View>
				</Swiper>
			</View>
		);
	}
}

export default ScreenName;
