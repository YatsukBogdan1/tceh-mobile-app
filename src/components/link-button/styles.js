import { StyleSheet } from 'react-native';
import { FONT_WEIGHTS } from 'theme';
import styles from 'components/base/styles';

export default StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	touchableArea: {
		padding: 20,
	},
	label: {
		...styles.regularText,
		fontWeight: FONT_WEIGHTS.semiBold,
		textDecorationLine: 'underline',
	},
});
