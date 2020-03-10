import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

export default StyleSheet.create({
	shadowBox: {
		...baseStyles.shadowBox,
		width: 130,
	},
	container: {
		flex: 1,
		backgroundColor: COLORS.WHITE,
		overflow: 'hidden',
		borderRadius: 10,
	},
	image: {
		flex: 1,
	},
	textContainer: {
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: baseStyles.smallText,
});
