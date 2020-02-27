import React from 'react';
import {
	Text,
	View,
} from 'react-native';
import styles from './styles';
import CustomSwitch from 'components/custom-switch';

type Props = {
	label: string,
	onChange: () => void,
	value: boolean,
}

class SwitchItem extends React.Component<Props> {
	render() {
		const {
			value,
			label,
			onChange,
		} = this.props;

		return (
			<View style={styles.container}>
				<Text style={styles.text}>{label}</Text>
				<CustomSwitch
					value={value}
					onChange={onChange}
				/>
			</View>
		);
	}
}

export default SwitchItem;
