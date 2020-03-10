// @flow
import React from 'react';
import {
	View,
	SafeAreaView,
} from 'react-native';
import styles from './styles';
import { Navigation } from 'react-native-navigation';
import CustomButton from 'components/custom-button';
import Link from '../link-button';

type Props = {
	buttonLabel: string,
	linkLabel: string,
	onButtonPress: () => void,
	onLinkPress: () => void,
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
			<SafeAreaView style={styles.safeAreaContainer}>
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
			</SafeAreaView>
		);
	}
}

Footer.defaultProps = {
	navigationElementId: null,
};

export default Footer;
