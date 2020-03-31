import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

export default StyleSheet.create({
	container: {
		...baseStyles.shadowBox,
		flex: 1,
		backgroundColor: COLORS.WHITE,
		borderRadius: 15,
	},
	innerContainer: {
		flex: 1,
		overflow: 'hidden',
		borderRadius: 15,
	},
	backgroundImageContainer: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 30,
	},
	backgroundImage: {
		...StyleSheet.absoluteFill,
	},
	logoImage: {
		height: 75,
		width: 75,
		borderRadius: 37.5,
	},
	textContentContainer: {
		backgroundColor: COLORS.WHITE,
		padding: 20,
	},
	row: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	label: {
		...baseStyles.hugeText,
		marginBottom: 10,
	},
	industry: {
		...baseStyles.smallText,
		color: COLORS.LIGHT_GREY,
		marginBottom: 10,
	},
	description: {
		...baseStyles.regularText,
		marginBottom: 15,
	},
	text: {
		...baseStyles.regularText,
		marginLeft: 10,
	},
});
