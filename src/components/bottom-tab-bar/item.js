// @flow
import React from 'react';
import {
	Animated,
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import styles from './styles';
import { COLORS } from 'theme';
import {
	BADGE_HIDDEN_SIZE,
	BADGE_VISIBLE_SIZE,
} from './constants';

type Props = {
	badge?: string,
	icon: string,
	label: string,
	onPress: () => void,
	selected?: boolean,
};

const animationConfig = {
	duration: 200,
};

class BottomTabBarItem extends React.Component<Props> {
	constructor(props) {
		super(props);

		const color = props.selected ? COLORS.MAIN_ORANGE_COLOR : COLORS.LIGHT_GREY;
		const badgeSize = props.badge ? BADGE_VISIBLE_SIZE : BADGE_HIDDEN_SIZE;
		const badgeOpacity = props.badge ? 1 : 0;

		this.state = {
			color,
			newColor: color,
			colorAnimatedValue: new Animated.Value(0),

			badgeSize: new Animated.Value(badgeSize),
			badgeOpacity: new Animated.Value(badgeOpacity),
		};
	}

	componentDidUpdate (prevProps: Props) {
		if (prevProps.badge && !this.props.badge) {
			this.hideBadge();
		}
		if (!prevProps.badge && this.props.badge) {
			this.showBadge();
		}
		if (prevProps.selected !== this.props.selected) {
			this.startAnimation();
		}
	}

	showBadge = () => {
		Animated.parallel([
			Animated.timing(this.state.badgeSize, { toValue: BADGE_VISIBLE_SIZE, ...animationConfig }),
			Animated.timing(this.state.badgeOpacity, { toValue: 1, ...animationConfig }),
		]).start();
	};

	hideBadge = () => {
		Animated.parallel([
			Animated.timing(this.state.badgeSize, { toValue: BADGE_HIDDEN_SIZE, ...animationConfig }),
			Animated.timing(this.state.badgeOpacity, { toValue: 0, ...animationConfig }),
		]).start();
	};

	get interpolatedColor () {
		return this.state.colorAnimatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: [this.state.color, this.state.newColor],
		});
	}

	get iconStyle () {
		return StyleSheet.compose(
			styles.icon,
			{
				tintColor: this.interpolatedColor,
			},
		);
	}

	get badgeStyle () {
		return StyleSheet.compose(
			styles.itemBadge,
			{
				height: this.state.badgeSize,
				opacity: this.state.badgeOpacity,
				width: this.state.badgeSize,
			},
		);
	}

	get textStyle () {
		return StyleSheet.compose(
			styles.itemLabel, {
				color: this.interpolatedColor,
			}
		);
	}

	startAnimation = () => {
		const newColor = this.props.selected ? COLORS.MAIN_ORANGE_COLOR : COLORS.LIGHT_GREY;
		this.setState({ newColor }, () => {
			Animated.timing(this.state.colorAnimatedValue, { toValue: 1, duration: 200 }).start(() => {
				this.setState({ color: newColor });
			});
		});
	};

	render() {
		const {
			onPress,
			icon,
			badge,
			label,
		} = this.props;

		return (
			<TouchableOpacity
				onPress={onPress}
				style={styles.itemContainer}
			>
				<View style={styles.itemBadgeContainer}>
					<Animated.View style={this.badgeStyle}>
						<Text style={styles.itemBadgeText}>{badge}</Text>
					</Animated.View>
				</View>
				<Animated.Image
					resizeMode='contain'
					source={{ uri: icon }}
					style={this.iconStyle}
				/>
				<Animated.Text style={this.textStyle}>
					{label}
				</Animated.Text>
			</TouchableOpacity>
		);
	}
}

BottomTabBarItem.defaultProps = {
	badge: null,
	selected: false,
};

export default BottomTabBarItem;
