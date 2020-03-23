import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

const bookingContainer = {
	height: 48,
	borderRadius: 5,
	flex: 1,
};

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	timeContainer: {
		width: 70,
		alignItems: 'center',
	},
	emptyBookingContainer: {
		...bookingContainer,
		borderWidth: 1,
		borderColor: COLORS.VERY_LIGHT_GREY,
	},
	bookingContainer: {
		...bookingContainer,
		borderLeftWidth: 5,
		borderLeftColor: COLORS.MAIN_ORANGE_COLOR,
		backgroundColor: COLORS.MAIN_ORANGE_COLOR_TRANSPARENT,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	company: {
		...baseStyles.smallText,
		marginBottom: 5,
	},
	name: {
		...baseStyles.smallText,
	},
});
