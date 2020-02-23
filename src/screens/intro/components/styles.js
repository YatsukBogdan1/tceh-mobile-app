import { StyleSheet } from 'react-native';
import styles from 'components/base/styles';
import { FONT_WEIGHTS } from 'theme';

const socialButton = {
	flex: 1,
};

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 25,
		paddingHorizontal: 45,
	},
	label: {
		...styles.hugeText,
		textAlign: 'center',
		marginBottom: 20,
	},
	text: {
		...styles.regularText,
		textAlign: 'center',
	},
	facebookButton: {
		...socialButton,
		marginRight: 20,
	},
	googleButton: {
		...socialButton,
	},
	socialButtonsContainer: {
		flexDirection: 'row',
	},
	socialButtonsLabel: {
		...styles.smallText,
		fontWeight: FONT_WEIGHTS.light,
	},
});
