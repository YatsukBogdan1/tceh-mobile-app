import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	safeAreaContainer: {
		flex: 1,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15,
		alignItems: 'center',
		marginBottom: 10,
	},
	label: {
		...baseStyles.hugeText,
	},
	button: {
		height: 40,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	filterButtonsContainer: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	listContainer: {
		flex: 1,
	},
	listContentContainer: {
		padding: 30,
	},
	listDivider: {
		height: 20,
	},
	emptyListText: {
		...baseStyles.bigText,
		textAlign: 'center',
		marginTop: 50,
	},
});
