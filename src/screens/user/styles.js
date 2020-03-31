import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import {
	COLORS,
	FONT_WEIGHTS,
} from '../../theme';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
	},
	contentContainer: {
		padding: 30,
		paddingTop: 10,
	},
	avatar: {
		height: 100,
		width: 100,
		borderRadius: 50,
		marginRight: 15,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 15,
	},
	name: {
		...baseStyles.bigText,
		fontWeight: FONT_WEIGHTS.semiBold,
		marginBottom: 10,
	},
	position: {
		...baseStyles.regularText,
		color: COLORS.GREY,
		marginBottom: 5,
	},
	company: {
		...baseStyles.regularText,
		color: COLORS.GREY,
	},
	socialButtonsContainer: {
		paddingHorizontal: 70,
		paddingVertical: 15,
		marginBottom: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	subHeader: {
		...baseStyles.bigText,
		marginBottom: 10,
	},
	text: {
		...baseStyles.defaultText,
		marginBottom: 20,
	},
	locationRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
	birthdayRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	textRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	smallText: {
		...baseStyles.defaultText,
		marginLeft: 5,
	},
});
