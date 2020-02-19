import { StyleSheet } from 'react-native';
import { FONTS } from 'theme';

export default StyleSheet.create({
	tinyText: {
		fontSize: 10,
		fontFamily: FONTS.MAIN_FONT,
	},
	smallText: {
		fontSize: 12,
		fontFamily: FONTS.MAIN_FONT,
	},
	defaultText: {
		fontSize: 14,
		fontFamily: FONTS.MAIN_FONT,
	},
	regularText: {
		fontSize: 16,
		fontFamily: FONTS.MAIN_FONT,
	},
	bigText: {
		fontSize: 20,
		fontFamily: FONTS.MAIN_FONT,
	},
	hugeText: {
		fontSize: 25,
		fontFamily: FONTS.MAIN_FONT,
	},
	enormousText: {
		fontSize: 28,
		fontFamily: FONTS.MAIN_FONT,
	},
	shadowBox: {
		shadowOpacity: 0.05,
		shadowRadius: 3,
		shadowColor: 'black',
		shadowOffset: {
			height: 0,
		},
	},
});
