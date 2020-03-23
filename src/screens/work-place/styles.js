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

const statusContainer = {
	alignItems: 'center',
	borderRadius: 10,
	height: 20,
	justifyContent: 'center',
	width: 20,
	marginLeft: 10,
};

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		height: 300,
		width,
	},
	photoTourButton: {
		position: 'absolute',
		width: 170,
		right: 20,
		transform: [{
			translateY: -70,
		}],
		backgroundColor: COLORS.WHITE,
	},
	contentContainer: {
		backgroundColor: COLORS.WHITE,
		padding: 28,
	},
	label: {
		...baseStyles.hugeText,
		marginBottom: 10,
	},
	location: {
		...baseStyles.defaultText,
		marginBottom: 10,
	},
	boldText: {
		...baseStyles.regularText,
		fontWeight: FONT_WEIGHTS.bold,
	},
	subLabel: {
		...baseStyles.bigText,
		marginBottom: 10,
	},
	text: {
		...baseStyles.defaultText,
		marginBottom: 25,
	},
	commentsDivider: {
		height: 20,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	statusTextContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	statusOccupiedContainer: {
		...statusContainer,
		backgroundColor: COLORS.RED_COLOR,
	},
	statusOccupationExpiringContainer: {
		...statusContainer,
		backgroundColor: COLORS.YELLOW,
	},
	statusFreeContainer: {
		...statusContainer,
		backgroundColor: COLORS.GREEN,
	},
});
