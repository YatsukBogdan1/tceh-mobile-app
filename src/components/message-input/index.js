// @flow

import React from 'react';
import {
	TouchableOpacity,
	View,
	TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { COLORS } from 'theme';
import styles from './styles';
import CustomTextInput from '../custom-text-input';

type Props = {
	containerStyle?: Object,
	placeholder: string,
	onBlur?: () => void,
	onChange: () => void,
	onFocus?: () => void,
	onSendPress: () => void,
	onSubmitEditing?: () => void,
	style?: Object,
	value: string,
}

const MessageInput = ({
	containerStyle,
	onBlur,
	onChange,
	onFocus,
	onSendPress,
	onSubmitEditing,
	placeholder,
	style,
	value,
}: Props) => (
	<View style={containerStyle}>
		<View style={styles.container}>
			<View style={styles.textInputContainer}>
				<TextInput
					multiline
					onChangeText={onChange}
					onBlur={onBlur}
					onFocus={onFocus}
					onSubmitEditing={onSubmitEditing}
					placeholder={placeholder}
					containerStyle={style}
					value={value}
				/>
			</View>
			<TouchableOpacity
				onPress={onSendPress}
				disabled={value.length === 0}
			>
				<View style={value.length === 0 ? styles.arrowUpContainerDisabled : styles.arrowUpContainerActive}>
					<Ionicons
						name='ios-arrow-up'
						size={28}
						color={COLORS.WHITE}
					/>
				</View>
			</TouchableOpacity>
		</View>
	</View>
);

MessageInput.defaultProps = {
	containerStyle: {},
	onSubmitEditing: () => false,
	returnKeyType: 'done',
	secureTextEntry: false,
	style: {},
};

export default MessageInput;
