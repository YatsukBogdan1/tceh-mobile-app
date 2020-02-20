// @flow
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CustomButton from 'components/custom-button';
import Link from '../link-button';

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
				<Link
					label={linkLabel}
					onPress={onLinkPress}
				/>
				<CustomButton
					style={styles.button}
					onPress={onButtonPress}
					label={buttonLabel}
				/>
			</View>
		);
	}
}

export default Footer;
