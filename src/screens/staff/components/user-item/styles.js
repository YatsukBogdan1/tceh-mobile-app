import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import {
	COLORS,
	FONT_WEIGHTS,
} from 'theme';

export default StyleSheet.create({
	container: {
		backgroundColor: COLORS.WHITE,
		height: 80,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: COLORS.LIGHT_GREY,
		borderRadius: 10,
		overflow: 'hidden',
	},
	row: {
		flexDirection: 'row',
	},
	image: {
		height: 80,
		width: 100,
	},
	textContainer: {
		paddingLeft: 15,
		justifyContent: 'center',
	},
	name: {
		...baseStyles.regularText,
		fontWeight: FONT_WEIGHTS.semiBold,
	},
	surname: {
		...baseStyles.regularText,
		fontWeight: FONT_WEIGHTS.semiBold,
		marginBottom: 5,
	},
	position: {
		...baseStyles.smallText,
	},
});
