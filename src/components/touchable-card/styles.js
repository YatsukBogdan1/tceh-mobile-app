import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import {
	COLORS,
	FONT_WEIGHTS,
} from 'theme';

export default StyleSheet.create({
	outerContainer: {
		...baseStyles.shadowBox,
		shadowOffset: {
			height: 2,
		},
	},
	container: {
		backgroundColor: COLORS.WHITE,
		borderColor: '#E3E3E3',
		borderRadius: 5,
		borderWidth: StyleSheet.hairlineWidth,
		flexDirection: 'row',
		height: 80,
		overflow: 'hidden',
	},
	image: {
		height: 80,
		width: 100,
	},
	textContainer: {
		paddingHorizontal: 15,
		justifyContent: 'center',
	},
	label: {
		...baseStyles.regularText,
		fontWeight: FONT_WEIGHTS.bold,
		marginBottom: 5,
	},
	description: {
		...baseStyles.defaultText,
		marginBottom: 5,
	},
	type: {
		...baseStyles.tinyText,
	},
});
