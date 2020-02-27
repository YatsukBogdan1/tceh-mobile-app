import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';

export default StyleSheet.create({
	container: {
		height: 70,
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		...baseStyles.defaultText,
		flex: 1,
		marginRight: 30,
	},
});
