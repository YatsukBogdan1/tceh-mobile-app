import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	divider: {
		height: 1,
		backgroundColor: COLORS.LIGHT_GREY,
	},
	label: {
		...baseStyles.bigText,
		marginVertical: 27,
		textAlign: 'center',
	},
	backButton: {
		position: 'absolute',
		top: 20,
		left: 20,
		height: 40,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 100,
	},
	scrollView: {
		backgroundColor: COLORS.WHITE,
		flex: 1,
		padding: 20,
		marginTop: 20,
	},
	scrollDivider: {
		height: 20,
	},
	filterButtonsContainer: {
		flexDirection: 'row',
		paddingHorizontal: 10,
	},
	noSavedText: {
		...baseStyles.bigText,
		margin: 30,
		textAlign: 'center',
		color: COLORS.LIGHT_GREY,
	},
});
