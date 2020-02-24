import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';

export default StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		height: 70,
		justifyContent: 'space-between',
		paddingHorizontal: 30,
	},
	label: {
		...baseStyles.smallText,
		textTransform: 'uppercase',
	},
});
