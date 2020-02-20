import { StyleSheet } from 'react-native';
import { FONT_WEIGHTS } from 'theme';
import styles from 'components/base/styles';

export default StyleSheet.create({
	touchableArea: {
		padding: 20,
	},
	link: {
		...styles.regularText,
		fontWeight: FONT_WEIGHTS.semiBold,
		textDecorationLine: 'underline',
	},
});
