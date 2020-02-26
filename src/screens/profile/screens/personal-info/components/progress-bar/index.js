import React from 'react';
import {
	Animated,
	View,
	StyleSheet,
} from 'react-native';
import styles from './styles';

type Props = {
	value: number,
}

class ProgressBar extends React.Component<Props> {
	state = {
		width: 0,
		progressBarWidth: new Animated.Value(0),
		progressBarTranslateX: new Animated.Value(-1000),
	};

	componentDidUpdate(prevProps): void {
		if (this.props.value !== prevProps.value) {
			Animated.timing(this.state.progressBarTranslateX, {
				toValue: this.state.width * (this.props.value - 1),
				duration: 200,
			}).start();
		}
	}

	onLayout = ({ nativeEvent }) => {
		if (this.state.width !== nativeEvent.layout.width) {
			const newWidth = nativeEvent.layout.width;
			this.setState({
				width: newWidth,
				progressBarWidth: new Animated.Value(newWidth),
			}, () => {
				Animated.timing(this.state.progressBarTranslateX, {
					toValue: this.state.width * (this.props.value - 1),
					duration: 200,
				}).start();
			});
		}
	};

	get progressBarStyle () {
		return StyleSheet.compose(
			styles.progressBar,
			{
				width: this.state.progressBarWidth,
				transform: [{
					translateX: this.state.progressBarTranslateX,
				}],
			}
		);
	}

	render() {
		return (
			<View
				style={styles.container}
				onLayout={this.onLayout}
			>
				<Animated.View style={this.progressBarStyle}/>
			</View>
		);
	}
}

export default ProgressBar;
