import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';

export default StyleSheet.create({
	container: {},
	row: {
		flexDirection: 'row',
		marginBottom: 15,
	},
	avatar: {
		height: 40,
		width: 40,
		borderRadius: 20,
		marginRight: 10,
	},
	name: {
		...baseStyles.regularText,
		marginBottom: 5,
	},
	date: {
		...baseStyles.smallText,
	},
});
