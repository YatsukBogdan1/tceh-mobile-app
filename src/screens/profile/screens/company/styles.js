import {
	StyleSheet,
	Dimensions,
} from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

const { width } = Dimensions.get('window');

const editPhotoButton = {
	...baseStyles.shadowBox,
	shadowOpacity: 0.15,
	alignItems: 'center',
	backgroundColor: COLORS.WHITE,
	height: 30,
	borderRadius: 15,
	justifyContent: 'center',
	position: 'absolute',
	width: 30,
	zIndex: 100,
};

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImageContainer: {
		height: 250,
	},
	backgroundImage: {
		...StyleSheet.absoluteFill,
	},
	avatarContainer: {
		position: 'absolute',
		bottom: 25,
		left: 25,
		alignItems: 'center',
	},
	text: {
		...baseStyles.smallText,
		textAlign: 'center',
	},
	avatarImage: {
		borderRadius: 50,
		height: 100,
		overflow: 'hidden',
		width: 100,
	},
	scrollView: {
		flex: 1,
		backgroundColor: COLORS.WHITE,
	},
	scrollViewContentContainer: {
		padding: 30,
	},
	backButton: {
		position: 'absolute',
		top: 10,
		left: 10,
		height: 40,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 100,
	},
	editAvatarButton: {
		...editPhotoButton,
		bottom: 0,
		right: 0,
	},
	editBackgroundButton: {
		...editPhotoButton,
		bottom: 30,
		right: 20,
	},
	privatePropertyContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: 90,
	},
	privatePropertyTextContainer: {
		flex: 1,
		marginRight: 60,
	},
	privatePropertyHeader: {
		...baseStyles.smallText,
		textTransform: 'uppercase',
		marginBottom: 5,
	},
	privatePropertyText: {
		...baseStyles.tinyText,
	},
	saveButtonContainer: {
		paddingHorizontal: 30,
		position: 'absolute',
		width,
		height: 60,
	},
});
