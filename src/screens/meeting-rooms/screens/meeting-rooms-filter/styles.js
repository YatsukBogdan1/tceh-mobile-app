import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

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
		marginBottom: 20,
	},
	button: {
		height: 40,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	sliderContainer: {
		marginBottom: 10,
	},
	dateBadgesContainer: {
		backgroundColor: COLORS.WHITE,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		marginBottom: 30,
	},
	technicalEquipmentContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
