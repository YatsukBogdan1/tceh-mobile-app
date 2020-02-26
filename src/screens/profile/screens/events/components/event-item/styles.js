import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import {COLORS, FONT_WEIGHTS} from 'theme';

export default StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	itemContainer: {
		height: 80,
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
	},
	weekdayText: {
		...baseStyles.smallText,
		color: COLORS.DARK_GREY,
		marginBottom: 10,
	},
	currentDateText: {
		...baseStyles.regularText,
		textAlign: 'center',
		fontWeight: FONT_WEIGHTS.bold,
		marginVertical: 5,
	},
	dateText: {
		...baseStyles.regularText,
	},
	dateTextChosen: {
		...baseStyles.regularText,
		color: COLORS.WHITE,
	},
});
