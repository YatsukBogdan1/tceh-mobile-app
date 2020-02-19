import { StyleSheet } from 'react-native';
import {
	COLORS,
	FONT_WEIGHTS,
} from 'theme';
import styles from 'components/base/styles';

export default StyleSheet.create({
	container: {
		...styles.shadowBox,
		height: 70,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 30,
		backgroundColor: COLORS.WHITE
	},
	linkLabel: {
		...styles.regularText,
		fontWeight: FONT_WEIGHTS.semiBold,
		textDecorationLine: 'underline',
	},
});
