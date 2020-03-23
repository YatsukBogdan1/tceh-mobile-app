import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';
import baseStyles from 'components/base/styles';

const buttonContainer = {
	borderRadius: 22.5,
	height: 45,
	width: 45,
	alignItems: 'center',
	justifyContent: 'center',
	marginBottom: 5,
};

export default StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	buttonContainerActive: {
		...buttonContainer,
		backgroundColor: COLORS.MAIN_ORANGE_COLOR,
	},
	buttonContainerInactive: {
		...buttonContainer,
		backgroundColor: COLORS.VERY_LIGHT_GREY,
	},
	text: {
		...baseStyles.smallText,
	},
});
