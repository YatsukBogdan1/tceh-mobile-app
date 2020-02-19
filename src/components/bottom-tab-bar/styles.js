import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';
import styles from 'components/base/styles';

export default StyleSheet.create({
	container: {
		height: 50,
		flexDirection: 'row',
		backgroundColor: COLORS.WHITE,
	},
	itemBadgeContainer: {
		alignItems: 'center',
		height: 24,
		justifyContent: 'center',
		position: 'absolute',
		zIndex: 100,
		transform: [{
			translateX: 15,
		}, {
			translateY: -15,
		}],
		width: 24,
	},
	itemContainer: {
		height: 50,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	itemLabel: {
		...styles.tinyText,
	},
	icon: {
		height: 20,
		width: 20,
		marginBottom: 3,
	},
	itemBadgeText: {
		...styles.tinyText,
		color: COLORS.WHITE,
	},
	itemBadge: {
		alignItems: 'center',
		backgroundColor: COLORS.MAIN_ORANGE_COLOR,
		borderRadius: 8,
		justifyContent: 'center',
	},
});
