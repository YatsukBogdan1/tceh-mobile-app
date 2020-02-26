import {
	StyleSheet,
	Dimensions,
} from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		paddingBottom: 60,
	},
	userBlockContainer: {
		marginBottom: 20,
	},
	avatarContainer: {
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
	},
	backButton: {
		position: 'absolute',
		top: 20,
		left: 20,
		height: 40,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 100,
	},
	editPhotoButton: {
		...baseStyles.shadowBox,
		shadowOpacity: 0.15,
		alignItems: 'center',
		backgroundColor: COLORS.WHITE,
		height: 30,
		borderRadius: 15,
		justifyContent: 'center',
		bottom: 0,
		position: 'absolute',
		right: 0,
		width: 30,
		zIndex: 100,
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
