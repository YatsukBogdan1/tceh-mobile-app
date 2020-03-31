import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.WHITE,
	},
	header: {
		flexDirection: 'row',
		height: 60,
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 30,
	},
	backButton: {
		height: 60,
		width: 60,
		marginRight: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	badgesScrollView: {
		height: 60,
	},
	badgesContainer: {
		height: 50,
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 20,
	},
	badge: {
		paddingHorizontal: 15,
	},
	listSeparator: {
		height: 20,
	},
	listContentContainer: {
		padding: 30,
	},
	noCompaniesText: {
		...baseStyles.bigText,
		color: COLORS.GREY,
		textAlign: 'center',
	},
});
