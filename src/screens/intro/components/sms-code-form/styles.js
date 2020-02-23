import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import styles from '../styles';
import { COLORS } from 'theme';

export default StyleSheet.create({
	label: {
		...styles.label,
		marginBottom: 50,
	},
	text: {
		...styles.text,
	},
	hiddenInput: {
		opacity: 0,
		height: 0,
	},
	inputContainer: {
		flexDirection: 'row',
		marginVertical: 30,
	},
	inputCell: {
		backgroundColor: COLORS.WHITE,
		shadowOpacity: 0.1,
		shadowRadius: 4,
		shadowColor: 'black',
		shadowOffset: {
			height: 3,
		},
		borderRadius: 10,
		flex: 1,
		height: 70,
		width: 70,
		marginHorizontal: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	smsCodeText: {
		...baseStyles.enormousText,
		color: COLORS.MAIN_ORANGE_COLOR,
	},
	cursor: {
		height: 26,
		width: 2,
		backgroundColor: COLORS.MAIN_ORANGE_COLOR,
	},
	link: {
		color: COLORS.MAIN_ORANGE_COLOR,
	},
});
