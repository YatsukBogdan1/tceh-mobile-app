import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import {COLORS, FONT_WEIGHTS} from 'theme';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
		padding: 40,
	},
	label: {
		...baseStyles.bigText,
		marginVertical: 27,
		textAlign: 'center',
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
	linkTextStyle: {
		color: COLORS.MAIN_ORANGE_COLOR,
	},
});
