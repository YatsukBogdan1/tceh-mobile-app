import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';
import styles from 'components/base/styles';

export default StyleSheet.create({
	safeAreaContainer: {
		...styles.shadowBox,
		shadowOpacity: 0.2,
		backgroundColor: COLORS.WHITE,
	},
	container: {
		height: 70,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	button: {
		width: 170,
		marginRight: 15,
	},
});
