// @flow
import React from 'react';
import {
	ActivityIndicator,
	Animated,
	Dimensions,
	LayoutAnimation,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { COLORS } from 'theme';
import CustomButton from 'components/custom-button';
import { getShortDateString } from 'utils';
import moment from 'moment';
import TcehVectorIcons from 'tceh-vector-icons';
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
const { height } = Dimensions.get('window');

type Props = {
	close: () => void,
}

class BookingRequestModal extends React.Component<Props> {
	constructor(props) {
		super(props);

		this.state = {
			innerContainerTranslateY: new Animated.Value(height),
			backdropOpacity: new Animated.Value(0),

			requestPending: false,
			requestSent: false,
		};
	}

	componentDidMount() {
		Animated.parallel([
			Animated.timing(this.state.backdropOpacity, { toValue: 0.5, duration: 200 }),
			Animated.timing(this.state.innerContainerTranslateY, { toValue: 0, duration: 200 }),
		]).start();
	}

	close = () => {
		Animated.parallel([
			Animated.timing(this.state.backdropOpacity, { toValue: 0, duration: 200 }),
			Animated.timing(this.state.innerContainerTranslateY, { toValue: height, duration: 200 }),
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
				transform: [{
					translateY: this.state.innerContainerTranslateY,
				}],
			},
		];
	}

	requestTour = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ requestPending: true });
		setTimeout(() => {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			this.setState({
				requestPending: false,
				requestSent: true,
			});
		}, 1000);
	};

	get dateLabel () {
		return getShortDateString(this.props.meetingRoomFilters.date);
	}

	get timeLabel () {
		const {
			date,
			duration,
		} = this.props.meetingRoomFilters;
		const dateEnd = new Date(date);
		dateEnd.setMinutes(dateEnd.getMinutes() + duration);
		return `${moment(date).format('HH:mm')}-${moment(dateEnd).format('HH:mm')}`;
	}

	renderContent = () => {
		if (this.state.requestPending) {
			return (
				<ActivityIndicator color={COLORS.MAIN_ORANGE_COLOR} size='large'/>
			);
		}
		if (this.state.requestSent) {
			return (
				<View>
					<Text style={styles.header}>Переговорная забронирована</Text>
					<Text style={styles.description}>Вы успешно забронировали переговорную</Text>
					<CustomButton
						label='ОК'
						onPress={this.close}
					/>
				</View>
			);
		}
		return (
			<View>
				<Text style={styles.header}>Бронирование</Text>
				<Text style={styles.description}>Пожалуйста, подтвердите бронирование.</Text>
				<Text style={[styles.text, {fontWeight: 'bold', marginBottom:10}]}>
					<MaterialCommunityIcon
						name='map-marker'
						size={15}
					/>
					{' '}
					{this.props.meetingRoom.location}
				</Text>
				<Text style={[styles.text, {marginBottom: 10}]}>
					<TcehVectorIcons name='calendar' color={COLORS.MAIN_ORANGE_COLOR} size={15}/>
					{'  '}
					{this.dateLabel}
				</Text>
				<Text style={[styles.text, {marginBottom: 10}]}>
					<TcehVectorIcons name='clocks' color={COLORS.MAIN_ORANGE_COLOR} size={15}/>
					{'  '}
					{this.timeLabel}
				</Text>
				<CustomButton
					label='Подтвердить'
					onPress={this.requestTour}
					containerStyle={{marginBottom: 20}}
				/>
				<CustomButton
					label='Отменить'
					outlined={true}
					onPress={this.close}
				/>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<Animated.View style={this.backdropStyle} />
				<TouchableOpacity
					onPress={this.onBackdropPress}
					style={styles.touchableAreaContainer}
				>
					<View style={styles.touchableAreaView} />
				</TouchableOpacity>
				<Animated.View style={this.innerContainerStyle}>
					{this.renderContent()}
				</Animated.View>
			</View>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	meetingRoom: state.meetingRooms.data[ownProps.meetingRoomId],
	location: state.locations.data[state.meetingRooms.data[ownProps.meetingRoomId].locationId],
	meetingRoomFilters: state.meetingRooms.filters,
});

export default connect(mapStateToProps)(BookingRequestModal);
