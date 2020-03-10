import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	safeAreaContainer: {
		flex: 1,
	},
	filtersContainer: {
		flex: 1,
		paddingHorizontal: 30,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15,
		alignItems: 'center',
		marginBottom: 10,
	},
	label: {
		...baseStyles.bigText,
	},
	text: {
		...baseStyles.regularText,
	},
	button: {
		height: 40,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	radioContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 15,
	},
	radioGroupContainer: {
		flexDirection: 'row',
		marginVertical: 15,
	},
	radioWithText: {
		marginLeft: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	radioText:{
		...baseStyles.regularText,
		marginLeft: 5,
	},
});
