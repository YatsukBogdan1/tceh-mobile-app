import {
	StyleSheet,
	Dimensions,
} from 'react-native';
import { COLORS } from 'theme';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		position: 'absolute',
		zIndex: 100,
		width,
		top: 0,
	},
	underlay: {
		...StyleSheet.absoluteFill,
		backgroundColor: COLORS.WHITE,
		opacity: 0.5,
		borderBottomWidth: 1,
	},
	header: {
		flexDirection: 'row',
		paddingHorizontal: 10,
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
