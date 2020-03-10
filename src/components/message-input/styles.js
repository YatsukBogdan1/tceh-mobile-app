import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';

const arrowUpContainer = {
	alignItems: 'center',
	backgroundColor: COLORS.MAIN_ORANGE_COLOR,
	borderRadius: 20,
	height: 40,
	justifyContent: 'center',
	marginLeft: 10,
	width: 40,
};

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	textInputContainer: {
		borderRadius: 20,
		// height: 40,
		minHeight: 40,
		maxHeight: 200,
		borderWidth: 1,
		paddingHorizontal: 15,
		paddingVertical: 5,
		flex: 1,
		borderColor: COLORS.VERY_LIGHT_GREY,
		justifyContent: 'center'
	},
	arrowUpContainerActive: {
		...arrowUpContainer,
	},
	arrowUpContainerDisabled: {
		...arrowUpContainer,
		opacity: 0.5,
	},
	textInput: {
		flex: 1,
	},
});
