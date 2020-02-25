import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
	},
	buttonsListDivider: {
		backgroundColor: COLORS.LIGHT_GREY,
		height: 1,
		marginHorizontal: 30,
	},
	list: {
		flex: 1,
	},
	logoutButton: {
		position: 'absolute',
		top: 20,
		right: 20,
		height: 40,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
