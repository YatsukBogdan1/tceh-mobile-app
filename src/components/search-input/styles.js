import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

export default StyleSheet.create({
	container: {
		...baseStyles.boxShadow,
		alignItems: 'center',
		backgroundColor: COLORS.WHITE,
		borderColor: COLORS.LIGHT_GREY,
		borderRadius: 19,
		borderWidth: StyleSheet.hairlineWidth,
		flex: 1,
		flexDirection: 'row',
		height: 38,
		paddingHorizontal: 15,
	},
	textInput: {
		...baseStyles.regularText,
		flex: 1,
	},
});
