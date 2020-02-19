import { StyleSheet } from 'react-native';
import styles from 'components/base/styles';
import { FONT_WEIGHTS } from '../../theme';

export default StyleSheet.create({
	container: {
		margin: 16,
		overflow: 'visible',
	},
	mainHeaderText: {
		...styles.hugeText,
		fontWeight: FONT_WEIGHTS.bold,
		marginBottom: 20,
	},
	subheaderText: {
		...styles.bigText,
		fontWeight: FONT_WEIGHTS.semiBold,
		marginBottom: 10,
	},
	componentText: {
		...styles.regularText,
		fontWeight: FONT_WEIGHTS.semiBold,
		marginBottom: 10,
	},
});
