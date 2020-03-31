import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import {COLORS} from '../../theme';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImageContainer: {
		height: 300,
	},
	backgroundImage: {
		height: 300,
	},
	logo: {
		borderRadius: 50,
		height: 100,
		width: 100,
		position: 'absolute',
		bottom: 25,
		left: 25,
	},
	scrollView: {
		flex: 1,
	},
	scrollViewContentContainer: {
		padding: 30,
	},
	label: {
		...baseStyles.hugeText,
		marginBottom: 10,
	},
	industry: {
		...baseStyles.regularText,
		marginBottom: 10,
		color: COLORS.GREY,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	textRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	smallText: {
		...baseStyles.defaultText,
		marginLeft: 5,
	},
	sublabel: {
		...baseStyles.bigText,
		marginBottom: 20,
	},
	fullDescription: {
		...baseStyles.regularText,
		marginBottom: 30,
	},
});
