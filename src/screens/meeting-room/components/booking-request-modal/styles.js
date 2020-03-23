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
		alignItems: 'center',
		justifyContent: 'center',
	},
	backdrop: {
		...StyleSheet.absoluteFill,
		backgroundColor: COLORS.BLACK,
		zIndex: -10,
	},
	touchableAreaContainer: {
		...StyleSheet.absoluteFill,
		zIndex: -5,
	},
	touchableAreaView: {
		flex: 1,
	},
	innerContainer: {
		width: width - 40,
		backgroundColor: COLORS.WHITE,
		borderRadius: 10,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	closeButton: {
		position: 'absolute',
	},
	header: {
		...baseStyles.hugeText,
		textAlign: 'center',
	},
	description: {
		...baseStyles.smallText,
		marginHorizontal: 30,
		marginVertical: 20,
		textAlign: 'center',
	},
	text: {
		...baseStyles.smallText,
		textAlign: 'center',
	},
});
