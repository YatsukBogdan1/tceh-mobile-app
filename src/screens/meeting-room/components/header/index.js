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
	constructor(props) {
		super(props);

		const underlayOpacityValue = props.underlayVisible ? 1 : 0;

		this.state = {
			underlayOpacity: new Animated.Value(underlayOpacityValue),
		};
	}

	get containerStyle () {

	}

	showUnderlay = () => {
		Animated.timing(this.state.underlayOpacity).stop();
		Animated.timing(this.state.underlayOpacity, {
			toValue: 1,
			duration: 100,
		}).start();
	};

	hideUnderlay = () => {
		Animated.timing(this.state.underlayOpacity).stop();
		Animated.timing(this.state.underlayOpacity, {
			toValue: 0,
			duration: 100,
		}).start();
	};

	componentDidUpdate(prevProps) {
		if (prevProps.underlayVisible && !this.props.underlayVisible) {
			this.hideUnderlay();
		}
		if (!prevProps.underlayVisible && this.props.underlayVisible) {
			this.showUnderlay();
		}
	}

	get underlayStyle () {
		return StyleSheet.compose(
			styles.underlay,
			{
				borderBottomColor: this.props.borderVisible ? COLORS.LIGHT_GREY : COLORS.TRANSPARENT,
				opacity: this.state.underlayOpacity,
			},
		);
	}

	render() {
		const {
			underlayVisible,
			heartActive,
		} = this.props;

		return (
			<SafeAreaView style={styles.container}>
				<Animated.View style={this.underlayStyle} />
				<View style={styles.header}>
					<TouchableOpacity
						style={styles.button}
						onPress={this.props.onBackPress}
					>
						<IonIcon
							name='ios-arrow-back'
							size={30}
							color={underlayVisible ? COLORS.BLACK : COLORS.WHITE}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={this.props.onHeartPress}
					>
						<IonIcon
							name={heartActive ? 'ios-heart' : 'ios-heart-outline'}
							size={25}
							color={underlayVisible ? COLORS.BLACK : COLORS.WHITE}
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
