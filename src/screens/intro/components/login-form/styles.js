import { StyleSheet } from 'react-native';
import styles from 'components/base/styles';
import { COLORS } from 'theme';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 45,
	},
	orContainer: {
		flexDirection: 'row',
		marginVertical: 15,
		alignItems: 'center',
	},
	orText: {
		...styles.regularText,
		color:  COLORS.YELLOW,
		marginHorizontal: 12,
	},
	orDivider: {
		flex: 1,
		height: 1,
		backgroundColor: COLORS.LIGHT_GREY,
	},
	registrationLinkText: {
		fontSize: 15,
	},
});
