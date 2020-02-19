import { StyleSheet } from 'react-native';
import {COLORS, FONT_WEIGHTS} from 'theme';
import styles from 'components/base/styles';

export default StyleSheet.create({
	container: {
		height: 40,
		borderRadius: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.MAIN_ORANGE_COLOR,
	},
	label: {
		...styles.defaultText,
		marginHorizontal: 15,
		textTransform: 'uppercase',
		fontWeight: FONT_WEIGHTS.semiBold,
		letterSpacing: 1,
	},
});
