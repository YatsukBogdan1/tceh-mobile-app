import { StyleSheet } from 'react-native';
import {COLORS, FONT_WEIGHTS} from 'theme';
import baseStyles from 'components/base/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		height: 500,
	},
	photoTourButton: {
		position: 'absolute',
		width: 170,
		right: 20,
		transform: [{
			translateY: -70,
		}],
		backgroundColor: COLORS.WHITE,
	},
	contentContainer: {
		backgroundColor: COLORS.WHITE,
		padding: 28,
	},
	label: {
		...baseStyles.hugeText,
		marginBottom: 10,
	},
	location: {
		...baseStyles.defaultText,
		marginBottom: 10,
	},
	boldText: {
		...baseStyles.regularText,
		fontWeight: FONT_WEIGHTS.bold,
	},
	subLabel: {
		...baseStyles.bigText,
		marginBottom: 10,
	},
	text: {
		...baseStyles.defaultText,
		marginBottom: 25,
	},
	commentsDivider: {
		height: 20,
	},
});
