import { StyleSheet } from 'react-native';
import {
	COLORS,
	FONT_WEIGHTS,
} from 'theme';
import baseStyles from 'components/base/styles';

const container = {
	height: 35,
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	borderWidth: 1,
	borderRadius: 17.5,
	marginHorizontal: 10,
};

const text = {
	...baseStyles.smallText,
};

export default StyleSheet.create({
	containerActive: {
		...container,
		borderColor: COLORS.MAIN_ORANGE_COLOR,
	},
	containerInactive: {
		...container,
		borderColor: COLORS.LIGHT_GREY,
	},
	textActive: {
		...text,
		color: COLORS.MAIN_ORANGE_COLOR,
	},
	textInactive: {
		...text,
	},
});
