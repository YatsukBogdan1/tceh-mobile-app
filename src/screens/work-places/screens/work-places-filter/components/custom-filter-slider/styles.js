import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import { FONT_WEIGHTS } from 'theme';

export default StyleSheet.create({
	container: {

	},
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
	},
	label: {
		...baseStyles.regularText,
	},
	value: {
		...baseStyles.regularText,
		fontWeight: FONT_WEIGHTS.semiBold,
	},
});
