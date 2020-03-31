import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';

export default StyleSheet.create({
	container: {},
	underlay: {
		...StyleSheet.absoluteFill,
		backgroundColor: COLORS.WHITE,
	},
	header: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		height: 50,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	button: {
		height: 40,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
