import { StyleSheet, Dimensions } from 'react-native';
import styles from 'components/base/styles';
import { COLORS } from 'theme';
import { ANIMATION_VALUES } from './constants';
const { width, height } = Dimensions.get('window');

const imageContainer = {
	height,
	left: 0,
	position: 'absolute',
	top: 0,
	width,
};

export default StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		overflow: 'visible',
	},
	backgroundImage: {
		...imageContainer,
		zIndex: -1,
	},
	imageOverlay: {
		...imageContainer,
		backgroundColor: 'rgba(0, 0, 0, 0.35)',
		zIndex: 10,
	},
	swiperContainer: {
		zIndex: 100,
	},
	cardContainer: {
		flex: 1,
		alignItems: 'center',
	},
	paginationStyle: {
		marginBottom: 200,
	},
	logo: {
		zIndex: 100,
		position: 'absolute',
		marginBottom: 50,
	},
	text: {
		...styles.bigText,
		zIndex: 100,
		textAlign: 'center',
		color: COLORS.WHITE,
		position: 'absolute',
		top: height * 0.46,
	},
	linkContainerStyle: {
		zIndex: 100,
		position: 'absolute',
		top: height * 0.8,
	},
	linkTextStyle: {
		fontSize: 22,
		color: COLORS.WHITE,
	},
	registrationButtonContainer: {
		marginBottom: 20,
	},
	loginButton: {
		backgroundColor: COLORS.TRANSPARENT,
		borderColor: COLORS.MAIN_ORANGE_COLOR,
		borderWidth: 2,
	},
	loginButtonLabel: {
		color: COLORS.MAIN_ORANGE_COLOR,
	},
	authorizationButtonsContainer: {
		zIndex: 100,
		paddingHorizontal: 30,
		left: 0,
		height: ANIMATION_VALUES.AUTH_BUTTONS_CONTAINER.HEIGHT,
		position: 'absolute',
		width,
	},
	authorizationContainer: {
		borderTopLeftRadius: 45,
		borderTopRightRadius: 45,
		backgroundColor: COLORS.WHITE,
		height: ANIMATION_VALUES.AUTHORIZATION_CONTAINER.HEIGHT,
		width: width,
		position: 'absolute',
		left: 0,
	},
});
