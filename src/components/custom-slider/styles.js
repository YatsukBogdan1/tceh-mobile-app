import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';
import { CURSOR_CONTAINER_SIZE } from './constants';

export default StyleSheet.create({
	container: {
		marginHorizontal: 0,
		height: 50,
		justifyContent: 'center',
	},
	track: {
		height: 6,
		borderRadius: 3,
		backgroundColor: COLORS.LIGHT_GREY,
	},
	cursorContainer: {
		backgroundColor: 'red',
		alignItems: 'center',
		height: CURSOR_CONTAINER_SIZE,
		justifyContent: 'center',
		position: 'absolute',
		width: CURSOR_CONTAINER_SIZE,
	},
	leftCursor: {
		borderRadius: 15,
		backgroundColor: COLORS.WHITE,
		borderWidth: 3,
		borderColor: COLORS.MAIN_ORANGE_COLOR,
	},
	rightCursor: {
		backgroundColor: COLORS.MAIN_ORANGE_COLOR,
	},
});
