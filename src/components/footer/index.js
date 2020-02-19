// @flow
import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import styles from './styles';
import CustomButton from 'components/custom-button';

type Props = {
	linkLabel: string,
	onLinkPress: () => void,
	buttonLabel: string,
	onButtonPress: () => void,
};

class Footer extends React.Component<Props> {
	render() {
		const {
			onButtonPress,
			onLinkPress,
			linkLabel,
			buttonLabel,
		} = this.props;

		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={onLinkPress}>
					<Text style={styles.linkLabel}>{linkLabel}</Text>
				</TouchableOpacity>
				<CustomButton
					style={{ width: 170 }}
					onPress={onButtonPress}
					label={buttonLabel}
				/>
			</View>
		);
	}
}

export default Footer;
