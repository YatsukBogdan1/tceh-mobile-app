// @flow
import React from 'react';
import {
	Animated,
	TouchableOpacity,
	View,
	Dimensions,
	Text,
} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import CustomButton from '../custom-button';

type Props = {
	close: () => void,
	date: number,
	duration: string,
	saveDateAndDuration: (date: number, duration: number) => void,
}

class DoubleTimePickerIOS extends React.Component<Props> {
	constructor(props) {
		super(props);

		const timeEnd = new Date(props.date);
		timeEnd.setMinutes(timeEnd.getMinutes() + props.duration);

		this.state = {
			innerContainerBottom: new Animated.Value(-500),
			backdropOpacity: new Animated.Value(0),

			timeStart: new Date(props.date),
			timeEnd,
		};
	}

	saveDate = () => {
		const {
			timeEnd,
			timeStart,
		} = this.state;

		const duration = (timeEnd.getTime() - timeStart.getTime()) / (60 * 1000);
		this.props.saveDateAndDuration(this.state.timeStart.getTime(), duration);
		this.close();
	};

	onTimeStartChange = (ev, date) => {
		this.setState({ timeStart: new Date(date) });
	};

	onTimeEndChange = (ev, date) => {
		const timeEnd = new Date(date);
		const { timeStart } = this.state;
		if ((timeEnd.getTime() - timeStart.getTime()) / (60 * 1000) < 60) {
			this.setState({ timeEnd: new Date(timeStart.getTime() + 60 * 1000) });
		}
		this.setState({ timeEnd });
	};

	componentDidMount() {
		Animated.parallel([
			Animated.timing(this.state.backdropOpacity, { toValue: 0.5, duration: 200 }),
			Animated.timing(this.state.innerContainerBottom, { toValue: 0, duration: 200 }),
		]).start();
	}

	close = () => {
		Animated.parallel([
			Animated.timing(this.state.backdropOpacity, { toValue: 0, duration: 200 }),
			Animated.timing(this.state.innerContainerBottom, { toValue: -500, duration: 200 }),
		]).start(() => this.props.close());
	};

	get backdropStyle () {
		return [
			styles.backdrop,
			{
				opacity: this.state.backdropOpacity,
			},
		];
	}

	get innerContainerStyle () {
		return [
			styles.innerContainer,
			{
				bottom: this.state.innerContainerBottom,
			},
		];
	}

	render() {
		return (
			<View style={styles.container}>
				<Animated.View style={this.backdropStyle} />
				<TouchableOpacity
					onPress={this.close}
					style={styles.touchableAreaContainer}
				>
					<View style={styles.touchableAreaView} />
				</TouchableOpacity>
				<Animated.View style={this.innerContainerStyle}>
					<CustomButton
						label='Сохранить'
						labelStyle={styles.saveButtonText}
						style={styles.saveButton}
						onPress={this.saveDate}
					/>
					<View style={styles.timePickersContainer}>
						<RNDateTimePicker
							display='default'
							minuteInterval={15}
							mode='time'
							onChange={this.onTimeStartChange}
							style={styles.timePickerContainer}
							value={this.state.timeStart}
						/>
						<RNDateTimePicker
							display='default'
							minuteInterval={15}
							mode='time'
							onChange={this.onTimeEndChange}
							style={styles.timePickerContainer}
							value={this.state.timeEnd}
						/>
					</View>
				</Animated.View>
			</View>
		);
	}
}

export default DoubleTimePickerIOS;
