import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';
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
	button: {
		width: 170,
	},
});
