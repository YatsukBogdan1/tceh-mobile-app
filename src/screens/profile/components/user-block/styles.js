import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import { FONT_WEIGHTS } from 'theme';

export default StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	avatar: {
		height: 100,
		width: 100,
		borderRadius: 50,
		marginBottom: 10,
	},
	name: {
		...baseStyles.regularText,
		textAlign: 'center',
		fontWeight: FONT_WEIGHTS.bold,
		marginBottom: 6,
	},
	position: {
		...baseStyles.defaultText,
		textAlign: 'center',
	},
});
