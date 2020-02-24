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
});
