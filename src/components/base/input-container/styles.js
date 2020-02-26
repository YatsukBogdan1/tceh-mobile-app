import { StyleSheet } from 'react-native';
import styles from 'components/base/styles';
import {
	COLORS,
	FONT_WEIGHTS, FONTS,
} from 'theme';
import { LABEL_INNER_PADDING } from './constants';

const container = {
	height: 48,
	marginTop: 10,
	backgroundColor: COLORS.WHITE,
	overflow: 'hidden',
};

export default StyleSheet.create({
	container: {
		...container,
		borderBottomWidth: 1,
	},
	containerOutlined: {
		...container,
		borderRadius: 24,
		borderWidth: 1,
	},
	contentContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingRight: 15,
		alignItems: 'center',
		zIndex: 1000,
	},
	textInput: {
		flex: 1,
	},
	label: {
		fontFamily: FONTS.MAIN_FONT,
		position: 'absolute',
		backgroundColor: COLORS.WHITE,
		paddingHorizontal: LABEL_INNER_PADDING,
		zIndex: 20,
	},
	errorContainer: {
		height: 20,
		justifyContent: 'center',
		zIndex: -1,
	},
	errorText: {
		...styles.tinyText,
		color: COLORS.RED_COLOR,
		fontWeight: FONT_WEIGHTS.semiBold,
	},
	errorIconContainer: {
		position: 'absolute',
		top: 15,
	},
	leftIconContainer: {
		marginRight: 10,
	},
});
