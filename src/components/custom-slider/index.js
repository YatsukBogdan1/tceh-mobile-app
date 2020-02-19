// @flow
import React from 'react';
import {
	PanResponder,
	Animated,
	StyleSheet,
	View,
} from 'react-native';
import {
	CURSOR_ACTIVE_SIZE,
	CURSOR_CONTAINER_SIZE,
	CURSOR_INACTIVE_SIZE,
} from './constants';
import styles from './styles';
import {getAbsoluteValue, getRelativeValue} from './utils';
import {debounce} from '../../utils';

type Props = {
	maxValue: number,
	minValue: number,
	onChange: () => void,
	values: number,
}

const animationConfig = {
	duration: 200,
};

class CustomMultiSlider extends React.Component<Props> {
	constructor(props) {
		super(props);

		this._leftCursorPanResponder = PanResponder.create({
			// Ask to be the responder:
			onStartShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: () => true,
			onMoveShouldSetPanResponder: () => true,
			onMoveShouldSetPanResponderCapture: () => true,

			onPanResponderGrant: (evt, gestureState) => this.onLeftCursorActivated(),
			onPanResponderMove: (evt, gestureState) => {

				// debounce(() => {
				// 	console.log({...evt.nativeEvent});
				// }, 200);
				// this.setState({ gestureLocationX: evt.nativeEvent.locationX });

				let relativeValue = evt.nativeEvent.locationX / this.state.componentWidth;
				console.log(evt.nativeEvent.locationX);
				console.log(relativeValue);
				if (relativeValue < 0) {
					relativeValue = 0;
				}
				if (relativeValue > 1) {
					relativeValue = 1;
				}
				// debounce(() => {
				// 	this.props.onChange([getAbsoluteValue(relativeValue, this.props.minValue, this.props.maxValue), this.props.values[1]]);
				// }, 200);/

				// this.setState({ gestureMoveX: gestureState.moveX }, this.updateTranslateX);
				// The most recent move distance is gestureState.move{X,Y}
				// The accumulated gesture distance since becoming responder is
				// gestureState.d{x,y}
			},
			onPanResponderTerminationRequest: (evt, gestureState) => true,
			onPanResponderRelease: (evt, gestureState) => this.onLeftCursorDeactivated(),
			onPanResponderTerminate: (evt, gestureState) => this.onLeftCursorDeactivated(),
			onShouldBlockNativeResponder: (evt, gestureState) => {
				// Returns whether this component should block native components from becoming the JS
				// responder. Returns true by default. Is currently only supported on android.
				return true;
			},
		});

		this.state = {
			componentWidth: 0,
			containerZIndex: 1,
			gestureLocationX: 0,
			leftCursorMoving: false,
			leftCursorSize: new Animated.Value(CURSOR_INACTIVE_SIZE),
			leftCursorTranslateX: 0,
			leftCursorZIndex: 1,
			rightCursorMoving: false,
			rightCursorSize: new Animated.Value(CURSOR_INACTIVE_SIZE),
			rightCursorTranslateX: 0,
			rightCursorZIndex: 1,
		};
	}

	getLeftCursorTranslateX = () => {
		if (this.state.leftCursorMoving) {
			return this.state.gestureLocationX - CURSOR_CONTAINER_SIZE / 2;
		}
		const leftRelativeValue = getRelativeValue(this.props.values[0], this.props.minValue, this.props.maxValue);
		return leftRelativeValue * this.state.componentWidth;
	};

	getRightCursorTranslateX = () => {
		const rightRelativeValue = getRelativeValue(this.props.values[1], this.props.minValue, this.props.maxValue);
		return rightRelativeValue * this.state.componentWidth;
	};

	onLayout = ({ nativeEvent: { layout } }) => {
		if (this.state.componentWidth !== layout.width) {
			this.setState({
				componentWidth: layout.width,
			});
		}
	};

	get containerStyle () {
		return StyleSheet.compose(
			styles.container,
			{
				zIndex: this.state.containerZIndex,
			}
		);
	}

	get leftCursorContainerStyle () {
		const leftTranslateX = this.getLeftCursorTranslateX();
		return StyleSheet.compose(
			styles.cursorContainer,
			{
				// left: leftTranslateX,
				zIndex: this.state.leftCursorZIndex,
				transform: [{ translateX: leftTranslateX }],
			}
		);
	}

	get leftCursorStyle () {
		return StyleSheet.compose(
			styles.leftCursor,
			{
				height: this.state.leftCursorSize,
				width: this.state.leftCursorSize,
			}
		);
	}

	get rightCursorStyle () {

	}

	onLeftCursorActivated = () => {
		this.setState({
			containerZIndex: 100,
			leftCursorMoving: true,
			leftCursorZIndex: 100,
		});
		Animated.timing(this.state.leftCursorSize).stop();
		Animated.timing(this.state.leftCursorSize, { toValue: CURSOR_ACTIVE_SIZE, ...animationConfig }).start();
	};

	onLeftCursorDeactivated = () => {
		this.setState({
			containerZIndex: 1,
			leftCursorMoving: false,
			leftCursorZIndex: 1,
		});
		Animated.timing(this.state.leftCursorSize).stop();
		Animated.timing(this.state.leftCursorSize, { toValue: CURSOR_INACTIVE_SIZE, ...animationConfig }).start();
	};

	onRightCursorActivated = () => {

	};

	onRightCursorDeactivated = () => {

	};

	render() {
		return (
			<View onLayout={this.onLayout} style={this.containerStyle}>
				<Animated.View
					{...this._leftCursorPanResponder.panHandlers}
					style={this.leftCursorContainerStyle}
				>
					<Animated.View style={this.leftCursorStyle}/>
				</Animated.View>
				<View style={styles.track} />
			</View>
		);
	}
}

export default CustomMultiSlider;
