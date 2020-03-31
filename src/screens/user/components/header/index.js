// @flow
import React from 'react';
import {
	Animated,
	SafeAreaView,
	StyleSheet, TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import { COLORS } from 'theme';

type Props = {
	borderVisible?: boolean,
	heartActive: boolean,
	onBackPress: () => void,
	onHeartPress: () => void,
	underlayVisible: boolean,
}

class Header extends React.Component<Props> {
	render() {
		const { heartActive } = this.props;

		return (
			<SafeAreaView style={styles.container}>
				<Animated.View style={styles.underlay} />
				<View style={styles.header}>
					<TouchableOpacity
						style={styles.button}
						onPress={this.props.onBackPress}
					>
						<IonIcon
							name='ios-arrow-round-back'
							size={30}
							color={COLORS.BLACK}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={this.props.onHeartPress}
					>
						<IonIcon
							name={heartActive ? 'ios-heart' : 'ios-heart-empty'}
							size={25}
							color={COLORS.BLACK}
						/>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
}

Header.defaultProps = {
	borderVisible: true,
};

export default Header;
