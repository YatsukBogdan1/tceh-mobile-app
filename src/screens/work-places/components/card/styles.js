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
	likeButtonContainer : {
		position: 'absolute',
		top: 5,
		right: 5,
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
		...baseStyles.regularText,
		fontWeight: FONT_WEIGHTS.semiBold,
	},
	text: {
		...baseStyles.defaultText,
	},
	icon: {
		marginRight: 15,
	}
});
