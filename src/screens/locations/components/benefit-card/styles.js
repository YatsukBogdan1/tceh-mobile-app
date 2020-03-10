import {
	StyleSheet,
	Dimensions,
} from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		width: width - 80,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		paddingHorizontal: 15,
	},
	imageOverlay: {
		...StyleSheet.absoluteFill,
		zIndex: -1,
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
	},
	image: {
		...StyleSheet.absoluteFill,
		width: width - 80,
		height: 400,
		zIndex: -2,
	},
	text: {
		...baseStyles.regularText,
		textAlign: 'center',
		color: COLORS.WHITE,
		zIndex: 100,
	},
});
