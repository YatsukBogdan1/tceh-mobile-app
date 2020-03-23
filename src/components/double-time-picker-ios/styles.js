import {
	StyleSheet,
	Dimensions,
} from 'react-native';
import { COLORS } from 'theme';
import baseStyles from 'components/base/styles';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	backdrop: {
		...StyleSheet.absoluteFill,
		backgroundColor: COLORS.BLACK,
		zIndex: -10,
	},
	touchableAreaContainer: {
		...StyleSheet.absoluteFill,
		zIndex: -5,
	},
	touchableAreaView: {
		flex: 1,
	},
	innerContainer: {
		position: 'absolute',
		width,
		backgroundColor: COLORS.WHITE,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		paddingVertical: 20,
	},
	saveButton: {
		position: 'absolute',
		height: 30,
		top: -60,
		right: 20,
	},
	saveButtonText: {
		...baseStyles.tinyText,
	},
	closeButton: {
		position: 'absolute',
	},
	header: {
		...baseStyles.hugeText,
		textAlign: 'center',
	},
	text: {
		...baseStyles.smallText,
		marginHorizontal: 30,
		marginVertical: 20,
		textAlign: 'center',
	},
	timePickersContainer: {
		flexDirection: 'row',
	},
	timePickerContainer: {
		width: width / 2,
	},
});
