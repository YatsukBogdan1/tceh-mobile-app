import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
	},
	scrollViewContentContainer: {
		paddingHorizontal: 30,
		paddingVertical: 60,
	},
	label: {
		...baseStyles.bigText,
		marginBottom: 10,
	},
	text: {
		...baseStyles.regularText,
		marginBottom: 10,
	},
	image: {
		height: 220,
		borderRadius: 10,
	},
	imageListDivider: {
		height: 20,
	},
});
