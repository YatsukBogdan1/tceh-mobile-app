import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

export default StyleSheet.create({
	container: {
		margin: 30,
		flex: 1,
		overflow: 'visible',
	},
	label: {
		...baseStyles.bigText,
		marginVertical: 20,
		textAlign: 'center',
	},
	locationsListContainer: {
		flex: 1,
	},
	locationsList: {
		overflow: 'visible',
		backgroundColor: COLORS.WHITE,
	},
	benefitsListContainer: {
		flex: 3,
	},
	benefitsList: {
		overflow: 'visible',
	},
	locationsListDivider: {
		width: 10,
	},
	benefitsListDivider: {
		width: 20,
	},
});
