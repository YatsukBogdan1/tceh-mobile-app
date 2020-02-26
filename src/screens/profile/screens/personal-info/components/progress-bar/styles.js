import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';

export default StyleSheet.create({
	container: {
		backgroundColor: COLORS.LIGHT_GREY,
		borderRadius: 5,
		height: 10,
		marginVertical: 16,
		overflow: 'hidden',
	},
	progressBar: {
		height: 10,
		borderRadius: 5,
		backgroundColor: COLORS.MAIN_ORANGE_COLOR,
	},
});
