import {
	StyleSheet,
	Dimensions,
} from 'react-native';
import { COLORS } from 'theme';
import baseStyles from 'components/base/styles';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.WHITE,
	},
	imageContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	image: {
		borderRadius: 10,
		width: width - 20,
	},
	closeButton: {
		height: 60,
		position: 'absolute',
		right: 0,
		alignItems: 'center',
		justifyContent: 'center',
		top: 0,
		width: 60,
		zIndex: 100,
	},
	label: {
		...baseStyles.bigText,
		color: COLORS.BLACK,
		position: 'absolute',
		bottom: 80,
		left: 20,
		zIndex: 100,
	},
});
