import { StyleSheet } from 'react-native';
import { COLORS, FONT_WEIGHTS } from 'theme';
import styles from 'components/base/styles';

export default StyleSheet.create({
	container: {
		height: 40,
		borderRadius: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.MAIN_ORANGE_COLOR,
		borderWidth: 1,
	},
	label: {
		...styles.defaultText,
		marginHorizontal: 10,
		textTransform: 'uppercase',
		fontWeight: FONT_WEIGHTS.semiBold,
		letterSpacing: 1,
	},
	isLoadingContainer: {
		position: 'absolute',
		backgroundColor: 'rgba(255, 255, 255,0.5)',
		top: -1,
		bottom: -1,
		left: -1,
		right: -1,
		zIndex: 100,
		alignItems: 'flex-end',
		paddingRight: 14,
		justifyContent: 'center',
	},
});
