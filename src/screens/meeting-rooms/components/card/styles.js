import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import {COLORS, FONT_WEIGHTS} from 'theme';

export default StyleSheet.create({
	container: {
		overflow: 'hidden',
		height: 280,
		borderRadius: 10,
		backgroundColor: COLORS.WHITE,
	},
	calendarButtonContainer : {
		backgroundColor: COLORS.WHITE,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
		height: 30,
		position: 'absolute',
		right: 10,
		top: 10,
		width: 30,
		zIndex: 100,
	},
	image: {
		flex: 1,
	},
	textContainer: {
		// height: 80,
		padding: 15,
	},
	textRowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textRowContainerWithMargin: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
	},
	textRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	label: {
		...baseStyles.defaultText,
		fontWeight: FONT_WEIGHTS.semiBold,
	},
	text: {
		...baseStyles.defaultText,
		marginLeft: 10,
	},
	icon: {
		marginRight: 15,
	},
	bookButton: {
		height: 30,
		borderRadius: 15,
		paddingHorizontal: 15,
	},
	bookButtonText: {
		...baseStyles.smallText,
	},
});
