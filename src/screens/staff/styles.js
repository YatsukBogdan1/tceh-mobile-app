import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import {COLORS} from '../../theme';

export default StyleSheet.create({
	container: {
		flex: 1,
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
	label: {
		...baseStyles.hugeText,
		textAlign: 'center',
		marginTop: 20,
	},
	listSeparator: {
		height: 10,
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
