// @flow
import React from 'react';
import {
	Animated,
	TouchableOpacity,
	View,
	Text,
} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import CustomButton from '../custom-button';

type Props = {
	close: () => void,
	date: number,
	saveDate: (value: number) => void,
}

class DatePickerIOSModal extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			innerContainerBottom: new Animated.Value(-500),
			backdropOpacity: new Animated.Value(0),

			date: new Date(props.date),
		};
	}

	saveDate = () => {
		this.props.saveDate(this.state.date.getTime());
		this.close();
	};

	onDateChange = (ev, date) => {
		this.setState({ date: new Date(date) });
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
					<RNDateTimePicker
						value={this.state.date}
						mode={this.props.mode}
						display='default'
						onChange={this.onDateChange}
					/>
				</Animated.View>
			</View>
		);
	}
}

export default DatePickerIOSModal;
