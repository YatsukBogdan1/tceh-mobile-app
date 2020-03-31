// @flow
import React from 'react';
import {
	Text,
	TextInput,
	View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/dist/Ionicons';
import styles from './styles';

type Props = {
	containerStyle: Object,
	onChange: () => void,
	value: string,
}

const SearchInput = (props: Props) => (
	<View style={styles.container}>
		<TextInput
			style={styles.textInput}
			value={props.value}
			onChangeText={props.onChange}
		/>
		<IonIcons
			name='ios-search'
			size={20}
		/>
	</View>
);

SearchInput.defaultProps = {
	containerStyle: {},
};

export default SearchInput;
