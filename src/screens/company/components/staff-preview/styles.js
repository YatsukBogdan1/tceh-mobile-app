import { StyleSheet } from 'react-native';
import baseStyles from 'components/base/styles';
import { COLORS } from 'theme';

const avatar = {
	borderColor: COLORS.WHITE,
	borderRadius: 20,
	borderWidth: 1,
	height: 40,
	width: 40,
};

export default StyleSheet.create({
	container: {
		height: 100,
		alignItems: 'center',
		flexDirection: 'row',
	},
	avatarsContainer: {
		flexDirection: 'row',
	},
	firstAvatar: {
		...avatar,
		zIndex: 1,
	},
	secondAvatar: {
		...avatar,
		zIndex: 2,
		marginLeft: -10,
	},
	thirdAvatar: {
		...avatar,
		zIndex: 3,
		marginLeft: -10,
	},
	text: {
		...baseStyles.regularText,
		flex: 1,
		textDecorationLine: 'underline',
		marginLeft: 15,
	},
});
