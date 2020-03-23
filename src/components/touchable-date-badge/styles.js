import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';
import baseStyles from 'components/base/styles';

export default StyleSheet.create({
	container: {
		...baseStyles.shadowBox,
		alignItems: 'center',
		backgroundColor: COLORS.WHITE,
		borderRadius: 17.5,
		flexDirection: 'row',
		height: 35,
		justifyContent: 'center',
		overflow: 'visible',
		paddingHorizontal: 15,
	},
	iconContainer: {
		marginRight: 10,
	},
	text: {
		...baseStyles.smallText,
	},
});
