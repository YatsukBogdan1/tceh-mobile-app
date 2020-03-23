import {
	StyleSheet,
	Dimensions,
} from 'react-native';
import {
	COLORS,
	FONT_WEIGHTS,
} from 'theme';
import baseStyles from 'components/base/styles';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		height: 300,
		width,
	},
	column: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 30,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	equipmentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	marginHorizontal: {
		marginHorizontal: 30,
	},
	marginBottom: {
		marginBottom: 20,
	},
	marginBottomSmall: {
		marginBottom: 5,
	},
	overflowVisible: {
		overflow: 'visible',
	},
	contentContainer: {
		backgroundColor: COLORS.WHITE,
		paddingTop: 15,
		paddingHorizontal: 28,
	},
	label: {
		...baseStyles.regularText,
		fontWeight: FONT_WEIGHTS.semiBold,
	},
	text: {
		...baseStyles.regularText,
	},
	capacityText: {
		...baseStyles.smallText,
		marginLeft: 5,
	},
});
