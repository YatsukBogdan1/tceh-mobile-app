import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	divider: {
		height: 1,
		backgroundColor: COLORS.VERY_LIGHT_GREY,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	label: {
		...baseStyles.bigText,
	},
	button: {
		height: 60,
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 100,
	},
	scrollView: {
		backgroundColor: COLORS.WHITE,
		flex: 1,
		padding: 20,
	},
	scrollDivider: {
		height: 20,
	},
	noEventsText: {
		...baseStyles.bigText,
		margin: 30,
		textAlign: 'center',
		color: COLORS.LIGHT_GREY,
	},
});
