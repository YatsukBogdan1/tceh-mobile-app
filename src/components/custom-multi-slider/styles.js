import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';

export const ITEM_HEIGHT = 36;
export const HEADER_OUTLINED_HEIGHT = 36;
export const HEADER_REGULAR_HEIGHT = 12;
export const FOOTER_HEIGHT = 12;

const item = {
	height: ITEM_HEIGHT,
	justifyContent: 'center',
	paddingLeft: 24,
};

export default StyleSheet.create({
	textInput: {
		flex: 1,
		height: 48,
		padding: 0,
	},
	optionsContainer: {
		zIndex: -1,
		borderWidth: 1,
		borderTopColor: 'transparent',
		borderBottomColor: COLORS.LIGHT_GREY,
		borderLeftColor: COLORS.LIGHT_GREY,
		borderRightColor: COLORS.LIGHT_GREY,
		position: 'absolute',
		backgroundColor: 'white',
	},
	optionsContainerFooter: {
		height: FOOTER_HEIGHT,
	},
	item: {
		...item,
	},
	itemSelected: {
		...item,
		backgroundColor: COLORS.MAIN_ORANGE_COLOR_TRANSPARENT,
	},
	arrowContainer: {
		right: 15,
		position: 'absolute',
	},
});
