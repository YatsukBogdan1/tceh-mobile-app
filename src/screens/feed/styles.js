import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		height: 50,
		alignItems: 'center'
	},
	touchableBadgesContainer: {
		flexDirection: 'row',
	},
	addPostButtonContainer: {
		alignItems: 'center',
		backgroundColor: COLORS.MAIN_ORANGE_COLOR,
		borderRadius: 19,
		height: 38,
		justifyContent: 'center',
		marginLeft: 15,
		width: 38,
	},
});
